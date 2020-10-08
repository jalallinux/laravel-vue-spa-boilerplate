<template>
    <component :is="componentName"></component>
</template>

<script>
    import Login from "./Login";
    import Register from "./Register";
    import NotFound from '@/views/errors/NotFound';

    export default {
        name: "App",

        props: ['url'],

        components: {
            Login, Register, NotFound
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
