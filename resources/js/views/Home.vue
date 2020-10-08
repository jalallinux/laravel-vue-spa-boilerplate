<template>
    <div class="container mt-5">
        <div class="row vh-80">
            <div class="col-3 mt-r5">
                <p>به سایت ما خوش آمدید :)</p>
            </div>
            <main-svg class="col-9"></main-svg>
        </div>
    </div>
</template>

<script>
    import MainSvg from "@/components/svg/MainSvg";
    export default {
        name: "Home",
        metaInfo: {
            title: 'Laravel Vue Boilerplate'
        },
        components: {
            MainSvg
        }
    }
</script>

<style scoped>
    .vh-80 {
        height: 80vh;
    }
    .mt-r5 {
        margin-top: 5rem;
    }
</style>
