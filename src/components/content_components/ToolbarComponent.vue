<template>
    <div id="toolbar">
        <div>
            <div id="drawMode">Draw Mode: Off</div>
            <div id="drawModeInfo">
                <font-awesome-icon icon="info-circle" />
                Press d to switch
            </div>
        </div>
        <div id="selectColor">
            <font-awesome-icon icon="pencil-alt" /> Pen
        </div>
        <div id="eraser">
            <font-awesome-icon icon="eraser" /> Eraser
        </div>
        <div id="clear">
            <font-awesome-icon icon="times" /> Clear
        </div>
        <custom-range-input />
    </div>
</template>

<script>
import CustomRangeInput from "@/components/helper_components/CustomRangeInput.vue";

export default {
    name: "ToolbarComponent",
    components: {
        CustomRangeInput
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared";
#toolbar {
    height: $canvas-toolbar-dimension;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    div {
        font-size: 20px;
        text-align: left;
        &:hover {
            cursor: pointer;
        }
    }
    .fa-pencil-alt {
        color: #000;
    }
    #drawModeInfo {
        font-size: 10px;
        text-indent: 5px;
        .fa-info-circle {
            padding-right: 5px;
        }
    }
}
</style>