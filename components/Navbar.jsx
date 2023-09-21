import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-slate-800 px-8 py-3'>
      <Link href={'/'} className='text-white font-bold'>
        Home
      </Link>
      <Link href={'/addTopic'} className='bg-white p-2'>
        Add Topic
      </Link>
    </nav>
  )
}
