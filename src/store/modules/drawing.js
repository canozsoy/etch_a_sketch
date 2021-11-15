const state = {
    color: null,
    thickness: null
}

const getters = {
    getColor: state => state.color,
    getThickness: state => state.thickness,
}

const actions = {
    changeColor({ commit }, color) {
        commit("setColor", color);
    },
    changeThickness({ commit }, thickness) {
        commit("setThickness", thickness);
    },
}

const mutations = {
    setColor(state, payload) {
        state.color = payload;
    },
    setThickness(state, payload) {
        state.thickness = payload;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}