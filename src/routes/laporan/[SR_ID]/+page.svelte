<script>
  import ReportForm from '$lib/components/ReportForm.svelte';
  
  export let data;
  const laporan = data.detail;
</script>

<div class="flex flex-col min-h-screen">

<div class="bg-[#6e85e8] text-white px-2 py-6 flex items-center gap-2 shadow-md ">
  <a 
    href="/laporan/harian" 
    class="text-white text-2xl font-bold hover:text-gray-100 transition duration-200"
  >
    &larr;
  </a>
  <h1 class="text-lg font-semibold">Kembali ke Laporan Harian</h1>
</div>


<div class="flex-1 overflow-y-auto px-4 py-6">
{#if data.error}
  <p class="text-red-600">{data.error}</p>
{:else}
  <ReportForm laporan={laporan} activities={laporan.ACTIVITIES} /> />
{ /if }
</div>
</div>

