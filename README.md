---
layout: base.njk
title: 'README'
description: ''
---
##### 1. Introduction
This repo is a blogsite template for generating a static blogsite and deploying it using netlify.com. On every commit
netlify.com will build (using @11ty) and deploy the blogsite.

**Features:**
- Customisable blogsite ( `modify _data/site.js` )
- Two column site - left column acting as navigator to blog posts
- uses @11ty to build
- uses bootstrap 4 for styles
- uses highlightjs for code blocks
- blog posts are markdown files (see samples : `/posts/*.md` )
- search blog content (left navigator shows resulting posts )

**For future**
- comments feature (using disqus or other) (ideas welcome)
- improve code block highlighting (any ideas welcome)


##### 2. How to use this blog template

1. Fork  a copy of this repo to your github account and clone to your local machine
2. Install and build locally
   <pre><code class="language-bash hljs"> 
   $ cd ~/blosite # change directory to you blogsite
   $ npm install
   $ npx @11ty/eleventy --serve
   # Browse locally to check if you can access the blogsite
   # check the search function too.
   </code></pre>

3. Signup with www.netlify.com using your github account
4. Build this repo using netlify.com (when you signup - netlify.com will guide you - chose defaults and you are done)


If the first 4 steps were sucessfull i.e. you are able to see your site on netlify then proceed with customisation


4. Customise it by modifying contents of `_data/site.js`
5. Modify index.njk, about.njk as needed
6. Write you posts in markdown. All posts will reside ins `posts`
7. Ensure you update variables in frontmatter especially `date` to date of posting (as YYYY-MM-DD )else it defaults to file creation date which will keep changing to build date and thus not preserving order of the blogs in left navigator.
8. git commit the changes if any and push it to origin
9. netlify.com will automatically build the external blogsite.


##### 3. References

1. [@11ty](https://www.11ty.dev/)
2. [Ian Feather account of moving from jekyll to 11ty](https://www.ianfeather.co.uk/moving-this-blog-from-jekyll-to-11ty/)
3. [Paul Robert Lloyd experience moving from jekyll to 11ty](https://24ways.org/2018/turn-jekyll-up-to-eleventy/)
4. [Highlighting code](https://highlightjs.org/)
5. [starter code for this blogsite template](https://github.com/fullstacktraining/11ty-blog-jamstack-training/tree/module-1)
6. [Create a blog using Jamstack](https://jamstack.training/courses/enrolled/693067)


