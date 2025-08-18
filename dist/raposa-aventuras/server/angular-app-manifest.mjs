
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
    'index.csr.html': {size: 124532, hash: 'dbe450782b091b5a0b5154a0ebc7f65fc6896933064a27e2080f6ced88e9fcd3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1136, hash: '9b51fde50e9ff79019534b8e2f4349d34ec707d8db3ee5b3c3e324b4623ad690', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'etape/index.html': {size: 133722, hash: 'a5c263984cc1a897d8af90911d61fb0588bf648f25398b008f11970a3ece0693', text: () => import('./assets-chunks/etape_index_html.mjs').then(m => m.default)},
    'index.html': {size: 128737, hash: '5178e2b53e518388a2a2878a63e749268309fcd099a38351a49f20d7925d1a51', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'felicitation/index.html': {size: 126712, hash: '70eb2d5e38a16ab56cbd4d282ee45453b8ed5f6406db4bf3a3521251027ff505', text: () => import('./assets-chunks/felicitation_index_html.mjs').then(m => m.default)},
    'pub/index.html': {size: 130245, hash: 'ec1e74496b14723ec774e9d2145a06c5c2a269317cf82310b6f5ac0016dc1792', text: () => import('./assets-chunks/pub_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 131652, hash: '56ae893f2ae5930bda3cbf3bd46141655dae5c7064698156fe11edbcf4549fe7', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-WIDBLK5O.css': {size: 694261, hash: 'VCgYaAKcuGY', text: () => import('./assets-chunks/styles-WIDBLK5O_css.mjs').then(m => m.default)}
  },
};
