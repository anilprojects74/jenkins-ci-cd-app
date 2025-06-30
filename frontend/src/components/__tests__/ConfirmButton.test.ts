import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ConfirmButton from '../../components/TodoItem.vue'

describe('ConfirmButton.vue', () => {
  it('renders default props correctly', () => {
    const wrapper = mount(ConfirmButton)
    expect(wrapper.text()).toContain('Done') 
    expect(wrapper.text()).toContain('') 
  })

  it('renders custom props', () => {
    const wrapper = mount(ConfirmButton, {
      props: {
        name: 'Submit Task',
        btn: 'Confirm'
      }
    })
    expect(wrapper.text()).toContain('Submit Task')
    expect(wrapper.text()).toContain('Confirm')
  })

  it('emits confirm event on button click', async () => {
    const wrapper = mount(ConfirmButton)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('confirm')
    expect(wrapper.emitted('confirm')?.length).toBe(1)
  })

  it('button has correct styling classes', () => {
    const wrapper = mount(ConfirmButton)
    const btn = wrapper.find('button')
    expect(btn.classes()).toContain('border')
    expect(btn.classes()).toContain('rounded-md')
  })
})
