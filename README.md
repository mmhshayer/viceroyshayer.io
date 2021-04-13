# viceroyshayer.github.io

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

[]  i18n
[]  font
v-0.1.4-viceroyshayer.github.io.zip

[] puts lots of error

The warning sources from <div v-for="comment in comments" :key="comment">, where the object comment is used as a key for v-for. The meaning of the warning is quite literal, don't use Object as key.

Use unique primitive value as key, maybe something like comment.id or ${comment.time}${comment.by}
