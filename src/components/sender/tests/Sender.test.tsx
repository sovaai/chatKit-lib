import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import Sender from '../Sender'

describe('Sender tests', () => {
  let component: ShallowWrapper
  let instance: any
  beforeEach(() => {
    component = shallow(<Sender />)
    instance = component.instance() as any
  })
  it('rendering with no error', () => {
    expect(component.exists()).toEqual(true)
  })
  it('calls the right method on submit', () => {
    const onSubmit = jest.spyOn(instance, 'onSubmit')
    instance.forceUpdate()
    component.find('form').simulate('submit', {
      preventDefault: () => {
        console.log('prevent')
      },
    })
    expect(onSubmit).toHaveBeenCalled()
  })
  it('calls the right method on change', () => {
    const onChange = jest.spyOn(instance, 'onChange')
    instance.forceUpdate()
    component
      .find('input')
      .first()
      .simulate('change', {
        preventDefault: () => {
          console.log('prevent')
        },
        currentTarget: {
          value: 'someText',
        },
      })
    expect(onChange).toHaveBeenCalled()
  })
  it('currect state Change', () => {
    instance.forceUpdate()
    component
      .find('input')
      .first()
      .simulate('change', {
        preventDefault: () => {
          console.log('prevent')
        },
        currentTarget: {
          value: 'someText',
        },
      })
    expect(component.state('text')).toEqual('someText')
  })
})
