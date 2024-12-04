import axios from 'axios';
import { Activity, ActivityDetails } from '../types/activity';

const api = axios.create({
  baseURL: 'http://192.168.15.5:8000', 
  timeout: 10000,
});

export const ActivityService = {
  async getActivities(): Promise<Activity[]> {
    try {
      const response = await api.get<Activity[]>(`/activities`);
      return response.data;
    } catch (error) {
      console.error('Error fetching activities:', error);
      throw error;
    }
  }
};