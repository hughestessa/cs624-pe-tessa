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
    image: require('./assets/Chloe.jpg'),
    name: 'Chloe',
    occupation: 'Guinea Pig',
    description: 'Chloe likes to hang out with Tessa while she learns to code. '
    + 'Her favorite treats are carrots and lettuce. ',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Jane Eyre',
    occupation: 'Governess',
    description: 'Jane is a character in Tessa\'s favorite romance movie.',
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
    //alignSelf: 'center',
    backgroundColor: profileCardColor,
    margin: 5,
    width: 400,
    height: 230,
    //flex: 1,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: 5},
        shadowOpacity: 1
      },
      android: {
        elevation: 10
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    width: 65,
    height: 65,
    borderRadius: 60,
    marginTop: 15,
    paddingTop: 3,
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
    width: 55,
    height: 55,
    borderRadius: 60,
  },
  cardName: {
    color: 'white',
    marginTop: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold'
},
cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
},
cardOccupation: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold'
},
cardDescription: {
    fontStyle: 'italic', 
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 5
},
cardThumbnail: {
  transform: [{scale: 0.2}],

},
});