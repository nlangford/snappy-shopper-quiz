import { Action, Module, Mutation, VuexModule, config } from 'vuex-module-decorators'
import { Question } from '~/types/Question'
config.rawError = true

@Module({
  name: 'QuizModule',
  stateFactory: true,
  namespaced: true,
})
export default class QuizModule extends VuexModule {
  private _questions: Question[] = []
  private _questionsLoading: boolean = false
  private _selectedAnswers: string[] = []

  get questions() {
    return this._questions
  }

  get questionsLoading() {
    return this._questionsLoading
  }

  get selectedAnswers() {
    return this._selectedAnswers
  }

  @Mutation
  setQuestions(payload: Question[]) {
    this._questions = payload
  }

  @Mutation
  setQuestionsLoading(payload: boolean) {
    this._questionsLoading = payload
  }

  @Mutation
  setSelectedAnswer(payload: string[]) {    
    this._selectedAnswers = payload
  }

  @Action
  async getQuestions({
    numberOfQuestions,
    difficulty,
  }: {
    numberOfQuestions: number
    difficulty: string
  }) {
    if (this._questionsLoading) return

    try {
      this.setQuestionsLoading(true)

      //@ts-ignore
      const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=multiple`)
      //@ts-ignore
      const { results } = await response.json()
      
      this.setQuestions(results)

    } catch (error) {
      console.error(error)
    } finally {
      this.setQuestionsLoading(false)
    }
  }
}
