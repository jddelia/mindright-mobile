import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class QuoteCard extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
     
    handlePress() {
      this.props.onPress(this.props.index);
    }

    render() {

        const images = {
        };

        return (
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={this.handlePress}>
                    <Text style={styles.buttonText}>{this.props.buttonText}</Text>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <Text style={styles.cardTitle}>{this.props.cardTitle}</Text>
                    <Text style={styles.cardContent}>{this.props.cardContent}</Text>
                    <Text style={styles.cardAuthor}>{this.props.cardAuthor}</Text>
                </View>
            </View>
        );
    }
}

export default QuoteCard;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "column",
        height: 230,
        width: 300,
        marginTop: "8%",
        padding: '2%',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderLeftColor: '#ffffff',
        borderBottomColor: '#ffffff',
        borderRightColor: '#ffffff',
        borderTopColor: '#ffffff',
        backgroundColor: "#ffffff",
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1
    },
    cardTitle: {
        fontFamily: 'Staatliches',
        fontSize: 24,
        color: '#555555',
        letterSpacing: 4,
        paddingLeft: '4%',
        marginTop: 0,
        marginBottom: '1%'
      },
      cardContent: {
        fontFamily: 'Montserrat-Light',
        marginTop: "1%",
        paddingLeft: "2%",
        letterSpacing: 4,
        fontSize: 12
      },
      cardAuthor: {
        alignSelf: "flex-end",
        fontFamily: 'Montserrat',
        marginTop: '1%',
        paddingRight: "2%",
        letterSpacing: 1
      },
    saveButton: {
        alignSelf: "flex-end",
        paddingRight: "2%",
        height: 25,
        width: 60,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderLeftColor: '#5895aa',
        borderBottomColor: '#5895aa',
        borderRightColor: '#5895aa',
        borderTopColor: '#5895aa',
        backgroundColor: "#5895aa",
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1
    },
    buttonText: {
        color: "#ffffff",
        alignSelf: "center",
        fontSize: 14
    }
});