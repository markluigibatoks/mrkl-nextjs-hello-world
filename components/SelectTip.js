import { useMemo } from 'react'

export default function SelectTip ({ name, options }) {
  const ops = useMemo(() => {
    return options.map((x, index) => {

      return (
        x === 'Custom' ?
        <input
          type="number"
          placeholder='Custom'
          className="lg:col-span-4 col-span-6 rounded w-full text-2xl text-center text-grayishcyan bg-verylightgrayishcyan"
        /> :
        <button
          key={ index }
          className="lg:col-span-4 col-span-6 rounded py-2 text-white text-2xl text-center bg-verydarkcyan"
        >
          {x}
        </button> 

      )
    })
  }, [options])
  

  return (
    <>
      <h2 className="mb-2 text-darkgrayishcyan">{ name }</h2>
      <div className="grid grid-cols-12 gap-3">
        { ops }
      </div>
    </>
  )
}