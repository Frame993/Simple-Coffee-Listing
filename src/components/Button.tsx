interface props {
    name: string,
    handleclick: () => void
    active?: boolean
}

export default function ({name, handleclick }: props) {
  return (
    <button className="text-lg md:text-lg px-4 py-2 rounded-lg hover:bg-text-color-secondary" onClick={handleclick} >{name}</button> 
  )
}
