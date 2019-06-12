<!-- 
 Post{
   title: "How to use datas to build sitemap with Rust Diesel",
   subtitle: "Build sitemap with Rust and your datas",
   image: "code/Rust-Diesel.png",
   image_decription: "Rust Disel Image from the website",
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

<!-- / -->

Before I dive deep to write a sitemap for [Steadylearner], Which is built with React Frontend and Rust Backend, Building a sitemap for dynamic pages seemed to be solved problem for there were many automated ways to do that.

[The site][Steadylearner] uses React for Frontend and there were already some [sitemap builders in React development environment][Sitemap in React].

I tried to use them. But it wasn't that helpful for the website with dynamic page using database, because they just extract path parts from react-router.

So I thought that it would be better to find the solution at server side using **Rust** because I already use [Rust Diesel] to handle database.

In this post, I will show you what I learnt from the process. I hope you already followed the previous post [Your first sitemap with Rust].

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [Rust Sitemap Crate]
2. [Rust Diesel]
3. [What is sitemap](https://support.google.com/webmasters/answer/156184?hl=en)
4. [How to build a sitemap](https://www.google.com/search?client=firefox-b-d&q=how+to+build+sitemap)

---

You don't have to visit all links above if you already knew them, I want you to follow [Rust Diesel] and [Rust Sitemap Crate] examples and could make your own CLI to use CRUD operation for blog posts.

If you just want to see the final project, you may refer to [Sitemap Github].

<br />

<h2 class="blue" >Table of Contents</h2>

1. Setup Diesel and Rust files
2. How to write sitemap with database with **Rust Diesel**
3. **Conclusion**

---

<br />

## 1. Setup Diesel and Rust files

We will first setup some Diesel and Rust codes before we write code for dynamic sitemap.xml. You may skip or use your own project instead if you are not interested in this part.

Following the tutorial given by author of Diesel, You should have code snippet similar to this.

```rust
extern crate dotenv;
use dotenv::dotenv;
use std::env;

use diesel::pg::PgConnection;
use diesel::r2d2::{ConnectionManager, Pool, PooledConnection};

// use code beow when there is no rocket path relevant things?

use chrono::prelude::Utc;

type PgPool = Pool<ConnectionManager<PgConnection>>;
pub fn init_pool() -> PgPool {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let manager = ConnectionManager::<PgConnection>::new(database_url);
    Pool::new(manager).expect("db pool")
}
```

It maybe different from your project depending on the database you use. You should have used this function inside your CLI for blog posts already. It will be used to call datas from the database such as blog posts etc.

```rust
// models.rs
use crate::schema::{posts};

#[derive(Debug, Queryable, Identifiable, Associations, AsChangeset, Serialize, Deserialize)]
pub struct Post {
    pub id: i32,
    pub title: String,
}

```

Inside the Post struct, You should have defined at least title parts for we will use that to write sitemap.xml with dynamic datas. It may be differ from your project and you may modify it. I hope you already have working codes for post or something else because writing a sitemap should be the last process of your site.

<br />

## 2. How to write sitemap with database with **Rust Diesel**

In this part, we will write some codes to read data from the database and write sitemap.xml from it.

If you read the [previous post][Your first sitemap with Rust], You will find that the major difference from it is "we just set paths **with datas from the database**".

```rust
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

use sl_lib::models::*; // use yours instead
use sl_lib::*; // use yours instead

use sl_lib::custom::str_from_stdin;

// pub fn str_from_stdin() -> String { // Use it to remove \n at the end of the user input
//     let mut var = String::new();
//     stdin().read_line(&mut var).unwrap();
//     let var = var[..(var.len() - 1)].to_string();

//     var
// }

use crate::schema::posts::dsl::*;

fn main() -> std::io::Result<()> {
    let bold = Style::new().bold();
    let website: &str = "http://www.steadylearner.com";
    let static_routes: Vec<&str> = vec!["about", "video", "blog", "code", "image", "slideshow", "markdown"];

    // 1.
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
            .loc(website)
            .changefreq(ChangeFreq::Monthly)
            .lastmod(date)
            .build()
            .expect("valid");
        urlwriter.url(home_entry).expect("Unable to write url");

        for route in static_routes.iter() {
            let static_url = format!("{}/{}", website, route);
            let url_entry = UrlEntry::builder()
                .loc(static_url)
                .changefreq(ChangeFreq::Monthly)
                .lastmod(date)
                .build()
                .expect("valid");

            urlwriter.url(url_entry).expect("Unable to write url");
        }

        // 2.
        for post in post_results {
            let post_url = format!(
                "{}/blog/read/{}",
                website,
                post.title.replace(" ", "-")
            );
            let url_entry = UrlEntry::builder()
                .loc(post_url)
                .changefreq(ChangeFreq::Yearly)
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

If you read the code snippet above, we included two Rust codes that work together.

1. We connected main function to database we defined above and write some codes to make our development process easier. You should understand that the data loaded from the process is saved at `post_results` variable and we can use it later.

2. We use `for in` loops in Rust again here and we are using datas to iterate from the database instead of hard coded static paths we defined inside vector.

What is importnat here is that we define customized url(post_url here) to pass for the loc API from [Rust Sitemap Crate]. Other codes or parameters will be less important in the code snippet.

(**post.title.replace(" ", "-")** is used here to make url be readable in React Frontend and Rust Backend also. You should find what is right for your project.)

When you make this project compile, you will find that the

```xml
<loc>https://www.steadylearner.com/blog/read/Your-first-sitemap-with-Rust</loc>
<loc>https://www.steadylearner.com/blog/read/How-to-build-a-dynamic-sitemap-with-Rust-Diesel</loc>
```

and others with various blog titles are written for your sitemap.xml file with your static routes.

<br />

## 3. Conclusion

I hope you could find hints to write your dynamic sitemap.xml with it. For you already have the boiler plate to build sitemaps with static and the dynamic datas from the database, you can build whatever sitemap with your Rust code skill.

What you really needed was just use `for in` loop again with different data source and preparation for that. The code snippet wouldn't work exactly the same for your project but I want you to understand what you need to make the process work.

In the next post, I will help you to write **sitemap.txt** file from the **sitemap.xml**. You should have read that some search engine uses it and maybe useful for you.

**Thanks and please share this post with others.**
