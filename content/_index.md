---
title: "Hello ʕ´•ᴥ•`ʔ"
---
## An easy to use, minimal, text focused Hugo theme

[BearlyHugo](https://github.com/sorat0mo/bearlyhugo) imitates the very popular [Bear Blog](https://bearblog.dev/). It is a blogging platform that focuses on *your words*. **No ads, no tracking, almost no scripts.** It's also tiny and has a small footprint, which makes it suitable for free and budget hosts. With Hugo, you can focus on writing your posts, let the engine do the rest for you.

I ported my own [BearlyJekyll](https://github.com/sorat0mo/bearlyjekyll) to use with the Hugo SSG. See a [Demo site](https://cats.karsten.ws).

This theme is a modification of [jekyllBear](https://github.com/knhash/jekyllBear/) by [knhash](https://knhash.in/).

## Disclosure

I solicited help from GitHub Copilot in helping me modify the original code. If you see snippets of your code being used here but I have not credited you, inform me.

## What's Changed?

1. Removed image gallery, will add later if I really needed it.

2. Added `cdnimg` shortcode. You can prepend a CDN link before your image resources, so that they will be cached by a CDN.

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

{{< dynamic_table feature_configs >}}

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

