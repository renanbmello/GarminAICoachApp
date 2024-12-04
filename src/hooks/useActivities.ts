import { useState, useEffect } from 'react';
import { Activity } from '../types/activity';
import { ActivityService } from '../services/api';

export const useActivities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadActivities = async () => {
    try {
      const data = await ActivityService.getActivities();
      setActivities(data);
    } catch (error) {
      setError(error as Error);
      console.error('Error loading activities:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  return { activities, loading, error, refreshActivities: loadActivities };
}; 