import axios from 'axios';
import { Activity, ActivityDetails } from '../types/activity';
import { AIAnalysis } from '../types/aiAnalysis';

const api = axios.create({
  baseURL: 'http://192.168.15.5:8000', 
  timeout: 50000,
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

export const AIAnalysisService = {
  async getAIAnalysis(): Promise<AIAnalysis[]> {
    try {
      const response = await api.get<AIAnalysis[]>('/analysis/smart');
      return Array.isArray(response.data) ? response.data : [response.data];
    } catch (error) {
      console.error('Error fetching AI analysis:', error);
      throw error;
    }
  }
};
