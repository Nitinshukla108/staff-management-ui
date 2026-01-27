import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { COLORS } from '../constants/Colors';

const StatCard = ({ number, label, subtext }) => (
  <View style={styles.card}>
    <Text style={styles.numberText}>{number}</Text>
    <Text style={styles.labelText}>{label}</Text>
    <View style={styles.miniDivider} />
    <Text style={styles.subtext}>{subtext}</Text>
  </View>
);

const Results = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.badgeText}>RESULTS</Text>
      
      <Text style={styles.description}>
        We created an intuitive and automated staff management platform, 
        integrated with advanced payroll intelligence. Our goal is to 
        provide business owners with fast, accurate, and convenient 
        tools for workforce management.
      </Text>

      <View style={styles.statsContainer}>
        <StatCard 
          number="500K+" 
          label="ACTIVE STAFF MEMBERS" 
          subtext="Engaged with our platform within the first year of operation." 
        />
        <StatCard 
          number="60%" 
          label="PAYROLL SPEED IMPROVEMENT" 
          subtext="Reduction in salary processing time due to automation." 
        />
        <StatCard 
          number="99.9%" 
          label="CALCULATION ACCURACY" 
          subtext="Achieved high precision in attendance and tax deductions." 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 100,
    backgroundColor: '#F8FAFC', // Very light gray-blue for section break
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    letterSpacing: 2,
    marginBottom: 30,
  },
  description: {
    fontSize: Platform.OS === 'web' ? 28 : 20,
    fontWeight: '500',
    color: COLORS.textMain,
    textAlign: 'center',
    maxWidth: 900,
    lineHeight: Platform.OS === 'web' ? 42 : 32,
    marginBottom: 60,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 1200,
  },
  card: {
    backgroundColor: COLORS.white,
    width: Platform.OS === 'web' ? 320 : '90%',
    padding: 40,
    borderRadius: 30,
    alignItems: 'center',
    margin: 15,
    // Soft professional shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
  },
  numberText: {
    fontSize: 56,
    fontWeight: '900',
    color: COLORS.textMain,
    marginBottom: 10,
  },
  labelText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    textAlign: 'center',
    letterSpacing: 1,
  },
  miniDivider: {
    width: 30,
    height: 2,
    backgroundColor: COLORS.primary,
    marginVertical: 20,
  },
  subtext: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default Results;