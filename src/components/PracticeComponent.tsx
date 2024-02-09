/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  
} from 'react-native';

function PracticeComponent(): React.JSX.Element {
  const image = {
    uri: 'https://1.bp.blogspot.com/-7T9goYXMvh8/X4figPWzrkI/AAAAAAAALM8/4qySAHPwdJ0M3AIxhINOf6AIChN2hMzawCLcBGAsYHQ/s540/image_11586699432280.jpg',
  };

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <View>
        <Text style={styles.Header}> Add Agent </Text>
      </View>
      <View>
      <View style={styles.alignInputFiels}>
          <Text>Enter Agent Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Agent Name"></TextInput>
        </View>

        <View style={styles.alignInputFiels}>
          <Text>Enter Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Agent Email"></TextInput>
        </View>

        <View style={styles.alignInputFiels}>
          <Text>Enter Village</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Agent Village"></TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Add Agent</Text>
      </TouchableOpacity>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  alignMent: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    borderColor: 'green',
  },
  alignInputFiels: {
    margin: 10,
    left: 10,
    padding: 5,
    gap: 5,
    top: 100,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    height: 50,
    borderRadius: 40,
    top: 200,
    maxWidth: 300,
    left: 60,
  },
  submitButtonText: {
    color: 'white',
  },
  Header: {
    fontSize: 30,
    fontFamily: 'Arial',
    color: 'green',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default PracticeComponent;
