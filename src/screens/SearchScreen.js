import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import useResults from "../hooks/useResults"

// components
import SearchBar from "../components/SearchBar"
import ResultsList from "../components/ResultsList"
import { ScrollView } from "react-native-gesture-handler"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  description: {
    marginLeft: 10,
  },
})

export default SearchScreen
