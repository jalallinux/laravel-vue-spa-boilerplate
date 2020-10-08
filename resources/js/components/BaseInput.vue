<template>
    <div class="form-group bmd-form-group w-100" :class="isFocused">
        <label class="bmd-label-floating" :for="name" v-if="label">{{ label }}</label>
        <input :id="name"
               :value="value"
               class="form-control"
               :class="{ 'is-invalid': $parent[form].errors.has(fieldName), classes }"
               v-bind="$attrs"
               :type="inputType"
               @input="updateInput"
               @focus="isFocused = 'is-focused'"
               @blur="blurInput"
        >
        <span class="password-eye"
              v-if="type === 'password'"
              @click="switchPassword"
        >
            <i class="fa" :class="eyeClass"></i>
        </span>
        <has-error :form="$parent[form]" :field="fieldName"></has-error>
    </div>
</template>

<script>
    import { HasError } from 'vform';
    export default {
        inheritAttrs: false,
        name: "BaseInput",
        props: {
            label: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            classes: {
                type: String,
                default: ''
            },
            value: {
                type: [String, Number],
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            form: {
                type: String,
                default: 'form'
            },
            field: {
                type: String,
                default: ''
            }
        },
        components: {
            HasError
        },
        data() {
            return {
                inputType: this.type,
                isFocused: ''
            }
        },
        computed: {
            eyeClass() {
                return this.inputType === 'password' ? 'fa-eye' : 'fa-eye-slash'
            },
            fieldName() {
                return this.field ? this.field : this.name
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('input', event.target.value)
            },
            switchPassword() {
                if (this.inputType === 'password') {
                    this.inputType = 'text';
                    return;
                }
                this.inputType = 'password';
            },
            blurInput() {
                if (! this.value) {
                    this.isFocused = ''
                }
            }
        }
    }
</script>

<style scoped>
    .password-eye {
        float: left;
        margin-top: -30px;
        margin-left: 10px;
        z-index: 2;
    }
</style>
