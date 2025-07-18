import React from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>
            Get ready for your next interview
          </h2>
          <p className='text-lg'>
            Practice with our AI-powered interview prep platform and land your dream job.
          </p>
          <div className='flex gap-4'>
            <Button asChild className=''>
              <Link href="/interview"> Start an Interview</Link>
            </Button>
          </div>
        </div>

        <Image src="/robot.png" alt="robo-image" width={400} height={400}  className="max-sm:hidden"/>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>
          Your Interviews
        </h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}

          {dummyInterviews.length === 0 && (
            <p className='text-lg'>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}

          {dummyInterviews.length === 0 && (
            <p className='text-lg'>There are no interviews available at the moment</p>
          )}
        </div>
      </section>
    </>
  )
}

export default page