<template>
  <div class="flex flex-col gap-5 w-96">
    <h2 class="text-2xl leading-7 font-semibold">Results</h2>
    <ul class="flex flex-col gap-2">
      <li v-for="(result, index) in results" 
          :key="index" 
          class="rounded border border-gray p-2 bg-red-200" 
          :class="{'!bg-green-200': result.correct}" 
          v-html="result.answer" />
    </ul>
    <p v-if="totalCorrect > 3">Congratulations {{ name }}! You have got pass marks!</p>
    <p v-else>Sorry {{ name }}, you haven't passed the quiz this time</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { quizModule, userModule } from '~/store/store-accessor'

export default Vue.extend({
    name: "results",
    computed: {
      name(): string {
        return userModule.name
      },
      selectedAnswers(): string[] {
        return quizModule.selectedAnswers
      },
      correctAnswers(): string[] {
        return quizModule.questions.map((question) => {          
          return question.correct_answer
        })
      },
      results(): {answer: string, correct: boolean}[] {
        let results: {answer: string, correct: boolean}[] = []

        this.selectedAnswers.forEach((selectedAnswer, index) => {
            results.push({answer: selectedAnswer, correct: selectedAnswer ===  this.correctAnswers[index]})
        })

        return results
      },
      totalCorrect(): number {
        return this.results.filter(result => result.correct).length
      }
    }
})
</script>
