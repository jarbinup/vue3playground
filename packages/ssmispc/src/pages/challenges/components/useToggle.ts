import { ref } from 'vue'

export default function useToggle(initialValue: boolean) {
  const state = ref(initialValue)
  const toggle = () => {
    state.value = !state.value
  }

  return [state, toggle]
}