<template>
    <button :class="{
            'base-radius' : radius ,
            [`btn-${btn}`]: true
            }"
            v-on="$listeners"
            class="btn"
            :disabled="loading"
    >
        <slot v-if="! loading" />
        <i class="fa fa-spinner fa-spin" v-else></i>
    </button>
</template>

<script>
    export default {
        name: "BaseBtn",
        props: {
            radius: {
                type: Boolean,
                default: true
            },
            btn: {
                type: String,
                default: 'primary'
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .base-radius {
        border-radius: 30px;
    }
</style>
