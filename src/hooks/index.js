import { useState, useEffect} from 'react'

const useGetPets = (url) => {
  //const [estado, funcionQueActualiza] = useState(estado inicial)
  const [pets, setPets] = useState([])
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPets(data))
  }, [])

  return pets
}

export default useGetPets