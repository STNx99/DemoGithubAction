const distPath = `${process.cwd()}/dist`

const server = Bun.serve({
  port: Number(process.env.PORT || 3000),
  async fetch(req) {
    const url = new URL(req.url)
    const safePath = url.pathname === '/' ? '/index.html' : url.pathname
    const file = Bun.file(`${distPath}${safePath}`)

    if (await file.exists()) {
      return new Response(file)
    }

    // SPA fallback for client-side routing.
    return new Response(Bun.file(`${distPath}/index.html`))
  },
})

console.log(`Server running at http://localhost:${server.port}`)