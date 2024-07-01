import React from 'react';
import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';
import { colors } from '../common/utils';

const RenderListItems = ({items}) => {
  return (
    <ScrollView>
      {items.map((item, i) => (
        <List.Item
          key={i}
          title={item.title}
          description={item.description}
          onLongPress={item.holdHandler}
          onPress={item.handler}
          descriptionNumberOfLines={4}
          titleStyle={{fontFamily: 'Lato-Bold', color: colors.black}}
          descriptionStyle={{fontFamily: 'Lato-Regular', color: colors.black}}
        />
      ))}
    </ScrollView>
  );
};

export default RenderListItems;
