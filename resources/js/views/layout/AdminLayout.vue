<template>
    <perfect-scrollbar>
        <AdminSidebar />
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
    import AdminSidebar from "@/components/AdminSidebar";
    import Navbar from '@/components/Navbar.vue';

    export default {
        name: "AdminLayout",
        components: {
            AdminSidebar,
            Navbar
        }
    }
</script>

<style scoped>

</style>
