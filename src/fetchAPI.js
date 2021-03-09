export const fetchAllPlantsByPage = (pageNum) => {
  return fetch(`http://localhost:4000/plants/${pageNum}`)
    .then(response => response.json())
  }

export const fetchPlantDetails = (plantID) => {
  return fetch(`http://localhost:4000/plant/${plantID}`)
    .then(response => response.json())
}