## docker-hub-api

### Setup

#### Deno

```ts
import { fetchTags, fetchTagNames } from 'https://esm.sh/docker-hub-api'
```

#### Node.js

```bash
npm i docker-hub-api
```

```ts
import { fetchTags, fetchTagNames } from 'docker-hub-api'
```

### Usage

```ts
const tags = await fetchTags('golang')

const tagNames = await fetchTagNames('node')
```
