export default function TipAmount ({ name, amount }) {

  return (
    <>
      <div className="flex justify-between items-center gap-5">
        <h2 className="text-white">{ name } <span className="block text-sm text-grayishcyan">/ person</span></h2>
        <em className="text-5xl not-italic text-primary">${ amount }</em>
      </div>
    </>
  )
}