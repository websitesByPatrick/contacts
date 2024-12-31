import { Button } from '@/components/Button'
import React from 'react'

const page = () => {
  return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-3xl p-6">Database Page</h1>
          <Button href="/" text="Go Home"/>
        </div>
  )
}

export default page