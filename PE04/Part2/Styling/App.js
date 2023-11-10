import React, {Component} from 'react';
import { StyleSheet, Text, View,  Button, Image, Platform, TouchableHighlight, ScrollView} from 'react-native';
import PropTypes from 'prop-types'; 
import update from 'immutability-helper'; 

const userImage = require('./assets/user.png');

const data = [{
    image: userImage,
    name: 'Tessa Hughes',
    occupation: 'React Native Developer',
    description: 'Tessa is just learning about JavaScript and React Native, ' 
    + 'but she is doing a pretty good job so far. ' ,
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is another person.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Jane Eyre',
    occupation: 'Governess',
    description: 'Jane is a character is a romance book.',
    showThumbnail: true
  }
];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}> 
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image}/>
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
    const list = this.state.data.map(function(item, index) { 
      const { image, name, occupation, description, showThumbnail } = item;
      return <ProfileCard key={'card-' + index}
                   image={image}
                   name={name}
                   occupation={occupation}
                   description={description}
                   onPress={this.handleProfileCardPress.bind(this, index)}
                   showThumbnail={showThumbnail}/>
    }, this);

    return (
      
      <View style={styles.container}>
        <ScrollView>
          {list} 
        </ScrollView>
      </View>
      
    );
  }
}

const profileCardColor = 'pink';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#728cd4',
  },
  cardContainer: {
    alignSelf: 'center',
    backgroundColor: profileCardColor,
    margin: 10,
    width: 300,
    height: 400,
    flex: 1,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: 10},
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
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
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: 5},
        shadowOpacity: 1
      },
      android: {
        elevation: 15,
        borderColor: 'black',
        borderWidth: 3
      }
    })
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardName: {
    color: 'white',
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold'
},
cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
},
cardOccupation: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
},
cardDescription: {
    fontStyle: 'italic', 
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
},
cardThumbnail: {
  transform: [{scale: 0.2}],

},
});