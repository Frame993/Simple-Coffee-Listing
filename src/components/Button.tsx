interface props {
    name: string,
    handleclick: () => void
    isAcitve?: boolean
}

export default function ({name, handleclick, isAcitve }: props) {
  return (
    <button className={`button ${isAcitve ? "active" : ""} text-lg md:text-lg px-4 py-2 rounded-lg`} onClick={handleclick}>{name} </button> 
  )
}
