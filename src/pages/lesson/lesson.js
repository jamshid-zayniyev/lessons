import React from 'react'

// components
import Counter from '../../components/counter'
import Toggle from '../../components/toggle'
import Modals from '../../components/modals'
import Typing from '../../components/typing'

const Lesson = () => {
  return (
    <div>
      <Counter/>
      <hr />
      <Toggle/>
      <hr />
      <Modals/>
      <hr />
      <Typing/>
    </div>
  )
}

export default Lesson