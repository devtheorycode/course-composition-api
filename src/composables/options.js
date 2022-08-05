import { ref } from 'vue'

const showSecondsInDurations = ref(false)

export function useOptions() {
  return {
    showSecondsInDurations
  }
}