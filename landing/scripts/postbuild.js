import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildDir = resolve(__dirname, '..', 'build');
const basePath = process.env.BASE_PATH || '';
const target = `${basePath}/docs/getting-started/quickstart`;

const docsDir = resolve(buildDir, 'docs');
const indexPath = resolve(docsDir, 'index.html');

if (!existsSync(indexPath)) {
	mkdirSync(docsDir, { recursive: true });
	writeFileSync(indexPath, `<!DOCTYPE html>
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
