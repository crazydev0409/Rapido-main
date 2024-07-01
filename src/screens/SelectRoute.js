import React, {useContext, useEffect, useReducer, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {List} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import RouteSelect from '../components/RouteSelect';
import i18next from '../i18n/index';
import {
  colors,
  images,
  south,
  north,
  parkingTolynn,
  lynnToparking,
  adinathToHoney,
  honeyToAdinath,
  PrimeToAdinath,
  adinathToPrime,
  losodeliToRinconada,
  rinconadaToLosodeli,
  ColotepecToPECentro,
  PECentroToColotepec,
  PECentroToPochutla,
  PochutlaToPECentro,
} from '../common/utils';
import {AppContext} from '../common/context';

export default function SelectRoute() {
  const {setRoute, route, setRoutes, routes} = useContext(AppContext);
  const [isFilter, setFilter] = useState(false);
  const [checked, setChecked] = useState(null);
  const navigation = useNavigation();

  // useEffect(() => {
  //   setRoutes(ROUTES);
  // }, []);
  const ROUTES = [
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 0,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color:'#3A9E3E'
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 0,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color:'#3A9E3E'
    // },
    // {
    //   id: 3,
    //   number: 2,
    //   deviceId: 1,
    //   name: i18next.t('parkingToLynn'),
    //   str: 'parkingToLynn',
    //   waypoints: parkingTolynn,
    // },
    // {
    //   id: 4,
    //   number: 2,
    //   deviceId: 1,
    //   name: i18next.t('lynnToParking'),
    //   str: 'lynnToParking',
    //   waypoints: lynnToparking,
    // },
    // {
    //   id: 5,
    //   number: 2,
    //   deviceId: 6191,
    //   name: i18next.t('losodeliToRinconada'),
    //   str: 'losodeliToRinconada',
    //   waypoints: losodeliToRinconada,
    //   color:'#FA6748'
    // },
    // {
    //   id: 6,
    //   number: 2,
    //   deviceId: 6191,
    //   name: i18next.t('rinconadaToLosodeli'),
    //   str: 'rinconadaToLosodeli',
    //   waypoints: rinconadaToLosodeli,
    //   color:'#FA6748'
    // },
    // {
    //   id: 7,
    //   number: 3,
    //   deviceId: 6191,
    //   name: i18next.t('PECentroToColotepec'),
    //   str: 'PECentroToColotepec',
    //   waypoints: PECentroToColotepec,
    //   color:'#486EFA'
    // },
    // {
    //   id: 8,
    //   number: 3,
    //   deviceId: 6191,
    //   name: i18next.t('ColotepecToPECentro'),
    //   str: 'ColotepecToPECentro',
    //   waypoints: ColotepecToPECentro,
    //   color:'#486EFA'
    // },
    // {
    //   id: 9,
    //   number: 4,
    //   deviceId: 6191,
    //   name: i18next.t('PECentroToPochutla'),
    //   str: 'PECentroToPochutla',
    //   waypoints: PECentroToPochutla,
    //   color:'#D648FA'
    // },
    // {
    //   id: 10,
    //   number: 4,
    //   deviceId: 6191,
    //   name: i18next.t('PochutlaToPECentro'),
    //   str: 'PochutlaToPECentro',
    //   waypoints: PochutlaToPECentro,
    //   color:'#D648FA'
    // },
    {
      id: 7,
      number: 3,
      // deviceId: 6075,
      deviceId: 828,
      name: i18next.t('adinathToHoney'),
      str: 'adinathToHoney',
      waypoints: adinathToHoney,
      color: '#000',
      markervisible: true,
    },
    {
      id: 8,
      number: 3,
      // deviceId: 6075,
      deviceId: 828,
      name: i18next.t('honeyToAdinath'),
      str: 'honeyToAdinath',
      waypoints: honeyToAdinath,
      color: '#000',
      markervisible: null,
    },
    // {
    //   id: 9,
    //   number: 4,
    //   deviceId: 6075,
    //   name: i18next.t('adinathToPrime'),
    //   str: 'adinathToPrime',
    //   waypoints: adinathToPrime,
    // },
    // {
    //   id: 10,
    //   number: 4,
    //   deviceId: 6075,
    //   name: i18next.t('primeToAdinath'),
    //   str: 'primeToAdinath',
    //   waypoints: PrimeToAdinath,
    // },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <RouteSelect
        placeholder={i18next.t('select_route')}
        rightIcon={isFilter ? images.check : images.filter}
        onRoutePress={() => navigation.goBack()}
        onSettingsPress={() => {
          if (route && (checked >= 1 || checked == 0)) {
            navigation.navigate('Home');
          } else {
            setFilter(!isFilter);
          }
        }}
        style={{borderWidth: 1, borderColor: colors.primary}}
      />
      <ScrollView>
        {routes.map((i, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setRoute(i);
              // setRoutes(ROUTES);
              navigation.navigate('Home');
            }}>
            <List.Item
              key={index}
              title={i.name}
              left={() => (
                <LinearGradient
                  colors={[i.color, colors.white]}
                  start={{x: 0, y: 1}}
                  end={{x: 2.5, y: 1}}
                  style={styles.gradient}>
                  <Text
                    style={{
                      color: colors.white,
                      fontSize: 18,
                      fontFamily: 'Lato-Regular',
                    }}>
                    {i.number}
                  </Text>
                </LinearGradient>
              )}
              right={() =>
                isFilter && (
                  <Pressable
                    style={{alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => {
                      if (index == checked) {
                        setChecked(null);
                        setRoute(null);
                      } else {
                        setChecked(index);
                        setRoute(i);
                      }
                      // checked.includes(index)
                      //   ? setChecked(checked.filter(i => i != index))
                      //   : setChecked([...checked, index])
                    }}>
                    <Image
                      source={
                        // checked.includes(index)
                        checked == index ? images.checked_rect : images.rect
                      }
                      style={{height: 20, width: 20}}
                    />
                  </Pressable>
                )
              }
              style={{paddingHorizontal: 10}}
              titleStyle={{fontFamily: 'Lato-Bold'}}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
