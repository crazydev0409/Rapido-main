import React from 'react';
import {Linking, SafeAreaView, Share, StyleSheet, Text} from 'react-native';
import i18next from 'i18next';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
import DeviceInfo from 'react-native-device-info';
import RenderListItems from '../components/RenderListItems';
import TopHeader from '../components/TopHeader';
import {colors} from '../common/utils';

export default function About() {
  const versionNumber = DeviceInfo.getVersion();
  const items = [
    {
      title: i18next.t('contect_dev'),
      description: i18next.t('dev_desc'),
      handler: () =>
        Linking.openURL(
          `mailto:Rapidotransit@gmail.com?subject=Rapido&body=Version%3A%20${versionNumber}%0A%0A`,
        ),
    },
    {title: i18next.t('share'), handler: () => handleShare()},
    {
      title: i18next.t('version'),
      description: versionNumber,
      handler: () => {},
      holdHandler: () => setVersionOnClipboard(),
    },
  ];

  const setVersionOnClipboard = async () => {
    Clipboard.setString(`Rapido Version: ${versionNumber}`);
    Toast.show(i18next.t('copied'));
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message:
          i18next.t('share_msg') +
          'https://play.google.com/store/apps/details?id=com.demerstech.amesride',
      });
    } catch (e) {
      console.error(e);
      Toast.show(i18next.t('share_failed'), Toast.BOTTOM);
    }
  };

  return (
    <SafeAreaView>
      <TopHeader title={i18next.t('about_rapido')} />
      <Text style={styles.text}>{i18next.t('about_desc')}</Text>
      <RenderListItems items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Regular',
    marginHorizontal: 15,
    marginVertical: 10,
    color: colors.black,
  },
});
