<template>
    <form class="d-flex flex-column align-items-center mx-auto register-width mt-5 card container py-5" @submit.prevent="register">
        <h3>فرم ثبت نام</h3>
        <base-input label="نام"
                    name="name"
                    v-model="form.name"
        />
        <base-input label="ایمیل"
                    name="email"
                    type="email"
                    v-model="form.email"
        />
        <base-input label="رمز عبور"
                    name="password"
                    type="password"
                    v-model="form.password"
        />
        <base-input label="تایید رمز عبور"
                    name="password_confirmation"
                    type="password"
                    v-model="form.password_confirmation"
        />
        <base-btn :loading="form.busy" btn="success" class="btn-block mt-5">ثبت نام</base-btn>
    </form>
</template>

<script>
    import { Form } from 'vform';
    export default {
        name: "Register",
        metaInfo: {
            title: 'ثبت نام'
        },
        data() {
            return {
                form: new Form({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                })
            }
        },
        methods: {
            register() {
                this.$store.dispatch('auth/register', this.form);
            }
        }
    }
</script>

<style scoped>
    .register-width {
        width: 360px;
    }
</style>
