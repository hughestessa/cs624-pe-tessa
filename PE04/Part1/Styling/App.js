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
            <Text style={styles.cardName}>
              Tessa Hughes
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              React Native Developer
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              Tessa is just learning about JavaScript and React Native, but she is doing a pretty good job so far.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'pink';

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
  cardName: {
    color: 'white',
    marginTop: 30,
},
cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
},
cardOccupation: {
    marginTop: 10,
    marginBottom: 10,
},
cardDescription: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
}
});
