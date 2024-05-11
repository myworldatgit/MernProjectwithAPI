export const initialstate=null; //can give null or zero
export const reducer=(state,action)=>{

    if(action.type==='USER'){
        return action.payload;
    }
    return state;
}