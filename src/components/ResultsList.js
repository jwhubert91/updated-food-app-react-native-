import React from "react"

// react native
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native"

// packages
import { useNavigation } from "@react-navigation/native"

// components
import ResultsDetail from "./ResultsDetail"

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation()

  // if no results, do not render component
  if (!results.length) return null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={(result) => {
          const { item } = result
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", {
                  id: item.id,
                })
              }
            >
              <ResultsDetail item={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
})

export default withNavigation(ResultsList)
