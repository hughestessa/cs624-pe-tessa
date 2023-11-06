import React, {Component} from 'react';
import { StyleSheet, Text, View,  Button, Image} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./assets/user.png')}/> 
          </View>
          <View>
            <Text>
              John Doe
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
});
