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
    anaerobic_effect: number;
    average_speed: number;
    cadence_avg: number;
    cadence_max: number;
    elevation_loss: number;
    ground_contact_time: number;
    intensity_minutes: any;
    max_elevation: number;
    max_speed: number;
    min_elevation: number;
    moving_duration: number;
    pace: number;
    pace_formatted: string;
    power_avg: number;
    power_max: number;
    splits: any[];
    steps: number;
    stride_length: number;
    training_effect: number;
    training_effect_label: string;
    training_effect_message: string;
    vertical_oscillation: number;
    vertical_ratio: number;
    vo2_max: number;
  }