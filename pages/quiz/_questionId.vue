<template>
  <div class="flex flex-col gap-4 md:w-[500px]">
    <div class="flex flex-col md:justify-between md:items-center md:flex-row">
      <h2 class="text-2xl leading-7 font-semibold">Question {{ questionNumber }}</h2>
      <span class="italic text-sm" v-html="question.category" />
    </div>
    <p v-html="question.question"  />
    <ul class="flex flex-col gap-2">
      <li v-for="(answer, index) in answers" :key="index">
        <button :class="{'!bg-orange-300 font-medium': answer  === selectedAnswer}"
                class="w-full p-2 border bg-white rounded hover:bg-orange-100"
                @click="setAnswer(answer)"
        >
            <span v-html="answer" />
        </button>
      </li>
    </ul>
    <div class="flex justify-between">
      <Button v-show="questionNumber > 1" label="Previous" @click="previousQuestion" />
      <Button v-show="questionNumber < questions.length" :disabled="selectedAnswer === undefined" class="ml-auto" label="Next" @click="nextQuestion" />
      <Button v-show="questionNumber === questions.length" :disabled="selectedAnswer === undefined" label="Finish" @click="endQuiz" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { quizModule } from '~/store/store-accessor'
import { Question } from '~/types/Question'
import Button from  '~/components/form/Button.vue'

export default Vue.extend({
    name: "questionId",
    components: { Button },
    computed: {
      questions(): Question[] {
        return quizModule.questions
      },
      question(): Question {
        return this.questions[this.questionIndex]
      },
      answers(): string[] {
        let answers: string[] = this.question.incorrect_answers.map((answer) => answer)
        answers.push(this.question.correct_answer)
        return answers.sort((a, b) => 0.5 - Math.random());
      },
      correctAnswer(): string {
        return this.question.correct_answer
      },
      selectedAnswer(): string {
        return quizModule.selectedAnswers[this.questionIndex]
      },
      selectedAnswers(): string[] {
        return quizModule.selectedAnswers
      },
      questionNumber(): number {
        return Number(this.$route.params.questionId)
      },
      questionIndex(): number {
        return  this.questionNumber - 1
      }
    },
    methods: {
      previousQuestion() {
        this.$router.push(`/quiz/${this.questionIndex}`)
      },
      nextQuestion() {
        this.$router.push(`/quiz/${this.questionNumber + 1}`)
      },
      endQuiz() {
        this.$router.push(`/quiz/results`)
      },
      setAnswer(chosenAnswer: string) {
        let answers = this.selectedAnswers.map((answer: string) => answer)
        answers[this.questionIndex]  = chosenAnswer

        quizModule.setSelectedAnswer(answers)
      },
    }
})
</script>