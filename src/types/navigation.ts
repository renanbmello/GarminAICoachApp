export type RootStackParamList = {
  Login: undefined; 
  Home: undefined;
  ActivityList: undefined;
  ActivityDetail: { id: number };
  Maps: undefined;
  Record: undefined;
  Groups: undefined;
  Runs: undefined;
  AIAnalysisScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 