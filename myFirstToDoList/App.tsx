import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <Home />
      <StatusBar style="auto" />
    </Fragment>
  );
}

