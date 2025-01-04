
import  deleteContact  from '@/lib/serverActions/deleteContact'
import React from 'react'



interface DeleteContactProps {
  id: string;
}

const DeleteContact = (props: DeleteContactProps) => {

    deleteContact(props.id)
    
  return (
    <div className='text-gray-50'>Test {props.id}</div>
  )
}

export default DeleteContact