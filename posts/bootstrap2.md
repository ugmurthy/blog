---
title: Code block in a markdown file?
author: ugurthy@lorem.com
description: Adding a code block using bootstrap class
datepublished: 15-Jan-2020
keywords: ["Markdown","bootstrap","code"]
---

<pre class="alert alert-primary language-">
    
    $ mkdir blog
    $ cd blog
    $ node init
    $ npm install 11ty/@eleventy --save-dev
    $ git init
    $ echo # README > README.md
    
    
</pre>
 

 <pre > 
    <code class="language-js hljs javascript">
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
    </code>
</pre>

<pre > 
    <code class="language-html">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/README">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-disabled" href="/contact">Contact</a>
          </li>
        </ul>
    </code>
</pre>