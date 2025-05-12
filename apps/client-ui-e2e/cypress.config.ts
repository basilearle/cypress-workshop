import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run client-ui:serve',
        production: 'nx run client-ui:preview',
      },
      ciWebServerCommand: 'nx run client-ui:serve-static',
    }),
    experimentalWebKitSupport: true,
    baseUrl: 'http://localhost:4200',
  },
});
