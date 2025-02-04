export function Header() {
  return (`<header class="header"><div class="container header-inner">
      <div class="header-brand">Berkay Çubuk</div>
      <nav class="header-nav">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about.html">About</a>
      </nav>
    </div></header>`);
}

export function Date(date) {
  return (`<div class="content-date">${date}</div>`);
}