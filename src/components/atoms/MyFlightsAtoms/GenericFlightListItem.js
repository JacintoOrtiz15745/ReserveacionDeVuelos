import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../../styles/Colors';
import PlaneIcon from 'react-native-vector-icons/FontAwesome5';
const GenericListItem = (props) => {
  const {
    ContainerStyle,
    Title,
    Subtitle,
    TitleFont,
    SubtitleFont,
    Icon,
  } = props;

  return (
    <View style={ContainerStyle} testID='view'>
      <Text style={TitleFont}>{Title}</Text>
      {Icon && <PlaneIcon name={Icon} color={colors.Purple} size={25} testID='icon' />}
      <Text style={SubtitleFont}>{Subtitle}</Text>
    </View>
  );
};

export default GenericListItem;