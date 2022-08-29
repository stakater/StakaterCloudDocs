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
In order to update cloud docs,version needs to be bump manually. For this, update the `application.deployment.image.tag` in `stakater-apps/prod/stakater-cloud-docs/values.yaml` under `stakater-apps` repo with the tag `docker pull docker-stakater-nexus.apps.prod.clusters.stakater.io/stakater/stakaterclouddocs:< tag >` from the pipeline executed after PR creation.  