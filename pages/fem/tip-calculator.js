import { useRef, useState } from 'react'
import Layout from '@/components/layout'
import SelectTip from '@/components/SelectTip'
import InputSection from '@/components/InputSection'
import { Space_Mono } from 'next/font/google'
import Image from 'next/image'

import logo from '../../public/images/logo.svg'
import iconDollar from '../../public/images/icon-dollar.svg'
import iconPerson from '../../public/images/icon-person.svg'
import TipAmount from '../../components/TipAmount'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-space-mono',
})

const number = 0

export default function TipCalculator () {
  return (
    <>
      <Layout>
        <div className={`${spaceMono.variable} lg:pt-20 pt-5 font-space-mono w-full h-full bg-lightgrayishcyan`}>
          <div className="max-w-[1024px] mx-auto">
            <figure className="lg:my-20 mt-5 mb-10">
              <Image src={ logo } alt="logo" className="mx-auto" />
            </figure>
            <div className="p-5 grid grid-cols-12 gap-5 rounded-3xl shadow-lg bg-white">
              <div className="lg:col-span-6 col-span-12">
                <div className="p-5">
                  <InputSection name="Bill" icon={ iconDollar }/>
                  <section className='my-10'>
                    <SelectTip
                      name="Select Tip %"
                      options={['5%', '10%', '15%', '25%', '50%', 'Custom']}
                    />
                  </section>
                  <InputSection name="Number of people" icon={ iconPerson } />
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12">
                <section className="relative p-10 pb-36 h-full w-full bg-verydarkcyan rounded-xl">
                  
                  <TipAmount amount={number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/>
                  <div className="mt-12">
                    <TipAmount amount={number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/>
                  </div>
                  <button className="absolute bottom-10 left-1/2 -translate-x-1/2 py-2 w-[calc(100%-80px)] rounded uppercase text-verydarkcyan bg-primary">Reset</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}