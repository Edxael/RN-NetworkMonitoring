import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeView from './01-HomeView';
import TimerView from './02-TimerView';
import CountDwView from './03-CountDwView';

const Drawer = createDrawerNavigator();

const NavComp = () => {
    return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name="Home" component={HomeView} />
              <Drawer.Screen name="Timer" component={TimerView} />
              <Drawer.Screen name="CountDw" component={CountDwView} />
          </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
  export default NavComp;
