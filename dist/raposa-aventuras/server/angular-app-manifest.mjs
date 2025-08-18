
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
    'index.csr.html': {size: 124532, hash: 'f8d1aafc9b86e61f0805006a924c514358b281e8adea26fb8161b7b1066379ce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1136, hash: '832a903b7bdd41502581ead6ef21976ba405a508b4c8f17ef0d65c1dbf1f7482', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'pub/index.html': {size: 130245, hash: '9b35904f72145dad1cfdc120607e7826017a1e76a9b27a3e4560986657e77df3', text: () => import('./assets-chunks/pub_index_html.mjs').then(m => m.default)},
    'etape/index.html': {size: 134967, hash: '10f18d1433682af2a516b203d3c1dfa9fc6a15c6a20a241179f58863754f97fb', text: () => import('./assets-chunks/etape_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 131652, hash: '0f3a69f7bfe1ec866ae8a8282ed3e8f4bf0fc256cee806a0e2b9056576cfd134', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'felicitation/index.html': {size: 128466, hash: 'cdc3c4d4f8ac50afaec039661ae1e3c043807effa955cf1ed8cdc928b5b206c9', text: () => import('./assets-chunks/felicitation_index_html.mjs').then(m => m.default)},
    'index.html': {size: 128854, hash: '67409c329964ef0b7e8b6e0d68fcaa17046bc0dbe05d269ad36c92196d7eb692', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WIDBLK5O.css': {size: 694261, hash: 'VCgYaAKcuGY', text: () => import('./assets-chunks/styles-WIDBLK5O_css.mjs').then(m => m.default)}
  },
};
