import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '../constants/Colors';

const PricingCard = ({ title, price, features, isSelected, onSelect }) => (
  // Dynamic styles: Agar select hua toh border aur background change hoga
  <TouchableOpacity 
    activeOpacity={0.9}
    onPress={onSelect}
    style={[
      styles.card, 
      isSelected && styles.selectedCard // Selection style apply hogi
    ]}
  >
    {/* MOST POPULAR badge sirf Pro (999) par hi rakhte hain permanent ya selected par bhi dikha sakte hain */}
    {title === "Pro" && <View style={styles.badge}><Text style={styles.badgeText}>MOST POPULAR</Text></View>}
    
    <Text style={[styles.cardTitle, isSelected && {color: COLORS.primary}]}>{title}</Text>
    
    <View style={styles.priceContainer}>
      <Text style={styles.currency}>₹</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.duration}>/mo</Text>
    </View>

    <View style={styles.featureList}>
      {features.map((item, index) => (
        <Text key={index} style={styles.featureItem}>✓ {item}</Text>
      ))}
    </View>

    <View style={[styles.btn, isSelected ? styles.btnSelected : styles.btnNormal]}>
      <Text style={[styles.btnText, isSelected ? styles.btnTextSelected : styles.btnTextNormal]}>
        {isSelected ? 'Selected' : `Get ${title}`}
      </Text>
    </View>
  </TouchableOpacity>
);

const Pricing = () => {
  // Shuruat mein "Pro" (999) select rakhte hain
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  return (
    <View style={styles.section}>
      <Text style={styles.sectionBadge}>PRICING</Text>
      <Text style={styles.sectionTitle}>Simple plans for businesses of all sizes</Text>

      <View style={styles.grid}>
        <PricingCard 
          title="Basic" 
          price="499" 
          isSelected={selectedPlan === "Basic"}
          onSelect={() => setSelectedPlan("Basic")}
          features={["10 Staff Members", "Attendance Tracking", "Basic Reports"]} 
        />
        <PricingCard 
          title="Pro" 
          price="999" 
          isSelected={selectedPlan === "Pro"}
          onSelect={() => setSelectedPlan("Pro")}
          features={["50 Staff Members", "Automated Payroll", "Geo-fencing", "Priority Support"]} 
        />
        <PricingCard 
          title="Enterprise" 
          price="2499" 
          isSelected={selectedPlan === "Enterprise"}
          onSelect={() => setSelectedPlan("Enterprise")}
          features={["Unlimited Staff", "Custom API Access", "Dedicated Manager", "24/7 Support"]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { paddingVertical: 80, backgroundColor: '#F8FAFC', alignItems: 'center' },
  sectionBadge: { fontSize: 14, fontWeight: 'bold', color: COLORS.primary, letterSpacing: 2, marginBottom: 10 },
  sectionTitle: { fontSize: 32, fontWeight: '800', textAlign: 'center', color: '#1e293b', marginBottom: 50 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '100%' },
  card: { 
    backgroundColor: '#fff', 
    width: Platform.OS === 'web' ? 320 : '90%', 
    padding: 30, 
    borderRadius: 20, 
    margin: 15, 
    borderWidth: 1, 
    borderColor: '#E2E8F0',
    elevation: 3,
    position: 'relative'
  },
  // Selection Style: Blue border aur Light blue background
  selectedCard: { 
    borderColor: COLORS.primary, 
    borderWidth: 2, 
    backgroundColor: '#F0F9FF', // Light Blue background
    transform: Platform.OS === 'web' ? [{ scale: 1.05 }] : [],
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  badge: { position: 'absolute', top: -12, alignSelf: 'center', backgroundColor: COLORS.primary, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 10, zIndex: 1 },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  cardTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#1e293b' },
  priceContainer: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 25 },
  currency: { fontSize: 18, fontWeight: 'bold', marginRight: 2 },
  price: { fontSize: 40, fontWeight: '900' },
  duration: { fontSize: 14, color: '#64748b', marginLeft: 4 },
  featureList: { marginBottom: 30 },
  featureItem: { fontSize: 14, color: '#475569', marginBottom: 10 },
  btn: { paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  btnNormal: { borderWidth: 1, borderColor: COLORS.primary },
  btnSelected: { backgroundColor: COLORS.primary },
  btnText: { fontWeight: 'bold' },
  btnTextNormal: { color: COLORS.primary },
  btnTextSelected: { color: '#fff' }
});

export default Pricing;