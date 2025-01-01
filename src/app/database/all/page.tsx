import { Button } from '@/components/Button'
import  prisma  from '@/lib/db'
import React from 'react'

const page = async () => {
  
  const contacts = await prisma.contact.findMany()

interface Contact {
  id: string
  fname: string
  lname: string
  email: string
  phone: string
  }
 return (
        <div className="flex flex-col items-center min-h-screen py-2 gap-4">
          <h1 className="text-3xl p-6">All Contacts</h1>
          
            <table className='w-[960] border '>
              <thead>
                <tr className='border-slate-700 bg-gray-700 border text-xl '>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                  {contacts.map((contact: Contact) => (

                <tr key={contact.id} className='text-center border border-slate-700 text-lg even:bg-slate-900 odd:bg-slate-950 h-9'>
                  <td>{contact.fname}</td>
                  <td>{contact.lname}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr> ))}
              </tbody>
              
            </table>
         

          <Button href="/" text="Go Home"/>
        </div>
  )
}

export default page