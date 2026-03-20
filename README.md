# CV ReactJS (Bun Runtime)

Du an ReactJS gioi thieu ban than (kieu CV), build bang Vite va runtime production bang Bun.

## Chay local

```bash
bun install
bun run dev
```

## Build production

```bash
bun run build
bun run start
```

Mac dinh app chay o cong `3000`.

## Docker

Build image:

```bash
docker build -t stnx99/githubaction:latest .
```

Run container:

```bash
docker run -p 3000:3000 stnx99/githubaction:latest
```

Push len Docker Hub:

```bash
docker push stnx99/githubaction:latest
```

## GitHub Actions tu dong push Docker

Workflow da co tai `.github/workflows/docker-publish.yml`.

Ban can them 2 secrets trong GitHub repo:

- `DOCKERHUB_USERNAME`: ten dang nhap Docker Hub (vi du `stnx99`)
- `DOCKERHUB_TOKEN`: access token cua Docker Hub
