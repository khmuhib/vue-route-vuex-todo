import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            booklist: ["Book 01", "Book 02", "Book 03", "Book 04"],
        };
    },
    mutations: {



    },
    actions: {

    },
});
