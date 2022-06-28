import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            booklist: ["Muhib", "Jakir", "Shifa", "Tanvir"],
        };
    },
    mutations: {
        


    },
    actions: {

    },
});

//export { store };