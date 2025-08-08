import { redirect } from '@sveltejs/kit';

export async function load({ cookies, fetch }) {
	const token = cookies.get('token');

	if (!token) {
		throw redirect(302, '/login');
	}

	const res = await fetch('http://31.97.49.167:8000/api/users', {
		headers: {
			'Talentaku-token': token
		}
	});

	const data = await res.json();

	if (data.STATUS !== 'SUCCESS') {
		throw redirect(302, '/login');
	}

	cookies.set('U_ID', data.PAYLOAD.U_ID.toString(), {
		path: '/',
		secure: (import.meta.env.VITE_WEB_PROTOCOL ?? 'http') === 'https'
	});

	return {
		user: data.PAYLOAD
	};
}
