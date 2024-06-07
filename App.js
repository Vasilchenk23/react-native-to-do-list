import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfitems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Купить БМВ', key: '2'},
    {text: 'Купить картошку', key: '3'},
    {text: 'Стать трейдером', key: '4'},
    {text: 'Купить торт Кастету', key: '5'},
  ])

  const addHandler = (text) => {
    setListOfitems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfitems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View>
      <Header/>
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => (
          <ListItem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
