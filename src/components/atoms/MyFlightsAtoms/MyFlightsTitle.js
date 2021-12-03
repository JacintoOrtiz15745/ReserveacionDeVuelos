import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/MyFlightsStyles';
import {colors} from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {signoutFunction} from '../../../../redux/actions/AuthActions';

const MyFlightsTitle = ({title, signoutFunction}) => {
  return (
    <View style={styles.titleContainer} testID="view">
      <Text style={styles.myFlightsTitle} testID="text">
        {title}
      </Text>
      <TouchableOpacity onPress={signoutFunction}>
        <Icon name="logout" size={35} color={colors.Purple} />
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = {signoutFunction};

export default connect(null, mapDispatchToProps)(MyFlightsTitle);
