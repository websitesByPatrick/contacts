'use client'
import DeleteContact from '@/components/DeleteContact/DeleteContact'
import React from 'react'
import { useParams } from 'next/navigation'

const Page = () => {
  const { id } = useParams()
  if (!id || Array.isArray(id)) {
    return <div>Error: Invalid ID</div>
  }
  return (

    <DeleteContact id={id} />
  )
}

export default Page