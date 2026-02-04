import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, useWindowDimensions, ScrollView } from 'react-native';
import { COLORS } from '../constants/Colors';

const industries = [
  {
    id: 'retail',
    name: 'Retail & Shops',
    title: 'Manage Your Store Staff Effortlessly',
    desc: 'Perfect for showrooms and retail outlets. Track opening/closing shifts and manage daily wages with ease.',
    features: ['Daily Wage Calculation', 'Shift Timing Alerts', 'Inventory Access Control']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    title: 'Factory-Ready Workforce Management',
    desc: 'Handle complex shift rotations and overtime for factory workers without any manual errors.',
    features: ['Shift Management', 'Overtime (OT) Tracking', 'Bulk Attendance']
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    title: 'Seamless Management for Hotels & Cafes',
    desc: 'Ensure your guests are served on time by managing your floor staff and kitchen crew efficiently.',
    features: ['Multiple Branch Sync', 'Late Fine Automation', 'Performance Analytics']
  },
  {
    id: 'education',
    name: 'Education',
    title: 'Simplify School & Coaching Admin',
    desc: 'Manage teaching and non-teaching staff attendance, leaves, and payroll in one central dashboard.',
    features: ['Leave Management', 'Holiday Calendars', 'Auto-generated Pay Slips']
  }
];

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState(industries[0]);
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  return (
    <View style={[styles.container, { paddingVertical: isMobile ? 60 : 100 }]}>
      <Text style={styles.sectionBadge}>SOLUTIONS</Text>
      <Text style={[styles.sectionTitle, { fontSize: isMobile ? 28 : 36 }]}>
        Built for every industry
      </Text>

      {/* Tabs Section: Mobile par centered wrap, Desktop par clean row */}
      <View style={[styles.tabsContainer, { gap: isMobile ? 8 : 12 }]}>
        {industries.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            onPress={() => setActiveTab(item)}
            activeOpacity={0.8}
            style={[
              styles.tabButton, 
              activeTab.id === item.id && styles.activeTabButton,
              isMobile && { paddingHorizontal: 15, paddingVertical: 8 }
            ]}
          >
            <Text style={[
              styles.tabText, 
              activeTab.id === item.id && styles.activeTabText,
              { fontSize: isMobile ? 12 : 14 }
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Box with Overlap Fix */}
      <View style={[
        styles.contentBox, 
        { padding: isMobile ? 25 : 50 }
      ]}>
        <View style={styles.textContent}>
          <Text style={[
            styles.contentTitle, 
            { 
              fontSize: isMobile ? 22 : 30, 
              lineHeight: isMobile ? 28 : 38 
            }
          ]}>
            {activeTab.title}
          </Text>
          <Text style={[
            styles.contentDesc, 
            { fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? 22 : 26 }
          ]}>
            {activeTab.desc}
          </Text>
          
          <View style={[styles.featureGrid, { gap: isMobile ? 8 : 12 }]}>
            {activeTab.features.map((f, i) => (
              <View key={i} style={[styles.featureTag, isMobile && { paddingHorizontal: 12 }]}>
                <Text style={[styles.featureTagText, { fontSize: isMobile ? 12 : 13 }]}>✓ {f}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFF', alignItems: 'center', width: '100%' },
  sectionBadge: { fontSize: 13, fontWeight: 'bold', color: COLORS.primary || '#3B82F6', letterSpacing: 2, marginBottom: 15 },
  sectionTitle: { fontWeight: '900', color: '#1e293b', marginBottom: 40, textAlign: 'center', paddingHorizontal: 20 },
  
  tabsContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    marginBottom: 35,
    paddingHorizontal: 10,
    width: '100%',
    maxWidth: 1000
  },
  tabButton: { 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 30, 
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexShrink: 0
  },
  activeTabButton: { 
    backgroundColor: COLORS.primary || '#3B82F6', 
    borderColor: COLORS.primary || '#3B82F6',
    ...Platform.select({
      web: { boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }
    })
  },
  tabText: { fontWeight: '800', color: '#64748b' },
  activeTabText: { color: '#FFF' },

  contentBox: { 
    width: '90%', 
    maxWidth: 900, 
    backgroundColor: '#F8FAFC', 
    borderRadius: 24, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...Platform.select({
        web: { boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }
    })
  },
  textContent: { width: '100%', alignItems: 'center' },
  contentTitle: { fontWeight: '900', color: '#1e293b', marginBottom: 15, textAlign: 'center' },
  contentDesc: { color: '#64748b', marginBottom: 30, textAlign: 'center' },
  
  featureGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  featureTag: { 
    backgroundColor: '#FFF', 
    paddingVertical: 10, 
    paddingHorizontal: 18, 
    borderRadius: 12, 
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...Platform.select({
        default: { elevation: 2 },
        web: { boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }
    })
  },
  featureTagText: { fontWeight: 'bold', color: COLORS.primary || '#3B82F6' },
});

export default IndustrySolutions;