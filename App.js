import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App=()=> {
  const [name,setName]=useState('');
  const [age,setAge]=useState()
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>React-native app</Text>
      </View>
      <View style={styles.body}>
        
        <Text>Enter name:</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(value)=>{setName(value)}}
        />

        <Text>Enter age:</Text>
        <TextInput 
          keyboardType='number-pad'
          style={styles.input}
          onChangeText={(value)=>{setAge(value)}}
        />

        <Text>name:{name} age:{age}</Text>
        <View >
          <Button title="Click me"/>
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
    backgroundColor:'white',
    padding:20,
  },
  bodyText:{
    color:'red',
    
  },
  input:{
    borderColor:'gray',
    borderWidth:1,
    padding:2,
    width:300
  }
  
});

export default App;
