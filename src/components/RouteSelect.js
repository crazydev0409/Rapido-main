import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {colors, images} from '../common/utils';

const RouteSelect = ({
  onRoutePress,
  onSettingsPress,
  placeholder,
  style,
  rightIcon,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onRoutePress}>
        <Image
          source={images.routing}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.input} onPress={onRoutePress}>
        {placeholder}
      </Text>

      <TouchableOpacity onPress={onSettingsPress}>
        <Image
          source={rightIcon ? rightIcon : images.setting}
          style={styles.gear}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 10,
    marginHorizontal: 10,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: colors.black,
  },
  icon: {
    width: 24,
    height: 24,
  },
  gear: {
    width: 50,
    height: 50,
  },
});

export default RouteSelect;
