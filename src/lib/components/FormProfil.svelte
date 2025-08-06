<script>
	import { goto } from '$app/navigation';

	let { head, info } = $props();
</script>

<div class="w-full border border-gray-300 rounded-lg px-4 py-2">
  <p class="text-sm text-gray-500">{head}</p>
  <p class="text-base text-gray-800 font-medium truncate">{info}</p>
</div>
