export const initialState = {
    val:false,
    id:""
};

export const reducer = (state,action) =>{
    if(action.type === "USER"){
        return {val:action.payload.val, id:action.payload.id}
    }
    return state;
}