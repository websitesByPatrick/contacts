'use server'
import { redirect } from "next/navigation"
import prisma from "./db"

export async function createContact(formdata: FormData) { {
    
    const contact = await prisma.contact.create({
        data: {
            fname: formdata.get('fname') as string,
            lname: formdata.get('lname') as string,
            email: formdata.get('email') as string,
            phone: formdata.get('phone') as string
        }
    })
    
}