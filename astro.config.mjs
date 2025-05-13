import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	prefetch: {
		prefetchAll: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
