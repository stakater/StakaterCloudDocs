# Setup

## Pre-requisites

- [Node.js v14+](https://nodejs.org/)
- Install VuePress locally

```bash
npm install -D vuepress@next
```

- For any help on Vuepress, see [VuePress Guide](https://v2.vuepress.vuejs.org/guide/getting-started.html)

## Serve on local server

```bash
npm run docs:dev
```
### Release Process of CloudDocs
In order to update cloud docs,version needs to be bump manually. For this, update the image tag in `values.yaml` of cloud docs with the tag from the stakater-apps repo pipeline executed after PR creation.  