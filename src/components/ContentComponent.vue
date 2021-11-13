<template>
    <div id="content">
        <toolbar-component />
        <canvas-component />
    </div>
</template>

<script>
import ToolbarComponent from "@/components/content_components/ToolbarComponent.vue";
import CanvasComponent from "@/components/content_components/CanvasComponent.vue";

export default {
    name: "ContentComponent",
    components: {
        ToolbarComponent,
        CanvasComponent
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