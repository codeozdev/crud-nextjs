import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'
import RemoveBtn from '@/components/RemoveBtn'
import Image from 'next/image'
export default function TopicList() {
  return (
    <>
      <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div className='space-y-2'>
          <h2 className='font-bold text-2xl'>Title</h2>
          <p>Details</p>
        </div>

        <div className='flex gap-2'>
          <RemoveBtn />
          <Link href={`/editTopic/123`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  )
}
