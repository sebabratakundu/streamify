export default function Card({children, title, action}) {
  return (
    <>
    <div className="shadow-sm rounded p-10 text-black">
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>
      <div className="mb-8">{children}</div>
      <div>{action}</div>
    </div>
    </>
  )
}