'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddTopic() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const router = useRouter()

  const addTopic = async (e) => {
    e.preventDefault()

    if (!title || !description) {
      return alert('Please fill in all fields')
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })

      if (res.ok) {
        router.refresh()
        router.push('/')
      } else {
        throw new Error('Failed to add topic')
      }
    } catch (error) {
      console.log('Error adding topic: ', error)
    }
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={addTopic}>
      <input
        type='text'
        placeholder='Topic Title'
        className='border-slate-500 px-8 py-2  outline-none'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <input
        type='text'
        placeholder='Topic Description'
        className='border-slate-500 px-8 py-2  outline-none'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button
        className='bg-green-600 font-bold text-white py-3 px-6 w-fit'
        type='submit'>
        Add Topic
      </button>
    </form>
  )
}
