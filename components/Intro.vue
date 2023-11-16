<template>
      <div class="bg-white shadow sm:rounded-lg p-6 flex flex-col gap-4">
        <h2 class="text-2xl leading-7 font-semibold">
          Welcome to the big fat quiz of the day
        </h2>
        <p class="text-gray-600">
          Pick your difficulty and enter your name below and let's get started!
        </p>
        <div class="flex flex-col gap-1">
        <span>Difficulty</span>
        <select v-model="difficulty" class="p-2 border border-gray rounded">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
        <div class="flex justify-between  items-end">
          <TextInput label="Name" v-model="name" />
          <Button v-show="name" label="Begin" @click="beginQuiz" :disabled="loading"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from './form/Button.vue'
import { userModule, quizModule } from '~/store/store-accessor'
import TextInput from './form/TextInput.vue'
import Vue from 'vue'

interface Data {
  difficulty: string
}

export default Vue.extend({
    name: "Intro",
    components: { Button, TextInput },
    data(): Data {
      return {
        difficulty: 'easy'
      }
    },
    computed: {
      name: {
          get(): string {
            return userModule.name
          },
          set(val:  string) {
            userModule.setName(val)
          }
        },
      loading(): boolean {
        return quizModule.questionsLoading
      }
    },
    methods: {
      async beginQuiz() {        
        await quizModule.getQuestions({numberOfQuestions: 5, difficulty: this.difficulty})
        this.$router.push('/quiz/1')
      }
    }
})
</script>
