<template>
    <div id="canvas">
        <canvas
            @mouseenter="setInitial"
            @mousemove="draw"
        ></canvas>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "CanvasComponent",
    data: function () {
        return {
            canvas: "",
            ctx: "",
            prevX: 0,
            prevY: 0
        }
    },
    computed: {
        ...mapGetters(["getThickness", "getDrawMode"]),
    },
    mounted: function () {
        const canvas = this.$el.querySelector("canvas");
        this.canvas = canvas;
        const canvasParentDim = canvas.parentElement.getBoundingClientRect();
        canvas.height = canvasParentDim.height;
        canvas.width = canvasParentDim.width;
        this.ctx = canvas.getContext("2d");
    },
    methods: {
        setInitial(event) {
            this.prevX = event.offsetX;
            this.prevY = event.offsetY;
        },
        draw(event) {
            if (this.getDrawMode) {
                this.drawLine(this.prevX, this.prevY, event.offsetX, event.offsetY);
            }
            this.prevX = event.offsetX;
            this.prevY = event.offsetY;
        },
        drawLine(x1, y1, x2, y2) {
            const ctx = this.ctx;
            ctx.beginPath();
            ctx.strokeStyle = "#000";
            ctx.lineWidth = this.getThickness;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
        },
        clearCanvas() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared";
#canvas {
    @include centered-flex;
    @include fill-parent;
    width: $canvas-toolbar-dimension;
    .box {
        background-color: white;
    }
    canvas {
        width: 100%;
        background: #fff;
    }
}
</style>