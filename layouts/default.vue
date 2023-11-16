<template>
  <div class="flex flex-col">
    <nav>
      <div class="flex justify-between items-center px-2 py-1">
        <Button label="Home" @click="$router.push('/')"/>
        <span v-if="name && quizStarted">Good luck on your quiz {{ name }}</span>
      </div>
    </nav>
  <div class="flex justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="flex">
      <main class="flex">
        <Nuxt />
      </main>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from  '~/components/form/Button.vue'
import { userModule,  quizModule } from '~/store/store-accessor'

export default Vue.extend({
  // eslint-disable-next-line vue/match-component-file-name
  name: 'DefaultLayout',
  components: { Button },
  computed:  {
    name(): string {
      return userModule.name
    },
    quizStarted(): boolean  {
      return quizModule.questions.length > 0
    }
  }
})
</script>
