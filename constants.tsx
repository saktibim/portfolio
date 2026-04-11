import { Skill, ExperienceItem, Project } from './types';
import {
  Coins,
  Package,
  Handshake,
  Truck,
  TrendingUp,
  Warehouse,
  BarChart2,
  Calculator
} from 'lucide-react';

export const SKILLS: Skill[] = [
  {
    id: 'tech',
    category: 'Technical Skills',
    title: 'Systems & Data Tools',
    tools: ['SAP (SD & MM)', 'Power BI (DAX, Dashboards)', 'MRP Systems', 'Amazon Seller Central (FBA)', 'Advanced Excel (INDEX-MATCH, Pivot Tables)']
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
    tools: ['Global Procurement', 'Contract Negotiation', 'Supplier Relationship Management (SRM)', 'New Product Introduction (NPI)']
  }
];

export const PROFESSIONAL_HISTORY: ExperienceItem[] = [
  {
    id: 'sleepez',
    company: 'SleepEZ (AU, US, UK)',
    role: 'Inventory & Supply Chain Specialist',
    period: '08/2025 — 12/2025',
    headline: 'Global Inventory & Backend Amazon FBA Optimization.',
    context: 'Streamlined global inventory replenishment and enhanced brand operations across three international markets.',
    techStack: ['Amazon FBA', 'Inventory Planning', 'Brand Strategy'],
    achievements: [
      {
        title: 'Inventory Assurance',
        description: 'Streamlined global inventory replenishment by monitoring stock levels for high-velocity SKUs (Mouth Tape, Nasal Strips), ensuring 0% stock-out rates during critical production shutdowns.'
      },
      {
        title: 'Brand Equity',
        description: 'Enhanced brand equity across 3 international markets by auditing creative assets and establishing distinct brand voices for Airspire and SleepEZ to prevent brand cannibalization.'
      },
      {
        title: 'FBA Issue Resolution',
        description: 'Resolved 100% of complex Amazon FBA backend discrepancies, including stuck orders and reimbursement escalations, through systematic operational problem-solving.'
      },
      {
        title: 'Content Optimization',
        description: 'Optimized Amazon A+ Content for multiple product lines, utilizing a consumer-centric benefit ranking to improve conversion rates and feature hierarchy.'
      }
    ]
  },
  {
    id: 'suryanesia',
    company: 'Suryanesia',
    role: 'Procurement & Logistics Specialist',
    period: '08/2024 — 09/2025',
    headline: 'Strategic Sourcing & Warehouse Orchestration.',
    context: 'Handled high-value contracts and comprehensive logistics for solar and energy project operations.',
    techStack: ['Contract Negotiation', 'Project Logistics', 'Demand Planning'],
    achievements: [
      {
        title: 'Cost Reduction',
        description: 'Reduced project overhead costs by sourcing and negotiating high-value contracts for materials, logistics, and warehouse equipment rentals.'
      },
      {
        title: 'Vendor Management',
        description: 'Ensured 100% project uptime by managing supplier and trucking vendor relationships and monitoring real-time performance metrics.'
      },
      {
        title: 'Operations',
        description: 'Orchestrated end-to-end warehouse operations, including inbound/outbound logistics and safety monitoring, to support continuous project execution.'
      },
      {
        title: 'Demand Planning',
        description: 'Improved forecast accuracy by collaborating with project teams to streamline supply chain processes and demand planning.'
      }
    ]
  },
  {
    id: 'hpe',
    company: 'Hewlett Packard Enterprise (HPE)',
    role: 'Material & Order Management Specialist',
    period: '03/2019 — 08/2023',
    headline: 'Materials Management & Order Processing Efficiency.',
    context: 'Spearheaded robust stock control and data-driven initiatives leveraging SAP MM and Power BI.',
    techStack: ['SAP MM', 'Power BI', 'Demand Forecasting'],
    achievements: [
      {
        title: 'Production Continuity',
        description: 'Decreased production delays by 20% by spearheading demand forecasting initiatives and implementing a robust stock control system using SAP MM.'
      },
      {
        title: 'Lead Time Reduction',
        description: 'Reduced procurement lead times by 25% by establishing strategic supplier relationships and negotiating favorable payment and delivery terms.'
      },
      {
        title: 'Process Optimization',
        description: 'Achieved 30% improvement in order processing efficiency by designing and implementing a streamlined Purchase Order (PO) system.'
      },
      {
        title: 'Waste Elimination',
        description: 'Eliminated 25% of excess raw material stock through the implementation of a data-driven stock control system.'
      },
      {
        title: 'Business Intelligence',
        description: 'Facilitated data-driven decision-making by developing comprehensive Power BI dashboards to track KPI performance across the organization.'
      }
    ]
  },
  {
    id: 'yusen',
    company: 'Yusen Logistics',
    role: 'Traffic Planner',
    period: '11/2018 — 03/2019',
    headline: 'Logistics Orchestration & Route Optimization.',
    context: 'Enhanced transportation networks to minimize costs and improve scheduling metrics.',
    techStack: ['Route Optimization', 'Traffic Management'],
    achievements: [
      {
        title: 'Cost Efficiency',
        description: 'Lowered fuel costs and transit times by 20% by optimizing daily transportation routes and delivery schedules.'
      },
      {
        title: 'Visibility Control',
        description: 'Boosted delivery visibility by implementing real-time tracking systems, significantly reducing customer-reported delays.'
      },
      {
        title: 'Process Flow',
        description: 'Increased transportation efficiency by 15% through cross-functional collaboration to eliminate bottlenecks in traffic management.'
      }
    ]
  },
  {
    id: 'dhl',
    company: 'DHL Supply Chain',
    role: 'Inventory Analyst',
    period: '01/2017 — 11/2018',
    headline: 'Precision Warehouse Operations & Inventory Integrity.',
    context: 'Maintained advanced FIFO protocols and strict compliance in a high-volume FMCG setting.',
    techStack: ['WMS', 'FIFO', 'Compliance Audits'],
    achievements: [
      {
        title: 'Stock Integrity',
        description: 'Maintained 99.5% inventory accuracy for a high-volume FMCG warehouse (Unilever) managing over 500 unique SKUs.'
      },
      {
        title: 'Protocol Implementation',
        description: 'Reduced stock discrepancies by 10% by leading a team to implement advanced inventory management and FIFO protocols.'
      },
      {
        title: 'Audit Compliance',
        description: 'Increased audit scores by 20% through the execution of regular random cycle counts and adherence to corporate compliance standards.'
      }
    ]
  }
];

export const PROJECTS: Project[] = [
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
        "Reduce Quote Time: Accelerated complex freight quoting from minutes to seconds.",
        "Zero Typos: Automated data retrieval ensures 100% accuracy in pricing.",
        "Scalability: New zones or service levels can be added to the source data without ever touching the lookup formula."
      ]
    },
    excelUrl: "https://1drv.ms/x/c/9fe491d7359e791d/IQCeqKcDBz-aRbMnjg1tESl_AQcbUniXLxnxrZEZ1fsUtFU?e=KooVwM"
  },
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
      buttonText: "READ_ARTICLE",
      format: ".URL // MEDIUM",
      metadata: "TUTORIAL_GUIDE"
    }
  }
];