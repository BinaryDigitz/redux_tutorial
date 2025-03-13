

function createStore(reducers){
    let state;

    function getState(){
        return state
    }
 

    return {
        getState,
       
    }
}
createStore()