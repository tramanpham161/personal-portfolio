import childcareCheckerImg from './assets/images/childcare_checker_1780474677293.png';
import backToWorkImg from './assets/images/back_to_work_1780474692826.png';
import tottableRecipesImg from './assets/images/tottable_recipes_1780474705348.png';
import mumReviewsImg from './assets/images/mum_reviews_1780474720017.png';
import inventoryOptimiserImg from './assets/images/inventory_optimiser_1780474737874.png';
import coffeeBlendImg from './assets/images/coffee_blend_1780474754515.png';

export interface Project {
  id: string;
  title: string;
  url: string;
  description: string;
  bullets: string[];
  image: string;
  category: 'parenting' | 'business';
  tags: string[];
  stats?: { label: string; value: string }[];
}

export const CATEGORIES = {
  parenting: {
    title: 'Parenting & Early Years',
    description: 'Empowering parents with checkers, planners, recipe ideas, and honest product reviews designed to simplify the daily parenting routine.',
    accentColor: 'rose',
    badgeText: 'Parenting Tech & Blogs',
    themeClass: 'from-rose-50/50 to-orange-50/50 border-rose-100',
    textAccent: 'text-rose-600',
    bulletCheck: 'text-rose-500',
    tagClass: 'bg-rose-50 text-rose-700 border-rose-100',
  },
  business: {
    title: 'Business & Operations',
    description: 'Crisp analytical Streamlit applications focused on stock level predictions, operations control, and coffee blend calculations.',
    accentColor: 'indigo',
    badgeText: 'Operational Streamlit Apps',
    themeClass: 'from-sky-50/50 to-indigo-50/50 border-indigo-100',
    textAccent: 'text-indigo-600',
    bulletCheck: 'text-indigo-500',
    tagClass: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'childcare-checker',
    title: 'Childcare Checker',
    url: 'https://childcarechecker.vercel.app',
    description: 'A simple child care checker for UK parents, focusing on nursery cost, funder hours and timeline.',
    bullets: [
      'Compare local childcare agencies, nurseries, or registered childminders.',
      'Check regulatory screening scores and indicators at a single glance.',
      'Plan and estimate early-years child support and government eligibility.',
    ],
    image: 'Childcare Checker - main page.png',
    category: 'parenting',
    tags: ['Next.js', 'Eligibility Checker', 'Parenting Helper'],
    stats: [
      { label: 'Platform', value: 'Vercel Web App' },
      { label: 'Tone', value: 'Reassuring & Helpful' }
    ]
  },
  {
    id: 'back-to-work',
    title: 'Back to Work Planner',
    url: 'https://backtowork.vercel.app',
    description: 'A simple, quick guide for parents to organise their back-to-work plan after parental leave.',
    bullets: [
      'Custom nursery preparation calendars and drop-off time outlines.',
      'Ramp-up milestones to balance domestic care and workplace responsibilities.',
      'Actionable checklist covering feeding cycles, express-plan, and kit prep.',
    ],
    image: 'Back to work main page.png',
    category: 'parenting',
    tags: ['Vite', 'Transition Planner', 'Checklists'],
    stats: [
      { label: 'Type', value: 'Interactive Tool' },
      { label: 'Focus', value: 'Transition Support' }
    ]
  },
  {
    id: 'tottable-recipes',
    title: 'Table Tot',
    url: 'https://tottable-recipe-generator.vercel.app',
    description: "A quick meal generator for baby and toddler, by simply entering what's available in the house. All instructions are easy to follow and realistic.",
    bullets: [
      'Generate playful, nutritious meals targeting toddlers and little kids.',
      'Allergy-conscious filters with allergen tags and swift substitutions.',
      'Clean step-by-step cooking instructions requiring minimal kitchen prep.',
    ],
    image: tottableRecipesImg,
    category: 'parenting',
    tags: ['Tailwind', 'AI Recipe Ideas', 'Kid-friendly'],
    stats: [
      { label: 'Features', value: 'Allergen Guard' },
      { label: 'Prep Time', value: '< 20 Minutes' }
    ]
  },
  {
    id: 'honest-mum-reviews',
    title: 'The Honest Mum Reviews',
    url: 'https://mumreview1.wordpress.com',
    description: 'A parenting blog focuses on reviewing personally tested products, services and child-related things.',
    bullets: [
      'Genuinely honest product reviews written by a parent for parents.',
      'Sensory-friendly toys evaluations and high-quality safety feedback.',
      'A rich collection of lived early-years stories and nursery setups.',
    ],
    image: mumReviewsImg,
    category: 'parenting',
    tags: ['WordPress', 'Written Reviews', 'Parenting Blog'],
    stats: [
      { label: 'Format', value: 'Blogging Site' },
      { label: 'Reviews', value: '100% Honest & Independent' }
    ]
  },
  {
    id: 'inventory-optimiser',
    title: 'FMCG Inventory Optimiser',
    url: 'https://inventory-optimiser.streamlit.app',
    description: 'A simple stock check, inventory optimiser for FMCG businesses, with an option to download the full list of items to order.',
    bullets: [
      'Model demand and compute statistical reorder levels effortlessly.',
      'Minimize storage holding costs while shielding operations from stockouts.',
      'Visualize turnover ratios and stock levels over clean date ranges.',
    ],
    image: inventoryOptimiserImg,
    category: 'business',
    tags: ['Streamlit', 'Inventory Operations', 'Demand Analytics'],
    stats: [
      { label: 'Framework', value: 'Streamlit' },
      { label: 'Focus', value: 'Operational Math' }
    ]
  },
  {
    id: 'coffee-blend-checker',
    title: 'Coffee Blend Checker',
    url: 'https://coffee-blend-checker.streamlit.app',
    description: 'An easy comparison tool for coffee-related businesses to see financial and carbon footprint changes when the Robusta/Arabica ratio changes, with an option to download all the scenarios for comparison.',
    bullets: [
      'Calculate blend splits across single-origin batches and roasting levels.',
      'Verify tasting notes and adjust ratios for target acidity, body, and sweet aroma.',
      'Save time estimating production weight costs for boutique roaster operations.',
    ],
    image: 'your-uploaded-image.jpg',
    category: 'business',
    tags: ['Python App', 'Roastery Math', 'Ratio Balancer'],
    stats: [
      { label: 'Framework', value: 'Streamlit & Python' },
      { label: 'Sector', value: 'Boutique Coffee Business' }
    ]
  }
];
