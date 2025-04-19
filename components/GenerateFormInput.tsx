"use client"
import React, { useActionState, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
import { Sparkles } from 'lucide-react'
import { generateForm } from '@/actions/generateForm'
import { text } from 'stream/consumers'

type InitialState={
  message:string,
  success:boolean,
  data?:any
}
const initialState: InitialState={
  message:"",
  success:false
}

const GenerateFormInput : React.FC<{text?:string}>= ({text}) => {
  const [description,setDescription]=useState<string>("");
  const [state,formAction]=useActionState(generateForm,initialState)



  return (
    <form action={formAction} className='flex items-center gap-4 my-8'>
        <Input value={text} type="text" placeholder='Write a prompt to generate forms ...'/>
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