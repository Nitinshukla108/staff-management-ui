import React from 'react';
import { StyleSheet, Text, View, Platform, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';
import { 
  MapPin, ShieldCheck, 
  BarChart3, Smartphone, Zap, Users 
} from 'lucide-react-native';

const Features = () => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const featureData = [
    {
      title: 'Geofence Attendance',
      desc: 'Staff marks attendance only within the office perimeter. No more proxy issues.',
      icon: <MapPin size={isMobile ? 24 : 30} color="#3B82F6" />,
      color: '#EFF6FF',
      borderColor: '#3B82F6'
    },
    {
      title: 'Automated Payroll',
      desc: 'Calculate salaries, overtime, and deductions automatically with zero errors.',
      icon: <Zap size={isMobile ? 24 : 30} color="#F59E0B" />,
      color: '#FFFBEB',
      borderColor: '#F59E0B'
    },
    {
      title: 'Live Tracking',
      desc: 'Real-time dashboard to see who is present, late, or on leave right now.',
      icon: <BarChart3 size={isMobile ? 24 : 30} color="#10B981" />,
      color: '#ECFDF5',
      borderColor: '#10B981'
    },
    {
      title: 'Digital Documents',
      desc: 'Securely store and manage staff IDs, contracts, and personal records.',
      icon: <ShieldCheck size={isMobile ? 24 : 30} color="#8B5CF6" />,
      color: '#F5F3FF',
      borderColor: '#8B5CF6'
    },
    {
      title: 'One-Tap Attendance',
      desc: 'Extremely simple UI for staff to mark attendance in seconds with a single tap.',
      icon: <Smartphone size={isMobile ? 24 : 30} color="#F97316" />,
      color: '#FFF7ED',
      borderColor: '#F97316'
    },
    {
      title: 'Team Analytics',
      desc: 'Deep insights into punctuality and performance trends of your workforce.',
      icon: <Users size={isMobile ? 24 : 30} color="#06B6D4" />,
      color: '#ECFEFF',
      borderColor: '#06B6D4'
    }
  ];

  return (
    <View style={[styles.section, { paddingVertical: isMobile ? 60 : 100 }]} id="features">
      <View style={[styles.header, { width: '100%' }]}>
        <Text style={styles.tag}>POWERFUL TOOLKIT</Text>
        
        {/* Overlap Fix: Added lineHeight and dynamic fontSize */}
        <Text style={[
          styles.title, 
          { 
            fontSize: isMobile ? 26 : 44, 
            lineHeight: isMobile ? 34 : 54, // Force lines apart
            marginTop: isMobile ? 8 : 12
          }
        ]}>
          Everything you need{"\n"}to manage staff
        </Text>
        <View style={styles.titleUnderline} />
      </View>

      <View style={[styles.grid, { gap: isMobile ? 15 : 30 }]}>
        {featureData.map((item, index) => (
          <View 
            key={index} 
            style={[
              styles.featureCard, 
              { 
                width: isMobile ? '100%' : isTablet ? '46%' : '31%',
                padding: isMobile ? 25 : 35 
              }
            ]}
          >
            <View style={[styles.iconWrapper, { backgroundColor: item.color }]}>
              {item.icon}
            </View>
            
            <View style={styles.textWrapper}>
              {/* Card Title Fix: Line height added */}
              <Text style={[
                styles.cardTitle, 
                { 
                  fontSize: isMobile ? 19 : 23,
                  lineHeight: isMobile ? 26 : 30 
                }
              ]}>
                {item.title}
              </Text>
              <Text style={[styles.cardDesc, { fontSize: isMobile ? 14 : 16 }]}>
                {item.desc}
              </Text>
            </View>

            <View style={[styles.bottomBar, { backgroundColor: item.borderColor }]} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: '5%',
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
    maxWidth: 900,
  },
  tag: {
    fontSize: 12,
    fontWeight: '900',
    color: '#3B82F6',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  title: {
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 15,
  },
  titleUnderline: {
    width: 60,
    height: 4,
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    marginTop: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 1300,
    width: '100%',
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    position: 'relative',
    overflow: 'hidden',
    // Squeeze protection
    flexShrink: 0,
    minWidth: 280,
    ...Platform.select({
      web: { boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)' },
      default: { elevation: 4 }
    }),
  },
  iconWrapper: {
    width: 55,
    height: 55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textWrapper: { zIndex: 2 },
  cardTitle: {
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 10,
  },
  cardDesc: {
    color: '#475569',
    lineHeight: 22,
    fontWeight: '600',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 5,
  }
});

export default Features;