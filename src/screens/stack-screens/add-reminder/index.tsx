import {FunctionComponent} from 'react';
import {View} from 'react-native';
import AppBackBtn from '../../../components/app-back-btn';
import AppButton from '../../../components/app-button';

import AppInput from '../../../components/app-input';
import AppScreen from '../../../components/app-screen';
import AppSelectInput from '../../../components/app-select-input';
import AppText from '../../../components/app-text';
import {ScreenProps} from '../../../constants/types';

function createArrayNumList(length: number = 5) {
  return Array.from({length}, (_, index) => index + 1).map(el => {
    return {label: el.toString(), value: el.toString()};
  });
}

const AddReminder: FunctionComponent<ScreenProps> = ({navigation}) => {
  return (
    <AppScreen>
      <View style={{padding: 15}}>
        {/* <AppText text={'Add Plan'} weight="SemiBold" size={28} color="text_1" /> */}
        <View style={{marginVertical: 20}}>
          <AppText
            text={'Pills'}
            weight="Medium"
            size={15}
            color="text_1"
            style={{marginBottom: 10, marginHorizontal: 10}}
          />

          <AppInput
            placeHolder="pill name"
            value="Oxycodane"
            contentContainerStyle={{margin: 5}}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <AppText
            text={'Amount & How long?'}
            weight="Medium"
            size={15}
            color="text_1"
            style={{marginBottom: 10, marginHorizontal: 10}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{margin: 5, flex: 1}}>
              <AppSelectInput
                placeHolder="Dosage"
                value={''}
                data={createArrayNumList(10)}
                labelField={'lebel'}
                valueField={'value'}
                onChange={text => console.log('text', text)}
              />
            </View>
            <View style={{margin: 5, flex: 1}}>
              <AppSelectInput
                placeHolder="Days"
                value={''}
                data={createArrayNumList(30)}
                labelField={'lebel'}
                valueField={'value'}
                onChange={text => console.log('text', text)}
              />
            </View>
          </View>
          <AppButton text="Done" style={{margin: 5, marginVertical: 30}} />
        </View>
      </View>
    </AppScreen>
  );
};

export default AddReminder;
