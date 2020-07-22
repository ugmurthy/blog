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
- comments feature (ideas welcome)
- improve code block highlighting (any ideas welcome)


##### 2. I just want use this blog template
1. Fork or clone a copy of this repo to your github account
2. Signup with www.netlify.com using your github account
3. Build this repo using netlify.com (when you signup - netlify.com will guide you - chose defaults and you are done)



##### 3. Installing @11ty
1. Getting started with 11ty
2. Quick check
3. Working with Templates


###### 3.1 Getting started with 11ty

Installing Eleventy into our project requires package.json
Lets created it using `npm init`

<pre><code class="language- hljs">
# assumes you have alread installed node
~/myproject $ npm init -y
# the `-y` makes npm use all defaults

# now Install Eleventy into pacakge.json
~/myproject $ npm install --save-dev @11ty/eleventy

# or 
# if you want to intall Eleventy globally
~/myproject $ npm install -g @11ty/eleventy

</pre></code>

###### 3.2 Quick Check

To run Eleventy
<pre><code class="language- hljs">
# build (actually there are no files to build)
~/myproject $ npx @11ty/eleventy
Processed 0 files in 0.03 seconds (V0.11.0)
</pre></code>

###### 3.3 Working with templates

Template files (*.md in this case) reside in `~/myproject/posts` and layout files `*.njk` reside in `~/myproject/_includes`

The front matter data in the template is merged with the front matter date in the layout. The front matter data in template take priority over that in layouts - the closer to content, the higher priority the data.

Note: Having a json file in the a directory with the name same as the directory allows one to share the same layout.


<pre><code class="language- hljs">
{
    "layout": "mylayout.njk",
    "tags": ["posts"] 
}
</pre></code>

and makes avaialbe the data relating to files (templates) in `posts` as a collection referred by `collections.posts`

 ###### 4. Using data

The layout file uses the `collections.posts` and one can loop over the collections.

Site wide data can be kept in `~myprojec/_data/mysite.js` using `module.exports`

[More info on 11ty](https://www.11ty.dev/)




