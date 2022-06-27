export default function movies (state=[],action){
    if(action.type==='ADD MOVIES'){
        return action.movies;
    }
    else{
        return state;
    }
}