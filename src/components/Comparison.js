import React from 'react';
import { StyleSheet, Text, View, Platform, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const ComparisonRow = ({ label, oldWay, newWay, isLast, isMobile }) => (
  <View style={[
    styles.row, 
    isMobile && styles.mobileRow, // Mobile par column layout
    isLast && { borderBottomWidth: 0 }
  ]}>
    <View style={[styles.labelCol, isMobile && styles.mobileLabelCol]}>
      <Text style={styles.labelText}>{label}</Text>
    </View>
    
    <View style={styles.comparisonWrapper}>
      <View style={[styles.oldCol, isMobile && styles.mobileCol]}>
        <Text style={styles.oldText}>
          <Text style={{color: '#ef4444'}}>✕</Text> {oldWay}
        </Text>
      </View>
      
      {isMobile && <View style={styles.mobileDivider} />}

      <View style={[styles.newCol, isMobile && styles.mobileCol]}>
        <Text style={styles.newText}>
          <Text style={{color: '#22c55e'}}>✓</Text> {newWay}
        </Text>
      </View>
    </View>
  </View>
);

const Comparison = () => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  return (
    <View style={[styles.container, { paddingVertical: isMobile ? 60 : 100 }]}>
      <Text style={styles.sectionBadge}>OLD VS NEW</Text>
      <Text style={[styles.sectionTitle, { fontSize: isMobile ? 28 : 36 }]}>
        Stop struggling with paperwork
      </Text>
      <Text style={[styles.sectionSub, { paddingHorizontal: 20 }]}>
        See how StaffPe transforms your daily business operations.
      </Text>

      <View style={[styles.tableCard, isMobile && styles.mobileTableCard]}>
        {/* Table Header - Desktop Only */}
        {!isMobile && (
          <View style={styles.headerRow}>
            <View style={styles.labelCol} />
            <View style={styles.oldColHeader}>
              <Text style={styles.headerText}>Manual Register</Text>
            </View>
            <View style={styles.newColHeader}>
              <Text style={styles.headerTextNew}>StaffPe Way</Text>
            </View>
          </View>
        )}

        {/* Comparison Data */}
        <ComparisonRow 
          label="Attendance" 
          oldWay="Manual diary entries" 
          newWay="1-tap digital tracking"
          isMobile={isMobile}
        />
        <ComparisonRow 
          label="Calculations" 
          oldWay="Prone to human errors"
          newWay="100% automated accuracy" 
          isMobile={isMobile}
        />
        <ComparisonRow 
          label="Data Safety" 
          oldWay="Risk of lost registers"
          newWay="Secure cloud backup"
          isMobile={isMobile}
        />
        <ComparisonRow 
          label="Salary" 
          oldWay="Hours of paperwork" 
          newWay="Instant auto-salary"
          isMobile={isMobile}
        />
        <ComparisonRow 
          label="Access" 
          oldWay="Must be in office" 
          newWay="Monitor from anywhere" 
          isMobile={isMobile}
          isLast={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#F8FAFC', alignItems: 'center' },
  sectionBadge: { fontSize: 13, fontWeight: 'bold', color: COLORS.primary || '#3B82F6', letterSpacing: 2, marginBottom: 15 },
  sectionTitle: { fontWeight: '900', color: '#1e293b', textAlign: 'center', paddingHorizontal: 15 },
  sectionSub: { fontSize: 16, color: '#64748b', marginTop: 10, marginBottom: 50, textAlign: 'center', lineHeight: 24 },
  
  tableCard: {
    width: '92%',
    maxWidth: 900,
    backgroundColor: '#FFF',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  mobileTableCard: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  
  headerRow: { flexDirection: 'row', backgroundColor: '#F1F5F9', paddingVertical: 20 },
  labelCol: { flex: 0.7, paddingLeft: 25, justifyContent: 'center' },
  oldColHeader: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  newColHeader: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary || '#3B82F6' },
  
  headerText: { fontWeight: '700', color: '#64748b', fontSize: 15 },
  headerTextNew: { fontWeight: '800', color: '#FFF', fontSize: 15 },

  row: { 
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderBottomColor: '#F1F5F9', 
    paddingVertical: 20,
    backgroundColor: '#FFF'
  },
  mobileRow: {
    flexDirection: 'column',
    borderRadius: 20,
    marginBottom: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 20,
  },
  
  labelCol: { flex: 0.7, paddingLeft: 25, justifyContent: 'center' },
  mobileLabelCol: { paddingLeft: 0, marginBottom: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F1F5F9', paddingBottom: 10 },
  
  labelText: { fontWeight: '800', color: '#1e293b', fontSize: 16 },
  
  comparisonWrapper: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  oldCol: { flex: 1, alignItems: 'center', paddingHorizontal: 10 },
  newCol: { flex: 1, alignItems: 'center', paddingHorizontal: 10 },
  mobileCol: { flex: 1, paddingVertical: 5 },
  
  mobileDivider: { width: 1, height: '80%', backgroundColor: '#E2E8F0', marginHorizontal: 5 },

  oldText: { color: '#64748b', fontSize: 14, textAlign: 'center', lineHeight: 20 },
  newText: { color: COLORS.primary || '#3B82F6', fontWeight: '700', fontSize: 14, textAlign: 'center', lineHeight: 20 },
});

export default Comparison;