import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import SavedQuotesTab from './AppTabNavigator/SavedQuotesTab';
import SettingsTab from './AppTabNavigator/SettingsTab';
import Quotes from './data/Quotes';

class MainScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
      super(props);
      this.state = {
        savedQuotes: []
      };
      this.handleSavePress = this.handleSavePress.bind(this);
      this.handleDeletePress = this.handleDeletePress.bind(this);
    }

    handleSavePress(quote) {
      let savedQuotes = this.state.savedQuotes.concat(quote);
      this.setState({
        savedQuotes: savedQuotes
      });
    }

    handleDeletePress(quote) {
      let savedQuotes = this.state.savedQuotes.filter(item => {
        return quote[0].key !== item.key;
      });

      this.setState({
        savedQuotes: savedQuotes
      });
    }

    render() {
        return (
            <AppTabNavContainer screenProps={[this.handleSavePress, this.handleDeletePress, this.state.savedQuotes]} />
        );
    }
}

export default MainScreen;

const AppTabNavigator = createMaterialTopTabNavigator({
    SettingsTab: {
      screen: SettingsTab
    },
    HomeTab: {
      screen: HomeTab
    },
    SavedQuotesTab: {
      screen: SavedQuotesTab
    }
},
{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: "#EBF0F6"
        },
    }
});

const AppTabNavContainer = createAppContainer(AppTabNavigator);
