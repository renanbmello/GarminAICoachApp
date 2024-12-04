export interface Activity {
    id: number;
    activity_name: string;
    start_time: string;
    duration: number;
    distance: number;
    heart_rate_avg?: number;
    heart_rate_max?: number;
    calories: number;
    elevation_gain?: number;
    activity_type: string;
  }
  
  export interface ActivityDetails extends Activity {
    splits?: Array<{
      distance: number;
      duration: number;
      pace: number;
      elevation_gain: number;
    }>;
    cadence_avg?: number;
    cadence_max?: number;
    training_effect?: number;
    vo2_max?: number;
  }