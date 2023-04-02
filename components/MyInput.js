export default function MyInput({ id }) {
  return (
    <>
      <input 
          id={ id }
          type="number" min="0"
          className="pr-2 pl-10 w-full h-full rounded text-right text-2xl text-grayishcyan bg-verylightgrayishcyan"
        />
    </>
  )
}