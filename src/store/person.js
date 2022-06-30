import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
export const person = createStore({
    state() {
        return {
            count: 500,
        };
    },
});

//export { store };