import { defineComponent } from 'vue'
export interface PropsObj {
  name: number
}
export default defineComponent({
  props: {
    name: {
      type: Number,
      default: ''
    }
  },
  setup: (props: PropsObj, context) => {
    return () => (
      <div>
        {props.name}
        <button onClick={()=> context.emit('ChangeName', 4)}>修改</button>
      </div>
    )
  },
})
