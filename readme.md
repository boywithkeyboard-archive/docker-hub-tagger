## docker-hub-tagger

### Setup

#### Deno

```ts
import { fetchTags, fetchTagNames } from 'https://esm.sh/docker-hub-tagger'
```

#### Node.js

```bash
npm i docker-hub-tagger
```

```ts
import { fetchTags, fetchTagNames } from 'docker-hub-tagger'
```

### Usage

```ts
const tags = await fetchTags('golang')

const tagNames = await fetchTagNames('node')
```
