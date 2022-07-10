import {ref} from 'vue'

export default function useLocalStorage(key: string, initialValue: any) {
  const state = ref(localStorage.getItem(key) || initialValue)
  const set = (value: any) => {
    localStorage.setItem(key, value)
    state.value = value
  }
  const remove = () => {
    localStorage.removeItem(key)
    state.value = initialValue
  }
  return [state, set, remove]
}