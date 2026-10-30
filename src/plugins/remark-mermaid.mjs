import { renderMermaidSVG } from 'beautiful-mermaid';

// Renders ```mermaid blocks to inline SVG at build time, so visitors get no
// diagram JavaScript. Colors are CSS variables, so the theme toggle just works.
// The SVG defines its own --bg/--fg/--line/--accent/--muted, so map them only to
// site variables with different names (--line: var(--line) would be a cycle).
const options = {
  bg: 'var(--paper)',
  fg: 'var(--ink)',
  line: 'var(--ink-dim)',
  accent: 'var(--color-accent)',
  muted: 'var(--ink-dim)',
  border: 'var(--color-border)',
  font: 'Inter Tight',
  transparent: true,
};

function walk(node, visit) {
  node.children?.forEach((child, i) => {
    visit(child, i, node);
    walk(child, visit);
  });
}

export default function remarkMermaid() {
  return (tree) => {
    walk(tree, (node, index, parent) => {
      if (node.type !== 'code' || node.lang !== 'mermaid') return;
      // The page already loads the font; drop the renderer's Google Fonts @import.
      const svg = renderMermaidSVG(node.value, options).replace(/@import url\([^)]*\);/g, '');
      parent.children[index] = { type: 'html', value: `<figure class="mermaid">${svg}</figure>` };
    });
  };
}
