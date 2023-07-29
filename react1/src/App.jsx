import {useState,useEffect} from 'react'
import "./App.css"
import Nav from './component/Nav.jsx'
import SignIn from './component/Sign-in';
import Cards from './pages/Cards';
import Content from "./pages/Content";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes,Route } from 'react-router-dom';
const App = () => {
  const [items,setItems]=useState([]);
  useEffect(()=>{
    fetchapi()
  },[])
  const fetchapi=async()=>{
    const api = await fetch(
      "https://api.spoonacular.com/recipes/findByIngredients"
    );
     const data=await api.json();
     setItems(data);
  }
  // const [count,setCount]=useState(0);
  // useEffect(() =>console.log("Min ga lr pr byr"),[count])
  return (
    <div className="overflow-hidden">
      {/* <Nav />
      <SignIn /> */}
      {/* <h2 className="">{count}</h2>
      <button onClick={()=>setCount(count+1)}>Click</button> */}
      {items.map((item) => {
        return (
          <div className="" key={item.id}>
            <h2 className="">{item.title}</h2>
          </div>
        );
      })}
    </div>
    // <Routes>
    //   <Route path='/' element={<Home/>}></Route>
    //  <Route path="/about" element={<About/>}></Route>
    //   <Route path="/content" element={<Content/>}></Route>
    // </Routes>
  );
}

export default App

