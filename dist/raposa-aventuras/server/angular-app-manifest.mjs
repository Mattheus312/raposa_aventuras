
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
    'index.csr.html': {size: 124532, hash: '43e086aa7e70389b1051d5e254826fb004cded2e04cc0725f8aa41f0dc0364e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1136, hash: 'ea7b735078705390a0972060f89a9f407776387fc1f1611f58ede4417cd53c7f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'pub/index.html': {size: 126685, hash: '9948eae2ece44457dce173e87a93a0176aa9fee0d21793aece768816d9fe22c1', text: () => import('./assets-chunks/pub_index_html.mjs').then(m => m.default)},
    'etape/index.html': {size: 133672, hash: '5bfd19aab52ba96fc90f171e325b961900053508f46831931963c4bb433c35bc', text: () => import('./assets-chunks/etape_index_html.mjs').then(m => m.default)},
    'felicitation/index.html': {size: 126712, hash: '729cb1ba06320f9b3998b354afcfc7a856a3fdf4900fd482355878ab27c03c80', text: () => import('./assets-chunks/felicitation_index_html.mjs').then(m => m.default)},
    'index.html': {size: 128737, hash: 'c083c522574b33d32c6a0193de834bb44d265605147f6dff81d3844c4d93d437', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 131652, hash: '9ecb9c50c31c51714c256d2deb903e1d0e17f4296db6beaa9aa123190d8e1991', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-WIDBLK5O.css': {size: 694261, hash: 'VCgYaAKcuGY', text: () => import('./assets-chunks/styles-WIDBLK5O_css.mjs').then(m => m.default)}
  },
};
