import React from 'react';
import { StatusBar } from 'react-native';
import '~/config/ReactotronConfig';
import Routes from '~/routes';
import { WebView } from 'react-native-webview'; 

export const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE"/>
    <Routes />
  </>
);


