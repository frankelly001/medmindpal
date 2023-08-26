import React, {FunctionComponent, ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {Portal} from 'react-native-portalize';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import colors from '../../constants/colors';
import {ModalOverlayProps} from './type';

const ModalOverlay: FunctionComponent<ModalOverlayProps> = ({
  visible,
  children,
  modalStyle,
}) => {
  const mpdalViewStyle = useAnimatedStyle(() => {
    return {opacity: withTiming(visible ? 1 : 0)};
  }, [visible]);
  if (!visible) return null;

  return (
    <Portal>
      <Animated.View style={[styles.overlay, modalStyle, mpdalViewStyle]}>
        {children}
      </Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey_dark_4_tranparent,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default ModalOverlay;
