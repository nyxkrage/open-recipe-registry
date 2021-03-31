import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import alias from "@rollup/plugin-alias";
import copy from "rollup-plugin-copy";
const { readdirSync } = require('fs')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name.replace(__dirname, ""))

const pages = getDirectories(__dirname + "/src/pages").concat([""]);
const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

const common = function (dir, page) {
	let isRoot = page === "";
	return {
		input: `src${isRoot ? "" : "/pages/"}${page}/main.ts`,
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: dir + page + "/bundle.js"
		},
		plugins: [
			copy({
				targets: [
				  { src: "src/index.html", dest: dir + page },
				  { src: "src/global.css", dest: dir + page },
				],
			}),
			svelte({
				preprocess: sveltePreprocess({ sourceMap: !production }),
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production
				}
			}),
			alias({
				entries: [
					// If you add a new top-level-folder besides src which you want to use, add it here
					{ find: /^src(\/|$)/, replacement: `${__dirname}/src/` },
				],
			}),
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css({ output: 'bundle.css' }),
			
			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			typescript({
				sourceMap: !production,
				inlineSources: !production
			}),
			
			// In dev mode, call `npm run start` once
			// the bundle has been generated
			//!production && serve(),
			
			// Watch the `public` directory and refresh the
			// browser on changes when not in production
			!production && livereload('public'),
			
			// If we're building for production (npm run build
			// instead of npm run dev), minify
			production && terser()
		],
		watch: {
			clearScreen: false
		}
	}
};

const exp = (function () {
	var ret = [];
	pages.forEach((folder) => ret.push(common("public/", folder)));
	return ret;
})();

export default exp;