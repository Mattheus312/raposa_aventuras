
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Mattheus312.github.io/raposa_aventuras/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/raposa_aventuras"
  },
  {
    "renderMode": 2,
    "route": "/raposa_aventuras/menu"
  },
  {
    "renderMode": 2,
    "route": "/raposa_aventuras/etape"
  },
  {
    "renderMode": 2,
    "route": "/raposa_aventuras/pub"
  },
  {
    "renderMode": 2,
    "route": "/raposa_aventuras/felicitation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/raposa_aventuras",
    "route": "/raposa_aventuras/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 124532, hash: 'a4a6d0159c0d762d00e5d5e26457918152c70e32dc587de12c623e7bde0db10d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1136, hash: '02ed8c906dd09e50ed1c8f9d098e5be2058207f5d31ababbd903e4d0eb900814', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'pub/index.html': {size: 126685, hash: '22cbe74f647c1889921606a462ac9f933151146b68f97a9225fd30696f570bbb', text: () => import('./assets-chunks/pub_index_html.mjs').then(m => m.default)},
    'index.html': {size: 128855, hash: '3a1f8ac14e671d96e67fec21b7c0b3df6b60a422eef5ef5cc5f84d64d06abb45', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'felicitation/index.html': {size: 126712, hash: 'ef755cffedb665a6e8442621b489b596d5778cbb58570abf0ac2373f075046b5', text: () => import('./assets-chunks/felicitation_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 131652, hash: 'bc8f2b2d16788a96e1371aea5f1c0409825b24571dfa2e9c5319195dbcc40c9f', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'etape/index.html': {size: 133672, hash: '685c686a5e60fafd6dc978fc52a62567760b1839ca74c2916a3c926080fb1c32', text: () => import('./assets-chunks/etape_index_html.mjs').then(m => m.default)},
    'styles-WIDBLK5O.css': {size: 694261, hash: 'VCgYaAKcuGY', text: () => import('./assets-chunks/styles-WIDBLK5O_css.mjs').then(m => m.default)}
  },
};
