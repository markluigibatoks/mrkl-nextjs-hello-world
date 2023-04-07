import { useMemo } from 'react'

export default function SelectTip ({ name, options, value, onChange }) {
  const ops = useMemo(() => {
    return options.map((x, index) => {

      return (
        <button
          key={ index }
          className={`${value === x ? 'text-verydarkcyan bg-primary' : 'text-white bg-verydarkcyan'} lg:col-span-4 hover:text-verydarkcyan hover:bg-primary/70 col-span-6 rounded py-2 text-2xl text-center`}
          onClick={() => { onChange(x) }}
        >
          {`${x * 100}%`}
        </button> 
      )
    })
  }, [onChange, options, value])
  

  return (
    <>
      <h2 className="mb-2 text-darkgrayishcyan">{ name }</h2>
      <div className="grid grid-cols-12 gap-3">
        { ops }
      </div>
    </>
  )
}