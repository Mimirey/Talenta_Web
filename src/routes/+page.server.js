import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, fetch, url }) => {
	const token = cookies.get('token');

	if (!token) {
		if (url.pathname !== '/login') {
			throw redirect(302, '/login');
		} 
		return { user: null };
	} else {
     throw redirect(302,'/dashboard');
  }

	const res = await fetch(import.meta.env.VITE_API_SERVER_URL + '/users', {
		headers: { Authorization: `Bearer ${token}` }
	});

	if (res.ok) {
		const user = await res.json();
		return { user };
	}

	cookies.delete('token');
	throw redirect(302, '/login');
};