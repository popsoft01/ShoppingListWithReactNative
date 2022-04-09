import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './component/Header';
import ListItem from './component/ListItem';
import { uuid } from 'uuid4';

function App() {
  const [item, setItem] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Juice'},
    {id: uuid(), text: 'Bread'},
  ]
  );

  <View style={styles.container}>
    <Header title={'Shopping List'} />
    <FlatList data={item} renderItem={({ item }) => 
      <ListItem />
    }/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 6,
  
  }
})
export default App;