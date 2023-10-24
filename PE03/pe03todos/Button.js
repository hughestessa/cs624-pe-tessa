import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

const Button = ({submitTodo}) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
          underlayColor='#b6d1b2' /* light green when pressed */
          style={styles.button}
          onPress={submitTodo} >
            <Text style={styles.submit}>SUBMIT</Text>
          </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'   
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff', /* white*/
        width: 100,
        marginRight: 5,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)', /* light gray*/
        justifyContent: 'center',
        alightItems: 'center',
    },
    submit: {
        color: '#666666', /*dark gray text for button*/
        fontWeight: '600',
    }
})

export default Button