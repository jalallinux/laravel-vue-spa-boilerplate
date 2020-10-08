<template>
    <div>
        <navbar></navbar>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';

    export default {
        name: "AppLayout",
        components: {
            Navbar
        }
    }
</script>

<style scoped>

</style>
