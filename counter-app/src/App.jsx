import React from 'react'
import One from './component/One'
import Three from './component/Three';
import Two from './component/Two'
import Four from "./component/Four"

const App = () => {
  return (
    <div className=" flex justify-center align-middle ">
      <div className=" block mt-[30%]">
        <One />
        <div className="mt-3 flex justify-around">
          <Two />
          <Three />
        </div>
        <Four/>
      </div>
    </div>
  );
}

export default App
