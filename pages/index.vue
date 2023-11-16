<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <Intro />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Intro from '~/components/Intro.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { Intro }
})
</script>
