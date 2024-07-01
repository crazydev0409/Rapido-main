import React, { useContext, useEffect, useRef, useState } from "react";
import haversine from "haversine";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { getDistance } from "geolib";
import { useNavigation } from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import Geolocation from "@react-native-community/geolocation";
import Toast from "react-native-simple-toast";
import axios from "axios";
import i18next from "../i18n/index";
import RouteSelect from "../components/RouteSelect";
import GradientIconButton from "../components/GradientIconButton";
import NoInternetModal from "../components/NoInternetModal";
import {
  MAPS_API_KEY,
  TRACCAR_BASE_URL,
  base64Token,
  colors,
  endpoints,
  images,
} from "../common/utils";
import { AppContext } from "../common/context";
import { hp } from "../common/dimensions";

export default function Home() {
  const navigation = useNavigation();
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const { route, setRoute, routes, setRoutes, newRoute, saveRoutes } =
    useContext(AppContext);
  const minimumTrackDistance = 1.5;
  const [isVisible, setVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [heading, setHeading] = useState(0);
  const [northCompass, setNorthCompass] = useState(false);
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [markers, setMarkers] = useState([]);
  const [delta, setDelta] = useState({
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const deviceLogRef = useRef([]);
  const [refetch, setRefech] = useState(false);
  useEffect(() => {
    getDevices();
    fetchData();
  }, [refetch]);
  useEffect(() => {
    if (route) {
      mapRef.current?.animateToRegion(
        {
          latitude: route.waypoints[0].latitude,
          longitude: route.waypoints[0].longitude,
          longitudeDelta: 0.4747256478092474,
          latitudeDelta: 0.24013984948396683,
        },
        300
      );
    }
  }, [route?.id]);

  useEffect(() => {
    handleGetCurrentPosition();
    setPlaceholder(i18next.t("select_route"));
    const interval = setInterval(() => {
      setRefech((prev) => !prev);
    }, 2000);
    const focusListener = navigation.addListener("focus", () => {
      setPlaceholder(i18next.t("select_route"));
    });
    return () => {
      clearInterval(interval);
      focusListener;
    };
  }, []);

  const handleGetCurrentPosition = () => {
    setMarkers([]);
    setHeading(0);
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, heading } = position.coords;
        setMarkers([]);
        mapRef.current?.animateToRegion(
          {
            latitude,
            longitude,
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
          },
          300
        );
      },
      (error) => {
        const initialRegion = { latitude: 15.872, longitude: -97.0767 };
        mapRef.current?.animateToRegion(
          {
            ...initialRegion,
            longitudeDelta: 0.1,
            latitudeDelta: 0.1,
          },
          300
        );
        Toast.show(i18next.t("notGrantedLocationPer"));
      }
    );
  };
  const getDevices = async () => {
    try {
      const response = await axios.get(TRACCAR_BASE_URL + endpoints.devices, {
        headers: {
          Authorization: `Basic ${base64Token}`,
          "Content-Type": "application/json",
        },
      });
      const devices = response.data;
      const onlineDevices = devices.filter(
        (device) => device.status === "online"
      );
      deviceLogRef.current = onlineDevices;
      // setDeviceLog(onlineDevices);
    } catch (error) {
      throw error;
    }
  };
  const fetchData = () => {
    try {
      // Parse the device log JSON string
      // const devices = JSON.parse(deviceLog);

      // Check status for each device
      for (device of deviceLogRef.current) {
        if (device.status === "online") {
          getPositions1(device.id);
          // Perform actions for online devices
          // Call getPositions1() or setMarkers() here
        }
      }
    } catch (error) {}
  };
  const retrieveTotalRouteDistance = (route, closetDistanceFromRoutePoint) => {
    let distance = 0;
    let closetDistanceIndex = route.findIndex(
      (point) =>
        point.latitude === closetDistanceFromRoutePoint.latitude &&
        point.longitude === closetDistanceFromRoutePoint.longitude
    );
    for (let i = 0; i < closetDistanceIndex; i++) {
      distance += getDistance(
        {
          latitude: route[i].latitude,
          longitude: route[i].longitude,
        },
        {
          latitude: route[i + 1].latitude,
          longitude: route[i + 1].longitude,
        }
      );
    }
    return distance;
  };
  const getPositions1 = async (deviceId) => {
    axios
      .get(TRACCAR_BASE_URL + endpoints.positions + "?deviceId=" + deviceId, {
        headers: {
          Authorization: `Basic ${base64Token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          const data = response.data[0];
          const location = {
            latitude: data.latitude,
            longitude: data.longitude,
          };

          setCoordinates(location);
          setMarkers((prevMarkers) => {
            const deviceRoutes = routes.filter((eachRoute) =>
              eachRoute.deviceId.includes(deviceId)
            );
            const whichRouteByDeviceId = prevMarkers.find(
              (marker) => marker.deviceId === deviceId
            )?.whichRoute;
            const firstCoordinates = whichRouteByDeviceId
              ? deviceRoutes.find(
                  (eachRoute) => eachRoute.id === whichRouteByDeviceId
                ).waypoints
              : deviceRoutes[0].waypoints;
            const secondCoordinates = whichRouteByDeviceId
              ? deviceRoutes.find(
                  (eachRoute) => eachRoute.id !== whichRouteByDeviceId
                ).waypoints
              : deviceRoutes[1].waypoints;
            const closetDistanceFromRoutePointForTheFirst =
              shortestDistancePoint(location, firstCoordinates);
            const closetDistanceFromRoutePointForTheSecond =
              shortestDistancePoint(location, secondCoordinates);
            const distanceFromStartForTheFirst = retrieveTotalRouteDistance(
              firstCoordinates,
              closetDistanceFromRoutePointForTheFirst
            );
            const distanceFromStartForTheSecond = retrieveTotalRouteDistance(
              secondCoordinates,
              closetDistanceFromRoutePointForTheSecond
            );
            const deviceIds = deviceLogRef.current.map((device) => device.id);
            const filteredMarkers = prevMarkers.filter((marker) =>
              deviceIds.includes(marker.deviceId)
            );
            const isMarkerExist = filteredMarkers.some(
              (marker) => marker.deviceId === deviceId
            );
            let newMarkers = filteredMarkers.map((marker) => {
              if (marker.deviceId === deviceId) {
                const isPositionStay =
                  marker.distanceFromStartForTheFirst ===
                    distanceFromStartForTheFirst && marker.whichRoute;
                const enableShow = Boolean(
                  marker.distanceFromStartForTheFirst !==
                    distanceFromStartForTheFirst &&
                    marker.distanceFromStartForTheFirst !==
                      distanceFromStartForTheSecond
                );
                const whichRoute =
                  typeof marker.distanceFromStartForTheFirst === "number"
                    ? distanceFromStartForTheSecond === 0
                      ? deviceRoutes.find(
                          (eachRoute) => eachRoute.id !== marker.whichRoute
                        ).id
                      : isPositionStay ||
                        marker.distanceFromStartForTheFirst <
                          distanceFromStartForTheFirst
                      ? marker.whichRoute
                      : deviceRoutes.find(
                          (eachRoute) => eachRoute.id !== marker.whichRoute
                        ).id
                    : null;

                const firstDistance =
                  typeof marker.distanceFromStartForTheFirst === "number"
                    ? distanceFromStartForTheSecond === 0
                      ? 0
                      : isPositionStay ||
                        marker.distanceFromStartForTheFirst <
                          distanceFromStartForTheFirst
                      ? distanceFromStartForTheFirst
                      : distanceFromStartForTheSecond
                    : distanceFromStartForTheFirst;
                return {
                  ...data,
                  distanceFromStartForTheFirst: firstDistance,
                  whichRoute,
                  enableShow: marker.enableShow || enableShow,
                };
              }
              return marker;
            });
            if (!isMarkerExist) {
              newMarkers.push({
                ...data,
                distanceFromStartForTheFirst,
                whichRoute: null,
                enableShow: false,
              });
            }
            return newMarkers;
          });
        }
      })
      .catch((error) => {});
  };
  const mapMarkers = () => {
    return (
      route &&
      route.waypoints.map(
        (i, index) =>
          (index === 0 || index === route.waypoints.length - 1) && (
            <Marker
              coordinate={i}
              tracksViewChanges={false}
              key={index}
              style={{ alignItems: "center" }}
            >
              <Text style={{ fontFamily: "Lato-Bold" }}>
                {index === 0 && "A"}
                {index === route.waypoints.length - 1 && "B"}
              </Text>
              {index == 0 || index === route.waypoints.length - 1 ? (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <View style={styles.rootMarkerRound} />
                  {/* <View style={styles.routeMarkerPin} /> */}
                </View>
              ) : (
                <View style={styles.pinIcon} />
              )}
            </Marker>
          )
      )
    );
  };

  const renderRoutes = () => {
    return (
      route &&
      (route.id >= 7 && route.id <= 10 ? (
        <Polyline
          // key={i}
          coordinates={route.waypoints}
          strokeColor={route.color}
          strokeWidth={5}
        />
      ) : (
        <MapViewDirections
          origin={route.waypoints[0]}
          waypoints={[
            route.waypoints[0],
            route.waypoints[route.waypoints.length - 1],
          ]}
          destination={route.waypoints[route.waypoints.length - 1]}
          apikey={MAPS_API_KEY}
          strokeWidth={5}
          strokeColor={route.color}
          onReady={(result) => {
            mapRef.current?.fitToCoordinates(result.coordinates, {
              edgePadding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50,
              },
            });
          }}
        />
      ))
    );
  };

  const shortestDistancePoint = (position, route) => {
    let minDistance = Infinity;
    let minPoint = null;
    route.forEach(function (point) {
      let distance = haversine(position, point);
      if (distance < minDistance) {
        minDistance = distance;
        minPoint = point;
      }
    });
    return minPoint;
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        ref={mapRef}
        initialRegion={{
          ...coordinates,
          latitudeDelta: delta.latitudeDelta,
          longitudeDelta: delta.longitudeDelta,
        }}
        onRegionChange={() => {
          mapRef?.current?.getCamera().then((info) => {
            setHeading(info.heading);
          });
        }}
        onRegionChangeComplete={(e) => {
          setDelta({
            latitudeDelta: e.latitudeDelta,
            longitudeDelta: e.longitudeDelta,
          });
        }}
        showsCompass={true}
        showsUserLocation={!route ? true : false}
        followsUserLocation={!route ? true : false}
      >
        {mapMarkers()}
        {renderRoutes()}
        {route &&
          markers.length > 0 &&
          markers.map(
            (i, index) =>
              i.whichRoute === route.id &&
              i.enableShow && (
                <Marker
                  key={index}
                  ref={markerRef}
                  coordinate={{
                    latitude: i.latitude,
                    longitude: i.longitude,
                  }}
                  tracksViewChanges={false}
                  image={images.tracker}
                  rotation={(360 + i.course) % 360}
                  anchor={{ x: 0.5, y: 0.5 }}
                >
                  <Text style={{ fontFamily: "Lato-Bold", color: "red" }}>
                    {i.deviceId || i.name}
                  </Text>
                </Marker>
              )
          )}
      </MapView>
      <RouteSelect
        onSettingsPress={() => navigation.navigate("Settings")}
        onRoutePress={() => navigation.navigate("SelectRoute")}
        placeholder={route ? i18next.t(route.str) : placeholder}
        style={styles.selectView}
      />
      <GradientIconButton
        // onPress={() => setallRoutes(true)}
        title={i18next.t("all_routes")}
        style={styles.gradientBtn}
      />
      {heading != 0 && (
        <TouchableOpacity
          onPress={() => {
            if (route) {
              mapRef.current?.animateToRegion(
                {
                  latitude: route.waypoints[0].latitude,
                  longitude: route.waypoints[0].longitude,
                  longitudeDelta: delta.latitudeDelta,
                  latitudeDelta: delta.longitudeDelta,
                },
                300
              );
            } else {
              handleGetCurrentPosition();
            }
            setNorthCompass(true);
            setTimeout(() => {
              setNorthCompass(false);
            }, 2000);
          }}
          style={styles.compassBtn}
        >
          <Image
            source={images.compass}
            style={{
              height: 40,
              width: 40,
              transform: [{ rotate: `-${heading}deg` }],
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {northCompass && (
        <View style={styles.compassBtn}>
          <Image
            source={images.compassnorth}
            style={{
              height: 40,
              width: 40,
            }}
            resizeMode="contain"
          />
        </View>
      )}
      <TouchableOpacity
        style={styles.marker}
        onPress={handleGetCurrentPosition}
      >
        <Image
          source={images.marker}
          style={{ height: 100, width: 100 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <NoInternetModal
        visible={isVisible}
        onClose={() => setVisible(!isVisible)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  compassBtn: {
    position: "absolute",
    top: Platform.OS == "android" ? 150 : 100,
    alignSelf: "flex-end",
    right: 30,
  },
  busPin: {
    height: hp(5),
    width: hp(5),
    resizeMode: "contain",
    tintColor: "red",
  },
  routeMarkerPin: {
    height: 15,
    borderRightWidth: 3.5,
    borderRightColor: colors.orange,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  rootMarkerRound: {
    backgroundColor: colors.white,
    height: hp(3),
    width: hp(3),
    borderRadius: 100,
    borderWidth: 3.5,
    borderColor: colors.orange,
  },
  gradientBtn: {
    position: "absolute",
    top: Platform.OS == "android" ? 90 : 100,
    alignSelf: "flex-end",
    right: 10,
  },
  pinIcon: {
    backgroundColor: colors.white,
    height: hp(2.5),
    width: hp(2.5),
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.orange,
  },
  selectView: {
    position: "absolute",
    top: Platform.OS == "android" ? 10 : 40,
    shadowColor: colors.darkblack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  marker: {
    position: "absolute",
    bottom: Platform.OS == "android" ? 0 : 10,
    right: 0,
  },
});
