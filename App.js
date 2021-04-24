import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

const App=()=> {
  const [person,setPerson]=useState([
    {name:'ab',id:1},
    {name:'cd',id:'2'},
    {name:'ef',id:'3'},
    {name:'gh',id:'4'},
    {name:'ij',id:'5'},
    {name:'kl',id:'6'},
    {name:'mn',id:'7'},
    {name:'op',id:'8'},
    {name:'qr',id:'9'},
    {name:'st',id:'10'},
    {name:'uv',id:'11'},
    {name:'wx',id:'12'},
    {name:'yz',id:'13'},
  ])
  
  return (
    <View style={styles.container}>
      
      {/* <ScrollView>

        {person.map(p=>{
          return(
            
            <View key={p.key}>
            <Text style={[styles.mapP,styles.boldText]}>{p.name}</Text>
            </View>
          )
          
        })}

      </ScrollView> */}


      {/* Flatlist is better to use considering the performance, also can use numColumns */}
      {/* Flatlist just loads data upto which the content could be scrolled while map loads all
      hence the better performance  */}

      <FlatList 
        numColumns={2}
        keyExtractor={(item)=>{return(item.id)}}
        data={person}
        renderItem={({item})=>{return(
          <Text style={[styles.mapP,styles.boldText]}>{item.name}</Text>)
        }}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50,
    marginHorizontal:20,
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mapP:{
    marginBottom:20,
    backgroundColor:'pink',
    padding:30,
    fontSize:25,
    marginHorizontal:10,
    width:165
  },
  boldText:{
    fontWeight:'bold'
  }
  
});

export default App;
