import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';


export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light'? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light'? styles.lightContainer : styles.darkContainer; 
  return (
    <View style={styles.container}>
      <Text style={[styles.text, themeTextStyle]}> Color scheme: {colorScheme}</Text>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightContainer:{
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#FFFF00',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#0000FF',
  },
});
