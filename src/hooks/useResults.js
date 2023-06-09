import { useEffect, useState } from "react"
import yelp from "../api/yelp"

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Brooklyn",
        },
      })
      setErrorMessage("")
      setResults(response.data.businesses)
    } catch (err) {
      console.log(err)
      setErrorMessage("Something went wrong")
    }
  }

  // call searchApi when component is rendered
  useEffect(() => {
    searchApi("coffee")
  }, [])

  return [searchApi, results, errorMessage]
}
