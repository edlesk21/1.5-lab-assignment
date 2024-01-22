module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("screen.css");
    eleventyConfig.addPassthroughCopy("moon.png");
    eleventyConfig.addPassthroughCopy("earth.png");
};