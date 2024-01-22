module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("screen.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");
};