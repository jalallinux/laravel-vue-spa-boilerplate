<template>
    <component :is="componentName"></component>
</template>

<script>
    import Index from "./Index.vue";
    import NotFound from '@/views/errors/NotFound';

    export default {
        name: "App",

        props: ['url'],

        components: {
            Index, NotFound
        },

        computed: {
            componentName() {
                return ['login', 'register'].includes(this.url) ? this.url : 'not-found'
            }
        }
    }
</script>

<style scoped>

</style>
