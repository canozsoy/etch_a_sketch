import Vuex from "vuex";
import Vue from "vue";
import drawing from "@/store/modules/drawing";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        drawing
    }
})