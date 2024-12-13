import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { aiAnalysisStyles as styles } from '../styles/components/aiAnalysis.styles';
import { useTheme } from '../context/ThemeContext';
import { AIAnalysisService } from '../services/api';
import { AIAnalysis } from '../types/aiAnalysis';
import { NavigationBar } from './NavigationBar';
import { colors } from '../theme/colors';

export const AIAnalysisScreen: React.FC = () => {
  const { theme } = useTheme();
  const [analysis, setAnalysis] = useState<AIAnalysis[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetAnalysis = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await AIAnalysisService.getAIAnalysis();
      const analysisArray = Array.isArray(data) ? data : [data];
      setAnalysis(analysisArray);
    } catch (err) {
      console.error('Error fetching analysis:', err);
      setError('Failed to fetch analysis. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>AI Runs Analysis</Text>
      
      {!analysis.length && !loading && (
        <View style={styles(theme).centerContent}>
          <Text style={styles(theme).description}>
            Get personalized insights about your running patterns and performance
          </Text>
          <TouchableOpacity 
            style={styles(theme).button}
            onPress={handleGetAnalysis}
            disabled={loading}
          >
            <Text style={styles(theme).buttonText}>Get My Analysis</Text>
          </TouchableOpacity>
        </View>
      )}

      {loading && (
        <View style={styles(theme).centerContent}>
          <ActivityIndicator size="large" color={colors[theme].primary} />
          <Text style={styles(theme).loadingText}>Analyzing your runs...</Text>
        </View>
      )}

      {error && (
        <View style={styles(theme).centerContent}>
          <Text style={styles(theme).errorText}>{error}</Text>
          <TouchableOpacity 
            style={styles(theme).button}
            onPress={handleGetAnalysis}
          >
            <Text style={styles(theme).buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}

      {analysis.length > 0 && !loading && (
        <ScrollView style={styles(theme).analysisContainer}>
          {analysis.map((item, index) => (
            <View key={index} style={styles(theme).analysisCard}>
              <Text style={styles(theme).analysisText}>{item.analysis}</Text>
            </View>
          ))}
        </ScrollView>
      )}

      <NavigationBar />
    </View>
  );
}; 