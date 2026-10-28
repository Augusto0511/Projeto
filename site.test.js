const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const htmlPath = path.join(__dirname, '..', 'public', 'index.html');

test('o arquivo principal do site existe', () => {
  assert.equal(fs.existsSync(htmlPath), true, 'Crie o arquivo public/index.html');
});

test('o HTML contém doctype, título e conteúdo principal', () => {
  const html = fs.readFileSync(htmlPath, 'utf8');
  assert.match(html, /<!doctype html>/i, 'O documento deve declarar HTML5');
  assert.match(html, /<title>[^<]+<\/title>/i, 'O documento deve ter um título');
  assert.match(html, /<main\b/i, 'O documento deve ter uma região main');
});
