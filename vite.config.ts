import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/fcc-fedl-p3-drum-machine/',
	plugins: [react()],
});
