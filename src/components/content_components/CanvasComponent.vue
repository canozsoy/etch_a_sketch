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
        ...mapGetters(["getThickness", "getDrawMode", "getColor"]),
    },
    mounted: function () {
        this.setUpCanvas();
        window.addEventListener("resize", this.onResize);
    },
    methods: {
        setUpCanvas() {
            const canvas = this.$el.querySelector("canvas");
            this.canvas = canvas;
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            this.ctx = canvas.getContext("2d");
        },
        setInitial(event) {
            this.prevX = event.offsetX;
            this.prevY = event.offsetY;
        },
        reDraw() {
            const sourceCanvas = this.canvas.toDataURL();
            this.clearCanvas();
            this.setUpCanvas();
            const image = new Image();
            image.onload = () => {
                this.ctx.drawImage(image, 0, 0);
            }
            image.src = sourceCanvas;

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
            ctx.strokeStyle = this.getColor;
            ctx.lineWidth = this.getThickness;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
        },
        clearCanvas() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        onResize() {
            this.reDraw();
        }
    },
    beforeDestroy: function () {
        window.removeEventListener("resize", this.onResize);
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
        height: 100%;
        background: #fff;
    }
}
</style>