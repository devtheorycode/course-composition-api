<script setup>
  import { useOptions } from '../composables/options.js';

  const { showSecondsInDurations } = useOptions()

  defineProps({
    readonly: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Object,
      default: {
        hours: null,
        minutes: null,
        seconds: null,
      }
    }
  })
</script>

<template>
  <div>
    <div class="inline-flex items-center pr-2 bg-gray-100 border border-gray-100 rounded-md text-lg text-right focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none focus-within:ring-opacity-50">
      <input ref="hours" type="number" v-model="duration.hours" @keypress.enter="$refs.minutes.focus()" :readonly="readonly" min="0" placeholder="0" class="timeInput">
      <span class="timeLabel">h </span>
      <input ref="minutes" type="number" v-model="duration.minutes" @keypress.enter="$refs.seconds.focus()" :readonly="readonly" min="0" max="59" placeholder="0" class="timeInput">
      <span class="timeLabel">m </span>
      <input v-show="showSecondsInDurations" ref="seconds" type="number" v-model="duration.seconds" :readonly="readonly" min="0" max="59" placeholder="0" class="timeInput">
      <span v-show="showSecondsInDurations" class="timeLabel">s </span>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.timeInput {
  @apply w-12 h-10 bg-transparent m-0 p-0 transition duration-100 ease-in-out border border-transparent text-center focus:border-none focus:ring-0 focus:outline-none rounded
}

.timeLabel {
  @apply text-gray-400
}

/* Hide Arrows From Input Number */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>