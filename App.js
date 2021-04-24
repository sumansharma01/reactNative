import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

const App=()=> {
  const [person,setPerson]=useState([
    {name:'ab',key:1},
    {name:'cd',key:'2'},
    {name:'ef',key:'3'},
    {name:'gh',key:'4'},
    {name:'ij',key:'5'},
    {name:'kl',key:'6'},
    {name:'mn',key:'7'},
    {name:'op',key:'8'},
    {name:'qr',key:'9'},
    {name:'st',key:'10'},
    {name:'uv',key:'11'},
    {name:'wx',key:'12'},
    {name:'yz',key:13},
  ])
  
  return (
    <View style={styles.container}>
      
      <ScrollView>

        {person.map(p=>{
          return(
            
            <View key={p.key}>
            <Text style={[styles.mapP,styles.boldText]}>{p.name}</Text>
            </View>
          )
          
        })}

      </ScrollView>
      
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
    fontSize:25
  },
  boldText:{
    fontWeight:'bold'
  }
  
});

export default App;
