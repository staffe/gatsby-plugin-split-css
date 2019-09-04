# gatsby-plugin-split-css

Overrides the default webpack config to split the css into chunks

## Install

```bash
$ npm install gatsby-plugin-split-css
```

## Configure

__Note:__ add this plugin after all PostCSS/Sass/Less plugins.

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gastby-plugn-split-css`
  ],
}
```

## License

[The MIT License](./LICENSE)
