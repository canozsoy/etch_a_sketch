const state = {
    color: null,
    thickness: null,
    drawMode: true,
    eraseMode: false
}

const getters = {
    getColor: state => state.color,
    getThickness: state => state.thickness,
    getDrawMode: state => state.drawMode,
    getEraseMode: state => state.eraseMode
}

const actions = {
    changeColor({ commit }, color) {
        commit("setColor", color);
    },
    changeThickness({ commit }, thickness) {
        commit("setThickness", thickness);
    },
    changeDrawMode({ commit }, drawMode) {
        commit("setDrawMode", drawMode);
    },
    changeEraseMode({commit}, eraseMode) {
        commit("setEraseMode", eraseMode);
    }
}

const mutations = {
    setColor(state, payload) {
        state.color = payload;
    },
    setThickness(state, payload) {
        state.thickness = payload;
    },
    setDrawMode(state, payload) {
        state.drawMode = payload;
    },
    setEraseMode(state, payload) {
        state.eraseMode = payload;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}