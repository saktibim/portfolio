import { Skill, ExperienceItem, Project, Certificate } from './types';
import {
  Coins,
  Package,
  Handshake,
  Truck,
  TrendingUp,
  Warehouse,
  BarChart2,
  Calculator,
  ShoppingCart
} from 'lucide-react';

export const CALENDLY_URL = "https://calendly.com/opswithbima/30min?background_color=00ff6f&text_color=000000&primary_color=ffffff";
export const CONTACT_EMAIL = "opswithbima@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/bimasekti/";
// Put the files in /public and set the paths, e.g. "/Bima-Sekti-CV.pdf" and "/bima.jpg". Empty = hidden.
export const CV_URL = "";
export const PHOTO_URL = "/bima.png";

export const HEADLINE_STATS = [
  { value: '8+ Years', label: 'SCM & Process Improvement' },
  { value: '99%+', label: 'Inventory Accuracy Benchmark' },
  { value: '30+', label: 'Analytics Dashboards Built' },
  { value: 'Global', label: 'Markets Aligned' },
];

export const SERVICES = [
  {
    id: 'inventory-health-check',
    name: 'Inventory Health Check',
    pain: 'Stockouts on best-sellers, cash stuck in slow stock, numbers you don\'t trust.',
    deliverables: [
      'SKU-by-SKU risk list (stockout, overstock, dead stock)',
      'Reorder points and safety stock for your top SKUs',
      'Stock data errors found and explained',
      '1-page action plan',
    ],
    timeline: 'Typically 1 week',
  },
  {
    id: 'ops-dashboard',
    name: 'Operations Dashboard Build',
    pain: 'Reports built by hand every week, and still no clear view of stock, orders or suppliers.',
    deliverables: [
      'Excel or Power BI dashboard on your real data',
      'Inventory, purchasing and supplier KPIs in one view',
      'Simple refresh steps your team can run',
      'Walkthrough call + handover notes',
    ],
    timeline: 'Typically 1–3 weeks',
  },
  {
    id: 'procurement-review',
    name: 'Procurement & Supplier Review',
    pain: 'Late suppliers, scattered spend, and no data to negotiate with.',
    deliverables: [
      'Spend grouped by category and supplier',
      'Supplier scorecard (on-time, in-full, lead time)',
      'Where to consolidate and what to renegotiate',
      'Purchase order process fixes',
    ],
    timeline: 'Typically 2 weeks',
  },
];

export const SKILLS: Skill[] = [
  {
    id: 'tech',
    category: 'Technical Skills',
    title: 'Systems & Data Tools',
    tools: ['SAP (SD & MM)', 'Power BI (DAX, Dashboards)', 'MRP Systems', 'Amazon Seller Central (FBA)', 'Advanced Excel (INDEX-MATCH, Pivot Tables)', 'ClickUp & Asana']
  },
  {
    id: 'ops-excellence',
    category: 'Operational Excellence',
    title: 'Process Optimization',
    tools: ['Lean Six Sigma', 'Demand Forecasting', 'Inventory Velocity Analysis', 'Warehouse Optimization (FIFO)', 'Process Mapping (Flowcharts)']
  },
  {
    id: 'strategic',
    category: 'Strategic Management',
    title: 'Leadership & Procurement',
    tools: ['Project & EPC Procurement', 'Import Logistics & Freight Planning', 'TKDN Local-Content Sourcing', 'Contract Negotiation', 'Supplier Relationship Management (SRM)']
  }
];

export const PROFESSIONAL_HISTORY: ExperienceItem[] = [
  {
    id: 'sleepez',
    company: 'Sleep EZ Australia',
    role: 'Inventory & Supply Chain Specialist',
    period: '08/2025 — 01/2026',
    highlight: '39 SKUs on Amazon AU, no stockouts through the Chinese New Year shutdown',
    headline: 'Amazon FBA inventory for a 3-brand, 39-SKU portfolio (AU market).',
    context: 'Kept best-sellers in stock and FBA operations running for SleepEZ, Airspire and Swisho, working with suppliers in China and a remote team across 4 locations.',
    techStack: ['Amazon FBA', 'Seller Central', 'Inventory Planning', 'Asana'],
    achievements: [
      {
        title: 'Zero Shutdown Stockouts',
        description: 'Ran velocity analysis and buffer-stock plans ahead of Chinese New Year factory shutdowns, with no stockouts on high-velocity SKUs (Mouth Tape, Nasal Strips).'
      },
      {
        title: 'FBA Issue Resolution',
        description: 'Handled daily FBA backend work across 39 SKUs: inventory reconciliations, stuck orders and reimbursement claims.'
      },
      {
        title: 'Inbound Replenishment',
        description: 'Tracked supplier lead times from China to Amazon FBA warehouses and sized shipments to balance storage fees against availability.'
      },
      {
        title: 'Remote Team Coordination',
        description: 'Ran day-to-day operations with a remote team across 4 locations (Bali, Tangerang, Bandung, China), keeping suppliers, designers, copywriters, UGC creators and logistics on one Asana workflow.'
      },
      {
        title: 'Listings & Launches',
        description: 'Built Amazon A+ Content for several product lines and coordinated product launches from factory to listing.'
      }
    ]
  },
  {
    id: 'suryanesia',
    company: 'Suryanesia',
    role: 'Procurement & Logistics Specialist',
    period: '08/2024 — 08/2025',
    highlight: 'Procurement & logistics for 23 solar projects (27 MWp), 43,000+ panels',
    headline: 'Procurement & logistics for 23 commercial & industrial solar projects (27 MWp).',
    context: 'Sourced, shipped and stored the equipment for rooftop solar installations at industrial factories across Java, from Tier-1 manufacturers and local TKDN suppliers.',
    techStack: ['EPC Procurement', 'Import Logistics', 'TKDN', 'ClickUp', 'Power BI'],
    achievements: [
      {
        title: 'Equipment Sourcing',
        description: 'Ran RFQs, negotiations and purchase orders for 43,000+ solar panels, 210 inverters and mounting structures, combining Tier-1 imports with local TKDN suppliers.'
      },
      {
        title: 'Supplier Savings',
        description: 'Compared terms, warranties and prices across a 3-vendor mounting-structure network, cutting that cost by 11%.'
      },
      {
        title: 'Freight Planning',
        description: 'Designed a 2-tier truck loading plan (496 panels per truck) and coordinated 88 truck dispatches and 70+ import containers to project sites.'
      },
      {
        title: 'Warehouse Control',
        description: 'Sole warehouse keyholder for project materials: receiving, storage, dispatch and cycle counts, with 99.7% stock accuracy.'
      },
      {
        title: 'Site Readiness',
        description: 'Tracked supplier lead times against construction schedules in ClickUp so equipment, tools and safety gear (PPE) arrived before crews mobilized, cutting delivery lead-time variance by 15%.'
      }
    ]
  },
  {
    id: 'hpe',
    company: 'Hewlett Packard Enterprise (HPE)',
    role: 'Material & Order Management Specialist',
    period: '03/2019 — 08/2023',
    highlight: '$90K working capital recovered, −25% procurement lead time',
    headline: 'Materials and order management for enterprise server components.',
    context: 'Processed 660+ SAP lines a month and supported parts availability for Sales, Field Engineers, Delivery Managers and 3PL warehouses, including 24-hour standby for urgent spare parts.',
    techStack: ['SAP SD/MM', 'Power BI', 'Advanced Excel', 'MRP'],
    featuredNote: 'Longest role · 4.5 years at a Fortune 500 company',
    achievements: [
      {
        title: 'Capital Recovery',
        description: 'Built a return-tracking process with Field Engineers and Delivery Managers that cut pending part returns from $150,000 to $60,000, recovering $90,000 in working capital.'
      },
      {
        title: 'Lead Time Reduction',
        description: 'Reduced procurement lead times by 25% by working closely with suppliers and negotiating better payment and delivery terms.'
      },
      {
        title: 'Production Continuity',
        description: 'Reduced production delays by 20% by tuning reorder points and safety stock with 3PL warehouse partners in SAP MM.'
      },
      {
        title: 'Order Processing',
        description: 'Made purchase order processing 30% faster with a streamlined PO workflow, keeping 99.8% transaction accuracy.'
      },
      {
        title: 'Excess Stock',
        description: 'Cut excess raw material stock by 25% using a data-driven stock control model in Excel and SAP.'
      },
      {
        title: 'Reporting',
        description: 'Built Excel tracking models and Power BI reports for part availability, usage velocity and supplier lead times.'
      }
    ]
  },
  {
    id: 'yusen',
    company: 'Yusen Logistics',
    role: 'Traffic Planner',
    period: '11/2018 — 03/2019',
    highlight: '20 container trucks dispatched per day; recruited directly by HPE',
    headline: 'Port-to-factory container transport, Tanjung Priok to Jabodetabek.',
    context: 'Planned and tracked daily container trucking for industrial raw materials. Recruited directly by Hewlett Packard Enterprise from this role.',
    techStack: ['TMS', 'GPS Tracking', 'Fleet Dispatch'],
    achievements: [
      {
        title: 'Fleet Dispatch',
        description: 'Scheduled and dispatched 20 container trucks a day between Tanjung Priok Port and manufacturing plants.'
      },
      {
        title: 'Live Tracking',
        description: 'Kept the Transport Management System up to date and monitored GPS tracking to catch delays early.'
      },
      {
        title: 'Customer Updates',
        description: 'Sent clients real-time delivery status and proactive delay updates for port clearance and highway bottlenecks.'
      }
    ]
  },
  {
    id: 'dhl',
    company: 'DHL Supply Chain',
    role: 'Inventory Analyst',
    period: '01/2017 — 11/2018',
    highlight: '99.5% inventory accuracy across 500+ SKUs (Unilever)',
    headline: 'Inventory control for the Unilever account, 500+ FMCG SKUs.',
    context: 'Led shift inventory control at DHL Multi-User Facility 2 (Bekasi) with a team of 2 inventory checkers.',
    techStack: ['SAP', 'WMS', 'Advanced Excel', 'FIFO & 5S'],
    achievements: [
      {
        title: 'Stock Accuracy',
        description: 'Kept physical-to-system inventory accuracy at 99.5%+ across 500+ fast-moving Unilever SKUs.'
      },
      {
        title: 'Cycle Counts',
        description: 'Ran daily cycle counts with 2 checkers and reconciled differences between WMS and SAP before each shift handover.'
      },
      {
        title: 'Occupancy Dashboard',
        description: 'Built and updated a daily warehouse occupancy dashboard in Excel to track rack capacity and space use.'
      },
      {
        title: 'Root Cause Fixes',
        description: 'Investigated stock variances and enforced FIFO and 5S standards to stop recurring mismatches.'
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'amazon-arbitrage',
    title: "How I'd Approach Product Analytics for an Amazon Arbitrage Business",
    tags: ['#AmazonFBA', '#ProductAnalytics', '#AdvancedExcel'],
    description: 'A short video walkthrough of an Excel dashboard that screens products before buying: profit, ROI and a clear Buy / Investigate / Reject decision.',
    icon: <ShoppingCart className="w-6 h-6" />,
    content: {
      article: {
        title: "How I'd Approach Product Analytics for an Amazon Arbitrage Business",
        blocks: [
          {
            type: 'text',
            content: "I come from supply chain and inventory operations, where most of the work is making sure the numbers behind a buying decision are right. Amazon arbitrage is a business model I haven't worked in, so I gave myself a small project: build a dashboard that answers one question.\n\n**Which products look worth buying, and which need more checking first?**\n\nThe video below shows how it works. Here's the thinking behind it."
          },
          {
            type: 'video',
            url: '/videos/amazon-arbitrage.mp4',
            caption: 'Dashboard walkthrough · sample data'
          },
          {
            type: 'text',
            content: "### The data I use\n\nFor each product, the dashboard starts with a handful of inputs:\n\n- What I'd pay for it (purchase cost)\n- What it might sell for on Amazon\n- Amazon's estimated fees\n- Other unit costs, like shipping and prep, which are easy to forget\n- How many units I'm planning to buy\n- Whether I've checked that I'm allowed to sell it, and whether the selling price has been verified\n\nFrom these, it calculates the profit per unit, the margin and the ROI, and then the total estimated profit at the planned quantity."
          },
          {
            type: 'text',
            content: "### The impact\n\nThe point isn't the formulas. It's seeing the whole picture in one place.\n\n- **Buy Candidate:** the numbers look good and the checks are done.\n- **Investigate:** it could be worth it, but something still needs confirming, such as eligibility or the real selling price.\n- **Reject:** the margin is too thin, or it loses money once all costs are counted.\n\nIn my sample data, the product with the highest profit potential hasn't had its eligibility checked yet. That's exactly the kind of case I want to catch before money is spent, and a table of profits alone would hide it."
          },
          {
            type: 'text',
            content: "### Filters that update everything\n\nPick a category, a retailer or a decision status, and every KPI and chart changes together. That makes it quick to answer questions like \"how do the Tesco products compare?\" or \"what's left in the Investigate pile?\""
          },
          {
            type: 'text',
            content: "### What this is, and isn't\n\nAll the data in the video is made-up sample data. The prices, fees and decisions are illustrative, not live Amazon numbers, and nothing here has been tested against real sales. It's a prototype, not a finished system.\n\nIf I were taking it further, I'd:\n\n- Test it against real purchase results and compare estimated profit with actual profit\n- Build in VAT and storage costs\n- Track sell-through speed and competition per product"
          },
          {
            type: 'text',
            content: "### Why I built it\n\nI like turning messy decisions into something people can check. This was my way of showing how I'd approach a new business model: start with the questions, organise the data, flag the risks, and keep the logic simple enough to explain.\n\nIf you work in e-commerce or inventory, feedback is welcome."
          }
        ]
      }
    },
    isSample: true
  },
  {
    id: 'freight-engine',
    title: 'Dynamic Freight Cost Engine',
    tags: ['#Logistics', '#FreightOptimization', '#AdvancedExcel'],
    description: 'Developed an Automated Freight Calculator using a dynamic 2-Way INDEX & MATCH system, replacing manual searches with an error-proof retrieval system.',
    icon: <Calculator className="w-6 h-6" />,
    content: {
      problem: "In global trade, shipping rates fluctuate constantly based on Zones and Service Levels. Most professionals rely on static VLOOKUPs, which only search vertically. If a shipping manager needs to switch from \"Standard\" to \"Express,\" they have to manually rewrite the formula, risking errors and delays.",
      solution: "I developed an automated 2-Way INDEX & MATCH system that acts as a \"GPS coordinate\" logic for pricing. Using a matrix of 20 shipping zones and 5 service levels, I implemented Data Validation drop-downs to prevent typos. The system retrieves the exact shipping rate by finding the intersection of the selected row (Zone) and column (Service Level), then calculates total cost by multiplying against the shipment weight.",
      impact: [
        "Faster quotes: a freight quote takes seconds instead of a manual table search.",
        "Fewer pricing errors: drop-down inputs and a single lookup remove typing mistakes.",
        "Easy to maintain: new zones or service levels are added to the rate table without touching the formula."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQCeqKcDBz-aRbMnjg1tESl_AQcbUniXLxnxrZEZ1fsUtFU?e=KooVwM",
    isSample: true
  },
  {
    id: 'procurement',
    title: 'Procurement Spend Audit',
    tags: ['#SpendAnalysis', '#CostReduction', '#Visibility'],
    description: 'Categorized global unmanaged spend to unlock immediate visibility and identify significant cost-saving opportunities.',
    icon: <Coins className="w-6 h-6" />,
    content: {
      problem: "Scenario: a growing company has no clear view of where its purchasing money goes. Purchases are spread across departments and vendors are not classified, so waste is invisible and there is no basis for volume discounts.",
      solution: "I audited the raw transaction data and categorized all unmanaged spend. After normalizing vendor names and mapping each cost to a category, I built a Spend Map that shows where the money goes. In the sample dataset, about 20% of spend was spread across many small, non-contracted vendors (\"maverick spend\"), which is usually more expensive than consolidated purchasing.",
      impact: [
        "Savings targets: the model sizes the potential saving from vendor consolidation and renegotiation (about $12,000/year in the sample data).",
        "Spend control: the output feeds a preferred-vendor list to standardize purchasing.",
        "Ongoing visibility: a monthly spend dashboard shows budget vs. actual by category."
      ]
    },
    excelUrl: "https://docs.google.com/spreadsheets/d/1K0Ocy4Hpmkc0mjTSYuBG0wIxeFVRTBn9jE6ph25fIrE/edit?usp=sharing",
    isSample: true
  },
  {
    id: 'inventory',
    title: 'Inventory Health & Stockout Audit',
    tags: ['#RiskManagement', '#StockoutPrevention', '#KPIs'],
    description: 'Built a dynamic dashboard to monitor high-risk SKUs and predict stockout probabilities, preventing lost sales.',
    icon: <Package className="w-6 h-6" />,
    content: {
      problem: "Scenario: an e-commerce brand selling on Amazon and Shopify has stock data split across channels. High-demand products sell out without warning, which loses revenue and hurts marketplace ranking.",
      solution: "I built a centralized Inventory Command Center for a sample catalog worth $19,177 in stock. It calculates two safety metrics: Stockout Probability % (how likely each SKU is to run out) and Reorder Alerts (status tags like HEALTHY, REORDER NOW, OUT OF STOCK). On the sample data it flagged six high-risk SKUs, including a 'Powerbank' line with a >30% stockout probability that looked fine in raw stock counts.",
      impact: [
        "Early warning: at-risk SKUs are flagged before they sell out, so inbound shipments can be prioritized.",
        "One view for the owner: marketplace slicers show which products and regions tie up cash or drive profit.",
        "Proactive ordering: reorder alerts replace guesswork with a weekly, rules-based restock routine."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQDSbEdSeBlKRI9JzZ8yRjxBAdHjmF67D4t-iE3N5kn99Yc?e=gpw2A9",
    isSample: true
  },
  {
    id: 'supplier',
    title: 'Supplier Reliability Audit',
    tags: ['#VendorScorecards', '#OTIF', '#PerformanceTracking'],
    description: 'Replaced anecdotal feedback with data-driven scorecards, ranking suppliers by On-Time In-Full (OTIF) performance.',
    icon: <Handshake className="w-6 h-6" />,
    content: {
      problem: "Scenario: a company judges suppliers on gut feeling. Lead times and quality vary, but without a central record nobody can tell a one-off delay from a supplier that is always late, so the business pays for stockouts and expedited shipping.",
      solution: "I built a Supplier Reliability Scorecard that ranks suppliers objectively. OTIF (On-Time In-Full) is the main driver, and late deliveries are penalized by how many days late they are. In the sample data the gap was large: the best supplier scored 89%, while the worst scored 63% and was flagged as a critical risk, with an average delay of 2.9 days per shipment.",
      impact: [
        "Preferred suppliers at a glance: a color-coded dashboard (green above 80%, red below 65%).",
        "Fact-based supplier conversations: low performers see their own OTIF and delay data.",
        "Better reorder points: real supplier lead times feed the demand plan instead of quoted ones."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQBblaO3MVfMTa3N5S9d1Q0QAZ1c2KAl6L7ib3HPdTuI-FU?e=rfIQa3",
    isSample: true
  },
  {
    id: 'logistics',
    title: 'Logistics & Freight Recovery',
    tags: ['#FreightOptimization', '#CostPerKG', '#Logistics'],
    description: 'Analyzed weight-vs-cost data to identify "expedited waste" and optimize Air vs. Sea freight mode selection.',
    icon: <Truck className="w-6 h-6" />,
    content: {
      problem: "Scenario: a fictional lighting brand (\"Lumina Lighting\") uses air freight to cover for poor inventory planning. With no policy in place, heavy shipments are flown worldwide and expedited costs eat the product margin.",
      solution: "I built a scatter plot of Shipment Weight vs. Total Cost, using #N/A logic to separate the air and sea clusters. It shows a 'danger zone' from about 150 KG, where air cost rises much faster than sea. I then normalized the data into Cost per KG benchmarks for each shipping lane (AU, UK, USA).",
      impact: [
        "Clear policy: shipments above 150 KG default to sea freight unless approved.",
        "Visible waste: expedited freight becomes a tracked KPI instead of a hidden cost.",
        "Stronger negotiation: Cost per KG benchmarks are used to check carrier quotes."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQBbPqhOMyMmS4mzbV-VYCURARMvVoQZo2nURpv5hLGHsvs?e=EgOQ83",
    isSample: true
  },
  {
    id: 'sales',
    title: 'Multi-Channel Sales Performance Audit',
    tags: ['#E-commerce', '#TACoS', '#ROASAnalysis'],
    description: 'Unified Amazon & Shopify data to track Total Advertising Cost of Sales (TACoS), ensuring profitable scaling.',
    icon: <TrendingUp className="w-6 h-6" />,
    content: {
      problem: "Scenario: a brand selling on Amazon and Shopify sees revenue growing, but ad spend and platform fees sit in separate reports. Nobody can tell whether the growth is profitable, so money keeps going into low-margin products.",
      solution: "I built an E-commerce Command Center that combines sales and advertising data into one source of truth. It tracks TACoS (Total Advertising Cost of Sales = total ad spend / total revenue), which catches problems that standard ACoS misses. Excel harmonizes the different Amazon AU, USA and UK report formats into one dashboard. On the sample data (about $68,900 sales and $16,300 ad spend), global TACoS is 23.7%: healthy, but close to diminishing returns in some regions.",
      impact: [
        "Smarter ad budget: shows which low-margin items to cut and which high-margin SKUs to push.",
        "One view of all markets: total sales and ad spend by region on a single page.",
        "Ads linked to stock: advertising is only scaled up when inventory health confirms enough stock."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQCmPe1TfRWqRYAdTS3TJg8MARww3Q27bHy8qnAxMgu4XtI?e=4XPyad",
    isSample: true
  },
  {
    id: 'warehouse',
    title: 'Warehouse Operations Audit',
    tags: ['#ProcessImprovement', '#PickingAccuracy', '#CycleTime'],
    description: 'Audited picking speed against accuracy to identify process bottlenecks and reduce costly shipping errors.',
    icon: <Warehouse className="w-6 h-6" />,
    content: {
      problem: "Scenario: in a fictional brand's warehouse (\"Lumina Lighting\"), pickers are measured on speed, not accuracy. They hit their speed targets, but picking errors drive up returns and rework, and every wrong item costs far more than picking it right the first time.",
      solution: "I set up a Six Sigma style audit of speed vs. quality. The tracker uses three formulas: Pick Cycle Time (in minutes), Accuracy as a First Pass Yield flag (IF(Errors = 0, 1, 0)), and Productivity (items per minute). In the sample data, picker P-04 met the speed target with only 33% accuracy, while P-03 was accurate but 55% slower than target, which shows exactly where coaching is needed.",
      impact: [
        "Quality-first KPI: measure \"perfect orders\" instead of \"items picked\".",
        "Targeted coaching: train specific pickers on their specific gap, instead of generic team sessions."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQD5WA9MDJs3TKqO7QLpfftkAVwtR9vAtB0waL2f-6seVAw?e=WDdUZi",
    isSample: true
  },
  {
    id: 'powerbi-tutorial',
    title: 'Master Power BI: Data Visualization with Real-World Data Professional Survey — A Comprehensive Guide',
    tags: ['#PowerBI', '#DataVisualization', '#DataCleaning'],
    description: 'A comprehensive, step-by-step tutorial on mastering Power BI through a hands-on project using a real-world dataset of 630+ data professionals.',
    icon: <BarChart2 className="w-6 h-6" />,
    content: {
      article: {
        title: "Master Power BI: Data Visualization with Real-World Data Professional Survey — A Comprehensive Guide",
        blocks: [
          {
            type: 'text',
            content: "In this article, I created a detailed Power BI project using a real-world dataset derived from a survey of data professionals worldwide. Whether you’re a data scientist, analyst, or enthusiast, this guide will help you navigate through the process of data visualization, from importing and cleaning data to creating insightful dashboards.\n\n### Introduction\n\nData visualization is a critical skill in today’s data-driven world. Power BI, a powerful business analytics tool by Microsoft, allows you to visualize data and share insights across your organization. In this guide, we’ll use a dataset from a global survey of data professionals to demonstrate how to leverage Power BI to create meaningful visualizations."
          },
          {
            type: 'image',
            url: "/powerbi-dashboard.png",
            alt: "Project-1 Global Data Professionals Benchmarking Dashboard"
          },
          {
            type: 'youtube',
            url: "https://www.youtube.com/embed/OT32CfJzzF0"
          },
          {
            type: 'text',
            content: "### Step 1: Importing the Data\n\nFirst, we’ll start by importing our data from an Excel file. This dataset includes responses from 600 to 700 data professionals around the globe, capturing details about their roles, salaries, preferred programming languages, and more.\n\n- **Connect to Data Source**: Open Power BI Desktop and select ‘Import from Excel’. Navigate to your dataset and connect.\n- **Navigate the Data**: Once connected, use the navigator window to select the relevant tables and data ranges."
          },
          {
            type: 'text',
            content: "### Step 2: Transforming the Data\n\nBefore visualizing, we need to clean and transform our data to ensure accuracy and relevance.\n\n- **Transform Data**: Choose the ‘Transform Data’ option to open Power Query Editor.\n- **Remove Unnecessary Columns**: Identify and remove columns with irrelevant data such as browser information, city, country, and referral source.\n- **Handle Text Data**: Ensure columns like job titles and salary ranges are cleaned and standardized. For instance, merge similar job titles and convert salary ranges into average values for better visualization."
          },
          {
            type: 'text',
            content: "### Step 3: Cleaning Specific Data Columns\n\n- **Job Titles**: Standardize job titles by merging similar entries. For instance, merge variations like \"business analyst\" and \"business analyst (senior)\" into a single category.\n- **Salary Data**: Convert salary ranges into average salaries by splitting the range column and calculating the mean value.\n- **Programming Languages**: Clean and categorize preferred programming languages by data professionals."
          },
          {
            type: 'text',
            content: "### Step 4: Data Visualization\n\nWith our data clean and ready, we can start creating visualizations.\n\n**Creating Cards:**\n- **Count of Survey Takers**: Use a card visualization to show the total number of survey participants.\n- **Average Age**: Display the average age of the survey participants.\n\n**Bar Charts:**\n- **Average Salary by Job Title**: Use a stacked bar chart to show the average salary for each job title.\n- **Preferred Programming Languages**: Visualize the preferred programming languages among different job titles using a clustered column chart.\n\n**Tree Maps and Gauges:**\n- **Country Representation**: Use a tree map to show the distribution of survey participants across different countries.\n- **Work-Life Balance and Salary Satisfaction**: Use gauges to display average satisfaction levels with work-life balance and salary.\n\n**Additional Insights:**\n- **Programming Language Preference**: Create a pie chart to show the distribution of preferred programming languages among survey participants."
          },
          {
            type: 'text',
            content: "### Step 5: Finalizing the Dashboard\n\n- **Organize Visuals**: Arrange your visuals neatly on the dashboard for a clean and professional look.\n- **Add Titles and Labels**: Ensure all charts and visuals are appropriately labeled for clarity.\n- **Review and Publish**: Review your dashboard, make necessary adjustments, and publish your report."
          }
        ]
      }
    },
    excelUrl: "https://medium.com/@bimasekti/master-power-bi-data-visualization-with-real-world-data-a-comprehensive-guide-a8e7112022e9",
    hubConfig: {
      title: "Article Hub",
      description: "Read the full step-by-step tutorial published on Medium.",
      buttonText: "Read article",
      format: "Medium article",
      metadata: "Tutorial"
    }
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: 'six-sigma-green-belt',
    title: 'Certified Lean Six Sigma Green Belt',
    issuer: 'Six Sigma Academy Amsterdam',
    date: '23-Apr-2024',
    credentialId: 'ce366b67-31b6-4d89-b21e-315189fd41c8',
    verificationUrl: '/certificates/Six Sigma Green Belt Certificate.png',
    skills: ['Process Optimization', 'DMAIC Methodology', 'Statistical Analysis', 'Quality Management', 'BKO Accreditation']
  },
  {
    id: 'process-mapping-expert',
    title: 'Certified Process Improvement & Process Mapping Expert',
    issuer: 'Six Sigma Academy Amsterdam',
    date: '30-Jun-2024',
    credentialId: '1bbbdb9b-f398-48fb-99e1-4fdb3bf95635',
    verificationUrl: '/certificates/Certified Process Improvement and Process Mapping Expert.png',
    skills: ['Process Mapping', 'Value Stream Mapping', 'Business Process Modeling (BPMN)', 'Waste Reduction', 'CPD Accreditation']
  },
  {
    id: 'demand-planning-management',
    title: 'Demand Planning Management',
    issuer: 'Kaweroo Institute',
    date: '24-Nov-2023',
    credentialId: 'B-2108/2023-CP',
    verificationUrl: '/certificates/Demand Planning Certificate.pdf',
    skills: ['Demand Planning', 'Forecasting Methods', 'Forecast Error Tracking', 'Forecast Accuracy', 'Safety Stock Setting', 'Order Management']
  },
  {
    id: 'supply-chain-logistics',
    title: 'Supply Chain Logistics',
    issuer: 'Rutgers University (via Coursera)',
    date: '2024',
    credentialId: '9NJ2U8CPN5KG',
    verificationUrl: 'https://coursera.org/verify/9NJ2U8CPN5KG',
    skills: ['Transportation Management', 'Logistics Networks', 'Warehousing', 'Last-Mile Delivery', 'Freight Management']
  },
  {
    id: 'supply-chain-operations',
    title: 'Supply Chain Operations',
    issuer: 'Rutgers University (via Coursera)',
    date: '2024',
    credentialId: 'QJCZSD58CQLX',
    verificationUrl: 'https://coursera.org/verify/QJCZSD58CQLX',
    skills: ['Operations Management', 'Process Improvement', 'Lean Manufacturing', 'Quality Control', 'KPI Tracking']
  },
  {
    id: 'supply-chain-planning',
    title: 'Supply Chain Planning',
    issuer: 'Rutgers University (via Coursera)',
    date: '2024',
    credentialId: '7PAXNYD2E8A6',
    verificationUrl: 'https://coursera.org/verify/7PAXNYD2E8A6',
    skills: ['Demand Forecasting', 'S&OP', 'Inventory Planning', 'MRP', 'Production Scheduling']
  },
  {
    id: 'supply-chain-sourcing',
    title: 'Supply Chain Sourcing',
    issuer: 'Rutgers University (via Coursera)',
    date: '2024',
    credentialId: '9F64P4P5ZHFG',
    verificationUrl: 'https://coursera.org/verify/9F64P4P5ZHFG',
    skills: ['Strategic Sourcing', 'Vendor Selection', 'Procurement', 'Contract Negotiation', 'Supplier Evaluation']
  },
  {
    id: 'cscmp-crm',
    title: 'Supply Chain Foundations: Customer Relationship Management',
    issuer: 'CSCMP (via LinkedIn Learning)',
    date: '11-Jan-2024',
    credentialId: 'CSCMP-CRM-20240111',
    verificationUrl: '/certificates/CertificateOfCompletion_CSCMP Supply Chain Foundations Customer Relationship Management Professional Certificate.pdf',
    skills: ['Customer Relationship Management', 'Supply Chain Strategy', 'Customer Service', 'Order Fulfillment', 'Service Level Management']
  }
];