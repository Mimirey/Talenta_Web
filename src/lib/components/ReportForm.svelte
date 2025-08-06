<script>
  export let laporan;
  export let activities = [];
  let expandedStates = {};

  function toggle(name) {
    expandedStates = {
      ...expandedStates,
      [name]: !expandedStates[name]
    };
  }

  function formatNote(note) {
    if (!note) return '';
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return note.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
  }
  console.log('Laporan diterima:', laporan);
</script>

  <!-- Link Dokumentasi -->
  <div class="space-y-2 p-4 rounded-lg border shadow bg-white mt-10">
    <h2 class="text-xl font-semibold">Link Dokumentasi</h2>
    <p class="text-gray-600 break-words whitespace-pre-wrap">
      {@html formatNote(laporan?.SR_CONTENT)}
    </p>
  </div>

  <div class="px-4 space-y-6">
 {#each activities as activity (activity.ACTIVITY_NAME)}
    <div class="mb-10">
      <div 
        class="p-4 rounded-lg border shadow bg-white mt-10 cursor-pointer flex items-center justify-between"
        on:click={() => toggle(activity.ACTIVITY_NAME)}
      >
      <div class="bg-blue-200 rounded-full w-15 h-15 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#6e85e8">
          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm80 240v-80h400v80H280Zm0 160v-80h280v80H280Z"/></svg>
      </div>

        <h3 class="text-lg font-semibold">{activity.ACTIVITY_NAME}</h3>
        <span class="text-2xl">
          {expandedStates[activity.ACTIVITY_NAME] ? '▲' : '▼'}
        </span>
      </div>

      {#if expandedStates[activity.ACTIVITY_NAME]}
        <div class="p-4 bg-white space-y-3 border-l-4 border-blue-300 ml-4 mt-2 mb-10 rounded-md">
          {#each activity.REF_ACTIVITIES as ref}
            <div class="bg-blue-200 px-4 py-2 rounded-lg text-sm font-medium shadow flex justify-between items-center">
              <span>{ref.ACTIVITY_NAME}</span>
              <span class="ml-4 text-black-700">{ref.STATUS}</span>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
  </div>

 
