import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App=()=> {
  const [name,setName]=useState('Suman');
  const [person,setPerson]=useState({
    name:'Binod', age:31
  })
  const handlePress=()=>{
    setName('Pujan');
    setPerson({name:'Tek', age:22})
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>React-native app</Text>
      </View>
      <View style={styles.body}>
        <Text style={[styles.bodyText]}>Using the useState</Text>
        <Text style={[styles.bodyText]}>Hey, my name is {name}</Text>
        <Text style={[styles.bodyText]}>His name is {person.name} and he is {person.age} years old.</Text>
        <View >
          <Button title="Click me" onPress={handlePress}/>
        </View>

      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText:{
    fontWeight:'bold'
  },
  header:{
    backgroundColor:'red',
    padding:20,
  },
  body:{
    backgroundColor:'black',
    padding:20,
  },
  bodyText:{
    color:'red',
    
  }
  
});

export default App;
