<template>
    <div id="slider">
        <input
            type="range"
            :step="rangeInput.step"
            :min="rangeInput.min"
            :max="rangeInput.max"
            v-model="rangeInput.value"
            @change="thicknessChange"
        />
        <p>{{rangeInput.value}} px</p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "CustomRangeInput",
    data: function () {
        return {
            rangeInput: {
                step: "1",
                min: "1",
                max: "5",
                value: "3"
            }
        }
    },
    created: function() {
        this.changeThickness(this.rangeInput.value);
    },
    computed: {
        ...mapGetters(["getThickness"]),
    },
    methods: {
        ...mapActions(["changeThickness"]),
        thicknessChange() {
            this.changeThickness(this.rangeInput.value);
        }
    }
}
</script>

<style lang="scss" scoped>
input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
}
</style>