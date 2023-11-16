<template>
    <div class="flex flex-col gap-1">
        <span>{{ label }}</span>
        <input type="text" class="p-2 rounded-md border border-gray" v-model="inputValue" />
    </div>
</template>
  
  <script lang="ts">
  import Vue from 'vue';
  
  export default Vue.extend({
      name: "TextInput",  
      computed: {
        inputValue: {
          get(): string {
            return this.value
          },
          set(val: string) {
            this.$emit('input', val)
          }
        }
      },
      props: {
        value: {
            type: String,
            default: null
        },
        label: {
            type: String,
            required: true,
            default: ''
        }
    },
  })
  </script>