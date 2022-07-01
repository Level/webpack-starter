# webpack-starter

> **Demonstrates bundling [`level`](https://github.com/Level/level) for browsers using [`webpack`](https://webpack.js.org/).**  
> See also [`Level/browserify-starter`](https://github.com/Level/browserify-starter).

[![level badge][level-badge]](https://github.com/Level/awesome)
[![Test](https://img.shields.io/github/workflow/status/Level/webpack-starter/Test?label=test)](https://github.com/Level/webpack-starter/actions/workflows/test.yml)
[![Donate](https://img.shields.io/badge/donate-orange?logo=open-collective&logoColor=fff)](https://opencollective.com/level)

## Getting Started

```bash
git clone https://github.com/Level/webpack-starter.git
cd webpack-starter
npm install
npm run build
```

Then open `index.html` in a browser of choice. You're now ready to use your `level` database, backed by IndexedDB!

In order to reduce bundle size, the webpack configuration at [`webpack.config.js`](./webpack.config.js) excludes the [`buffer`](https://github.com/feross/buffer) polyfill. To store binary data, either change the webpack configuration, or use Uint8Array instead of Buffer. For example:

```js
import { Level } from 'level'

const db = new Level('webpack-starter', {
  keyEncoding: 'view'
})

await db.put(new Uint8Array([1, 2]), 'example')
const example = await db.get(new Uint8Array([1, 2]))
```

## Contributing

[`Level/webpack-starter`](https://github.com/Level/webpack-starter) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

Support us with a monthly donation on [Open Collective](https://opencollective.com/level) and help us continue our work.

## License

[MIT](LICENSE)

[level-badge]: https://leveljs.org/img/badge.svg
