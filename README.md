#app that contains only filepicker

1. fill `.npmrc` with appropriate token
```shell
cp .npmrc.example .npmrc
```
2. install deps
```shell
npm i
```
3. modify filepicker usage however you want at: [index.js](src/index.js)
4. run:
```shell
npm run build
```
5. content at `./build/` is your app
