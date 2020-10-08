import { List, Map } from 'immutable'
import { StoreonModule } from 'storeon'
import { MessagesState, MessagesEvents } from '../@types/storeonModules'
import { defaultMessagesState } from '../states/defaultStates'

export const messages: StoreonModule<MessagesState, MessagesEvents> = (store) => {
  store.on('@init', () => ({
    messages: defaultMessagesState,
  }))
  store.on('addMessage', ({ messages }, { message, moduleName }) => ({
    messages: messages
      .updateIn(['history', moduleName], (history) => List.isList(history) && history.push(message))
      .update(message.sender === 'user' ? 'lastUserMessage' : 'lastResponseMessage', () => Map({ ...message })),
  }))
  store.on('resetMessages', ({ messages }, moduleName) => ({
    messages: messages.updateIn(['history', moduleName], () => List([])),
  }))
  store.on('initModuleHistory', ({ messages }, moduleName) => ({
    messages: messages.update('history', (history) => ({ ...history, [moduleName]: List([]) })),
  }))
}
