export const reducer=(state,action)=>{
 switch(action.type){
    case("increase"):
    return {...state,count:state.count+action.payload};
    case("decrease"):
    if(state.count>0){
        return { ...state, count: state.count - action.payload };
    }else{
        return state;
    }
    default:return state;
 }
}