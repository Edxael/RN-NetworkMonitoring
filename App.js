import 'react-native-gesture-handler';
import React from 'react';
import { PaperProvider } from 'react-native-paper';

import NavComp from './src/Views/00-NavComp'

export default function App() {
  return ( 
    <PaperProvider>
      <NavComp /> 
    </PaperProvider>
  );
}