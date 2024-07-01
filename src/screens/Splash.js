import React, {useContext} from 'react';
import {ImageBackground} from 'react-native';
import {AppContext} from '../common/context';
import {images} from '../common/utils';

export default function Splash() {
  const {appLang} = useContext(AppContext);
  return (
    <ImageBackground
      source={appLang == 'en' ? images.splash : images.ssplash}
      style={{flex: 1}}
    />
  );
}
