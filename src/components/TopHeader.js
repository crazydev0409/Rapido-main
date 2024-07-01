import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { colors, images } from '../common/utils';

const TopHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image
          source={images.back}
          style={styles.backButton}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 60,
    paddingHorizontal: 10,
  },
  backButton: {
    height: 30,
    width: 30,
  },
  title: {
    fontFamily: 'Lato-Bold',
    color: colors.black,
    fontSize: 18,
    marginLeft: 30,
  },
});

export default TopHeader;
