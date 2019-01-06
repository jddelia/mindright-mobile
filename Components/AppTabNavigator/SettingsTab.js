import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Font } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

export default class Settings extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return (
            <AntDesign name="setting" size={24} color="#31336F" />
            );
        }
    }

    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
      };
    }

    componentWillMount() {
      (async () => {
        await Font.loadAsync({
          'Montserrat-Light': require('../../assets/fonts/Montserrat/Montserrat-Light.ttf'),
          'Montserrat': require('../../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
          'Staatliches': require('../../assets/fonts/Staatliches/Staatliches-Regular.ttf')
        });

        this.setState({
          isReady: true
        });
      })();
    }

    render() {

      if (!this.state.isReady) {
        return <AppLoading / >;
      }

      return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={styles.text}>MINDRIGHT</Text>
          </View>
          <Text style={styles.aboutTitle}>Control Your Focus</Text>
          <View style={styles.about}>
            <Text style={styles.aboutText}>
              This app allows you to enhance your focus...
            </Text>
            <Text style={styles.aboutText}>
              Find a quote that you like, and save
              it. Once saved, you can return to it
              throughout the day, to refocus your mind
              on it.
            </Text>
            <Text style={styles.aboutText}>
              If you no longer want it saved, simply 
              press the undo button to delete the quote
              from the saved section.
            </Text>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF0F4',
    paddingTop: '15%',
    alignItems: 'center'
  },
  logo: {
    padding: '2%',
    borderLeftWidth: 2,
    borderBottomWidth: 4,
    borderRightWidth: 2,
    borderTopWidth: 1,
    borderLeftColor: '#31336F',
    borderBottomColor: '#31336F',
    borderRightColor: '#31336F',
    borderTopColor: '#31336F',
    borderRadius: 50
  },
  text: {
    fontFamily: 'Staatliches',
    color: '#31336F',
    letterSpacing: 10,
    fontSize: 50
  },
  about: {
    padding: "6%",
    textAlign: "center",
  },
  aboutTitle: {
    fontFamily: "Montserrat-Light",
    color: '#31336F',
    marginTop: 20,
    fontSize: 20
  },
  aboutText: {
    fontFamily: "Montserrat-Light",
    color: '#31336F',
    margin: 10,
    fontSize: 16
  }
});
