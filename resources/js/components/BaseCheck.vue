<template>
    <div class="form-check">
        <label class="form-check-label">
            {{ label }}
            <input class="form-check-input"
                type="checkbox"
                :id="name"
                @change="updateInput"
                :value="valueProp"
                :class="{ 'is-invalid': $parent[form].errors.has(fieldName), classes }"
                v-bind="$attrs"
                :checked="value"
            >
            <span class="form-check-sign">
                <span class="check"></span>
            </span>
        </label>
        <has-error :form="$parent[form]" :field="fieldName"></has-error>
    </div>
</template>

<script>
    import { HasError } from "vform";

    export default {
        name: "BaseCheck",
        inheritAttrs: false,
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
                type: [Boolean, String],
                default: false
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
                valueProp: !! this.value,
            }
        },
        watch: {
            value(newValue, oldValue) {
                this.valueProp = newValue
            }
        },
        computed: {
            fieldName() {
                return this.field ? this.field : this.name;
            }
        },
        methods: {
            updateInput() {
                this.$emit('input', ! this.valueProp);
            },
        }
    }
</script>

<style scoped>

</style>
