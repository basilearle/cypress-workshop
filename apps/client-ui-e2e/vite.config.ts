/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { resolve } from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/client-ui-e2e',

  plugins: [nxViteTsPaths()],

  // NOTE: this shouldn't be necessary, but others seem to need this too:
  // https://github.com/nrwl/nx/issues/27648
  resolve: {
    alias: {
      '~/data-fixtures': resolve(__dirname, '../../libs/data-fixtures/src/index.ts')
    }
  },

  build: {
    outDir: '../../dist/apps/client-ui-e2e',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
