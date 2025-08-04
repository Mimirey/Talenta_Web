export async function load({ cookies, fetch }) {
  try {
    const token = cookies.get('token');

    // Ambil pengumuman
    // const res = await fetch(import.meta.env.VITE_API_SERVER_URL + '/announcement', {
    //   headers: {
    //     'Talentaku-token': token
    //   }
    // });

    // const data = await res.json();
    // const announcements = data.status === 'SUCCESS' ? data.data : [];

    // Ambil user
    const resUsers = await fetch('http://31.97.49.167:8000/api/users', {
      headers: {
        'Talentaku-token': token
      }
    });

    const userJson = await resUsers.json();
    const user = userJson.PAYLOAD ?? null;

    return {
      // announcements,
      user
    };
  } catch (error) {
    console.error('Error saat fetch API:', error);
    return {
      // announcements: [],
      user: null,
      error: 'Gagal mengambil data'
    };
  }
}
