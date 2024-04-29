import { Text, View } from 'react-native';
import { Oldui } from './Screens/oldui';
import { Login } from './Screens/login';
import { Position } from './Screens/Position';
import { Account } from './Screens/Account';
import { SignIn } from './Screens/SignIn';
import { SignUp } from './Screens/SignUp';

export default function App() {
  return (
    <View style={{flex :1}}>
      {/* <Oldui/> */}
      {/* <Login/> */}
      {/* <Position/> */}
      <Account/>
      {/* <SignIn/> */}
      {/* <SignUp/> */}
    </View>
  );
}

