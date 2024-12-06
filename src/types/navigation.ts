export type RootStackParamList = {
  Home: undefined;
  ActivityList: undefined;
  ActivityDetail: { id: number };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 