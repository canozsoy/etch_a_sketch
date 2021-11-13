const state = {
    color: null,
    thickness: null,
    drawMode: true
}

const getters = {
    getColor: state => state.color,
    getThickness: state => state.thickness,
    getDrawMode: state => state.drawMode
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}