<template>
    <button :disabled="disabled" class="rounded-md border border-black h-10 hover:bg-gray-200" @click="$emit('click')">
        <span class="p-2">{{ label }}</span>
    </button>
</template>
  
<script lang="ts">
  import Vue from 'vue';
  
  export default Vue.extend({
      name: "Button",
      props: {
        label: {
            type: String,
            required: true,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
      }
  })
</script>
  