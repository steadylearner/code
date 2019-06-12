<!--
 Post{
   title: "How to build sitemap for images with Rust",
   subtitle: "Learn how to make image_sitemap.xml with it.",
   image: "post/sitemap/sitemap_for_images_with_rust.png",
   image_decription: "Made with CSS by Steadylearner",
   tags: "Rust sitemap code image",
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
[What is image sitemap]: https://support.google.com/webmasters/answer/178636

<!-- Post for this series -->

[Your first sitemap with Rust]: https://www.steadylearner.com/blog/read/Your-first-sitemap-with-Rust
[How to use datas to build sitemap with Rust Diesel]: https://www.steadylearner.com/blog/read/How-to-use-datas-to-build-sitemap-with-Rust-Diesel
[How to build a sitemap.txt from sitemap.xml with Rust]: https://www.steadylearner.com/blog/read/How-to-build-a-sitemap.txt-from-sitemap.xml-with-Rust
[How to build a sitemap for React App]: https://medium.com/@steadylearner/how-to-build-a-sitemap-for-react-app-7bbc3040dc1f

<!-- / -->

If you read the previous post for sitemap with Rust, You could build sitemap.xml and sitemap.xml for routes in your website.

This post is to help others who have to handle many images and build sitemap for them.

You will find that it is not so difficult with **Rust**.

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [Rust Sitemap Crate]
2. [What is image sitemap]
3. [What is sitemap](https://support.google.com/webmasters/answer/156184?hl=en)
4. [How to build a sitemap](https://www.google.com/search?client=firefox-b-d&q=how+to+build+sitemap)

---

Code used here is similar to [How to use datas to build sitemap with Rust Diesel]. I hope you read it before move on.

You should also read [What is image sitemap] because we will replicate the given example with Rust in this post.

I also hope that you already have database setup inside your project for images with [Rust Diesel] or your preference. I will give you an example and you will need to modify it for your project.

If you want to see the final project first, you can refer to [Sitemap GitHub] Repository.

<br />

<h2 class="blue">Table of Contents</h2>

1. **Image_sitemap.rs** to write sitemap for images
2. **How to include it** inside your main sitemap.xml
3. **Conclusion**

---

<br />

## 1. Image_sitemap.rs to write sitemap for images

We will separate the code to write sitemap for images, we will write **image_sitemap.rs**.
(You can refer to **models.rs** and **cargo.toml** given below if you want.)

```rust
// models.rs to use Rust Diesel, it is just an example
#[derive(Debug, Queryable, Identifiable, Serialize, Deserialize)]
pub struct Image {
    pub id: i32,
    pub title: String,
    pub media_url: String,
    pub content: String,
}
```

<br />

```toml
# cargo.toml, write the code similar to this

# $cargo run --bin <name> will point to the path we define here
# (Replace <name> to image-sitemap for this post)
[[bin]]
name = "main"
path = "src/bin/main.rs"
[[bin]]
name = "sitemap"
path = "src/bin/sitemap.rs"
[[bin]]
name = "image-sitemap"
path = "src/bin/image_sitemap.rs"

# lib is used like crate and can import and export other files in the same directory level.

[lib]
name = "your_lib"
path = "src/lib.rs"
```

<br />

```rust
// image_sitemap.rs to write image_sitemap.xml
extern crate sl_lib;
extern crate console;
extern crate diesel;

use std::fs;
use std::fs::OpenOptions;
use std::io::prelude::*;

use sl_lib::models::*;
use sl_lib::*;

use console::Style;

use diesel::prelude::*;

fn main() -> std::io::Result<()> {
    use crate::schema::images::dsl::*;
    let connection = init_pool().get().unwrap();

    let bold = Style::new().bold();

    let image_results = images
        .load::<Image>(&*connection)
        .expect("Error loading images");

    println!(
        "\nIt starts to write image_sitemap.xml for {} images",
        bold.apply_to(image_results.len())
    );

    // https://support.google.com/webmasters/answer/178636?hl=en

    let start_xml = r#"<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.steadylearner.com</loc>
"#;

    fs::write("image_sitemap.xml", &start_xml)?;
    let mut result = OpenOptions::new().append(true).open("image_sitemap.xml").unwrap();

    let mut image_xml = String::new();
    for image in image_results {
        let image_url = format!(
            "    <image:image>
      <image:title>{}</image:title>
      <image:caption>{}</image:caption>
      <image:loc>https://www.steadylearner.com{}</image:loc>
      <image:license>https://www.steadylearner.com</image:license>
    </image:image>
",
            image.title,
            image.content,
            image.media_url,
        );
        image_xml.push_str(&image_url);
    }

    if let Err(e) = writeln!(result, "{}{}", image_xml , r#"  </url>
</urlset> "#) {
        eprintln!("Couldn't write to file: {}", e);
    }

    println!("image_sitemap.xml was built. Include it to main sitemap.xml.");

    Ok(())
}
```

The example is not so different from the ones from [How to use datas to build sitemap with Rust Diesel].

We just need to tweak them to be used for image sitemap. What we do are

1. **Data setup for images** instead of posts
2. **Manually start to write boilerplate parts** for image_sitemap.xml
3. Define mutable variable **image_xml** and later **pass and process the payload data** inside  `for in`.
4. Manually end writing wrapper for image_sitemap.xml

and that was all the important process to write image **sitemap.xml** for your site.

You can test it with `cargo c` or `cargo run --bin <name>` inside your console.

It will create image_sitemap.xml similar to the **main image** of this post.

 Your project would be different from the example here. I want you to invest your time to find what is right for it.

We could build sitemap for images using datas from the database. What we need to do next is to include it inside your main sitemap.xml file.

You will find that we are using  almost all API that [Rust Sitemap Crate] offers to write sitemap.xml in the next part.

<br />

## 2. How to include it inside your main sitemap.xml

In the previous part, we built sitemap for images. For it is separtated from your main **sitemap.xml**, we will use API from [Rust Sitemap Crate] to link it. By doing this, we don't have to submit to search engines everytime we create sitemaps.

**The code snippet is long** and we will organize and automate it in the next post.

```rust
// sitemap.rs
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
            .expect("invalid");
        urlwriter.url(home_entry).expect("Unable to write url");

        let static_routes: Vec<&str> = vec!["about", "video", "blog", "code", "image", "slideshow"];

        for route in static_routes.iter() {
            let static_url = format!("http://www.steadylearner.com/{}", route);
            let url_entry = UrlEntry::builder()
                .loc(static_url)
                .changefreq(ChangeFreq::Monthly)
                .lastmod(date)
                .build()
                .expect("invalid");

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
                .expect("invalid");

            urlwriter.url(url_entry).expect("Unable to write url");
        }

        // assigining value to sitemap_writer is important to make the next process work
        let sitemap_writer = urlwriter.end().expect("close the urlset block");

        // To link other sitemap to sitemap.xml(works as a index for other .xml type sitemap)
        println!("You wanna chain other .xml type sitemap here?");
        println!("Type yes for that or no to proceed to the nexts process");

        // Consider only first letter of user input to console
        let choice = str_from_stdin()
            .chars()
            .next() // equals to .nth(0)
            .expect("string is empty");

        match choice {
            'y' => {
                let mut sitemap_index_writer = sitemap_writer
                    .start_sitemapindex()
                    .expect("start sitemap index tag");
                println!("Type path for the other sitemap");

                // Type react_sitemap.xml, image_sitemap.xml etc or use variable instead
                let paths_for_other_sitemaps = str_from_stdin();

                let sitemap_paths_to_string = String::from(paths_for_other_sitemaps);
                let split_paths_for_other_sitemaps: Vec<&str> = sitemap_paths_to_string.split(" ").collect();

                for path_for_other_sitemap in split_paths_for_other_sitemaps {
                    let entire_path_for_other_sitemap =
                        format!("https://www.steadylearner.com/{}", path_for_other_sitemap);

                    let sitemap_entry = SiteMapEntry::builder()
                        .loc(entire_path_for_other_sitemap)
                        .lastmod(date)
                        .build()
                        .expect("invalid");

                    sitemap_index_writer
                        .sitemap(sitemap_entry)
                        .expect("Can't write the file");
                }

                sitemap_index_writer.end().expect("close sitemap block");
            }
            _ => println!("You may not need it. Let's move on to the next phase"),
        }
    }

    println!("{:#?}", std::str::from_utf8(&output));

    write("sitemap.xml", &output)?;

    // sitemap.txt is based on the sitemap.xml and it is already built at the point
    println!("You wanna write sitemap.txt file also?");
    println!("Type yes to write sitemap.txt or no to end the process");

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

The main points for the code snippet above are

1. **Giving ownership of the process** to write sitemap to variable **sitemap_writer**(It is important to include this code to the rest of the code to work)
2. **Consider only first letter** of user input
3. Note that **sitemap_write** variable is used again for this process. Because normal process to write sitemap from **static path** and **the datas from the data** were ended before, We start to write **sitemap index** to chain other sitemaps before the end of the entire process to write **sitemap.xml**.
4. The code used here is to easily chain other **.xml** sitemap format.
5. Use `for in` again to **use .xml files typed by user** before. 
6. **End the entire process to write sitemap.xml** and pass the main control to question users **whether they want to write sitemap.txt** file also or not.

and that was all to explain how to include image_sitemap.xml in main **sitemap.xml**. 

You can use it to chain other .xml files for sitemap also.

<br />

## 3. Conclusion

I hope you could include your sitemap for images with Rust.

With the help from the [Rust Sitemap Crate], we could save our time to write our **sitemap.xml** with Rust.

The main API of the crate is

```rust
let url_entry = UrlEntry::builder()
                .loc(post_url)
                .changefreq(ChangeFreq::Yearly)
                .lastmod(date)
                .build()
                .expect("invalid");
```

and what we do is just to modify and organize our project with Rust code skill.

If you haven't read the other posts for sitemap with Rust yet, please read them also.

1. [Your first sitemap with Rust]
2. [How to use datas to build sitemap with Rust Diesel]
3. [How to build a sitemap.txt from sitemap.xml with Rust]

In the next post, you will learn **how to automate the entire process** to write **sitemap.xml** with Rust.

**Thanks and please share this post with others.**
