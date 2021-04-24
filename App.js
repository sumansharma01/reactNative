import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App=()=> {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>React-native app</Text>
      </View>
      <View style={styles.body}>
        <Text style={[styles.boldText, styles.bodyText]}>{Math.ceil(Math.random()*10)}</Text>
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
