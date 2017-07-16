import {
  DrawerNavigator, StackNavigator
} from 'react-navigation';


import Home from "../containers/ApplicationTabs/Home"
import Activity2 from '../containers/ApplicationTabs/Activity2';


const Drawer = DrawerNavigator(
    {
      Home: {
          screen: Home,
          navigationOptions: {
            title: 'Home'
        }
      },
      Activity2: {
          screen: Activity2,
          navigationOptions: {
            title: 'Activity2'
        }
      }
  }, 
  // {
  //   navigationOptions: {
  //       title: ({ state }) => {
  //           if (state.params) {
  //               return `${state.params.title}`;
  //           }
  //       }
  //   }
  // }
);

const AppNavigator = StackNavigator({
    Drawer: {
      screen: Drawer  ,
      navigationOptions: {
        title: 'Home'
      }
    }
});


export default AppNavigator;
