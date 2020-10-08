<template>
    <div>
        <select class="custom-select my-1"
                @change="updateInput"
                :class="{ 'is-invalid': $parent[form].errors.has(field), classes }"
                v-bind="$attrs"
        >
            <option value="" :selected="!selected" disabled v-if="label">{{ label }}</option>
            <option :value="Array.isArray(items) ? item : key"
                    v-for="(item, key) in items"
                    :selected="Array.isArray(items) ? selected === item : selected === key"
            >
                {{ item }}
            </option>
        </select>
        <has-error :form="$parent[form]" :field="field"></has-error>
    </div>
</template>

<script>
    import { HasError } from 'vform';

    export default {
        inheritAttrs: false,
        name: "BaseSelect",
        props: {
            label: {
                type: String,
                default: ''
            },
            items: {
                type: [Array, Object],
                required: true
            },
            classes: {
                type: String,
                default: ''
            },
            form: {
                type: String,
                default: 'form'
            },
            field: {
                type: String,
                require: true
            },
            value: {
                type: [String, Number],
                default: ''
            },
        },
        components: {
            HasError
        },
        data() {
            return {
                selected: this.value
            }
        },
        watch: {
            value(newValue, oldValue) {
                this.selected = newValue;
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('input', event.target.value)
            },
        },
    }
</script>

<style scoped>

</style>
