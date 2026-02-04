import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const FAQItem = ({ question, answer, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[
      styles.faqItem, 
      isOpen && styles.faqItemActive // Jab open ho toh ye style apply hoga
    ]}>
      <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={() => setIsOpen(!isOpen)} 
        style={styles.questionRow}
      >
        <Text style={[
          styles.questionText, 
          { fontSize: isMobile ? 16 : 18 },
          isOpen && { color: COLORS.primary || '#3B82F6' }
        ]}>
          {question}
        </Text>
        <Text style={[
          styles.icon, 
          { fontSize: isMobile ? 18 : 22, color: isOpen ? COLORS.primary : '#94a3b8' }
        ]}>
          {isOpen ? '−' : '+'}
        </Text>
      </TouchableOpacity>
      
      {isOpen && (
        <View style={styles.answerBox}>
          <Text style={[styles.answerText, { fontSize: isMobile ? 14 : 16 }]}>
            {answer}
          </Text>
        </View>
      )}
    </View>
  );
};

const FAQ = () => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  const faqData = [
    {
      question: "Do I need any extra hardware to use StaffPe?",
      answer: "No, you and your staff can use StaffPe on any standard Android or iOS smartphone. There is no need for expensive biometric machines."
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. We use enterprise-grade encryption to ensure that your business and employee data remains 100% private and secure."
    },
    {
      question: "How does the Geo-fencing feature work?",
      answer: "You can set a specific radius for your office location. Staff members can only mark their attendance when they are physically present within that designated area."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day full-featured free trial for every new business so you can explore all the tools before subscribing."
    }
  ];

  return (
    <View style={[styles.section, { paddingVertical: isMobile ? 60 : 100 }]}>
      <Text style={styles.sectionBadge}>HAVE QUESTIONS?</Text>
      <Text style={[styles.sectionTitle, { fontSize: isMobile ? 26 : 32 }]}>
        Frequently Asked Questions
      </Text>
      
      <View style={[styles.faqContainer, { width: isMobile ? '92%' : '80%' }]}>
        {faqData.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
            isMobile={isMobile} 
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { backgroundColor: '#FFF', alignItems: 'center' },
  sectionBadge: { fontSize: 13, fontWeight: 'bold', color: COLORS.primary || '#3B82F6', letterSpacing: 2, marginBottom: 10 },
  sectionTitle: { fontWeight: '900', textAlign: 'center', color: '#1e293b', marginBottom: 40, paddingHorizontal: 20 },
  faqContainer: { maxWidth: 800 },
  faqItem: { 
    borderWidth: 1, 
    borderColor: '#E2E8F0', 
    borderRadius: 16, // Thoda zyada round jaisa video mein hai
    marginBottom: 16, 
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  faqItemActive: {
    borderColor: COLORS.primary || '#3B82F6',
    backgroundColor: '#EEF2FF', // Poore box ke andar blue color (jaisa video mein orange tha)
    borderWidth: 1.5,
    // Soft shadow for depth
    elevation: 2,
    shadowColor: COLORS.primary || '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  questionRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 22, 
    paddingHorizontal: 25 
  },
  questionText: { fontWeight: '700', color: '#334155', flex: 1, lineHeight: 24 },
  icon: { marginLeft: 15, fontWeight: 'bold' },
  answerBox: { 
    paddingBottom: 22, 
    paddingHorizontal: 25,
  },
  answerText: { 
    lineHeight: 24, 
    color: '#475569', // Thoda dark grey taaki blue background pe saaf dikhe
    fontWeight: '500'
  }
});

export default FAQ;