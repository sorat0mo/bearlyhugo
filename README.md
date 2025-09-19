## An easy to use, minimal, text focused Hugo theme

[BearlyHugo](https://github.com/sorat0mo/bearlyhugo) imitates the very popular [Bear Blog](https://bearblog.dev/). It is a blogging platform that focuses on *your words*. **No ads, no tracking, almost no scripts.** It's also tiny and has a small footprint, which makes it suitable for free and budget hosts. With Hugo, you can focus on writing your posts, let the engine do the rest for you.

I ported my own [BearlyJekyll](https://github.com/sorat0mo/bearlyjekyll) to use with the Hugo SSG.

This theme is a modification of [jekyllBear](https://github.com/knhash/jekyllBear/) by [knhash](https://knhash.in/).

## Disclosure

I solicited help from GitHub Copilot in helping me modify the original code. If you see snippets of your code being used here but I have not credited you, inform me.

## What's Changed?

1. Removed image gallery, will add later if I really needed it.

2. Added `{{< cdnimg >}}` shortcode. You can prepend a CDN link before your image resources, so that they will be cached by a CDN.

3. Added `dynamic_table` shortcode. Render large table with a shortcode. Save your table data in `data`.

4. Added a render-link hook. Added secure attributes to all external links. Subdomains of your site are considered external.

## Writing a post
To write a new post, create a new file in the `/content/posts` directory, the filename should be `YYYY-MM-DD-PostName.md`. For example, `2025-09-13-Hello.md`.

In Hugo, data like post date, tags, post name are stored in *front matter* before the post's actual content.

```yaml
---
title: "Meet the Bears: An Image Gallery"
date: 2025-09-11
tags: ["general", "bears"]
comments: false
---
```

All of these can be omitted except title. If you do not set a date, Hugo will default to using the date in the post name. If you do not set a tag, the post will simply do not have tags. Comments are enabled for all posts by default, if you have certain posts where you do not wish enable comments, use `comments: false` in the front matter. See the sample posts for examples.

## Configuration

| Key                 | Description                                                                                                                                                                                                                                                |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `baseURL`           | The baseurl/folder your site is located. Include the trailing slash.                                                                                                                                                                                       |
| `title`             | The name of your site/blog.                                                                                                                                                                                                                                |
| `languageCode`      | The language of your site.                                                                                                                                                                                                                                 |
| `copyright`         | Copyright text.                                                                                                                                                                                                                                            |
| `description`       | Subheader of your site. Also used for SEO.                                                                                                                                                                                                                 |
| `site_theme`        | The color palette/theme you want. bear is the default. Current theme: bear, pine, sunset, geek                                                                                                                                                             |
| `post_search`       | true/false. Displays a search box in posts feed.                                                                                                                                                                                                           |
| `blog_as_home`      | This setting is a boolean (true/false). If set to true, your homepage will become the blog feed instead. If set to false, there will be a home page and a dedicated blog page for your posts. You can edit the home page's content at `/content/index.md`. |
| `blog_tagline`      | Some lines to display atop your posts feed.                                                                                                                                                                                                                |
| `copyright_url`     | Link to the copyright/license. Leave empty if you don't have a link.                                                                                                                                                                                       |
| `fediverse_verify`  | An array of url. Verify your control of the website on Fediverse. Ignore if unused.                                                                                                                                                         |
| `orig_theme_author` | Show Credits to jekyllBear's author, knhash?                                                                                                                                                                                                               |
| `use_CSP`           | Implement limited CSP for GitHub Pages. Set to false IF you are serving CSP Headers elsewhere (e.g. Cloudflare/Vercel/Your server)                                                                                                                         |
| `useCDN`            | true/false. Prepend CDN url using `cdnimg` short code?                                                                                                                                                                                                     |
| `url_CDN`           | The CDN URL to prepend in front of image urls. Consult your CDN for this.                                                                                                                                                                                  |
| `author`            | Your name and URL. Will be used for footer.                                                                                                                                                                                                                |
| `giscus`            | This group of settings is to be used if you want to add comments to your blog posts. Comment out **all** of them if you do not wish to add comments to your posts.                                                                                         |
| `menus`             | More links on the header. Use `main` for webpages and files in your website. Use `special` for external links. Special links will be enclosed in `[]` brackets                                                                                             |

## About CSP
It is a secure header meant to protect your site from XSS attacks. If you decide to add any extra resources (CSS stylesheets, external scripts), you need to add them to the CSP to whitelist them.

## To-do

- [x] Port to Hugo
- [x] Fix bugs
- [x] Fix CSS
- [ ] TBD

## Deploying the site
Use the workflow I included in this repo if you want to deploy it to GitHub Pages. It's copied from Hugo docs. Works for me.

Also, if you do use giscus for comments, don't forget to change "origins" in `giscus.json`, so that only domains you allow can show the comments from your repo's discussions.

### Optional
You can use a headless CMS with this theme and almost any SSG. Check [Chris Ayers' Guide](https://chris-ayers.com/2025/06/26/mobile-cms-on-github-pages/) for more info. I did not implement headless CMS for the sake of simplicity. Though if I happen to use GitHub pages as blog again... This may happen.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

