<!--
 Post{
   title: "Your first sitemap with Rust",
   subtitle: "Learn how to build static sitemap with it",
   image: "post/sitemap/static_sitemap_example.png",
   image_decription: "static sitemap example by Steadylearner",
   tags: "Rust sitemap code Steadylearner",
   theme: "Rust",
 }
-->

<!-- Link here -->

[Rust Sitemap Crate]: https://github.com/svmk/rust-sitemap
[Writing Sitemap with Rust example]: https://github.com/svmk/rust-sitemap/blob/master/tests/test_write_sitemap.rs
[Steadylearner]: https://www.steadylearner.com
[Steadylearner Github Repository]: https://github.com/steadylearner/Steadylearner
[How to deploy Rust Web App]: https://medium.com/@steadylearner/how-to-deploy-rust-web-application-8c0e81394bd5?source=---------9------------------
[Rust Diesel]: http://diesel.rs/
[Sitemap in React]: https://medium.com/@steadylearner/how-to-build-a-sitemap-for-react-app-7bbc3040dc1f
[Sitemap GitHub]: https://github.com/steadylearner/Sitemap
[Cargo Edit]: https://github.com/killercup/cargo-edit

<!-- / -->

After deploying [React and Rust Website][How to deploy Rust Web App] at [Steadylearner], I thought that it is time to focus on SEO. For there are not so much website examples built with **Rust**, I found that it is not easy to handle it as I can do with **JavaScript** Backend.

But in case of sitemaps, there are no difference among languages and we can build them with whatever langauges we want. Most of the time, You can use automated service with web crawlers for the purpose.

However, [the website][Steadylearner] is built with React and I can't use them either for they could only read sites that are not single page app. So the first trial to solve this problem was use [React relevant packages][Sitemap in React]. It worked well for simple routes but not for the site with dynamic routes such as [Steadylearner].

So I searched how to do that with **Rust** for it already handles database in [the website][Steadylearner] and what I should code is just to link its data to write sitemap.xml and sitemap.txt.

In this post, You will learn how to build a static sitemap with routes given by you from your website. If you are a React Develper, it will be not so different from sitemaps built with [the post][Sitemap in React].

Starting from this post, we will learn how to automate sitemap build process at the end of the **sitemap in Rust series**. So hope you to read another posts later.

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [Rust Sitemap Crate][Rust Sitemap Crate]
2. [What is sitemap](https://support.google.com/webmasters/answer/156184?hl=en)
3. [How to build a sitemap](https://www.google.com/search?client=firefox-b-d&q=how+to+build+sitemap)

---

You don't have to visit all links above if you already knew how to deal with sitemap, I want you to follow the official example at [Rust Sitemap Crate] because our goal is to write Rust code to build sitemap. 

I will suppose that you are already familiar with Rust and Programming for you will need sitemap relevant information only after you build your own site or role for that.

If you just want to see the final project, you may refer to [Sitemap GitHub].

<br />

<h2 class="blue">Table of Contents</h2>

1. Rust Sitemap Crate official example
2. Modify it to build sitemap with static routes
3. **Conclusion**

---

<br />

## 1. Rust Sitemap Crate official examples

Our focus is not reading the sitemap files. So we will just talk about writing sitemaps here.

If you play with the example from [Rust Sitemap Crate]

```rust
extern crate sitemap;
use sitemap::writer::SiteMapWriter;
use sitemap::structs::UrlEntry;
use std::io::stdout;
fn main() {
    let mut output = stdout();
    let sitemap_writer = SiteMapWriter::new(&mut output);
    let mut urlwriter = sitemap_writer.start_urlset().expect("Unable to write urlset");
    urlwriter.url("http://github.com").expect("Unable to write url");
    urlwriter.url(UrlEntry::builder().loc("http://google.com")).expect("Unable to write url");
    urlwriter.url(UrlEntry::builder().loc("http://yandex.ru").build().unwrap()).expect("Unable to write url");
    urlwriter.end().expect("Unable to write close tags");
}
```

with  `$cargo run --bin main` You will see some results at console. But, just showing it is not so useful.

So in the next part, we will modify the code above to write static sitemaps. I want you to give your time to understand source code at [Writing Sitemap with Rust example] before read on.

(If you want to find how to install crates easily, please visit [Cargo Edit] repository.)

<br />

## 2. Modify it to build sitemap with static routes

I hope you already read [the source code][Writing Sitemap with Rust example] and invested your time to understand its API.

Let me show the code for this part first.

```rust
extern crate chrono;
extern crate console;
extern crate sitemap;

use std::fs::{write, File};

use console::Style;

use chrono::{DateTime, FixedOffset, NaiveDate};
use sitemap::reader::{SiteMapEntity, SiteMapReader};
use sitemap::structs::{ChangeFreq, SiteMapEntry, UrlEntry};
use sitemap::writer::SiteMapWriter;

fn main() -> std::io::Result<()> {
    let bold = Style::new().bold(); // 1.
    let website: &str = "http://www.steadylearner.com"; // 2.
    let static_routes: Vec<&str> = vec!["about", "video", "blog", "code", "image", "slideshow", "markdown"];

    let mut output = Vec::<u8>::new();
    {
        let sitemap_writer = SiteMapWriter::new(&mut output);

        let mut urlwriter = sitemap_writer
            .start_urlset()
            .expect("Unable to write urlset");

        let today = what_is_date_today(); // 2.

        let date = DateTime::from_utc(
            NaiveDate::from_ymd(today.year, today.month, today.day).and_hms(0, 0, 0),
            FixedOffset::east(0),
        );

        let home_entry = UrlEntry::builder()
            .loc(website)
            .changefreq(ChangeFreq::Monthly)
            .lastmod(date) // 4.
            .build()
            .expect("valid");
        urlwriter.url(home_entry).expect("Unable to write url");

        for route in static_routes.iter() { // 5.
            let static_url = format!("{}/{}", &website, route);
            let url_entry = UrlEntry::builder()
                .loc(static_url)
                .changefreq(ChangeFreq::Monthly)
                .lastmod(date)
                .build()
                .expect("valid");

            urlwriter.url(url_entry).expect("Unable to write url");
        }

        // 6.
        let sitemap_writer = urlwriter.end().expect("close the urlset block");
    }

    println!("{:#?}", std::str::from_utf8(&output)); // 7. Verify result at console

    write("sitemap.xml", &output)?; // 8. Write file

    Ok(())
}
```

It is just the little variation from [the example][Writing Sitemap with Rust example].


What we do are

1. Include it to decorate  output from the console.

2. Make variables for website name and static routes to use them to build sitemap.

3. Define custom functions not to manually type current time repeatedly(refer code snippet below).

4. Priority is removed because some search engines ignore it and personal choice. Use your preference.

5. Use `for` to iter through static routes and built sitemap for your website with them.

6. You don't need it for this to work. But you need it later.

7. Verify result at console as we do in part 1.

8. Finally, we read our first sitemap with Rust.


If you have doubted `what_is_date_today` above, You can refer the code snippet below. It will help you not to type the current time repeatedly or you can use crates if you don't care for the disk space it takes.

```rust
// lib.rs
extern crate chrono;
use chrono::prelude::Utc;

#[derive(Debug)]
pub struct Today {
    pub year: i32,
    pub month: u32,
    pub day: u32,
}

pub fn what_is_date_today() -> Today {
    let date = Utc::now().naive_utc();
    let date_str = format!("{}", &date);
    let split_date = date_str.split(" ");
    let vec_of_split_date: Vec<&str> = split_date.collect();

    let payload = vec_of_split_date[0];

    let split_payload = payload.split("-");
    let vec_of_split_payload: Vec<&str> = split_payload.collect();

    let (y, m, d) = (vec_of_split_payload[0], vec_of_split_payload[1], vec_of_split_payload[2]);

    println!("Today is {}-{}-{}(year-month-day\n)", &y, &m, &d);

    Today {
        year: y.parse::<i32>()
                .expect("Invalid Number"),
        month: m.parse::<u32>()
                .expect("Invalid Number"),
        day: d.parse::<u32>()
                .expect("Invalid Number"),
    }
}
```

You can test it in your machine and you will see the result sitemap.xml in your directory similar to

```xml
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://www.steadylearner.com/</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>http://www.steadylearner.com/about</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>http://www.steadylearner.com/video</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>http://www.steadylearner.com/blog</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>http://www.steadylearner.com/code</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>http://www.steadylearner.com/image</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>http://www.steadylearner.com/slideshow</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>http://www.steadylearner.com/markdown</loc>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
```

and what you need to do is just use your own website name and static routes to build your sitemap with Rust instead of examples here.

<br />

## 3. Conclusion

I lost the first post written before and wrote it again to be a starting point for other posts for sitemap with Rust later. So it may not complete and lack explanation for details but having working code is very important in Rust because it will save you ton of times to make something work and compile if you start with new topics.

I hope this post and code examples here could be helpful for you to **build sitemap with Rust**.

In the next posts for sitemap with Rust, you will learn how to make sitemap with dynamic datas and automate all processes.

**Thanks and please share this post with others.**
