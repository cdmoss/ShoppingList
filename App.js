import React, {useState} from "react";
import { View, Text, Image, StyleSheet, FlatList, Alert } from "react-native";
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values'
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Flour'},
    {id: uuidv4(), text: 'Butter'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}])
    }
    else {
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems]
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Chase's Idea of Atlas"/>
      <AddItem addItem={addItem} />
      <FlatList 
      data={items} 
      renderItem={({item}) => <ListItem item={item}
      deleteItem={deleteItem} />}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})



export default App;