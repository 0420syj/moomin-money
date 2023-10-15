if (!self.define) {
	let e,
		s = {};
	const n = (n, t) => (
		(n = new URL(n + '.js', t).href),
		s[n] ||
			new Promise(s => {
				if ('document' in self) {
					const e = document.createElement('script');
					(e.src = n), (e.onload = s), document.head.appendChild(e);
				} else (e = n), importScripts(n), s();
			}).then(() => {
				let e = s[n];
				if (!e)
					throw new Error(`Module ${n} didn’t register its module`);
				return e;
			})
	);
	self.define = (t, a) => {
		const i =
			e ||
			('document' in self ? document.currentScript.src : '') ||
			location.href;
		if (s[i]) return;
		let c = {};
		const o = e => n(e, i),
			r = { module: { uri: i }, exports: c, require: o };
		s[i] = Promise.all(t.map(e => r[e] || o(e))).then(e => (a(...e), c));
	};
}
define(['./workbox-7c2a5a06'], function (e) {
	'use strict';
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: '/_next/app-build-manifest.json',
					revision: '6ae8f2868c39a4e4b7b4f6061c31c7dc',
				},
				{
					url: '/_next/static/OX5YLz4zTGHzvFJHwwQJo/_buildManifest.js',
					revision: '9262961651e0d7fa108aef74f09893fc',
				},
				{
					url: '/_next/static/OX5YLz4zTGHzvFJHwwQJo/_ssgManifest.js',
					revision: 'b6652df95db52feb4daf4eca35380933',
				},
				{
					url: '/_next/static/chunks/2443530c-3007a2bf9be35772.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/433-a290a9d80e590966.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/488-9f4ebd4cc81a21ad.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/803-8f3e0752c92d6eb8.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/824-6c0af528ce149936.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/964-fcd79d983d23f8d3.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/app/layout-3b94a46b8503a549.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/app/moneybook/page-cfb3fd4a50c5bf78.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/app/page-8cf82e432476674f.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/framework-8883d1e9be70c3da.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/main-62ca2abddaf84ba0.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/main-app-b444be9f609b9b9e.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/pages/_app-b555d5e1eab47959.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/pages/_error-d79168f986538ac0.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
					revision: '837c0df77fd5009c9e46d446188ecfd0',
				},
				{
					url: '/_next/static/chunks/webpack-5c59e9b97fa11fba.js',
					revision: 'OX5YLz4zTGHzvFJHwwQJo',
				},
				{
					url: '/_next/static/css/94f38a65c7039f4e.css',
					revision: '94f38a65c7039f4e',
				},
				{
					url: '/icon-192x192.png',
					revision: '729492f86c9035747de8e3af393b6fe9',
				},
				{
					url: '/icon-256x256.png',
					revision: '41a37d976c770080736fca227557cba3',
				},
				{
					url: '/icon-384x384.png',
					revision: '6bfbae6c67a85b4243121b69f4fc0e7c',
				},
				{
					url: '/icon-512x512.png',
					revision: '9cec79b4733acbf657211190dd656b0e',
				},
				{
					url: '/manifest.json',
					revision: '5371f6b8d2cca5b733cd2f8311d6ace8',
				},
				{
					url: '/zelda_puzzle_solved.mp3',
					revision: 'ce7508074b84175466e2e0c431183309',
				},
			],
			{ ignoreURLParametersMatching: [] },
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: s,
							event: n,
							state: t,
						}) =>
							s && 'opaqueredirect' === s.type
								? new Response(s.body, {
										status: 200,
										statusText: 'OK',
										headers: s.headers,
								  })
								: s,
					},
				],
			}),
			'GET',
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 31536e3,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 604800,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 604800,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 64,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 64,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const s = e.pathname;
				return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 16,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 3600,
					}),
				],
			}),
			'GET',
		);
});
