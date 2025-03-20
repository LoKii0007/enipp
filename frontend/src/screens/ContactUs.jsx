import ContactForm from '@/components/Contact'
import PageHeading from '@/components/PageHeading'
import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div className="contact-us min-h-screen w-screen">
          <PageHeading heading="Contact Us" />
          <ContactForm />
      </div>
    </>
  )
}

export default ContactUs