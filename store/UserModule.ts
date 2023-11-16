import { Action, Module, Mutation, VuexModule, config } from 'vuex-module-decorators'
import { Question } from '~/types/Question'
config.rawError = true

@Module({
  name: 'UserModule',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  private _name: string = ''

  get name() {
    return this._name
  }

  @Mutation
  setName(payload: string) {
    this._name = payload
  }

  // @Action
  // async getQuestions({
  //   numberOfQuestions,
  //   difficulty,
  // }: {
  //   numberOfQuestions: number
  //   difficulty: string
  // }) {
  //   if (this._questionsLoading) return

  //   try {
  //     this.setQuestionsLoading(true)

  //     await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=multiple`)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     this.setQuestionsLoading(false)
  //   }
  // }
}
