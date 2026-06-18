const fs = require('fs');
const html = fs.readFileSync('gmaps_raw_en.html', 'utf8');

// Relaxed regex of tokens
const tokens = html.split(/[\\"]+/);

console.log('Total tokens:', tokens.length);

const found = [];
const seen = new Set();
for (let tok of tokens) {
  tok = tok.trim();
  if (tok.length > 30 && tok.length < 350) {
    const lower = tok.toLowerCase();
    if (lower.includes('surf') || lower.includes('weligama') || lower.includes('driver') || lower.includes('guide') || lower.includes('lanka') || lower.includes('experience') || lower.includes('amazing') || lower.includes('awesome') || lower.includes('helpful') || lower.includes('recommend')) {
      if (!seen.has(tok) && !tok.includes('<') && !tok.includes('>') && !tok.includes('{') && !tok.includes('}')) {
        seen.add(tok);
        found.push(tok);
      }
    }
  }
}

console.log('Relaxed Candidates count:', found.length);
found.forEach((r, i) => {
  console.log(`${i+1}: ${r}`);
});
