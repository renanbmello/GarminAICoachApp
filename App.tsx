import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityList } from './src/components/ActivityList';
import ActivityDetail from './src/components/ActivityDetail';
import { RootStackParamList } from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ActivityList">
        <Stack.Screen name="ActivityList" component={ActivityList} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
