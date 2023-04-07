import { useState, useEffect, useMemo, useCallback } from 'react'
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


export default function TipCalculator () {
  const [tipPerPerson, setTipPerPerson] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState(0)

  const [dollar, setDollar] = useState('')
  const [dollarStatus, setDollarStatus] = useState('empty')
  const [dollarError, setDollarError] = useState(null)

  const [pax, setPax] = useState('')
  const [paxStatus, setPaxStatus] = useState('empty')
  const [paxError, setPaxError] = useState(null)

  const [tip, setTip] = useState('')
  const [tipStatus, setTipStatus] = useState('empty')
  const [tipError, setTipError] = useState(null)

  const [customTip, setCustomTip] = useState('')
  const [customTipStatus, setCustomTipStatus] = useState('empty')
  const [customTipError, setCustomTipError] = useState(null)

  const tipOptions = useMemo(() => {
    return [0.05, 0.10, 0.15, 0.25, 0.35, 0.50]
  }, [])

  const [isResetDisabled, setIsResetDisabled] = useState(false)

  function handleDollarChange(e) {
    setDollar(e.target.value)
  }

  function handlePaxChange(e) {
    setPax(e.target.value)
  }

  function handleTipChange(value) {
    setTip(value)
  }

  function calculateTip(){
    setTipPerPerson(calculateTipPerPerson())
    setTotalPerPerson(calculateTotalTipPerPerson())
  }

  function calculateTipPerPerson(){
    return (Number.parseFloat(dollar) * Number.parseFloat(tip) / Number.parseInt(pax)).toFixed(2)
  }

  function calculateTotalTipPerPerson() {
    return ((Number.parseFloat(dollar) + (Number.parseFloat(dollar) * Number.parseFloat(tip))) / Number.parseInt(pax)).toFixed(2)
  }

  const handleReset = useCallback(() => {
    setTipPerPerson(0)
    setTotalPerPerson(0)

    setDollar('')
    setPax('')
    setTip(0)

    setDollarStatus('empty')
    setPaxStatus('empty')
    setTipStatus('empty')

    setDollarError(null)
    setPaxError(null)
    setTipError(null)
  }, [])

  useEffect(() => {
    setIsResetDisabled(
      dollar.length === 0 || 
      pax.length === 0 || 
      tip === 0 || 
      tipStatus === 'submitting' ||
      paxStatus === 'submitting' ||
      dollarStatus === 'submitting'
    )
  }, [dollar.length, dollarStatus, pax.length, paxStatus, tip, tipStatus])


  function handleSubmit(e) {
    e.preventDefault()

    setDollarStatus('submitting')
    setPaxStatus('submitting')
    setTipStatus('submitting')

    const isValid = validate()

    if(isValid) {
      calculateTip()
    }

    setDollarStatus('empty')
    setPaxStatus('empty')
    setTipStatus('empty')
  }

  function validate() {

    const isDollarValid = Number.parseFloat(dollar) > 0
    const isPaxValid = Number.parseInt(pax) > 0

    if(!isDollarValid) setDollarError(`Can't be zero`)
    if(!isPaxValid) setPaxError(`Can't be zero`)
    
    return isDollarValid && isPaxValid
  }

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
                  <InputSection
                    name="Bill"
                    icon={ iconDollar }
                    value={ dollar }
                    error={ dollarError}
                    onChange={ handleDollarChange }
                  />
                  <section className='my-10'>
                    <SelectTip
                      name="Select Tip %"
                      options={ tipOptions }
                      value={ tip }
                      onChange={ handleTipChange }
                    />
                  </section>
                  <InputSection
                    name="Number of people"
                    icon={ iconPerson }
                    value={ pax }
                    error={ paxError }
                    onChange={ handlePaxChange }
                  />
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12">
                <section className="relative p-10 pb-36 h-full w-full bg-verydarkcyan rounded-xl">
                  
                  <TipAmount 
                    name="Tip Amount"
                    amount={tipPerPerson.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  />
                  <div className="mt-12">
                    <TipAmount
                      name="Total"
                      amount={totalPerPerson.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    />
                  </div>
                  <div className="w-[calc(100%-80px)] absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center gap-3">
                    <button
                      onClick={ handleSubmit }
                      className="hover:bg-lightgrayishcyan w-full py-2 rounded uppercase text-verydarkcyan bg-primary"
                    >
                      Calculate
                    </button>
                    
                    <button
                      onClick={ handleReset }
                      disabled={ isResetDisabled }
                      className="hover:bg-lightgrayishcyan w-full py-2 rounded uppercase text-verydarkcyan bg-primary"
                    >
                      Reset
                    </button>
                  </div>
                  
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}