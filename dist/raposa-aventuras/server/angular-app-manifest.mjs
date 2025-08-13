
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
    'index.csr.html': {size: 124532, hash: 'c38f5965fa0d1bec5a81859f82529c4ab3d2899500d5d12bc258814674f58338', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1136, hash: '599ca6d8ed7aa3fe86847ca839a49caabe7d40dcf7ffcad050dc08dcb7793017', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 128855, hash: '48b2bf30c0f95a77559b3cd85635b3ea08ea0f6ac0892dddd180b4f540c652d1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pub/index.html': {size: 126685, hash: '7342627b6bbe808eed87daade06d66723d5552da00e6194367cf1a34f43ce9e2', text: () => import('./assets-chunks/pub_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 131652, hash: 'e450b6aafbb9050bd34b5cd2251237842000634e5894338ede424e0601d34f7d', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'felicitation/index.html': {size: 126712, hash: 'f6081630ad62eea7ff3e7b37999127cd453b78af081d27d851fb6045bf0fccc3', text: () => import('./assets-chunks/felicitation_index_html.mjs').then(m => m.default)},
    'etape/index.html': {size: 133672, hash: 'ecb5b3efd7b8b190b23ab0a56882b4eaf5f6b9555390dd4c4bcecad8db8e90a4', text: () => import('./assets-chunks/etape_index_html.mjs').then(m => m.default)},
    'styles-WIDBLK5O.css': {size: 694261, hash: 'VCgYaAKcuGY', text: () => import('./assets-chunks/styles-WIDBLK5O_css.mjs').then(m => m.default)}
  },
};
