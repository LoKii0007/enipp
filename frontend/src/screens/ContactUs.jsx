import ContactForm from '@/components/Contact'
import PageHeading from '@/components/PageHeading'
import React from 'react'
import useTheme from '@/hooks/ThemeContex';


const ContactUs = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="contact-us min-h-screen w-full">
          <PageHeading heading="Contact Us" />
          <div className={`flex justify-center items-center w-full py-12 ${theme === 'dark' ? 'bg-enipp-dark1' : 'bg-[#EEEEEE]'}`}>
            <ContactForm />
          </div>
      </div>
    </>
  )
}

export default ContactUs