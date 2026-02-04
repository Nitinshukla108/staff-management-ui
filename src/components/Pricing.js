import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Platform, 
  useWindowDimensions, 
  ScrollView, 
  SafeAreaView, 
  Animated, 
  Easing 
} from 'react-native';

const COLORS = {
  primary: '#0F172A', // Black/Dark Slate for all text/buttons
  surface: '#FFFFFF',
  textMain: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  // Borders only colors
  basic: '#0D9488',     
  pro: '#2563EB',       
  enterprise: '#7C3AED', 
  gold: '#F59E0B'
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Pro"); 
  const [activeMobilePlan, setActiveMobilePlan] = useState(null); 
  const [isYearly, setIsYearly] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  const animBasic = useRef(new Animated.Value(0)).current;
  const animPro = useRef(new Animated.Value(0)).current;
  const animEnterprise = useRef(new Animated.Value(0)).current;

  const anims = { Basic: animBasic, Pro: animPro, Enterprise: animEnterprise };

  const plans = [
    { title: "Basic", price: "499", keyPoint: "For Startups", features: ["10 Staff Members", "Attendance Tracking", "Basic Reports"], accent: COLORS.basic },
    { title: "Pro", price: "999", keyPoint: "Best Value", features: ["50 Staff Members", "Automated Payroll", "Geo-fencing", "Priority Support"], accent: COLORS.pro },
    { title: "Enterprise", price: "2499", keyPoint: "Full Power", features: ["Unlimited Staff", "Custom API Access", "Dedicated Manager", "24/7 Support"], accent: COLORS.enterprise }
  ];

  const handleSelect = (title) => {
    setSelectedPlan(title); 
    if (isMobile) {
      if (activeMobilePlan === title) {
        Animated.timing(anims[title], { toValue: 0, duration: 400, easing: Easing.bezier(0.4, 0, 0.2, 1), useNativeDriver: false }).start(() => setActiveMobilePlan(null));
      } else {
        if (activeMobilePlan) Animated.timing(anims[activeMobilePlan], { toValue: 0, duration: 300, useNativeDriver: false }).start();
        setActiveMobilePlan(title);
        Animated.timing(anims[title], { toValue: 1, duration: 500, easing: Easing.bezier(0.4, 0, 0.2, 1), useNativeDriver: false }).start();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.section, { paddingVertical: isMobile ? 30 : 80 }]}>
          <Text style={styles.sectionBadge}>PRICING</Text>
          <Text style={[styles.sectionTitle, { fontSize: isMobile ? 24 : 42 }]}>Simple plans for businesses of all sizes</Text>

          <View style={styles.toggleContainer}>
            <Text style={[styles.toggleLabel, !isYearly && styles.activeToggle]}>Monthly</Text>
            <TouchableOpacity style={styles.toggleTrack} onPress={() => setIsYearly(!isYearly)}>
              <View style={[styles.toggleThumb, isYearly ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.toggleLabel, isYearly && styles.activeToggle]}>Yearly</Text>
                <View style={styles.saveBadge}><Text style={styles.saveBadgeText}>SAVE 20%</Text></View>
            </View>
          </View>

          <View style={isMobile ? styles.mobileGrid : styles.webGrid}>
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.title;
              const isExpanded = isMobile ? activeMobilePlan === plan.title : true;
              const heightInt = anims[plan.title].interpolate({ inputRange: [0, 1], outputRange: [0, 300] });
              const opacityInt = anims[plan.title].interpolate({ inputRange: [0, 0.6, 1], outputRange: [0, 0, 1] });

              return (
                <View key={plan.title} style={[styles.cardWrapper, isMobile && { width: isExpanded ? '94%' : '31%' }]}>
                  {plan.title === "Pro" && (
                    <View style={[styles.badgeContainer, isMobile && !isExpanded && { top: -14 }]}>
                      <View style={styles.premiumBadge}>
                        <Text style={styles.premiumBadgeText}>{isMobile && !isExpanded ? 'POPULAR' : '★ MOST POPULAR ★'}</Text>
                      </View>
                    </View>
                  )}
                  <TouchableOpacity 
                    activeOpacity={0.9} 
                    onPress={() => handleSelect(plan.title)}
                    style={[
                      styles.card, 
                      { borderColor: isSelected ? plan.accent : COLORS.border },
                      isSelected && { borderWidth: 2.5 },
                      !isMobile && styles.webCardBase,
                      !isMobile && isSelected && styles.webCardSelected,
                      isMobile && !isExpanded && { height: 90 }
                    ]}
                  >
                    <View style={styles.cardHeader}>
                      <View style={{ flex: 1 }}>
                        <Text numberOfLines={1} style={[styles.cardTitle, isMobile && !isExpanded && {fontSize: 12}]}>{plan.title}</Text>
                        {isMobile && !isExpanded && <Text style={styles.mobileKeyPoint}>{plan.keyPoint}</Text>}
                      </View>
                      {isMobile && <Text style={styles.plusIcon}>{isExpanded ? '−' : '+'}</Text>}
                    </View>

                    <Animated.View style={[!isMobile ? { opacity: 1 } : { height: heightInt, opacity: opacityInt }, { overflow: 'hidden' }]}>
                        <View style={styles.cardBody}>
                          <View style={styles.priceContainer}>
                            <Text style={styles.currency}>₹</Text>
                            <Text style={[styles.price, isMobile && {fontSize: 34}]}>{isYearly ? Math.floor(plan.price * 10) : plan.price}</Text>
                            <Text style={styles.duration}>{isYearly ? '/yr' : '/mo'}</Text>
                          </View>
                          <View style={styles.featureList}>
                            {plan.features.map((item, index) => (
                              <View key={index} style={styles.featureRow}>
                                <Text style={styles.checkmark}>✓</Text>
                                <Text style={styles.featureItem} numberOfLines={1}>{item}</Text>
                              </View>
                            ))}
                          </View>
                          <View style={[styles.btn, isSelected ? styles.btnDark : styles.btnLight]}>
                            <Text style={[styles.btnText, { color: isSelected ? '#fff' : COLORS.textMain }]}>
                              {isSelected ? 'Selected' : `Get Plan`}
                            </Text>
                          </View>
                        </View>
                    </Animated.View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  scrollContent: { flexGrow: 1 },
  section: { alignItems: 'center', width: '100%' },
  sectionBadge: { fontSize: 13, fontWeight: '800', color: '#64748B', letterSpacing: 1.5, marginBottom: 8 },
  sectionTitle: { fontWeight: '900', textAlign: 'center', color: COLORS.textMain, marginBottom: 40, paddingHorizontal: 20 },
  toggleContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  toggleLabel: { fontSize: 15, fontWeight: '700', color: COLORS.textSecondary, marginHorizontal: 12 },
  activeToggle: { color: COLORS.textMain },
  toggleTrack: { width: 48, height: 26, backgroundColor: '#0F172A', borderRadius: 20, padding: 3, justifyContent: 'center' },
  toggleThumb: { width: 20, height: 20, backgroundColor: '#fff', borderRadius: 10 },
  saveBadge: { backgroundColor: '#DCFCE7', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginLeft: 10 },
  saveBadgeText: { color: '#166534', fontSize: 10, fontWeight: '900' },
  webGrid: { flexDirection: 'row', justifyContent: 'center', width: '100%', alignItems: 'flex-start' },
  mobileGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '100%', paddingHorizontal: 4 },
  cardWrapper: { marginHorizontal: 6, marginVertical: 12, zIndex: 1, position: 'relative' },
  card: { backgroundColor: '#fff', borderRadius: 20, borderWidth: 1.5, ...Platform.select({ web: { boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease' }, default: { elevation: 2 } }) },
  webCardBase: { width: 320 },
  webCardSelected: { transform: [{ scale: 1.04 }] },
  badgeContainer: { position: 'absolute', top: -16, left: 0, right: 0, alignItems: 'center', zIndex: 100 },
  premiumBadge: { backgroundColor: COLORS.gold, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 50, borderWidth: 2, borderColor: '#fff', elevation: 4 },
  premiumBadgeText: { color: '#fff', fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  cardHeader: { padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 18, fontWeight: '800', color: COLORS.textMain },
  mobileKeyPoint: { fontSize: 8, marginTop: 2, fontWeight: '800', textTransform: 'uppercase', color: COLORS.textSecondary },
  plusIcon: { fontSize: 18, fontWeight: '800', color: COLORS.textSecondary },
  cardBody: { paddingHorizontal: 15, paddingBottom: 20 },
  priceContainer: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 15 },
  currency: { fontSize: 16, fontWeight: '800', color: COLORS.textMain },
  price: { fontSize: 38, fontWeight: '900', color: COLORS.textMain },
  duration: { fontSize: 12, color: COLORS.textSecondary, marginLeft: 4 },
  featureList: { marginBottom: 15 },
  featureRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  checkmark: { fontWeight: '900', marginRight: 8, fontSize: 14, color: COLORS.textMain },
  featureItem: { fontSize: 13, color: '#334155', fontWeight: '500' },
  btn: { paddingVertical: 12, borderRadius: 14, alignItems: 'center' },
  btnDark: { backgroundColor: COLORS.textMain },
  btnLight: { borderColor: COLORS.textMain, borderWidth: 1.5 },
  btnText: { fontWeight: '800', fontSize: 14 }
});

export default Pricing;