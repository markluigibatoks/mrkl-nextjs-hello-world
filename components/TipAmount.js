export default function TipAmount ({ amount }) {

  return (
    <>
      <div className="flex justify-between items-center gap-5">
        <h2 className="text-white">Tip Amount <span className="block text-sm text-grayishcyan">/ person</span></h2>
        <em className="text-5xl not-italic text-primary">${ amount }</em>
      </div>
    </>
  )
}