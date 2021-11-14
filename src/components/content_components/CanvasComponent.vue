<template>
    <div id="canvas">
        <canvas
            @mouseenter="setInitial"
            @mousemove="draw"
            @touchmove="drawTouch"
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
            prevY: 0,
            canvasWidth: 960,
            canvasHeight: 700
        }
    },
    computed: {
        ...mapGetters(["getThickness", "getDrawMode", "getColor"]),
    },
    mounted: function () {
        this.setUpCanvas();
    },
    methods: {
        setUpCanvas() {
            const canvas = this.$el.querySelector("canvas");
            this.canvas = canvas;
            canvas.width = this.canvasWidth;
            canvas.height = this.canvasHeight;
            this.ctx = canvas.getContext("2d");
        },
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
        drawTouch(event) {
            event.preventDefault();
            event.stopPropagation();
            const touch = event.touches[0];
            const mouseEvent = new MouseEvent("mousemove", {
                offsetX: touch.clientX,
                offsetY: touch.clientY
            });
            this.canvas.dispatchEvent(mouseEvent);
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
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared";
#canvas {
    @include centered-flex;
    @include fill-parent;
    flex: 0 0 60%;
    overflow-x: auto;

    .box {
        background-color: white;
    }
    canvas {
        background: #fff;
    }
    @media (max-width: $xs-media) {
        flex: 0 0 90%;
        align-items: flex-start;
        height: auto;
    }
}
</style>