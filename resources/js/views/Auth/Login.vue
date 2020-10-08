<template>
    <form class="d-flex flex-column align-items-center login-width mx-auto mt-5 card container py-5" @submit.prevent="login">
        <h3>فرم ورود</h3>
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
        <base-check v-model="form.remember"
                    name="remember"
                    field="remember"
                    label="مرا به خاطر بسپار"
        ></base-check>
        <a href="#">ایا رمز عبور خود را فراموش کرده اید؟</a>
        <base-btn :loading="form.busy" class="btn-block">ورود</base-btn>
    </form>
</template>

<script>
    import { Form } from 'vform';
    export default {
        name: "Login",
        metaInfo: {
            title: 'ورود'
        },
        data() {
            return {
                form: new Form({
                    email: '',
                    password: '',
                    remember: false
                })
            }
        },
        methods: {
            login() {
                this.$store.dispatch('auth/login', this.form)
                        .then(() => {
                            this.$router.push({ name: 'dashboard' })
                        })
            }
        },
    }
</script>

<style scoped>
    .login-width {
        width: 360px;
    }
</style>
