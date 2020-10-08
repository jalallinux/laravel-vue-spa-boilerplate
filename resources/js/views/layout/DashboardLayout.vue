<template>
    <perfect-scrollbar>
        <DashboardSideBar />
        <div class="main-panel">
            <Navbar />
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </perfect-scrollbar>
</template>

<script>
    import DashboardSideBar from "@/components/DashboardSideBar";
    import Navbar from '@/components/Navbar.vue';

    export default {
        name: "DashboardLayout",
        components: {
            DashboardSideBar,
            Navbar
        }
    }
</script>

<style scoped>

</style>
