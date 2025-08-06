import { error } from "@sveltejs/kit";

export async function load({ params, fetch, cookies }) {
	const token = cookies.get('token');
	const userCookie = cookies.get('user');

	if (!token || !userCookie) {
		throw error(401, 'Token atau user tidak ditemukan');
	}

	const user = JSON.parse(userCookie);
	const parentId = user.id;
	const srId = params.SR_ID;

	const res = await fetch(`http://31.97.49.167:8000/api/student-report?parentId=${parentId}`, {
		headers: {
			'Talentaku-token': token
		}
	});

	if (!res.ok) {
		const text = await res.text();
		console.error('Gagal fetch:', text);
		throw error(res.status, 'Gagal ambil data laporan');
	}

	const data = await res.json();
	const reports = data.PAYLOAD ?? [];


	const detail = reports.find(report => report.SR_ID == srId);

	if (!detail) {
		throw error(404, 'Laporan tidak ditemukan');
	}

	return { detail };
}