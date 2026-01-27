import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text style={styles.sectionBadge}>SOLUTIONS</Text>
      <Text style={styles.sectionTitle}>Built for every industry</Text>

      <View style={styles.tabsContainer}>
        {industries.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            onPress={() => setActiveTab(item)}
            style={[styles.tabButton, activeTab.id === item.id && styles.activeTabButton]}
          >
            <Text style={[styles.tabText, activeTab.id === item.id && styles.activeTabText]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentBox}>
        <View style={styles.textContent}>
          <Text style={styles.contentTitle}>{activeTab.title}</Text>
          <Text style={styles.contentDesc}>{activeTab.desc}</Text>
          
          <View style={styles.featureGrid}>
            {activeTab.features.map((f, i) => (
              <View key={i} style={styles.featureTag}>
                <Text style={styles.featureTagText}>✓ {f}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 80, backgroundColor: '#FFF', alignItems: 'center' },
  sectionBadge: { fontSize: 14, fontWeight: 'bold', color: COLORS.primary, letterSpacing: 2, marginBottom: 15 },
  sectionTitle: { fontSize: 32, fontWeight: '800', color: '#1e293b', marginBottom: 40, textAlign: 'center' },
  
  tabsContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    marginBottom: 30,
    gap: 12 
  },
  tabButton: { 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 25, 
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0'
  },
  activeTabButton: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  tabText: { fontWeight: '700', color: '#64748b', fontSize: 14 },
  activeTabText: { color: '#FFF' },

  contentBox: { 
    width: '92%', 
    maxWidth: 900, 
    backgroundColor: '#F8FAFC', 
    borderRadius: 20, 
    padding: Platform.OS === 'web' ? 50 : 30, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0'
  },
  textContent: { width: '100%', alignItems: 'center' },
  contentTitle: { fontSize: 26, fontWeight: '800', color: '#1e293b', marginBottom: 15, textAlign: 'center' },
  contentDesc: { fontSize: 16, color: '#64748b', lineHeight: 24, marginBottom: 25, textAlign: 'center' },
  
  featureGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
    gap: 10 
  },
  featureTag: { 
    backgroundColor: '#FFF', 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    borderRadius: 8, 
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5
  },
  featureTagText: { fontSize: 13, fontWeight: 'bold', color: COLORS.primary },
});

export default IndustrySolutions;