import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-indigo-200">
                  New Features
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tighter sm:text-4xl">Faster iteration. More innovation.</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The platform for rapid progress. Let yourself focus on fasting, praying, and doing Zakah. It is all noted here, eventually be proud of what you did (just the UI)
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg text-indigo-100 font-bold">blah blah blah blahblah config</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg text-indigo-100 font-bold">blah blah blah blahblah rols</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get granular, first-party, real-user metrics on site performance per deployment.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg text-indigo-100 font-bold">blah blah blah blahblah </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg text-indigo-100 font-bold">blah blah blah blahblah rols</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get granular, first-party, real-user metrics on site performance per deployment.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg text-indigo-100 font-bold">blah blah blah blahblah </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg text-indigo-100 font-bold">blah blah blah blahblah config</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-bold text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                target='_blank'
                href="https://ebrahim-ramadan.vercel.app/"
              >
                Contact Developer
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border text-indigo-100 border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus-visible:ring-gray-300"
                target='_blank'
                href="/prayers"
              >
                Tour the Platform
              </Link>
            </div>
          </div>
        </section>
  )
}
