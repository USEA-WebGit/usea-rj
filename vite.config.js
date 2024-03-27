import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { networkInterfaces } from 'os';

function getIPAddress() {
  const interfaces = networkInterfaces();
  for (const interfaceName in interfaces) {
    const iface = interfaces[interfaceName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost'; // Default to localhost if no IPv4 address found
}

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  plugins: [vue()],
  server: {
    host: getIPAddress()
  }
});