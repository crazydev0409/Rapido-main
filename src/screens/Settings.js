import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Linking,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import i18next from '../i18n/index';
import TopHeader from '../components/TopHeader';
import RenderListItems from '../components/RenderListItems';
import {AppContext} from '../common/context';
import {colors} from '../common/utils';

export default function Settings() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const {appLang, saveAppLanguage} = useContext(AppContext);
  const items = [
    {
      title: i18next.t('contact_rapido'),
      description: i18next.t('contact_desc'),
      handler: () =>
        Linking.openURL(`mailto:Rapidotransit@gmail.com?subject=Rapido`),
    },
    {
      title: i18next.t('about_rapido'),
      handler: () => navigation.navigate('About'),
    },
    {
      title: i18next.t('follow_us'),
      handler: () => Linking.openURL('https://linktr.ee/RapidoTransit'),
    },
    {
      title: i18next.t('language'),
      handler: () => {},
    },
  ];
  const languages = [
    {name: 'English', language: 'en'},
    {name: 'Español', language: 'es'},
  ];

  useEffect(() => {
    setChecked(appLang);
  }, []);

  const handleChangeLanguage = i => {
    setChecked(i.language);
    saveAppLanguage(i.language);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => handleChangeLanguage(item)}>
      <RadioButton
        value={item.language}
        status={checked == item.language ? 'checked' : 'unchecked'}
        onPress={() => handleChangeLanguage(item)}
        color={colors.primary}
        uncheckedColor={colors.primary}
      />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <TopHeader title={i18next.t('settings')} />
      <RenderListItems items={items} />
      <FlatList
        data={languages}
        keyExtractor={(i, index) => index.toString()}
        style={styles.langConatiner}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Regular',
    color:  colors.darkblack,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langConatiner: {
    marginHorizontal: 15,
    backgroundColor: colors.grey,
    borderRadius: 5,
    padding: 10,
  },
});
