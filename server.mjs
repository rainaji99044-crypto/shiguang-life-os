import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const port = Number(process.env.PORT || 4173);
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.webmanifest':'application/manifest+json' };

createServer(async (request, response) => {
  try {
    const cleanPath = decodeURIComponent((request.url || '/').split('?')[0]);
    const relative = cleanPath === '/' ? 'index.html' : cleanPath.replace(/^\/+/, '');
    const filePath = normalize(join(process.cwd(), relative));
    if (!filePath.startsWith(process.cwd())) throw new Error('Invalid path');
    const body = await readFile(filePath);
    response.setHeader('Content-Type', types[extname(filePath)] || 'application/octet-stream');
    response.end(body);
  } catch {
    response.statusCode = 404;
    response.end('Not found');
  }
}).listen(port, '127.0.0.1', () => console.log(`拾光 Life OS 已启动：http://localhost:${port}`));
