 const TwoPs = () => {
    const faqsList = [
        {
            q: "What are some random questions to ask?",
            a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
        },
        {
            q: "Do you include common questions?",
            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
        },
        {
            q: "Are these questions for girls or for boys?",
            a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
        },
        {
            q: "What do you wish you had more talent doing?",
            a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
        }
    ]

  
  return (
    <>
        <div className="md:p-24 p-6 space-y-8">
      <h1 className="text-4xl font-bold text-white">Privacy & Policy</h1>
      <p className="text-lg text-zinc-500 dark:text-zinc-400">
        Welcome to the Ramadan Habits Tracking&apos;s privacy and policy page. Here we outline our policies regarding
        the collection, use, and disclosure of personal data when you use our Service and the choices you have
        associated with that data. We strive to be transparent about how we collect and use your information, to keep
        your information secure and to provide you meaningful choices.
      </p>
      <div className="space-y-6 ">
        <div className="p-6 space-y-4 scroll-mt-12 scroll-smooth" id="Data-Collection">
          <a href="#Data-Collection" className="scroll-smooth text-2xl font-semibold text-white" >Data Collection</a>
          <p className="text-zinc-500 dark:text-zinc-400">
            We collect several different types of information for various purposes to provide and improve our Service to
            you. Personal data, Usage data, Tracking & Cookies data are few among the types of data we collect. Personal
            data may include, but is not limited to, your name, email address, phone number etc. While using our
            service, we may also collect information on how the service is accessed and used.
          </p>
        </div>
        <div className="p-6 space-y-4 scroll-mt-12" id="Use-of-Data">
          <a href="#Use-of-Data" className=" text-2xl font-semibold text-white">Use of Data</a> 
          <p className="text-zinc-500 dark:text-zinc-400">
            GymRat uses the collected data for various purposes. To provide and maintain our service, to notify you
            about changes to our service, to allow you to participate in interactive features of our service when you
            choose to do so, to provide customer support, to gather analysis or valuable information so that we can
            improve our service, to monitor the usage of our service, to detect, prevent and address technical issues
            are among the uses of the data we collect.
          </p>
        </div>
        <div className="p-6 space-y-4 scroll-mt-12" id="Security-of-Data">
          <a href="#Security-of-Data" className="scroll-mt-6 scroll-smooth text-2xl font-semibold text-white">Security of Data</a>
                  <p className="text-zinc-500 dark:text-zinc-400" >
                  At [Your Fitness Tracker App Name], we prioritize the security and confidentiality of your personal information. We implement robust measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
              
                      <p className="text-zinc-500 dark:text-zinc-400">
                      Encryption and Secure Protocols
All data transmitted and stored within our app is encrypted using industry-standard protocols. We employ advanced encryption techniques to protect your information during transmission over the internet. Our secure protocols ensure that your data remains confidential and cannot be intercepted by malicious entities.

</p>
                      <p className="text-zinc-500 dark:text-zinc-400">
                      Access Control and Authentication
Access to your personal data is strictly controlled and limited to authorized personnel who require access for legitimate purposes. We implement stringent authentication mechanisms to ensure that only authorized users can access and manage the data.

</p>
                      <p className="text-zinc-500 dark:text-zinc-400">
           

Regular Security Assessments
We conduct regular security assessments and audits to identify potential vulnerabilities within our systems. Our team continuously monitors and updates our security practices to mitigate risks and maintain the highest standards of protection for your data.

</p>
                      <p className="text-zinc-500 dark:text-zinc-400">
           

                      Data Storage and Retention
Your data is stored in secure servers with restricted access to prevent unauthorized tampering or breaches. We adhere to strict retention policies and only retain your information for the necessary period required to provide our services or as required by law.

</p>
                      <p className="text-zinc-500 dark:text-zinc-400">
           

                      User Responsibility
While we employ stringent security measures, we encourage our users to take responsibility for their account security. It&apos;s important to choose strong passwords, enable two-factor authentication, and avoid sharing login credentials to further enhance the security of your data.
</p>



                      <p className="text-zinc-500 dark:text-zinc-400">
                      External Links
Please note that our app may contain links to external websites or services. We do not have control over the privacy practices or content of these third-party sites. We recommend reviewing the privacy policies of these external sites before sharing any personal information.
</p>


        </div>
      </div>
    </div>
    <section className='py-14 bg-gray-800'>
    <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className='flex-1'>
            <div className="max-w-lg">
                <h3 className='font-semibold text-cyan-400'>
                    Frequently asked questions
                </h3>
                <p className='mt-3 text-white text-3xl font-extrabold sm:text-4xl'>
                    All information you need to know
                </p>
            </div>
        </div>
        <div className='flex-1 mt-12 md:mt-0'>
            <ul className='space-y-4 divide-y divide-gray-700'>
                {faqsList.map((item, idx) => (
                    <li
                        className="py-5"
                        key={idx}>
                        <summary
                            className="flex items-center justify-between font-semibold text-gray-200">
                            {item.q}
                        </summary>
                        <p
                            dangerouslySetInnerHTML={{ __html: item.a }}
                            className='mt-3 text-gray-300 leading-relaxed'>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
      </section>
    </>

  )
}
export default TwoPs;