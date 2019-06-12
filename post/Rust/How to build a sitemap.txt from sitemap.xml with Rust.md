<!--
 Post{
   title: "How to build a sitemap.txt from sitemap.xml with Rust",
   subtitle: "Learn how to make sitemap.txt easily with Rust",
   image: "post/sitemap/sitemap_txt_with_rust.png",
   image_decription: "sitemap.xml to sitemap.txt by Steadylearner",
   tags: "Diesel Rust sitemap code",
   theme: "Rust",
 }
-->

<!-- Link here -->

[Rust Sitemap Crate]: https://github.com/svmk/rust-sitemap
[Steadylearner]: https://www.steadylearner.com
[Steadylearner Github Repository]: https://github.com/steadylearner/Steadylearner
[How to deploy Rust Web App]: https://medium.com/@steadylearner/how-to-deploy-rust-web-application-8c0e81394bd5?source=---------9------------------
[Rust Diesel]: http://diesel.rs/
[Sitemap in React]: https://medium.com/@steadylearner/how-to-build-a-sitemap-for-react-app-7bbc3040dc1f
[Sitemap GitHub]: https://github.com/steadylearner/Sitemap

<!-- Post for this series -->

[Your first sitemap with Rust]: https://www.steadylearner.com/blog/read/Your-first-sitemap-with-Rust
[How to use datas to build sitemap with Rust Diesel]: https://www.steadylearner.com/blog/read/How-to-use-datas-to-build-sitemap-with-Rust-Diesel
[How to build a sitemap for React App]: https://medium.com/@steadylearner/how-to-build-a-sitemap-for-react-app-7bbc3040dc1f

<!-- / -->

This is a bonus post from the previous ones to build sitemap.xml files. I hope you already read [Your first sitemap with Rust] and [How to use datas to build sitemap with Rust Diesel].

The source code used here can be separated or include it in your previous Rust(.rs) file to build sitemap.xml.

<br />

<h2 class="red-white" >[Prerequisite]</h2>

1. [Rust Sitemap Crate]
2. [What is sitemap](https://support.google.com/webmasters/answer/156184?hl=en)
3. [How to build a sitemap](https://www.google.com/search?client=firefox-b-d&q=how+to+build+sitemap)
4. Your sitemap.xml

---

For this process is simple, you don't have to visit all links above if you already knew them. I just want you to read and test the code snippet from **Reading sitemap documents** part at [Rust Sitemap Crate] before move on.

If you are a React developer and you didn't have any sitemap.xml or sitemap.txt file yet, you may read [How to build a sitemap for React App] also to build them. 

It will be also helpful for you to learn different way to do the same thing with other programming lagunage.

If you prefer to see the final project first, you can refer to [Sitemap GitHub] Repository.

<br />

<h2 class="blue" >Table of Contents</h2>

1. Test official example to read sitemap.xml
2. How to modify it to write **sitemap.txt**
3. **Conclusion**

---

<br />

## 1. Test official example to read sitemap.xml

We will first test the official example to read sitemap.xml and find the exact part(payload) we want to use from it. I hope you already exctued it in your local machine.

The code snippet below is from the [Rust Sitemap Crate].

```rust
extern crate sitemap;
use sitemap::reader::{SiteMapReader,SiteMapEntity};
use std::fs::File;
fn main() {
    let mut urls = Vec::new();
    let mut sitemaps = Vec::new();
    let mut errors = Vec::new();
    let file = File::open("sitemap.xml").expect("Unable to open file.");
    let parser = SiteMapReader::new(file);
    for entity in parser {
        match entity {
            SiteMapEntity::Url(url_entry) => {
                urls.push(url_entry);
            },
            SiteMapEntity::SiteMap(sitemap_entry) => {
                sitemaps.push(sitemap_entry);
            },
            SiteMapEntity::Err(error) => {
                errors.push(error);
            },
        }
    }
    println!("urls = {:?}",urls);
    println!("sitemaps = {:?}",sitemaps);
    println!("errors = {:?}",errors);
}
```

After having tested this code snippet, you should have seen that some urls and maybe links to some other sitemaps you included.

For sitemap.txt just needs **url parts separated by new lines(\n)**, we will only use `urls` variable and its relevant codes to build your **sitemap.txt**.

(**sitemap in .txt format allows you to use all selector * to define url also**. If you followed the previous posts given above, you should already have all dynamic pages you want to include in sitemap.xml and you wouldn't need to use it. But you can modify the sitemap.txt for your preference manually if you want.)

<br />

## 2. How to modify it to write sitemap.txt

In the previous part, What the code snippet do is to **read the sitemap.xml** and show important parts from such as urls, other sitemaps and errors if they exist. So we should modify it to **write sitemap.txt**.

We will find how to do it with the code snippet below.

(If you want to separate the process to write sitemap.txt, Save the code snippet below to txt_sitemap.rs or your preference)

```rust
extern crate sitemap;
use sitemap::reader::{SiteMapReader,SiteMapEntity};
use std::fs::{write, File};
fn main() {
    let mut urls = Vec::new();
    let mut sitemaps = Vec::new();
    let mut errors = Vec::new();
    let file = File::open("sitemap.xml").expect("Unable to open file.");
    let parser = SiteMapReader::new(file);
    for entity in parser {
        match entity {
            SiteMapEntity::Url(url_entry) => {
                urls.push(url_entry);
            },
            SiteMapEntity::SiteMap(sitemap_entry) => {
                sitemaps.push(sitemap_entry);
            },
            SiteMapEntity::Err(error) => {
                errors.push(error);
            },
        }
    }

    // You should read the source code to find what get_url does exactly

    // It is a method that return url inside Some()
    // You should unwrap() to get the payload value inside it
    println!("payload = {:?}", urls[0].loc.get_url().unwrap()); // 1.

    let mut output = String::new(); // 2.

    for url in urls {
        let payload = url.loc.get_url().unwrap();
        println!("{}", &payload);
        let payload_with_new_line = format!("{}\n", &payload);
        output.push_str(&payload_with_new_line);
    }

    // 3.
    println!("{:#?}", &output);
    write("sitemap.txt", &output)?;

    println!("errors = {:?}", errors);
}
```

The entire code isn't that different from the official example. What we should do were

1. To find the way to get url from the API from [Rust Sitemap Crate]. For it is the only part that we are interested. We could verfiy it with a code below.

```rust
println!("payload = {:?}", urls[0].loc.get_url().unwrap());
// It prints payload = https://www.steadylearner.com alike.
```

2. Then we create mutable variable **output** with **let mut output = String::new()**; to save data and we use `for in` loop again to use data inside **urls** variable we created and processed with API from [Rust Sitemap Crate].

3. Finally, we verfiy everything worked well with **println!("{:#?}", &output);** first and then write sitemap.txt with **write("sitemap.txt", &output)?;**

In the process, we didn't remove **println!("errors = {:?}", errors);** to verify errors if there are any.

(You may wonder why `for in` loop is repeatedly used in all processes for sitemaps. You can use FP way of programming if you want. It was used because it is in the official examples of the crate.)

If you want to include it inside your former projects and make sitemap.xml and sitemap.txt in the same file, You may refer to the code snippet below for that.

```rust
// main.rs, sitemap.rs or whatever you want
extern crate chrono;
extern crate console;
extern crate diesel;
extern crate sitemap;
extern crate sl_lib;

use std::fs::{write, File};

use console::Style;
use diesel::prelude::*;

use chrono::{DateTime, FixedOffset, NaiveDate};
use sitemap::reader::{SiteMapEntity, SiteMapReader};
use sitemap::structs::{ChangeFreq, SiteMapEntry, UrlEntry};
use sitemap::writer::SiteMapWriter;

// use yours instead
use sl_lib::models::*; 
use sl_lib::*;

use sl_lib::custom::str_from_stdin;

fn main() -> std::io::Result<()> {
    // To decorate console output
    let bold = Style::new().bold();

    // Use database with Rust diesel to write sitemap.xml first
    use crate::schema::posts::dsl::*;
    let connection = init_pool().get().unwrap();

    let post_results = posts
        .filter(published.eq(true))
        .order(created_at.desc())
        .load::<Post>(&*connection)
        .expect("Error loading posts");

    println!(
        "\nWrite sitemap for {} posts",
        bold.apply_to(post_results.len())
    );

    let mut output = Vec::<u8>::new();
    {
        let sitemap_writer = SiteMapWriter::new(&mut output);

        let mut urlwriter = sitemap_writer
            .start_urlset()
            .expect("Unable to write urlset");

        let today = what_is_date_today();

        let date = DateTime::from_utc(
            NaiveDate::from_ymd(today.year, today.month, today.day).and_hms(0, 0, 0),
            FixedOffset::east(0),
        );

        let home_entry = UrlEntry::builder()
            .loc("http://www.steadylearner.com")
            .changefreq(ChangeFreq::Monthly)
            .lastmod(date) // priority is removed for some search engines ignore it and personal choice.
            .build()
            .expect("valid");
        urlwriter.url(home_entry).expect("Unable to write url");

        let static_routes: Vec<&str> = vec!["about", "video", "blog", "code", "image", "slideshow", "markdown"];

        for route in static_routes.iter() {
            let static_url = format!("http://www.steadylearner.com/{}", route);
            let url_entry = UrlEntry::builder()
                .loc(static_url)
                .changefreq(ChangeFreq::Monthly)
                .lastmod(date)
                .build()
                .expect("valid");

            urlwriter.url(url_entry).expect("Unable to write url");
        }

        for post in post_results {
            let post_url = format!(
                "http://www.steadylearner.com/blog/read/{}",
                post.title.replace(" ", "-")
            );
            // Use Monthly or Yeary
            let url_entry = UrlEntry::builder()
                .loc(post_url)
                .changefreq(ChangeFreq::Yearly)
                .lastmod(date)
                .build()
                .expect("valid");

            urlwriter.url(url_entry).expect("Unable to write url");
        }

        // assigining value to sitemap_writer is important to make the other processes work
        let sitemap_writer = urlwriter.end().expect("close the urlset block");
    }

    println!("{:#?}", std::str::from_utf8(&output));

    write("sitemap.xml", &output)?;

    // sitemap.txt is based on the sitemap.xml and it is already built at the point
    println!("You wanna write sitemap.txt file also?");
    println!("Type [yes] to write sitemap.txt or [no] to end the process");

    let choice = str_from_stdin().chars().next().expect("string is empty");

    match choice {
        'y' => {
            let mut urls = Vec::new();
            let mut sitemaps = Vec::new();
            let mut errors = Vec::new();

            let file = File::open("sitemap.xml").expect("Unable to open file.");
            let parser = SiteMapReader::new(file);
            for entity in parser {
                match entity {
                    SiteMapEntity::Url(url_entry) => {
                        urls.push(url_entry);
                    }
                    SiteMapEntity::SiteMap(sitemap_entry) => {
                        sitemaps.push(sitemap_entry);
                    }
                    SiteMapEntity::Err(error) => {
                        errors.push(error);
                    }
                }
            }

            // get_url from the source code, unwrap to get the payload value inside Some
            println!("payload = {:?}", urls[0].loc.get_url().unwrap());

            let mut output = String::new();

            for url in urls {
                let payload = url.loc.get_url().unwrap();
                println!("{}", &payload);
                let payload_with_new_line = format!("{}\n", &payload);
                output.push_str(&payload_with_new_line);
            }

            println!("{:#?}", &output);
            write("sitemap.txt", &output)?;

            println!("errors = {:?}", errors);
        }
        _ => {
            println!("The process ends here");
        }
    }

    Ok(())
}

```

and that is all. You can test it with `Cargo c or cargo run` and verify the result. I hope you modify it well for your project.

By following this post, you should have your **sitemap.txt** built from **sitemap.xml**. If there was any problem, please refer to [Sitemap GitHub] and the documenation at [Rust Sitemap Crate].

<br />

## 3. Conclusion

I hope you could build sitemap.xml from static routes and the dynamic datas from the database with **Rust** in the previous posts. After following this post, you should be able to build sitemap.txt from the ones you built before also.

In the next post, we will learn how to build image sitemap.xml file. The entire process will be similar to the previous ones.

I woudln't handle how to build video sitemap or news sitemap with this for there is YouTube that already handles many video relevant things and you shouldn't need to build sitemap for news normally but you can do that if you refer the code snippet given here.

**Thanks and please share this post with others.**
