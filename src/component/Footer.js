import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 bottom-solid bottom-dark
    font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear}&nbsp; All Rights Reserved.</span>
        <div className='flex items-center'>
        <Link href="/" className='underline
        underline-offset-2'>TechSharma</Link>
        </div>
        Build With <span className='text-primary text-2xl px-1'>&#9825;</span><Link href="/" terget={"_blank"}>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer