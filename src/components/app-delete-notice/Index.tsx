import React, {FunctionComponent} from 'react';
import {Dimensions, View} from 'react-native';
import colors from '../../constants/colors';
import AppButton from '../app-button';
import AppText from '../app-text';
import ModalOverlay from '../modal-overlay';
import {DeleteNoticeProps} from './type';

const {width} = Dimensions.get('screen');

const DeleteNotice: FunctionComponent<DeleteNoticeProps> = ({
  visible,
  onDelete,
  onCancel,
  noticeLabel = 'Are you sure, you want to Delete item?',
}) => {
  return (
    <ModalOverlay visible={visible}>
      <View
        style={{
          width: width * 0.85,
          backgroundColor: colors.grey_light,
          borderRadius: 20,
          padding: 15,
        }}>
        <AppText
          text={noticeLabel}
          size={14}
          style={{textAlign: 'center', marginBottom: 20}}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <AppButton
            text="Yes"
            textSize={12}
            buttonColor={'error_2'}
            textColor={'white'}
            style={{
              width: '48%',
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
            onPress={onDelete}
          />
          <AppButton
            text="Cancel"
            textSize={12}
            buttonColor={'grey_dark'}
            textColor={'white'}
            style={{
              width: '48%',
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 20,
              backgroundColor: colors.grey_dark,
            }}
            onPress={onCancel}
          />
        </View>
      </View>
    </ModalOverlay>
  );
};

export default DeleteNotice;
