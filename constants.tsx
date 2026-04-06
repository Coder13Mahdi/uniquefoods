
import { Course, Testimonial } from './types';

export const COLORS = {
  bg: '#050508',
  surface: '#0a0a12',
  elevated: '#10101a',
  gold: '#D4AF37', // Gold trim/accents
  goldGlow: 'rgba(212, 175, 55, 0.2)',
  goldSubtle: 'rgba(212, 175, 55, 0.15)',
  red: '#DC2626',   // Action/Urgency
  green: '#16A34A', // Profit/Growth
  yellow: '#FACC15', // Strategy/Intel
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.6)',
  textTertiary: 'rgba(255, 255, 255, 0.4)',
  cardBg: 'rgba(255, 255, 255, 0.03)',
  cardBorder: 'rgba(212, 175, 55, 0.15)',
};

export const COURSES: Course[] = [
  {
    id: '1',
    tag: 'TRADING • FOREX & CRYPTO',
    title: 'The Crypto Salary & Holy Grail Forex',
    description: 'Learn to profit in 10 mins/day using hedge-fund strategies. Includes the Master Indicator for precise entries.',
    meta: '7 Setups • Live Demo • Account Funding',
    price: '$297',
    color: COLORS.green,
  },
  {
    id: '2',
    tag: 'AGENCY • MEDIA BUYING',
    title: 'Digital Marketing & AI Content',
    description: 'Build a marketing machine. Package media buying and AI content services into high-ticket monthly retainers.',
    meta: '16 Lessons • Funnel Builds • Agency Blueprint',
    price: '$497',
    color: COLORS.red,
  },
  {
    id: '3',
    tag: 'AI ARCHITECT • AUTOMATION',
    title: 'AI Architect Masterclass',
    description: 'Design enterprise AI workflows and task-driven agents. Build real solutions businesses actually pay for.',
    meta: '12 Modules • No-Code MVP • Multi-Agent Systems',
    price: '$749',
    color: COLORS.yellow,
  },
  {
    id: '4',
    tag: 'PARTNERSHIP • 90-DAY ASCENSION',
    title: 'Action Taker Private Circle',
    description: 'Direct 1:1 mentorship and eligibility for associate programs. Stacking income streams from operator to owner.',
    meta: '90-Day Challenge • Partner Eligibility',
    price: '$1,500/mo',
    color: COLORS.gold,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Followed the 48-hour blueprint exactly. Invested my $20, got the credit, and withdrew $55 by the second day. The system works if you act.",
    name: "Brandon T.",
    title: "Action Taker"
  },
  {
    id: '2',
    quote: "The Crypto Salary System is no joke. I'm hitting $500/day in about 15 minutes of actual work. It's the most efficient income I've ever built.",
    name: "Elena M.",
    title: "Proprietary Trader"
  },
  {
    id: '3',
    quote: "Building AI agents for local businesses has been a game changer. I closed my first $2k retainer two weeks into the AI Architect module.",
    name: "Marcus K.",
    title: "AI Agency Founder"
  },
  {
    id: '4',
    quote: "Moor2Build doesn't just teach tools; they teach leverage. In 90 days, I went from a consumer to an associate partner.",
    name: "Sarah L.",
    title: "Ecosystem Partner"
  },
  {
    id: '5',
    quote: "The marketing strategies here are lethal. My agency's conversion rate doubled within 60 days of implementing the AI content machines.",
    name: "Tariq H.",
    title: "Media Buyer"
  }
];
