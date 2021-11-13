<template>
    <div id="content">
        <toolbar-component
            :penThickness="penThickness"
            @thickness-change="thicknessChange"
            @clear-canvas="clearCanvas"
        />
        <canvas-component
            :penThickness="penThickness"
            ref="canvasComponent"
        />
    </div>
</template>

<script>
import ToolbarComponent from "@/components/content_components/ToolbarComponent.vue";
import CanvasComponent from "@/components/content_components/CanvasComponent.vue";

export default {
    name: "ContentComponent",
    data: function () {
        return {
            penThickness: "1"
        }
    },
    components: {
        ToolbarComponent,
        CanvasComponent
    },
    methods: {
        clearCanvas() {
            this.$refs.canvasComponent.clearCanvas();
        },
        thicknessChange(value) {
            this.penThickness = value;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared";
#content {
    @include centered-flex;
    gap: 30px;
    flex: 1;
}
</style>