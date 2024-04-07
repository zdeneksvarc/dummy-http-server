# dummy-http-server

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js
```

To build and run Docker image with stdout in terminal:

```bash
docker build --pull -t dummy-http-server .
docker run -p 127.0.0.1:1234:1234 dummy-http-server 
```

This project was created using `bun init` in bun v1.1.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.