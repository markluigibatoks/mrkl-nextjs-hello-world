import { useId } from 'react'
import Image from 'next/image'
import MyInput from '@/components/MyInput'

export default function InputSection ({ name, icon }) {
  const uniqueID = useId()
  return (
    <>
      <div>
        <label
          htmlFor={ uniqueID }
          className="text-darkgrayishcyan"
        >
          { name }
        </label>
        <div className="relative mt-2">
          <figure className="absolute left-4 top-1/2 -translate-y-1/2">
            <Image src={ icon } alt="icon"/>
          </figure>
          <MyInput id={ uniqueID }/>
        </div>
      </div>
    </>
  )
}