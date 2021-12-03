import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles/Colors';
import {styles} from '../../../styles/BookingStyles';
import {BookingConstants} from '../../../utils/Constants';
import Icon from 'react-native-vector-icons/AntDesign';

const Item = ({title, setSelectedValue}) => (
  <TouchableOpacity style={styles.item} onPress={() => setSelectedValue(title)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const BookingScrollPicker = ({setSelectedValue}) => {
  return (
    <View style={styles.FlatList} testID="container">
      <Icon name="caretright" color={colors.Purple} size={20} testID="icon" />
      <FlatList
        testID="list"
        data={BookingConstants.passengerNumberData}
        renderItem={({item}) => (
          <Item title={item.title} setSelectedValue={setSelectedValue} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Icon name="caretleft" color={colors.Purple} size={20} testID="icon" />
    </View>
  );
};

export default BookingScrollPicker;
