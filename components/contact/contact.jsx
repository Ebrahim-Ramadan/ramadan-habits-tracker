'use client'
import React from 'react'

const Contact = ()=>  {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const handleSubmitContactForm = (event) => {
        event.preventDefault();
        // Gather form data in JSON format
        console.log('Form Data:', formData);
        // You can perform further operations like sending this data to a server, etc.
      };

  return (
    <div className="container min-h-screen  mx-auto p-8 text-white">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <form className="space-y-4 font-semibold" onSubmit={handleSubmitContactForm}>
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <input
            required
            color="primary"
            id="name"
            placeholder="Please enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            required
            color="primary"
            id="email"
            placeholder="Enter your email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject">Subject</label>
          <input
            required
            color="primary"
            id="subject"
            placeholder="Enter your subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            required
            variant="soft"
            color="primary"
            id="message"
            minRows={2}
            placeholder="Enter your message"
            defaultValue={formData.message} 
            //In React, the Textarea component typically doesn't use a value prop to display text. Instead, it utilizes a defaultValue prop for initial values and an onChange event to update the value. However, your implementation is using the value prop, which might interfere with the expected behavior.
            onChange={(event) => {
                handleInputChange({
                target: {
                    id: 'message',
                    value: event.target.value,
                },
                });
            }}
                          />
        </div>
        <button className="w-full" variant="outlined" type="submit">
          Submit
        </button>
      </form>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Gymrat Contact Info</h2>
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Address</h3>
            <p>123 Fitness St, Muscle City, 90001</p>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Phone Number</h3>
            <p>(+20) 110 219 1344</p>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Email</h3>
            <a className="underline">
              ramadanebrahim791@gmil.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;