<template>
    <div id="footer">2021, &copy; Can Özsoy</div>
</template>

<script>
export default {
name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared";
#footer {
    font-size: 1rem;
    padding: 20px;
    @media (max-width: $xs-media) {
        font-size: 0.8rem;
    }
}

</style>