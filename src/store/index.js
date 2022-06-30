import { createStore } from "vuex"; 
import { book } from "./book";  
import { person } from "./person";  
const store = createStore({    
    modules: {    
        book, 
        person, 
    },   
});   
export default store;
