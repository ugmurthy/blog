---
title: Code block in a markdown file?
author: ugurthy@lorem.com
description: Adding a code block using bootstrap class
date: 2020-07-20
keywords: ["Markdown","bootstrap","code","Example"]
---

Not very happy with the styling of code but better than plain text. 
Something to workon in the future.

<div> <pre><code class="language-bash hljs" style="zenburn">
    
    $ mkdir blog
    $ cd blog
    $ node init
    $ npm install 11ty/@eleventy --save-dev
    $ git init
    $ echo # README > README.md
    
</code></pre></div>
 

 <div><pre ><code class="language-js hljs javascript" style="zenburn">
    // This is a comment
    // users.js
    //
    module.exports = {
    getName: () => {
        return 'Jimmy';
    },
    getLocation: () => {
        return 'Madivalla';
    },
    dob: '12-Jan-1920',
    // added on 21/Jul
    };

    var x = 10;
    x = x * 200;

    co = require('users.js')
    if ( condition ) {
        return 1;
    } else {

        return 0;
    }
</code></pre></div>


