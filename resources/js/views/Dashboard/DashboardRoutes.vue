<template>
    <component :is="componentName"></component>
</template>

<script>
    import Index from "./Index";
    import NotFound from '@/views/errors/NotFound';
    export default {
        name: "DashboardRoutes",
        props: {
            url: {
                type: String,
                default: 'index'
            }
        },
        components: {
            Index, NotFound
        },
        computed: {
            componentName() {
                return ['index'].includes(this.url) ? this.url : 'not-found';
            }
        }
    }
</script>

<style scoped>

</style>
