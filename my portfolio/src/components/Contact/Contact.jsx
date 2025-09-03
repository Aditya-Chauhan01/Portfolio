import React, { useRef, useState } from 'react'
import { ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aj8is4h",
        "template_nmxzkei",
        form.current,
        "Jstr65r6gvF73WOv3"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        },
        (error) => {
          toast.error("Error Sending Message.", error);
          toast.error("Failed to send Message. Please Try Again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        }
      )
  }

  return (
    <section
    id = 'contact'
    className='flex flex-col items-center py-20 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <ToastContainer/>
      {/* section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-3xl font-bold text-white">CONTACT</h2>
        <div className="w-30 h-1 bg-[#8245ec] mx-auto mt-0.5"></div>
        <p className="text-gray-400 mt-4 font-semibold">
          I'd love to hear from you-reach out for any opportunities or questions!
        </p>
      </div>
      
      {/* contact form */}
      <div className='mt-5 w-full max-w-md bg-[#0d08f] p-6 rounded-2xl shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center py-3'>
          Connect With Me 🚀
        </h3>

        <form className='flex flex-col gap-5' ref={form} onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Your Email' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <input type="text" name='user_name' placeholder='Your Name' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          /> 
          <input type="text" name='subject' placeholder='Subject' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          /> 
          <textarea name="message" placeholder='Message' rows='4'
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          ></textarea>
          <button type='submit'
          className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'
          >send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact