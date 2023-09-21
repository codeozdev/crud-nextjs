import connectDB from '@/libs/mongodb'
import Topic from '@/models/topic'
import { NextResponse } from 'next/server'

export async function PUT(request, { params }) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await connectDB()
  await Topic.findByIdAndUpdate(id, { title, description })
  return NextResponse.json(
    { message: 'Topic updated successfully' },
    { status: 200 },
  )
}

export async function GET(request, { params }) {
  const { id } = params
  await connectDB()
  const topic = await Topic.findOne({ _id: id })
  return NextResponse.json({ topic }, { status: 200 })
}
