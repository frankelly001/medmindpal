import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import AppButton from '../app-button';
import AppText from '../app-text';
import ModalOverlay from '../app-modal-overlay';
import {appDeleteNoticeStyles} from './styles';
import {DeleteNoticeProps} from './type';

const DeleteNotice: FunctionComponent<DeleteNoticeProps> = ({
  visible,
  onDelete,
  onCancel,
  noticeLabel = 'Are you sure, you want to Delete item?',
}) => {
  return (
    <ModalOverlay visible={visible}>
      <View style={appDeleteNoticeStyles.container}>
        <AppText
          text={noticeLabel}
          size={14}
          style={appDeleteNoticeStyles.noticeLabel}
        />

        <View style={appDeleteNoticeStyles.btnContainer}>
          <AppButton
            text="Yes"
            textSize={12}
            buttonColor={'error_2'}
            textColor={'white'}
            style={[
              appDeleteNoticeStyles.button,
              appDeleteNoticeStyles.yesButton,
            ]}
            onPress={onDelete}
          />
          <AppButton
            text="Cancel"
            textSize={12}
            buttonColor={'grey_dark'}
            textColor={'white'}
            style={[
              appDeleteNoticeStyles.button,
              appDeleteNoticeStyles.cancelButton,
            ]}
            onPress={onCancel}
          />
        </View>
      </View>
    </ModalOverlay>
  );
};

export default DeleteNotice;
