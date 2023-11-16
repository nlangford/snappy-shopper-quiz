import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import QuizModule from '~/store/QuizModule'
import UserModule from '~/store/UserModule'

export let quizModule: QuizModule
export let userModule: UserModule


export function initialiseStores(store: Store<any>): void {
  quizModule = getModule(QuizModule, store)
  userModule = getModule(UserModule, store)
}
