import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from './features/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch=useDispatch()
  return (
    <div>
      <h2 className="">{count}</h2>
      <button onClick={()=>dispatch(increase())}>Increase</button>
    </div>
  )
}

export default App
