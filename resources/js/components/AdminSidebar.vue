<template>
    <div class="sidebar" data-color="purple" data-background-color="white">
        <div class="sidebar-wrapper">
            <ul class="nav">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'dashboard' }">
                        <i class="fa fa-tachometer-alt"></i>
                        <p>داشبورد</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'admin-user' }">
                        <i class="fa fa-users"></i>
                        <p>کاربران</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout">
                        <i class="fa fa-sign-out-alt"></i>
                        <p>خروج</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DashboardSideBar",
        methods: {
            logout() {
                this.$store.dispatch('auth/logout');

                this.$router.push({ name: 'home' });
            }
        },
    }
</script>

<style scoped>

</style>
