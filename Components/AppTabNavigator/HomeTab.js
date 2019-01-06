import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { AppLoading } from 'expo';
import { Font } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import QuoteCard from '../QuoteCard';
import Quotes from '../data/Quotes';

export default class HomeScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return (
            <AntDesign name="home" size={24} color="#31336F" />
            );
        }
    }

    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
        quotes: Quotes,
        savedQuotes: null
      };
      this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
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

    handleSave(key) {
      Alert.alert('Saved!')
      let quote = this.state.quotes.filter(q => {
        return q.key === key;
      });

      this.props.screenProps[0](quote)
    }

    render() {

      if (!this.state.isReady) {
        return <AppLoading / >;
      }

      let cards = this.state.quotes.map((card, index) => {
        return (
          <QuoteCard
            key={index + 1}
            index={card.key}
            onPress={this.handleSave}
            cardTitle={card.title}
            cardContent={card.content}
            cardAuthor={card.author}
            buttonText="SAVE" />
        );
      });

      return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>MINDRIGHT</Text>
          </View>
          <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{width: "100%", marginTop: "10%", alignItems: "center", paddingStart: 5, paddingEnd: 5}}>
            {cards}
            <View style={styles.footer}></View>
          </ScrollView>
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
  logoText: {
    fontFamily: 'Staatliches',
    color: '#31336F',
    letterSpacing: 10,
    fontSize: 50
  },
  footer: {
    height: 100,
  }
});
