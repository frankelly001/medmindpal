import React, {FunctionComponent} from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import {ScrollView, Pressable, View} from 'react-native';
import colors from '../../constants/colors';

const AppScreen = ({children, scrollViewProps, forList = false}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
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
