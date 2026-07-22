import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import { useState } from "react"





function Contact() {
  return (
    <section id="contact" className="text-blue-100 pt-10  px-6 md:px-24 bg-gray-800 pb-6">
      <h1 className="font-bold text-2xl text-blue-400 font-serif text-center uppercase ">contact us</h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-5xl mx-auto">

    
      <div className="space-y-6 items-center">
        <h5 className="items-center text-blue-400 font-bold">Get In Touch</h5>
        <div className="px-4 py-2 flex gap-4 border-2 min-w-sm mx-auto rounded border-blue-500 shadow-xl/30 shadow-blue-400">
          <div className=" border-gray-400  px-2 shadow-blue-400">
            <img src="/images/mail.png" alt="" className="size-6 "/>
          </div>
          <p className="text-center">somnathsing855@gmail.com</p>
        </div>
         <div className="px-4 py-2 flex gap-4 border-2 min-w-sm mx-auto rounded border-blue-500 shadow-xl/30 shadow-blue-400">
          <div className=" border-gray-400  px-2 shadow-blue-400">
            <img src="/images/phone-call.png" alt="" className="size-6 "/>
          </div>
          <p className="text-center">+91  8391990760</p>
        </div>
         <div className="px-4 py-2 flex gap-4 border-2 min-w-sm mx-auto rounded border-blue-500 shadow-xl/30 shadow-blue-400">
          <div className=" border-gray-400  px-2 shadow-blue-400 ">
            <img src="/images/location.png" alt="" className="size-6 "/>
          </div>
          <p className="text-center">kharagpur, west bengal, India</p>
        </div>
        
      </div>
        <form className=" mt-8 space-y-8 items-center" >
        <div className="md:grid md:grid-cols-2  gap-4 space-y-5">
          <div className="space-y-3">
            <Label htmlFor="user-name">Name</Label>
            <Input name="user-email" id="user-name" placeholder="Enter your name" className="border-2 border-blue-700 shadow-xl"  />
          </div>
          <div className="space-y-3">
            <Label htmlFor="user-email">Email</Label>
            <Input name="user-email" id="user-email" placeholder="Enter your email" className="border-2 border-blue-700 shadow-xl" />
          </div>
          <div className="space-y-3 col-span-2">
            <Label htmlFor="user-message">Message</Label>
            <Textarea name="user-message" id="user-message" placeholder="Enter your message" className="border-2 border-blue-700 shadow-xl" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button type="submit" className="bg-blue-600 mb-4 hover:bg-blue-800">Send message</Button>
        </div>

      </form>
      </div>

    </section>
  )
}

export default Contact