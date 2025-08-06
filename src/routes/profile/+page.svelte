<script>
    import FormProfil from "$lib/components/FormProfil.svelte";
    import LogoutButton from "$lib/components/LogoutButton.svelte";

    export let data;
    const user= data.user;
</script>

<div class="bg-[#6e85e8] text-white px-6 py-6 flex items-center gap-2 shadow-md ">
  <h1 class="text-lg font-semibold">Profil</h1>
</div>

<div class="flex-1 overflow-y-auto px-4 pt-6 pb-28">
<div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md text-center space-y-4">
  <img
    src={user.U_IMAGE_PROFILE}
    alt="profile"
    class="w-24 h-24 mx-auto rounded-full object-cover border border-gray-300"
    on:error={() => user.U_IMAGE_PROFILE = '/images/default-profile.jpeg'}
  />

  <h2 class="text-xl font-semibold text-gray-800">{user.U_NAME}</h2>

  <div class="space-y-4 w-full text-left">
  <FormProfil head="Email" info={user.U_EMAIL} />
  <FormProfil head="Alamat" info={user.U_ADDRESS} />
  <FormProfil head="Nomor Telepon" info={user.U_PHONE} />
  </div>

  <div class="pt-4">
    <LogoutButton />
  </div>
</div>
</div>