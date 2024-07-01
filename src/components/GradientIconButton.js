import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, images } from '../common/utils';

const GradientIconButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <LinearGradient
        colors={[colors.primary, colors.white]}
        start={{x: 0, y: 1}}
        end={{x: 2.5, y: 1}}
        style={styles.gradient}>
        <Image
          source={images.routing}
          style={styles.icon}
        />
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  icon: {
    tintColor: colors.white,
    height: 20,
    width: 20,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:5
  },
});

export default GradientIconButton;
