import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import {
  ColotepecToPECentro,
  PECentroToColotepec,
  PECentroToPochutla,
  PochutlaToPECentro,
  PrimeToAdinath,
  adinathToHoney,
  adinathToPrime,
  honeyToAdinath,
  losodeliToRinconada,
  north,
  rinconadaToLosodeli,
  south,
} from "./utils";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appLang, setAppLang] = useState("en");
  const [route, setRoute] = useState(null);
  const [routes, setRoutes] = useState([
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 6219,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 6219,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color: '#3A9E3E',
    // },
    {
      id: 1,
      number: 1,
      deviceId: [6221, 6222, 6223, 6224, 6225, 6191, 6226, 6228],
      name: i18next.t("centerToWindow"),
      str: "centerToWindow",
      waypoints: south,
      color: "#3A9E3E",
    },
    {
      id: 2,
      number: 1,
      deviceId: [6221, 6222, 6223, 6224, 6225, 6191, 6226, 6228],
      name: i18next.t("windowToCenter"),
      str: "windowToCenter",
      waypoints: north,
      color: "#3A9E3E",
    },
    // {
    //   id: 3,
    //   number: 3,
    //   deviceId: [963],
    //   name: i18next.t('adinathToPrime'),
    //   str: 'adinathToPrime',
    //   waypoints: adinathToPrime,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 4,
    //   number: 3,
    //   deviceId: [963],
    //   name: i18next.t('primeToAdinath'),
    //   str: 'primeToAdinath',
    //   waypoints: PrimeToAdinath,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 6222,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 6222,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 6223,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 6223,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 6224,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 6224,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 6191,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 6191,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 6225,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 6225,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 6226,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 6226,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 1,
    //   number: 1,
    //   deviceId: 6228,
    //   name: i18next.t('centerToWindow'),
    //   str: 'centerToWindow',
    //   waypoints: south,
    //   color: '#3A9E3E',
    // },
    // {
    //   id: 2,
    //   number: 1,
    //   deviceId: 6228,
    //   name: i18next.t('windowToCenter'),
    //   str: 'windowToCenter',
    //   waypoints: north,
    //   color: '#3A9E3E',
    // },

    // {
    //   id: 5,
    //   number: 2,
    //   deviceId: 6219,
    //   deviceId: 6220,
    //   name: i18next.t('losodeliToRinconada'),
    //   str: 'losodeliToRinconada',
    //   waypoints: losodeliToRinconada,
    //   color: '#FA6748',
    // },
    // {
    //   id: 6,
    //   number: 2,
    //   deviceId: 6219,
    //   deviceId: 6220,
    //   name: i18next.t('rinconadaToLosodeli'),
    //   str: 'rinconadaToLosodeli',
    //   waypoints: rinconadaToLosodeli,
    //   color: '#FA6748',
    // },
    {
      id: 5,
      number: 2,
      deviceId: [6219, 6220],
      name: i18next.t("losodeliToRinconada"),
      str: "losodeliToRinconada",
      waypoints: losodeliToRinconada,
      color: "#FA6748",
    },
    {
      id: 6,
      number: 2,
      deviceId: [6219, 6220],
      name: i18next.t("rinconadaToLosodeli"),
      str: "rinconadaToLosodeli",
      waypoints: rinconadaToLosodeli,
      color: "#FA6748",
    },

    // {
    //   id: 7,
    //   number: 3,
    //   deviceId: 6191,
    //   name: i18next.t('PECentroToColotepec'),
    //   str: 'PECentroToColotepec',
    // waypoints: PECentroToColotepec,
    //   color:'#486EFA'
    // },
    // {
    //   id: 8,
    //   number: 3,
    //   deviceId: 6191,
    //   name: i18next.t('ColotepecToPECentro'),
    //   str: 'ColotepecToPECentro',
    // waypoints: ColotepecToPECentro,
    //   color:'#486EFA'
    // },
    // {
    //   id: 9,
    //   number: 4,
    //   deviceId: 6191,
    //   name: i18next.t('PECentroToPochutla'),
    //   str: 'PECentroToPochutla',
    // waypoints: PECentroToPochutla,
    //   color:'#D648FA'
    // },
    // {
    //   id: 10,
    //   number: 4,
    //   deviceId: 6191,
    //   name: i18next.t('PochutlaToPECentro'),
    //   str: 'PochutlaToPECentro',
    // waypoints: PochutlaToPECentro,
    //   color:'#D648FA'
    // },
    //   {
    //   id: 7,
    //   number: 3,
    //   // deviceId: 963,
    //   deviceId: [828],
    //   name: i18next.t('adinathToHoney'),
    //   str: 'adinathToHoney',
    //   waypoints: adinathToHoney,
    //   color: '#000',
    //   markervisible: true,
    // },
    // {
    //   id: 8,
    //   number: 3,
    //   // deviceId: 963,
    //   deviceId: [828],
    //   name: i18next.t('honeyToAdinath'),
    //   str: 'honeyToAdinath',
    //   waypoints: honeyToAdinath,
    //   color: '#000',
    //   markervisible: null,
    // },
  ]);
  const [newRoute, setNewRoute] = useState(null);
  const [allRoutes, setallRoutes] = useState(false);

  useEffect(() => {
    loadAppLanguage();
    loadRoutes();
  }, []);

  async function saveAppLanguage(lang) {
    try {
      await AsyncStorage.setItem("appLang", lang);
      i18next.changeLanguage(lang);
      setAppLang(lang);
    } catch (error) {
      console.log("Error saving app language:", error);
    }
  }

  async function loadAppLanguage() {
    try {
      const lang = await AsyncStorage.getItem("appLang");
      if (lang) {
        i18next.changeLanguage(lang);
        setAppLang(lang);
      }
    } catch (error) {
      console.log("Error loading app language:", error);
    }
  }

  async function saveRoutes(name) {
    try {
      await AsyncStorage.setItem("routes", name);
      setNewRoute(name);
    } catch (error) {
      console.log("Error saving app language:", error);
    }
  }

  async function loadRoutes() {
    try {
      const data = await AsyncStorage.getItem("routes");
      if (data) {
        // const jsonData = JSON.parse(data);
        setNewRoute(data);
      }
    } catch (error) {
      console.log("Error loading app language:", error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        appLang,
        saveAppLanguage,
        route,
        setRoute,
        routes,
        setRoutes,
        newRoute,
        saveRoutes,
        allRoutes,
        setallRoutes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
