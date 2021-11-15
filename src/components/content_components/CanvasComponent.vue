<template>
    <div id="canvas">
        <canvas
            @mouseenter="setInitial"
            @touchstart="setInitial"
            @mousemove="draw"
            @touchmove="draw"
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
        ...mapGetters(["getThickness", "getDrawMode", "getColor", "getEraseMode"]),
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
            event.preventDefault();
            const { offsetX, offsetY } = this.getMousePosition(event);
            this.prevX = offsetX;
            this.prevY = offsetY;
        },
        getMousePosition(event) {
            const clientX = event.clientX || event.touches[0].clientX;
            const clientY = event.clientY || event.touches[0].clientY;
            const { left, top } = event.target.getBoundingClientRect();
            const offsetX = clientX - left;
            const offsetY = clientY - top;
            return { offsetX, offsetY };
        },
        draw(event) {
            event.preventDefault();
            const { offsetX, offsetY } = this.getMousePosition(event);
            if (this.getDrawMode || this.getEraseMode) {
                this.drawLine(this.prevX, this.prevY, offsetX, offsetY);
            }
            this.prevX = offsetX;
            this.prevY = offsetY;
        },
        drawLine(x1, y1, x2, y2) {
            const ctx = this.ctx;
            ctx.beginPath();
            ctx.strokeStyle = this.getColor;
            ctx.lineWidth = +this.getThickness;
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