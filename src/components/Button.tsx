interface props {
    name: string,
    handleclick: () => void
}

export default function ({name, handleclick }: props) {
  return (
    <button className="button text-lg md:text-lg px-4 py-2 rounded-lg" onClick={handleclick}>{name}</button> 
  )
}
