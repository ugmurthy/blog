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

  eleventyConfig.addFilter('summary', str => {
    //const shortwriteup = "this is the short version of the blog spread over many lines this is the short version of the blog spread over many lines this is the short version of the blog spread over many lines"
    return str.slice(str.indexOf("<p>")+3,200);
  });


  eleventyConfig.addFilter('formatDate', value => {
    const ISOcode = 'en-GB';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(value);
    return `${d.toLocaleDateString(ISOcode, options)}`;
  })

  eleventyConfig.addFilter('sanitise', value => {
    return value.split(' ').join('-').toLowerCase();
  })

};