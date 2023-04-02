import { useMemo } from 'react'

export default function SelectTip ({ name, options }) {
  const ops = useMemo(() => {
    return options.map((x, index) => {

      return (
        <div
          key={ index }
          className={`${x === 'Custom' ? 'bg-verylightgrayishcyan' : 'bg-verydarkcyan'} lg:col-span-4 col-span-6 rounded py-2 text-white text-2xl text-center`}
        >
          { x === 'Custom' ? <input type="number" placeholder='Custom' className="w-full text-center text-grayishcyan bg-verylightgrayishcyan"/> : x }
        </div>
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