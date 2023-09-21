import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'
import RemoveBtn from '@/components/RemoveBtn'

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    })
    if (!res.ok) throw new Error('Failed to fetch topics')

    return res.json()
  } catch (error) {
    console.log('Error loading topics: ', error)
  }
}

export default async function TopicList() {
  const { topics } = await getTopics()

  return (
    <>
      {topics.map((topic, index) => (
        <div
          key={index}
          className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
          <div className='space-y-2'>
            <h2 className='font-bold text-2xl'>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>

          <div className='flex gap-2'>
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
