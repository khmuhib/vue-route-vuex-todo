import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
export const book = createStore({
    state() {
        return {
            count: 60,
            booklist: ["Book 01", "Book 02", "Book 03", "Book 04"],
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },

        ADD_BOOK(state, data) {
            state.booklist.push(data)
        },

        REMOVE_BOOK(state, data) {
            console.log(data)
            state.booklist.splice(data, 1)
        }


    },
    actions: {
        increment({ commit }) {
            commit("increment");
        },
        addBook({ commit }, data) {
            commit("ADD_BOOK", data)

        },

        removeBook({ commit }, data) {
            commit("REMOVE_BOOK", data)
        }
    },
});

// export { store };