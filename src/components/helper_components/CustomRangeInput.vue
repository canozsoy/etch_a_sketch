<template>
    <div id="slider">
        <input
            type="range"
            :step="rangeInput.step"
            :min="rangeInput.min"
            :max="rangeInput.max"
            v-model="rangeInput.value"
        />
        <p>{{rangeInput.value}}</p>
    </div>
</template>

<script>
export default {
    name: "CustomRangeInput",
    data: function () {
        return {
            rangeInput: {
                step: "2",
                min: "8",
                max: "160",
                value: "16"
            }
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