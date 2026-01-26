import React from 'react';
import { Service, ExperienceItem, Project } from './types';
import {
  Coins,
  Package,
  Handshake,
  Truck,
  TrendingUp,
  Warehouse,
  Activity
} from 'lucide-react';

export const SERVICES: Service[] = [
  {
    id: 'audit',
    title: 'Operational Health Audit',
    description: 'A 2-hour diagnostic of your current Excel/Google Sheets workflows. I identify bottlenecks and build a custom "Mini-Dashboard" sample to prove immediate ROI.',
    ctaText: 'Request an Audit'
  },
  {
    id: 'inventory-velocity',
    title: 'Inventory Velocity Engine',
    description: 'Enterprise-level stock logic for scaling brands. I identify "Dead Capital" in your warehouse and automate Buy/Return signals to optimize cash flow.',
    ctaText: 'Recover Capital'
  },
  {
    id: 'fractional-ops',
    title: 'Fractional Ops Analyst',
    description: 'Dedicated operational infrastructure for remote-first companies. I build lean supply chains that scale without increasing overhead.',
    ctaText: 'Check Availability'
  },
  {
    id: 'managed-dashboards',
    title: 'Managed Operations Dashboard',
    description: 'Continuous monitoring and weekly updates for your core business metrics. I manage the data pipelines and dashboard health so your "Source of Truth" remains accurate as you scale.',
    ctaText: 'Start Subscription',
    icon: <Activity className="w-6 h-6" />,
    content: {
      headline: "Stop Managing Spreadsheets. Start Managing Your Business.",
      problem: "Most dashboards die within three months. As your business scales, your data sources change, your formulas break, and your \"Source of Truth\" becomes a liability. You didn't start your company to spend your weekends debugging VLOOKUPs.",
      pivot: "I offer Managed Operations Intelligence. I don't just build your dashboard; I own the health of your data pipeline. I ensure that every Monday morning, you have the precise metrics you need to make high-stakes decisions with 100% confidence.",
      tiers: [
        {
          title: "Tier 1: Basic Monitoring (The \"Static\" Tier)",
          price: "$300 – $600 / month",
          focus: "Essential visibility for stable operations.",
          scope: "Monthly data synchronization for 1–2 core sources (e.g., Shopify + Inventory Sheet).",
          deliverables: ["Monthly \"Operational Health Check\" report", "Baseline maintenance to ensure zero downtime"],
          bestFor: "Small businesses that need a reliable, professional pulse on their performance without the overhead of an in-house analyst."
        },
        {
          title: "Tier 2: Active Operations (The \"Standard\" Tier)",
          price: "$800 – $1,500 / month",
          focus: "Decision-support for aggressive growth.",
          scope: "Weekly data updates across 3–5 complex sources, including multi-channel reconciliation and advanced data cleaning.",
          deliverables: ["Weekly performance snapshots", "Automated stock-level alerts", "Monthly 30-minute strategy call to translate data into action"],
          bestFor: "Scaling companies making inventory, procurement, or staffing decisions on a weekly basis."
        }
      ],
      closing: {
        headline: "Your Data, Engineered by an Expert.",
        text: "Choosing a managed service means you never have to wonder if your numbers are right. You get the same analytical rigor I applied at HPE and DHL, tailored specifically for your scale.\n\nReady to automate your insights? Click below to book a brief technical discovery call. We’ll discuss your current data \"mess\" and determine which tier fits your growth trajectory.",
        ctaLabel: "Book Your Discovery Call",
        ctaUrl: "mailto:opswithbima@gmail.com"
      }
    }
  }
];

export const PROFESSIONAL_HISTORY: ExperienceItem[] = [
  {
    id: 'hpe',
    company: 'Hewlett Packard Enterprise',
    role: 'Business Operations Analyst',
    period: '2022 — PRESENT',
    headline: 'Scaling Global Infrastructure and Data Automation.',
    context: 'Managed end-to-end material planning and order processing within a high-volume global supply chain.',
    techStack: ['SAP SD/MM', 'Power BI', 'Advanced Excel'],
    achievements: [
      {
        title: 'Project Leadership',
        description: 'Led New Product Introduction (NPI) cycles and coordinated complex supplier networks.'
      },
      {
        title: 'Inventory Control',
        description: 'Optimized stock control systems and monitored imports to ensure 100% material availability.'
      }
    ]
  },
  {
    id: 'yusen',
    company: 'Yusen Logistics',
    role: 'Traffic Planner',
    period: '2020 — 2022',
    headline: 'Logistics Orchestration & Route Optimization.',
    context: 'Coordinated transportation scheduling and optimized routing for complex delivery networks.',
    techStack: ['Logistics Planning', 'Route Optimization'],
    achievements: [
      {
        title: 'Impact',
        description: 'Focused on delivery performance and fleet schedule optimization to minimize transit times and costs.'
      }
    ]
  },
  {
    id: 'dhl',
    company: 'DHL Supply Chain',
    role: 'Inventory Analyst',
    period: '2018 — 2020',
    headline: 'Precision Warehouse Operations & Stock Accuracy.',
    context: 'Oversaw large-scale warehouse operations with a focus on absolute inventory integrity.',
    techStack: ['SAP', 'WMS'],
    achievements: [
      {
        title: 'Impact',
        description: 'Managed stock accuracy and optimized warehouse workflows to ensure seamless supply chain continuity.'
      }
    ]
  },
  {
    id: 'suryanesia',
    company: 'Suryanesia',
    role: 'Procurement & Logistics Specialist',
    period: '2017 — 2018',
    headline: 'Strategic Sourcing & Sustainable Energy Logistics.',
    context: 'Handled full-cycle procurement and logistics for solar energy projects.',
    techStack: ['Procurement', 'Green Logistics'],
    achievements: [
      {
        title: 'Impact',
        description: 'Managed contract negotiations, supplier evaluations, and demand forecasting while ensuring regulatory compliance.'
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'procurement',
    title: 'Procurement Spend Audit',
    tags: ['#SpendAnalysis', '#CostReduction', '#Visibility'],
    description: 'Categorized global unmanaged spend to unlock immediate visibility and identify significant cost-saving opportunities.',
    icon: <Coins className="w-6 h-6" />,
    content: {
      problem: "The organization lacked a clear view of where capital was being allocated across various departments. Fragmented purchasing and a lack of vendor classification made it impossible to identify waste or negotiate volume discounts. This \"dark spend\" created a significant drain on company margins.",
      solution: "I performed a comprehensive audit of raw transaction data to categorize all unmanaged spend. By normalizing vendor data and mapping costs to specific categories, I built a Spend Map to visualize expenditure patterns. This process allowed for the identification of non-essential costs and budget overlaps. The analysis revealed that 20% of the total expenditure was distributed across hundreds of small, non-contracted vendors—\"maverick spend\" that was significantly more expensive than consolidated purchasing.",
      impact: [
        "Identified Savings: Uncovered over $12,000 in potential annual savings through vendor consolidation and contract renegotiation.",
        "Spend Control: Established a preferred vendor list to standardize purchasing and prevent unauthorized expenditures.",
        "Real-Time Monitoring: Developed a permanent spending dashboard that provides leadership with 100% visibility into monthly budget adherence."
      ]
    },
    excelUrl: "https://docs.google.com/spreadsheets/d/1K0Ocy4Hpmkc0mjTSYuBG0wIxeFVRTBn9jE6ph25fIrE/edit?usp=sharing"
  },
  {
    id: 'inventory',
    title: 'Inventory Health & Stockout Audit',
    tags: ['#RiskManagement', '#StockoutPrevention', '#KPIs'],
    description: 'Built a dynamic dashboard to monitor high-risk SKUs and predict stockout probabilities, preventing lost sales.',
    icon: <Package className="w-6 h-6" />,
    content: {
      problem: "Inventory is the largest capital expense and the biggest operational risk. We were struggling with fragmented stock data across Amazon and Shopify, leading to \"blind spots\" where high-demand products would sell out unexpectedly, resulting in lost revenue and penalization from marketplace algorithms.",
      solution: "I developed a centralized Inventory Command Center to monitor $19,177.00 in total inventory value. Using conditional logic and data normalization, I engineered two critical safety metrics: Stockout Probability % (a predictive calculation for depletion risks) and Dynamic Reorder Alerts (automated status tags like HEALTHY, REORDER NOW, OUT OF STOCK). The audit immediately flagged six SKUs at high risk—specifically the 'Powerbank' line, which showed a >30% stockout probability despite appearing stable in raw counts—preventing a major fulfillment failure during a peak Australian sales period.",
      impact: [
        "Revenue Protection: By identifying the six at-risk SKUs, we successfully prioritized inbound shipments, protecting roughly $5,000+ in potential weekly revenue.",
        "Interactive Oversight: Implemented Marketplace Slicers, allowing the CEO to toggle between regions and instantly see which products are draining cash or generating profit.",
        "Operational Discipline: Transitioned from \"reactive\" ordering to a \"proactive\" cycle, ensuring our top-performing products maintain a 98%+ in-stock rate."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQDSbEdSeBlKRI9JzZ8yRjxBAdHjmF67D4t-iE3N5kn99Yc?e=gpw2A9"
  },
  {
    id: 'supplier',
    title: 'Supplier Reliability Audit',
    tags: ['#VendorScorecards', '#OTIF', '#PerformanceTracking'],
    description: 'Replaced anecdotal feedback with data-driven scorecards, ranking suppliers by On-Time In-Full (OTIF) performance.',
    icon: <Handshake className="w-6 h-6" />,
    content: {
      problem: "In a global supply chain, relying on \"gut feelings\" about supplier performance is an operational risk. We were facing inconsistent lead times and quality issues, but without a centralized audit, we couldn't differentiate between a one-time delay and a systemic vendor failure. This lack of transparency led to stockouts and unnecessary expedited shipping costs to cover for late arrivals.",
      solution: "I developed a data-driven Supplier Reliability Scorecard to move from anecdotal feedback to objective ranking. The model prioritized OTIF (On-Time In-Full) as the primary reliability driver, while penalizing \"Days Late\" based on severity. The audit exposed a massive performance gap: while the top-tier vendor achieved an 89% score, the bottom vendor was flagged as a Critical Risk with a 63% score (driven by a 2.9-day average delay per shipment). This visualization enabled management to immediately initiate a vendor consolidation strategy, shifting volume toward high-reliability partners.",
      impact: [
        "Strategic Procurement: Automated the identification of \"Preferred Vendors\" using a color-coded dashboard (Green for >80%, Red for <65%).",
        "Improved Fill Rates: By holding vendors accountable to the 53% Global OTIF benchmark, we pressured low-performers to improve their logistics or face contract termination.",
        "Lead Time Accuracy: Reduced unexpected delays by integrating historical performance data into our demand forecasting, ensuring more realistic reorder points."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQBblaO3MVfMTa3N5S9d1Q0QAZ1c2KAl6L7ib3HPdTuI-FU?e=rfIQa3"
  },
  {
    id: 'logistics',
    title: 'Logistics & Freight Recovery',
    tags: ['#FreightOptimization', '#CostPerKG', '#Logistics'],
    description: 'Analyzed weight-vs-cost data to identify "expedited waste" and optimize Air vs. Sea freight mode selection.',
    icon: <Truck className="w-6 h-6" />,
    content: {
      problem: "At Lumina Lighting, we were using Air Freight as a 'band-aid' for poor inventory planning. Without a clear policy, heavy shipments were being flown globally, resulting in massive 'Expedited Waste' that destroyed product margins.",
      solution: "I built a diagnostic scatter plot mapping Shipment Weight vs. Total Cost using #N/A logic to separate data clusters. This revealed a critical 'Danger Zone' starting at 150 KG where Air costs scaled exponentially compared to Sea. I then normalized the data to track Cost per KG benchmarks across all major shipping lanes (AU, UK, USA).",
      impact: [
        "New SOP: Any shipment exceeding 150 KG now defaults to Sea Freight unless it has direct CEO approval.",
        "Recovered Margin: Turned hidden 'Expedited Waste' into a measurable KPI, forcing improved lead-time planning over last-minute flights.",
        "Negotiation Power: We now use the Cost per KG benchmarks to audit carrier quotes and drive more aggressive procurement."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQBbPqhOMyMmS4mzbV-VYCURARMvVoQZo2nURpv5hLGHsvs?e=EgOQ83"
  },
  {
    id: 'sales',
    title: 'Multi-Channel Sales Performance Audit',
    tags: ['#E-commerce', '#TACoS', '#ROASAnalysis'],
    description: 'Unified Amazon & Shopify data to track Total Advertising Cost of Sales (TACoS), ensuring profitable scaling.',
    icon: <TrendingUp className="w-6 h-6" />,
    content: {
      problem: "Scaling an e-commerce business across multiple channels like Amazon and Shopify creates a \"data fragmentation\" problem. We were seeing top-line revenue growth, but without a unified view of advertising spend and platform fees, it was impossible to tell if that growth was actually profitable. Managing separate silos led to over-investing in low-margin products and missing the \"True Profit\" of our marketing efforts.",
      solution: "I engineered a centralized E-commerce Command Center to aggregate sales and marketing data into a single source of truth. I implemented a specialized metric to audit our scaling efficiency: TACoS (Total Advertising Cost of Sales), calculated as (Total Ad Spend / Total Revenue), which provides a \"Sanity Check\" that standard ACoS misses. I used Excel to harmonize different reporting formats from Amazon AU, USA, and UK into a standardized global dashboard. The audit revealed a global TACoS of 23.7%, signaling that we were in a healthy scaling phase but approaching a point of diminishing returns in certain regions.",
      impact: [
        "Strategic Budget Reallocation: Shifted ad spend away from low-margin items that were \"cannibalizing\" organic sales and moved it toward high-contribution-margin SKUs.",
        "Global Visibility: Created a real-time monitor for the CEO to track total sales (e.g., $68,893.00) and ad spend (e.g., $16,333.00) across all geographic markets in a single view.",
        "Data-Driven Growth: Established a permanent feedback loop between marketing and supply chain, ensuring that we only \"turn on the taps\" for advertising when inventory health audits confirm sufficient stock levels."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQCmPe1TfRWqRYAdTS3TJg8MARww3Q27bHy8qnAxMgu4XtI?e=4XPyad"
  },
  {
    id: 'warehouse',
    title: 'Warehouse Operations Audit',
    tags: ['#ProcessImprovement', '#PickingAccuracy', '#CycleTime'],
    description: 'Audited picking speed against accuracy to identify process bottlenecks and reduce costly shipping errors.',
    icon: <Warehouse className="w-6 h-6" />,
    content: {
      problem: "At Lumina Lighting, \"fast\" shipping was being prioritized over \"correct\" shipping. As a first-time leader, I identified that while our pickers were meeting raw speed targets, our rework costs were spiking due to high error rates. Shipping a single wrong item costs the business 3x the original labor in returns and customer service.",
      solution: "I implemented a Six Sigma audit to track the Efficiency-Quality Paradox. I built a custom monitoring engine using three specific logic formulas: Pick Cycle Time to normalize time into minutes, Accuracy Rate as a binary IF(Errors = 0, 1, 0) \"First Pass Yield\" metric, and Productivity (Items/Cycle Time). The audit exposed Picker P-04 as a major operational liability—maintaining target speed but with a disastrous 33% accuracy rate—while P-03 was accurate but 55% slower than goal, pinpointing bottleneck sources.",
      impact: [
        "Incentivized Quality: Shifted internal KPIs from \"Total Items Picked\" to \"Total Perfect Orders\" to align staff with our brand's premium promise.",
        "Targeted Training: Replaced general team lectures with specific workstation coaching for underperformers, reducing return shipping costs by 15%."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQD5WA9MDJs3TKqO7QLpfftkAVwtR9vAtB0waL2f-6seVAw?e=WDdUZi"
  }
];