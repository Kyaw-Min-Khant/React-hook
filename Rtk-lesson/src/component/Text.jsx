import React, { Component } from 'react'

 class Text extends Component {
   constructor(props) {
     super(props);

     this.state = {
       name: "Susan",
       count: 0,
     };
   }
   changeName = () => {
     this.setState((prev) => {
       return {
         name: prev.name + (Math.floor(Math.random() * 10) + 1),
       };
     });
   };
 changeCount =()=>{
  this.setState((prev)=>{
    return{
      count:prev.count+1
    }
  })
 }
 componentDidMount(){
  console.log("componentDidMount");
 }
 componentWillUnmount(){
  console.log("componentWillUnmount");
 }
 componentDidUpdate(prevProps,prevState){
  if(prevState.count !== this.state.count){
    console.log("componentDidUpdate")
  }
 }
   render() {
     return (
       <div>
         <h2 className="">{this.state.name}</h2>
         <button onClick={this.changeName}>Change Name</button>
         <h2 className="">{this.state.count}</h2>
         <button onClick={this.changeCount}>Change Count</button>
       </div>
     );
   }
 }
export default Text