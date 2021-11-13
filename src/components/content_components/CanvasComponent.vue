<template>
    <div id="canvas">

    </div>
</template>

<script>
export default {
    name: "CanvasComponent",
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared";
#canvas {
    @include centered-flex;
    flex-wrap: wrap;
    width: $canvas-toolbar-dimension;
    .box {
        background-color: white;
    }
}
</style>