// export const SERVER_URL = 'http://localhost:5000'; // development purpose
export const SERVER_URL = 'https://njs-301x-a3-server.vercel.app';

export const ENDPOINTS = {
	login: '/auth/login?admin=true',
	logout: '/auth/logout',
	session: '/auth/session',
	getProducts: '/products/all',
	getOrders: '/admin/orders',
};
