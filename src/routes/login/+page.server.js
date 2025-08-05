export const actions = {
	default: async (event) => {
		const { request, cookies, fetch } = event;

		try {
			const formData = await request.formData();
			const username = formData.get('username');
			const password = formData.get('password');


			const form = new FormData();
			form.append('U_NAME', username);
			form.append('U_PASSWORD', password);

			const res = await fetch('http://31.97.49.167:8000/api/auth/login', {
  			method: 'POST',
  			headers: {
   			 'parent': 'true' 
  			},
 			 body: form
			});

			if (!res.ok) {
				const errorText = await res.text();
				console.error('API Error:', errorText);
				return { error: 'Terjadi kesalahan saat login. Silakan coba lagi.' };
			}

			const data = await res.json();

			if (data.STATUS === 'SUCCESS') {
				const user = data.PAYLOAD.USER;

				cookies.set('token', user.U_LOGIN_TOKEN, {
					path: '/',
					httpOnly: true,
					sameSite: 'lax',
					secure: false,
					maxAge: 60 * 60 * 24
				});

				cookies.set(
					'user',
					JSON.stringify({
						id: user.U_ID,
						name: user.NAME,
						role: user.ROLE
					}),
					{
						path: '/',
						httpOnly: false,
						secure: false

					}
				);

				return {
					success: true,
					redirect: '/dashboard'
				};
			} else {
				return {
					error: data.MESSAGE ?? 'Login Gagal'
				};
			}
		} catch (error) {
			console.error('Fetch error:', error);
			return {
				error: 'Gagal terhubung ke server. Coba lagi nanti ya.'
			};
		}
	}
};