import { reactive, computed } from 'vue'
import dayjs from '../utils/dayjs'

export function useDuration(rawDurationConfig) {

  const rawDuration = reactive({
    hours: rawDurationConfig?.hours ?? null,
    minutes: rawDurationConfig?.minutes ?? null,
    seconds: rawDurationConfig?.seconds ?? null,
  })

  const exactDuration = computed(() => {
    return dayjs.duration(0)
      .add(rawDuration.hours, 'hours')
      .add(rawDuration.minutes, 'minutes')
      .add(rawDuration.seconds, 'seconds')
  })

  return {
    raw: rawDuration,
    exact: exactDuration
  }
}