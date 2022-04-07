import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/jsnes.js',
		format: 'esm'
	},
	plugins: [
		resolve({
			// browser: true,
			extensions: ['.mjs', '.js', '.json', '.node', '.jsx']
		}),
		commonjs({ include: 'node_modules/**', sourceMap: true }),
	]
}