export type RootStackParamList = {
  Home: undefined;
  ActivityList: undefined;
  ActivityDetail: { id: number };
  Maps: undefined;
  Record: undefined;
  Groups: undefined;
  Runs: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 