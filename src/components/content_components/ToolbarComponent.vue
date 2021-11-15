<template>
    <div id="toolbar">
        <div id="selectColor">
            <input
                @click="setColor"
                @input="setColor"
                v-model="colorValue"
                type="color"
                id="colorInput"
            />
            <label for="colorInput">
                <font-awesome-icon icon="pencil-alt" /> Pen
            </label>
        </div>
        <div id="eraser" @click="setErase">
            <font-awesome-icon icon="eraser" /> Eraser
        </div>
        <div id="clear" @click="clearCanvas">
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
        ...mapGetters(["getColor"]),
    },
    created: function () {
        this.changeColor(this.colorValue);
    },
    mounted: function () {
        this.activatePenClass();
    },
    methods: {
        ...mapActions(["changeThickness", "changeDrawMode", "changeColor", "changeEraseMode"]),
        clearCanvas() {
            this.$emit("clear-canvas");
        },
        thicknessChange(value) {
            this.changeThickness(value);
        },
        callDrawModeFunc() {
            this.changeDrawMode(!this.getDrawMode);
        },
        activatePenClass() {
            document.querySelector("#selectColor").classList.add("active");
            document.querySelector("#eraser").classList.remove("active");
        },
        setColor() {
            this.activatePenClass();
            this.changeColor(this.colorValue);
            this.$el.querySelector(".fa-pencil-alt").style.color = this.colorValue;
        },
        setErase() {
            document.querySelector("#selectColor").classList.remove("active");
            document.querySelector("#eraser").classList.add("active");
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
    #selectColor,
    #eraser {
        &::after {
            display: block;
            left: 0;
            right: 0;
            margin: auto;
            margin-top: 2px;
            background-color: $font-color;
            color: transparent;
            width: 0;
            content: "";
            height: 2px;
            transition: all 0.5s ease-out;
        }
        &:hover,
        &.active {
            &::after {
                width: 100%;
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