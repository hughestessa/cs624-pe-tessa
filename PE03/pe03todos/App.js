
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log('Input Value: ',inputValue);
    this.setState({inputValue});
  }
  
  render() {
    const {inputValue} = this.state;
    return (
    <View style={styles.container}>
      <ScrollView keyboardSouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input
          inputValue={inputValue}
          inputChange={text => this.inputChange(text)} />
      </ScrollView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;