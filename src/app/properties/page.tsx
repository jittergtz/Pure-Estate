import { main } from 'motion/react-client'
import React from 'react'
import PropertiesPage from '../components/properties/PropertiesPage'
import Navigation from '../components/landing/Navbar'

function Page() {
  return (
    <main className=' mt-16'>
   
        <PropertiesPage/>
    </main>
  )
}

export default Page