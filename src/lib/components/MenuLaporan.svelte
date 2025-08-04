<script>
	import { preventDefault } from 'svelte/legacy';
	import { goto } from '$app/navigation';
	let { head = '', link = '/' } = $props();

	function preventDefaultHandler(fn) {
		return (event) => {
			event.preventDefault();
			fn.call(this, [event]);
		};
	}
</script>

<div class="flex items-center gap-4 w-[90%] max-w-[640px] mx-auto p-4 rounded-[16px] bg-[#d5ddff] shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)]">
  
	<div class="flex-shrink-0  bg-[#cad4fd] rounded-md flex items-center justify center p-3">
	<svg 
	xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6e85e8"
	class="w-[40px] h-[40px] ">
	<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
	</div>

  <div class="flex flex-col items-start text-left">
    <h2 class="text-[1.2rem] text-black font-bold leading-tight">Laporan {head}</h2>
    <a
      href={link}
      on:click={preventDefaultHandler(() => goto(link))}
      class="text-[#6e85e8]  text-[0.95rem] mt-1 transition-colors duration-300 hover:text-[#003e1f] hover:font-bold"
    >
      Klik disini untuk akses Laporan {head}
    </a>
  </div>
</div>