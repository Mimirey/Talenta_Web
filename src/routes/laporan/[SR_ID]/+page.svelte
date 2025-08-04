<script>
  import ReportForm from '$lib/components/ReportForm.svelte';
  export let data;
</script>
<div class="bg-[#6e85e8] text-white px-2 py-6 flex items-center gap-2 shadow-md ">
  <a 
    href="/laporan/harian" 
    class="text-white text-2xl font-bold hover:text-gray-100 transition duration-200"
  >
    &larr;
  </a>
  <h1 class="text-lg font-semibold">Kembali ke Laporan Harian</h1>
</div>


{#if data.error}
  <p class="text-red-600">{data.error}</p>
{:else}
  <ReportForm laporan={data.detail} />
{/if}