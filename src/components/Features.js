import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { COLORS } from '../constants/Colors';

const FeatureCard = ({ title, desc, size, icon }) => (
  <View style={[styles.card, size === 'large' ? styles.largeCard : styles.smallCard]}>
    <View style={{ flex: 1 }}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{desc}</Text>
    </View>
    <Text style={styles.icon}>{icon}</Text>
  </View>
);

const Features = () => (
  <View style={styles.section}>
    <View style={styles.badge}><Text style={styles.badgeText}>WHY US</Text></View>
    <Text style={styles.sectionTitle}>Simplicity meets excellence</Text>
    <View style={styles.grid}>
      <FeatureCard title="Smart Attendance" desc="Real-time geo-fencing tracking." size="large" icon="📊" />
      <FeatureCard title="Pricing" desc="Transparent & low cost." size="small" icon="💰" />
      <FeatureCard title="Easy Use" desc="Clean UI for everyone." size="small" icon="✨" />
      <FeatureCard title="24x7 Support" desc="Always here to help." size="large" icon="🎧" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: { paddingVertical: 60, alignItems: 'center' },
  badge: { backgroundColor: '#000', padding: 8, borderRadius: 20, marginBottom: 15 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  sectionTitle: { fontSize: 32, fontWeight: '800', marginBottom: 40 },
  grid: { width: '90%', maxWidth: 1100, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { backgroundColor: COLORS.cardBg, borderRadius: 20, padding: 25, marginBottom: 20, flexDirection: 'row', borderWidth: 1, borderColor: COLORS.border },
  largeCard: { width: Platform.OS === 'web' ? '64%' : '100%' },
  smallCard: { width: Platform.OS === 'web' ? '34%' : '100%' },
  cardTitle: { fontSize: 20, fontWeight: 'bold' },
  cardText: { color: COLORS.textSecondary, marginTop: 5 },
  icon: { fontSize: 30, marginLeft: 10 }
});

export default Features;