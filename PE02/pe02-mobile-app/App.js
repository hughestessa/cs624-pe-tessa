import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
          source={require('./assets/cityUlogo.png')}
          style={{width: 184, height:66}}
          />
      <Text></Text>
      <Text style={styles.bold}>What is your favorite class?</Text>
      <TextInput
        style={{
          height: 40,
          //width: 300,
          borderColor: '#03243F',
          borderWidth: 2,
          padding: 24,
          borderRadius: 8,
          marginTop: 12,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 12,
        }}
        defaultValue="Enter your favorite class here"
        />
    </View>
    <View style={styles.container}>
      <Text></Text>
      <Text style={styles.bold}>Core Requirements (24 Credits)</Text>
      <Text>CS 504	Software Engineering</Text>
      <Text>CS 506	Programming for Computing</Text>
      <Text>CS 519	Cloud Computing Overview</Text>
      <Text>CS 533	Computer Architecture	</Text>
      <Text>CS 547	Secure Systems and Programs</Text>
      <Text>CS 622	Discrete Math and Algorithms for Computing</Text>
      <Text>DS 510	Artificial Intelligence for Data Science</Text>
      <Text>DS 620	Machine Learning & Deep Learning</Text>
      <Text></Text>
      <Text style={styles.bold}>Depth of Study (6 Credits)</Text>
      <Text>CS 624	Full-Stack Development I</Text>
      <Text>CS 628	Full-Stack Development II</Text>
      <Text></Text>
      <Text style={styles.bold}>Capstone (3 Credits)</Text>
      <Text>CS 687	Computer Science Capstone</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: 'black'
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#03243F',
    //textDecorationLine: 'underline'

  },
  
});

export default App;