<script>
  import FormTagihan from "$lib/components/FormTagihan.svelte";
  import FormTotal from "$lib/components/FormTotal.svelte";
  import { AlertCircle } from "lucide-svelte";

  export let data;
  const detail = data.detail ?? {};
  const s_id = data.s_id;
</script>

<div class="bg-[#3CB371] text-white px-6 py-6 flex items-center gap-2 shadow-md ">
  <h1 class="text-lg font-semibold">Tagihan</h1>
</div>



<div class="flex flex-col h-[calc(100vh-64px)]">

  
  <div class="p-4 space-y-4 overflow-y-auto flex-1 pb-[160px]">
    {#if (!detail.invoice_data || detail.invoice_data.length === 0) && detail.ispublished === false}
      <div class="flex items-center justify-center h-full">
        <div class="flex flex-col items-center justify-center text-gray-600 space-y-2">
          <AlertCircle class="w-10 h-10 text-yellow-500" />
          <span>Tidak ada tagihan yang perlu ditunjukkan</span>
        </div>
      </div>
    {:else}
      {#each detail.invoice_data as item}
        <FormTagihan 
          title={item.category.name}
          info={item.formatted_amount} />
      {/each}
    {/if}

    
    <div class="h-[80px]"></div>
  </div>

  <div class="border-t  bg-white  fixed bottom-[70px] w-full z-30">
    <FormTotal 
      total={detail.formatted_total_amount}
      keterangan={detail.ispublished ? "Sudah lunas" : "Belum lunas"} />
  </div>
</div>