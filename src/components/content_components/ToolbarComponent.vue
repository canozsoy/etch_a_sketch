<template>
    <div id="toolbar">
        <div>
            <div
                id="drawMode"
                @click="callDrawModeFunc"
            >Draw Mode: {{drawMode}}</div>
            <div id="drawModeInfo">
                <font-awesome-icon icon="info-circle" />
                Press d to switch
            </div>
        </div>
        <div id="selectColor">
            <input
                v-model="colorValue"
                @input="setColor"
                type="color"
                id="colorInput"
            >
            <label for="colorInput">
                <font-awesome-icon icon="pencil-alt" /> Pen
            </label>
        </div>
        <div
            id="eraser"
            @click="setErase"
        >
            <font-awesome-icon icon="eraser" /> Eraser
        </div>
        <div
            id="clear"
            @click="clearCanvas"
        >
            <font-awesome-icon icon="times" /> Clear
        </div>
        <custom-range-input />
    </div>
</template>

<script>
import CustomRangeInput from "@/components/helper_components/CustomRangeInput.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "ToolbarComponent",
    components: {
        CustomRangeInput
    },
    data: function () {
        return {
            colorValue: "#000"
        }
    },
    computed: {
        ...mapGetters(["getDrawMode", "getColor"]),
        drawMode: function () {
            return this.getDrawMode ? "On" : "Off";
        }
    },
    created: function () {
        window.addEventListener("keyup", this.drawKeyListener);
        this.changeColor(this.colorValue);
    },
    methods: {
        ...mapActions(["changeThickness", "changeDrawMode", "changeColor"]),
        clearCanvas() {
            this.$emit("clear-canvas");
        },
        thicknessChange(value) {
            this.changeThickness(value);
        },
        callDrawModeFunc() {
            this.changeDrawMode(!this.getDrawMode);
        },
        drawKeyListener(event) {
            if (event.key.toLowerCase() === "d") {
                this.callDrawModeFunc();
            }
        },
        setColor() {
            this.changeColor(this.colorValue);
            this.$el.querySelector(".fa-pencil-alt").style.color = this.colorValue;
        },
        setErase() {
            this.changeColor("#fff")
        }
    },
    beforeDestroy: function () {
        window.removeEventListener("keyup", this.drawKeyListener);
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared";
#toolbar {
    height: $canvas-toolbar-dimension;
    display: flex;
    flex: 0 0 10%;
    flex-direction: column;
    justify-content: space-evenly;
    div {
        font-size: 1.2rem;
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
    input[type="color"] {
        position: fixed;
        z-index: -1000;
        width: 0;
        padding: 0;
        margin: 0;
    }
    #selectColor {
        label {
            &:hover {
                cursor: pointer;
            }
        }
    }
    @media (max-width: $xs-media) {
        flex: 0 0 90%;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        justify-content: flex-start;
        row-gap: 10px;
        div {
            font-size: 1rem;
            flex: 0 1 48%;
        }
    }
}
</style>