export type RootStackParamList = {
  ActivityList: undefined;
  ActivityDetail: { id: number };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 