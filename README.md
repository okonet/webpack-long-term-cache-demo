# webpack-long-term-cache-demo
A demo webpack config showing how to enable long-term caching using Webpack. Read [Long-term caching of static assets with Webpack](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.9ro7cpngr) for details.

## To enable long-term caching of static resources produced by webpack:

1. Use `[chunkhash]` to add a content-dependent cache-buster to each file.
1. Use compiler stats to get the file names when requiring resources in HTML.
1. Generate the chunk-manifest JSON and inline it into the HTML page before loading resources.
1. Ensure that the entry point chunk containing the bootstrapping code doesn’t change its hash over time for the same set of dependencies.
1. Profit!

## How to run

1. `npm install`
2. `npm start`
