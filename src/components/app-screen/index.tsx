import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import {ScrollView, View} from 'react-native';
import {appScreenStyles} from './styles';

const AppScreen = ({children, scrollViewProps}: any) => {
  return (
    <SafeAreaView style={appScreenStyles.flex1}>
      <View style={appScreenStyles.flex1}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={appScreenStyles.flex1}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            {...scrollViewProps}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default AppScreen;
