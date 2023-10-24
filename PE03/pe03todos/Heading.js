import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>Tessa's{"\n"}To Do List</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 68,
        color: 'rgba(175, 47, 47, 0.5)',
        fontWeight: '200',
    },
});

export default Heading;