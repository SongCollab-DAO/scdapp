import './global';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Navigation } from './navigation'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (      
        <ApplicationProvider
          {...eva}
          theme={{...eva.dark, ...theme}}
          customMapping={mapping}>
          <IconRegistry icons={EvaIconsPack} />
          <Navigation coloScheme={colorScheme} />
          <StatusBar />
        </ApplicationProvider>
    );
  }
}