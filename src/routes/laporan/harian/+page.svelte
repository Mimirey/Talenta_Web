<script>
	import HorizontalCalendar from '$lib/components/HorizontalCalendar.svelte';
	import {writable,derived} from 'svelte/store';
	import dayjs from 'dayjs';
	import { AlertCircle } from 'lucide-svelte';

	export let data;

	const selectedDate = writable(dayjs(data.selectedDate));

	const selectedDateStr= derived(selectedDate,(d)=> d.format('YYYY-MM-DD'))

	const reports = writable(data.reports);

	const filteredReports = derived(
 	[reports, selectedDateStr],
  	([$reports, $selectedDateStr]) =>
   		 $reports.filter(item =>
     	 dayjs(item.SR_DATE).format('YYYY-MM-DD') === $selectedDateStr
    ),
);

function onTanggalChange(e) {
    selectedDate.set(dayjs(e.detail));
  	}
</script>

<div class="bg-[#6e85e8] text-white px-6 py-6 flex items-center gap-2 shadow-md ">
  <h1 class="text-lg font-semibold">Daftar Laporan</h1>
</div>
{#if data.error}
	<p class="text-red-600">{data.error}</p>
{:else}
	
	
<div class="bg-white p-4 rounded-xl shadow-md space-y-4 mt-6">
  <HorizontalCalendar initialDate={data.selectedDate} on:change={onTanggalChange} />
</div>
{#if $filteredReports.length === 0}
	 <div class="flex flex-col h-[calc(70vh-64px)]">
  <div class="p-4 space-y-4 overflow-y-auto flex-1">
    <div class="flex items-center justify-center min-h-full">
      <div class="flex flex-col items-center justify-center text-gray-600 space-y-2">
        <AlertCircle class="w-10 h-10 text-red-500" />
        <span>Tidak ada laporan yang perlu ditunjukkan</span>
      </div>
    </div>
  </div>
</div>
{:else}
	<div class="flex items-center gap-4 w-[90%]  mx-auto p-4 rounded-[16px] bg-[#ffffff] shadow-[0_8px_24px_rgba(0,0,0,0.1)] mt-2.5">
		{#each $filteredReports as report}
			<div class="flex-shrink-0  bg-[#cad4fd] rounded-md flex items-center justify center p-3">
			<svg 
			xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6e85e8"
			class="w-[40px] h-[40px] ">
			<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
			</div>
			<a
			href={`/laporan/${report.SR_ID}`}
			>
			<p class="font-semibold">{report.SR_TITLE}</p>
			<p class="text-sm text-gray-600">{report.FORMATTED_DATE}</p>
			</a>
			{/each}
		</div>
	{/if}
{/if}