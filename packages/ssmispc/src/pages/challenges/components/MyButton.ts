import { h, defineComponent } from 'vue';

export default defineComponent({
  name: 'MyButton',
  emits: ['customClick'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, {emit, slots}) {
    const children  = slots.default?.()[0].children;
    return { 
      children,
      emit,
    }
  },
  render({children, emit, disabled}) {
    return h('button', {
      disabled,
      onClick: () => emit('customClick'),
    }, children)
  }
})
