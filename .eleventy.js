const util = require('util');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('vendor');
  eleventyConfig.addPassthroughCopy('admin');

  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj);
  });


  eleventyConfig.addFilter('summary', (str,len) => {
    //console.log("SUMMARY LEN :",len)
    return str.slice(str.indexOf("<p>")+3,len);
  }); 


  // https://24ways.org/2018/turn-jekyll-up-to-eleventy/
  eleventyConfig.addCollection('sortedCollection', collection => {
    
    return collection.getFilteredByTag('posts').sort((a, b) => {
      //console.log("Collection: ",collection)  
      return a.date - b.date;
    });
  });

  eleventyConfig.addCollection("sidebarFewer", (collection) => {
    return collection.getFilteredByTag("posts").slice(-5);
  });

  eleventyConfig.addFilter('formatDate', value => {
    const ISOcode = 'en-GB';
    const options = {  year: 'numeric', month: 'short', day: 'numeric' };
    const d = new Date(value);
    return `${d.toLocaleDateString(ISOcode, options)}`;
  })

  
  eleventyConfig.addFilter('sanitise', value => {
    return value.split(' ').join('-').toLowerCase();
  })

};