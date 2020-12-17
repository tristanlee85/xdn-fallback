import { Router } from '@xdn/core/router';

export default new Router()
  .match('/', ({ serveStatic }) => {
    serveStatic('./index.html');
  })

  // uncomment to get /__xdn__/cache-manifest.js to fail
  .fallback(({ appShell }) => {
    appShell('./index.html');
  });
