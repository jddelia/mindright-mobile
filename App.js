import React, { Component } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Components/MainScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "intro"
    };
    this.router = this.router.bind(this);
  }

  router(page) {
    this.setState({ currentScreen: page });
  }

  renderScreen() {
    const { currentScreen } = this.state;
    switch (currentScreen) {
      case "intro":
        return <Intro router={this.router}/>;
      case "next page":
        return <AppStackNavContainer />;
      default:
        return <Text style={styles.introText}>Something went wrong</Text>;
    }
  }

  render() {
    return this.renderScreen();
  }
}

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      springVal: new Animated.Value(0.8),
      fadeVal: new Animated.Value(1)
    };
  }

  componentDidMount() {
    setTimeout(() => this.spring(), 1000);
  }

  spring() {
    Animated.sequence([
      Animated.spring(this.state.springVal, {
        toValue: 0.6,
        friction: 7,
        tension: 20
      }),
      Animated.parallel([
        Animated.spring(this.state.springVal, {
          toValue: 17.5,
          friction: 7,
          tension: 5
        }),
        Animated.timing(this.state.fadeVal, {
          toValue: 0,
          duration: 100
        })
      ])
    ]).start(() => this.props.router("next page"));
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.center}>
          <Animated.Text
            style={{
              opacity: this.state.fadeVal,
              transform: [{ scale: this.state.springVal }]
            }}>
              <Text style={styles.introText}>MINDRIGHT</Text>
          </Animated.Text>
        </View>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({

  Main: {
    screen: MainScreen
  }
});

const AppStackNavContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#EBF0F4',
  },
  center: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  introText: {
    color: '#31336F',
    letterSpacing: 10,
    fontSize: 50
  }
});