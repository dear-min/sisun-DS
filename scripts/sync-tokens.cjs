/**
 * Figma Tokens to CSS Variables Converter
 * Reads src/tokens/tokens.json and compiles into src/tokens/figma-generated.css
 */
const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(__dirname, '../src/tokens/tokens.json');
const outputPath = path.resolve(__dirname, '../src/tokens/figma-generated.css');

function flattenTokens(obj, prefix = '') {
  let cssLines = [];
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$')) continue; // Skip metadata keys like $schema

    const currentKey = prefix ? `${prefix}-${key}` : key;
    if (val && typeof val === 'object') {
      if ('$value' in val) {
        cssLines.push(`  --figma-${currentKey}: ${val.$value};`);
      } else {
        cssLines = cssLines.concat(flattenTokens(val, currentKey));
      }
    }
  }
  return cssLines;
}

try {
  const jsonContent = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  const lines = flattenTokens(jsonContent);

  const cssOutput = `/**
 * AUTO-GENERATED FROM tokens.json (Figma Variables)
 * DO NOT EDIT MANUALLY. Run 'npm run tokens:sync' to regenerate.
 */

:root {
${lines.join('\n')}
}
`;

  fs.writeFileSync(outputPath, cssOutput, 'utf8');
  console.log(`✅ Successfully synced ${lines.length} design tokens to ${outputPath}`);
} catch (error) {
  console.error('❌ Failed to sync tokens:', error);
  process.exit(1);
}
