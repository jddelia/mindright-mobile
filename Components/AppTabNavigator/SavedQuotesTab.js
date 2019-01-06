import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { AppLoading } from 'expo';
import { Font } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import QuoteCard from '../QuoteCard';

export default class SavedQuotesTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return (
            <AntDesign name="profile" size={24} color="#31336F" />
            );
        }
    }

    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
      };
      this.handleDelete = this.handleDelete.bind(this);
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

    handleDelete(key) {
      savedLength = this.props.screenProps[2].length;
      Alert.alert(`Deleted!`)
      let deleteQuote = this.props.screenProps[2].filter(quote => {
        return quote.key === key;
      });

      this.props.screenProps[1](deleteQuote)
    }

    render() {
      let cards = this.props.screenProps[2].map((card, index) => {
        return (
          <QuoteCard
            key={index + 1}
            index={card.key}
            onPress={this.handleDelete}
            cardTitle={card.title}
            cardContent={card.content}
            cardAuthor={card.author}
            buttonText="UNDO" />
        );
      })

      if (!this.state.isReady) {
        return <AppLoading / >;
      }

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
    height: 100
  }
});
