import i18next from 'i18next';
import React from 'react';
import {View, Modal, Text, Image, StyleSheet, Pressable} from 'react-native';
import {colors} from '../common/utils';

const NoInternetModal = ({visible, onClose}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Image
            source={require('../assets/images/phone-signal.gif')}
            style={styles.gif}
          />
          <Text style={styles.text}>{i18next.t('noInternet')}</Text>
          <Text style={styles.subText}>{i18next.t('checkConnection')}</Text>

          <Pressable style={{borderWidth: 2, borderColor: colors.primary,padding:10, borderRadius:5,marginTop:20}}>
            <Text style={{fontFamily:'Lato-Bold'}}>TRY AGAIN</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  gif: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: colors.darkblack,
  },
  subText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: colors.darkblack,
  },
});

export default NoInternetModal;
