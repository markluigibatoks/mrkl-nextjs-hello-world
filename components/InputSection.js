import { useId } from 'react'
import Image from 'next/image'

export default function InputSection ({ name, icon, value, error, onChange }) {
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
          <input
            value={ value }
            onChange={ onChange }
            id={ uniqueID }
            type="number" min="0"
            className={`${!error ? 'border-0' : 'border border-red-500'} pr-2 pl-10 w-full h-full rounded text-right text-2xl text-grayishcyan bg-verylightgrayishcyan`}
          />
        </div>
      </div>
    </>
  )
}