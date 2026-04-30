import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [sveltekit()],
		define: {
			'process.env.TURSO_DATABASE_URL': JSON.stringify(env.TURSO_DATABASE_URL),
			'process.env.TURSO_AUTH_TOKEN': JSON.stringify(env.TURSO_AUTH_TOKEN),
			'process.env.LOCAL_DATABASE_URL': JSON.stringify(env.LOCAL_DATABASE_URL)
		}
	};
});
