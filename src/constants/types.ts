import {StackNavigationProp} from '@react-navigation/stack';

export type navigationProps = StackNavigationProp<
  Record<string, object | undefined>,
  string
>;

export type ScreenProps = {
  navigation: navigationProps;
  route: Object;
};
// | any;
