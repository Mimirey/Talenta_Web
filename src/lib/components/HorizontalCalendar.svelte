<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import dayjs from 'dayjs';
  import weekday from 'dayjs/plugin/weekday';
  import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
  import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

  dayjs.extend(weekday);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isSameOrBefore);

  export let initialDate: Date = new Date(); 
  const dispatch = createEventDispatcher();

  let current = dayjs(initialDate); 
  let startOfWeek = current.weekday(0); 
  let selected = current;

  function nextWeek() {
    startOfWeek = startOfWeek.add(1, 'week');
  }

  function prevWeek() {
    startOfWeek = startOfWeek.subtract(1, 'week');
  }

  function pilihTanggal(tanggal) {
    console.log('🖱️ Klik:', tanggal.format('YYYY-MM-DD'));
    selected = tanggal;
    dispatch('change', tanggal.toDate());
  }

  const hari = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
</script>

<div class="w-full max-w-md mx-auto space-y-3">
  <div class="flex justify-between items-center px-4">
    <button on:click={prevWeek} class="text-gray-600 hover:text-gray-800 text-xl">&larr;</button>
    <h2 class="text-sm font-semibold text-gray-700">{startOfWeek.format('MMMM YYYY')}</h2>
    <button on:click={nextWeek} class="text-gray-600 hover:text-gray-800 text-xl">&rarr;</button>
  </div>


  <div class="grid grid-cols-7 px-4 text-xs font-medium text-center text-gray-500">
    {#each hari as h}
      <div>{h}</div>
    {/each}
  </div>


  <div class="grid grid-cols-7 gap-1 px-4">
    {#each Array(7) as _, i}
      {@const tanggal = startOfWeek.clone().add(i, 'day')}
    <button
      class={`w-full h-10 flex items-center justify-center rounded-lg text-sm transition-all
          ${tanggal.isSame(selected, 'day') 
            ? 'text-white font-semibold'
            : 'bg-gray-100 hover:bg-green-100 text-gray-700'}`}
      style={tanggal.isSame(selected, 'day') ? 'background-color: #6e85e8;' : ''}
      on:click={() => pilihTanggal(tanggal)}>
      {tanggal.date()}
      </button>
    {/each}
  </div>
</div>