"use client"
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
import { Sparkles } from 'lucide-react'

const GenerateFormInput = () => {
  return (
    <form className='flex items-center gap-4 my-8'>
        <Input placeholder='Write a prompt to generate forms ...'/>
       <SubmitButton/>
    </form>
  )
}

export default GenerateFormInput

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="h-9 bg-gradient-to-r from-blue-500 to bg-purple-600"
    >
      <Sparkles className="mr-2" />
      {pending ? <span>Generating form...</span> : "Generate Form"}
    </Button>
  );
};