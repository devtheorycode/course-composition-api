import { ref, reactive, watch } from 'vue'
import dayjs from '../utils/dayjs'

export function useDurationSum(allDurations) {

  const exactDurationSum = ref()
  const rawDurationSum = reactive({})

  watch(allDurations.map(duration => duration.exact), () => {
    exactDurationSum.value = allDurations.reduce((acc, duration) => acc.add(duration.exact.value), dayjs.duration(0))
    rawDurationSum.hours = Math.floor(exactDurationSum.value.asHours())
    rawDurationSum.minutes = exactDurationSum.value.minutes()
    rawDurationSum.seconds = exactDurationSum.value.seconds()
  }, { immediate: true })

  return {
    raw: rawDurationSum,
    exact: exactDurationSum
  }
}