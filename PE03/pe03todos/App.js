
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';

let todoIndex = 0

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.submitTodo = this.submitToDo.bind(this)
  }

  inputChange(inputValue) {
    console.log('Input Value: ',inputValue);
    this.setState({inputValue});
  }

  submitToDo () {
    if(this.state.inputValue.match(/^\s8$/)){
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({todos, inputValue: ''}, () => {
      console.log('State: ', this.state)
    })
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
          <Button submitTodo={this.submitTodo} />
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