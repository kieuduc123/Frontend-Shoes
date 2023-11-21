// import Action from "./Action";
// import React from 'react';

const updateLocalStorage = (state)=>{
    localStorage.setItem("state",JSON.stringify(state));
    return state;
}

const Reducer = (state,Action) => { // gỉa định rằng trong action sẽ có 2 thuộc tính: type, payload
    switch(Action.type){
        case Action.UPDATE_CART: return updateLocalStorage({...state,cart:Action.payload,loading:true});
        case Action.SHOW_LOADING: return updateLocalStorage({...state,loading: true});
        case Action.HIDE_LOADING: return updateLocalStorage({...state,loading: false});
    }
}

export default Reducer;