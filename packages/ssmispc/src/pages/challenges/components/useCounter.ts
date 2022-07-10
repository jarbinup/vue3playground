import { ref } from vue;

export default function useCounter(initialValue: number) {
  const state = ref(initialValue)
  const inctrement = () => {
    state.value++
  }
  const decrement = () => {
    state.value--
  }

  const reset = () => {
    state.value = initialValue
  }
  return [state, inctrement, decrement, reset]
}