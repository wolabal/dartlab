import { writeFileSync, readFileSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildDir = resolve(__dirname, '..', 'build');
const basePath = process.env.BASE_PATH || '';
const target = `${basePath}/docs/getting-started/quickstart`;

const docsDir = resolve(buildDir, 'docs');

// docs/index.html — redirect to quickstart
const docsIndex = resolve(docsDir, 'index.html');
if (!existsSync(docsIndex)) {
	mkdirSync(docsDir, { recursive: true });
	writeFileSync(docsIndex, `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0;url=${target}">
<link rel="canonical" href="${target}">
<title>Redirecting...</title>
</head>
<body>
<script>window.location.replace("${target}")</script>
</body>
</html>
`);
	console.log(`  -> docs/index.html redirect to ${target}`);
}

// blog/index.html — copy from blog.html if SvelteKit generated it as blog.html
const blogHtml = resolve(buildDir, 'blog.html');
const blogDir = resolve(buildDir, 'blog');
const blogIndex = resolve(blogDir, 'index.html');

if (existsSync(blogHtml) && !existsSync(blogIndex)) {
	mkdirSync(blogDir, { recursive: true });
	copyFileSync(blogHtml, blogIndex);
	console.log('  -> blog/index.html copied from blog.html');
}
