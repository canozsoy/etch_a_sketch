<template>
    <div id="header">
        Etch a Sketch
    </div>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared";
#header {
    font-size: 3rem;
    padding: 50px;
    flex: 0;
    @media (max-width: $xs-media) {
        font-size: 2rem;
    }
}
</style>