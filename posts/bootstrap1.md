---
title: bootstrap classes in a markdown file?
author: ugurthy@lorem.com
description: Adding html that recognises bootstrap classes - an example
datepublished: 15-Jan-2020
keywords: ["Markdown","bootstrap","card"]
---

<div class="container">
  <h2>Card Image</h2>
  <p>Image at the top (card-img-top):</p>
  <div class="card" style="width:400px">
    <img class="card-img-top" src="/img/FP.png" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Jean Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
  <br>
  
  <p>Image at the bottom (card-img-bottom):</p>
  <div class="card" style="width:400px">
    <div class="card-body">
      <h4 class="card-title">Jane Doe</h4>
      <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
    <img class="card-img-bottom" src="/img/FY.png" alt="Card image" style="width:100%">
  </div>
</div>
