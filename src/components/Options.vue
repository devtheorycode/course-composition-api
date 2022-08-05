<script setup>
  import { useOptions } from '../composables/options.js';

  const { showSecondsInDurations } = useOptions()

  function update(event) {
    showSecondsInDurations.value = event.target.checked
  }
</script>

<template>
  <div class="block">
    <input @change="update($event)" :checked="showSecondsInDurations" id="show-seconds" type="checkbox" class="inline-block align-middle h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
    <label for="show-seconds" class="inline-block ml-2 text-sm text-gray-900 cursor-pointer">Show seconds</label>
  </div>
</template>  