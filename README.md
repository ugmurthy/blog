---
layout: dump.njk
title: 'About'
description: 'About collections'
---

## READ ME 

### TOC
1. Getting started with 11ty
2. Quick check
3. Working with Templates
4. Using Data
5. Configuration
6. Template languages

### 1. Getting started with 11ty

install 11ty

Installing Eleventy into our project requires package.json
Lets created it using `npm init`

`~/myproject $ npm init -y`

the `-y` makes npm use all defaults

Install Eleventy into pacakge.json

`~/myproject $ npm install --save-dev @11ty/eleventy`
<br>
or
<br>
`~/myproject $ npm install -g @11ty/eleventy`

### 2. Quick Check

To run Eleventy
<br>
`~/myproject $ npx @11ty/eleventy` <br>
`Processed 0 files in 0.03 seconds (V0.11.0)`<br>

### 3. Working with templates

Template files (*.md in this case) reside in `posts` and layout files `*.njk` reside in `_includes`

The front matter data in the template is merged with the front matter date in the layout. The front matter data in template take priority over that in layouts - the closer to content, the higher priority the data.

Note: Having a json file in the a directory with the name same as the directory allows one to share the same layout.


`
{
    "layout": "mylayout.njk",
    "tags": ["posts"] 
}
`

and makes avaialbe the data relating to files (templates) in `posts` as a collection referred by `collections.posts`

 ### 4. Using data

The layout file uses the `collections.posts` 

