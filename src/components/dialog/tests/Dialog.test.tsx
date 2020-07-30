import React from 'react'
import { mount } from 'enzyme'
import Dialog from '../Dialog'

import { StoreContext } from 'storeon/react'
import { store } from '../../../store'

describe('Sender tests', () => {
  const message = {
    text: 'test message',
    sender: 'user',
    date: new Date(),
    showRate: false
  }
  store.dispatch('addMessage', message)
  const component = mount(
    <StoreContext.Provider value={store}>
      <Dialog />
    </StoreContext.Provider>
  )
  it('rendering with no error', () => {
    expect(component.exists()).toEqual(true)
  })
  it('render Messages', () => {
    expect(component.find('p')).toHaveLength(1)
  })
})
