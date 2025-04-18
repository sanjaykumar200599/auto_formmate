import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const GenerateFormInput = () => {
  return (
    <div className='flex items-center gap-4 my-8'>
        <Input placeholder='Write a prompt to generate forms ...'/>
        <Button>Generate Form</Button>
    </div>
  )
}

export default GenerateFormInput