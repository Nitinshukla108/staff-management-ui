import React from 'react';
import { StyleSheet, Text, View, Platform, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const StatCard = ({ number, label, subtext, isMobile }) => (
  <View style={[
    styles.card, 
    { width: isMobile ? '100%' : 320 }
  ]}>
    <Text style={[styles.numberText, { fontSize: isMobile ? 44 : 56 }]}>{number}</Text>
    <Text style={styles.labelText}>{label}</Text>
    <View style={styles.miniDivider} />
    <Text style={styles.subtext}>{subtext}</Text>
  </View>
);

const Results = () => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  return (
    <View style={[styles.section, { paddingVertical: isMobile ? 60 : 100 }]}>
      <Text style={styles.badgeText}>RESULTS</Text>
      
      {/* Overlap Fix: Dynamic Line Height and Font Size */}
      <Text style={[
        styles.description, 
        { 
          fontSize: isMobile ? 20 : 28, 
          lineHeight: isMobile ? 30 : 42,
          marginBottom: isMobile ? 40 : 60 
        }
      ]}>
        We created an intuitive and automated staff management platform, 
        integrated with advanced payroll intelligence. Our goal is to 
        provide business owners with fast, accurate, and convenient 
        tools for workforce management.
      </Text>

      <View style={[styles.statsContainer, { gap: isMobile ? 15 : 0 }]}>
        <StatCard 
          number="500K+" 
          label="ACTIVE STAFF MEMBERS" 
          subtext="Engaged with our platform within the first year of operation." 
          isMobile={isMobile}
        />
        <StatCard 
          number="60%" 
          label="PAYROLL SPEED IMPROVEMENT" 
          subtext="Reduction in salary processing time due to automation." 
          isMobile={isMobile}
        />
        <StatCard 
          number="99.9%" 
          label="CALCULATION ACCURACY" 
          subtext="Achieved high precision in attendance and tax deductions." 
          isMobile={isMobile}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    paddingHorizontal: '5%',
    width: '100%',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textSecondary || '#64748B',
    letterSpacing: 2,
    marginBottom: 25,
    textTransform: 'uppercase',
  },
  description: {
    fontWeight: '500',
    color: COLORS.textMain || '#1E293B',
    textAlign: 'center',
    maxWidth: 900,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 1200,
  },
  card: {
    backgroundColor: COLORS.white || '#FFFFFF',
    padding: 35,
    borderRadius: 30,
    alignItems: 'center',
    margin: 15,
    // Squeeze protection
    flexShrink: 0,
    minWidth: 280,
    ...Platform.select({
      web: {
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
      },
      default: {
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
      }
    })
  },
  numberText: {
    fontWeight: '900',
    color: COLORS.textMain || '#1E293B',
    marginBottom: 8,
  },
  labelText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.textSecondary || '#64748B',
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  miniDivider: {
    width: 35,
    height: 3,
    backgroundColor: COLORS.primary || '#3B82F6',
    marginVertical: 20,
    borderRadius: 2,
  },
  subtext: {
    fontSize: 14,
    color: COLORS.textSecondary || '#64748B',
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '500',
  },
});

export default Results;