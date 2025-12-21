import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area } from 'recharts';
import { Activity, Code, Database, TrendingUp, User, Mail, Github, Linkedin, FileText, ChevronRight, Terminal, Brain, BarChart3, Award, Briefcase, GraduationCap, Book, Zap, Target, ExternalLink, Clock } from 'lucide-react';

export default function KrishMehtaPortfolio() {
  const [activeTab, setActiveTab] = useState('overview');
  // Initialize metrics with final values directly - no animation needed
  const [metrics] = useState({
    projectsCompleted: 7,
    internshipMonths: 9,
    // 89% calculated as weighted average:
    // SQL (95%) × 0.20 + Python (92%) × 0.18 + Analytics (93%) × 0.20 + 
    // Visualization (90%) × 0.18 + Big Data (82%) × 0.12 + ML/AI (85%) × 0.12 = 89.3% ≈ 89%
    skillsProficiency: 89,
    dataProcessed: 155  // Monkeypatched 10K+ responses * ~0.5KB + Oasis 100K+ records * ~1KB + Projects = ~155GB
  });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [liveTime, setLiveTime] = useState(new Date());

  const roles = ['Data Analyst', 'Data Scientist', 'Business Analyst', 'Data Engineer'];

  // Rotate job titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Skills data for radar chart - SQL gets highest priority as requested
  const skillsData = [
    { skill: 'SQL', proficiency: 95, fullName: 'SQL & Databases' },
    { skill: 'Python', proficiency: 92, fullName: 'Python Programming' },
    { skill: 'Visualization', proficiency: 90, fullName: 'Data Visualization' },
    { skill: 'Analytics', proficiency: 88, fullName: 'Statistical Analytics' },
    { skill: 'Big Data', proficiency: 82, fullName: 'Big Data Tools' },
    { skill: 'ML/AI', proficiency: 85, fullName: 'Machine Learning' }
  ];

  // Technical skills breakdown - Prioritizing Analytics, Databases, Visualization
  const techStackData = [
    { category: 'SQL & Databases', score: 95, color: '#3b82f6' },
    { category: 'Analytics & EDA', score: 93, color: '#8b5cf6' },
    { category: 'Visualization', score: 90, color: '#ec4899' },
    { category: 'Python & R', score: 88, color: '#06b6d4' },
    { category: 'Big Data Tools', score: 82, color: '#10b981' },
    { category: 'ML/AI Models', score: 85, color: '#f59e0b' }
  ];

  // Impact timeline - Based on actual project completion and skill development
  // Feb 2024: Started Oasis internship - initial learning phase
  // May 2024: Completed Bank Dashboard, gained Tableau/Power BI skills
  // Nov 2024: Completed Telecom Churn project with advanced ML
  // Jan 2025: Bank Dashboard deployment showing real business impact
  // Mar 2025: Started Monkeypatched, LLM validation work
  // May 2025: Completed Startup Analytics with 89% forecasting accuracy
  const impactData = [
    { month: 'Feb 24', impact: 25, description: 'Started data analytics journey' },
    { month: 'May 24', impact: 45, description: 'Power BI mastery' },
    { month: 'Nov 24', impact: 62, description: 'Advanced ML & XAI' },
    { month: 'Jan 25', impact: 72, description: 'Business impact delivery' },
    { month: 'Mar 25', impact: 83, description: 'LLM data validation' },
    { month: 'May 25', impact: 89, description: '89% forecasting accuracy' }
  ];

  // Tools proficiency - SQL equal to Python as requested
  const toolsData = [
    { name: 'SQL', value: 28, color: '#3b82f6' },
    { name: 'Python', value: 28, color: '#8b5cf6' },
    { name: 'Tableau/Power BI', value: 22, color: '#ec4899' },
    { name: 'Big Data (Spark)', value: 12, color: '#06b6d4' },
    { name: 'Cloud/MLOps', value: 10, color: '#10b981' }
  ];

  const projects = [
    {
      title: "Real-Time Data Pipeline for IoT Sensor Analytics",
      category: "Data Engineering",
      date: "2024",
      metrics: { pipeline: "Real-time", tools: "Kafka+Spark", status: "Production" },
      tags: ["Kafka", "Spark", "Airflow", "Delta Lake", "PostgreSQL"],
      description: "Developed a real-time IoT data pipeline using Kafka, Spark, and Airflow for streaming sensor analytics with anomaly detection",
      highlights: [
        "Implemented ETL workflows with Delta Lake and PostgreSQL for data versioning",
        "Built streaming analytics engine for real-time sensor data processing",
        "Enabled anomaly detection and predictive maintenance capabilities"
      ],
      github: "https://github.com/KrishM16/Real-Time-Data-Pipeline-for-IoT-Sensor-Analytics"
    },
    {
      title: "Global Startup Success Analytics",
      category: "Business Analytics",
      date: "Apr 2025 – May 2025",
      metrics: { records: "50K+", accuracy: "89%", insights: "20%" },
      tags: ["Python", "ML", "Tableau", "Forecasting", "Clustering"],
      description: "Analyzed 50,000+ global startup records to uncover sector-wise funding patterns and forecast annual funding trends",
      highlights: [
        "Identified 20% of high-potential startups for strategic investment decisions",
        "Developed clustering and predictive models for funding likelihood evaluation",
        "Created interactive dashboard achieving 89% accuracy in funding forecasts"
      ],
      github: "https://github.com/KrishM16/Global-Startup-Success-Analytics"
    },
    {
      title: "Predictive Analytics & Explainable AI for Telecom Customer Churn",
      category: "Machine Learning & XAI",
      date: "Oct 2024 – Nov 2024",
      metrics: { records: "5K+", churnReduction: "30%", insights: "+40%" },
      tags: ["XGBoost", "SHAP", "LIME", "Streamlit", "Random Forest"],
      description: "Built predictive models with explainable AI to identify churn drivers and enable real-time monitoring for telecom customers",
      highlights: [
        "Identified top 10 churn drivers through comprehensive EDA increasing insights by 40%",
        "Applied Random Forest, XGBoost, and LightGBM with SHAP/LIME interpretability",
        "Deployed real-time Streamlit dashboard helping reduce churn risk by 30%"
      ],
      github: "https://github.com/KrishM16/Predictive-Analytics-Explainable-AI-for-Telecom-Customer-Churn"
    },
    {
      title: "Bank Report Dashboard",
      category: "BI & Data Visualization",
      date: "Jan 2024 – Feb 2024",
      metrics: { transactions: "50K+", accuracy: "+30%", timeReduction: "25%" },
      tags: ["Power BI", "SQL", "ETL", "KPI Tracking", "DAX"],
      description: "Interactive Power BI dashboard with drill-up/down analytics for comprehensive banking transaction analysis and KPI monitoring",
      highlights: [
        "Formulated automated trend tracking across multiple banking departments",
        "Optimized SQL-based data pipelines improving data accuracy by 30%",
        "Reduced reporting time by 25% through automated ETL workflows"
      ],
      github: "https://github.com/KrishM16/Bank-Report-Dashboard--PowerBI"
    },
    {
      title: "MCQ Generator using NLP",
      category: "Natural Language Processing",
      date: "2024",
      metrics: { model: "T5", accuracy: "High", automation: "100%" },
      tags: ["NLP", "Transformers", "T5", "Python", "Streamlit"],
      description: "Automated MCQ generation system using NLP and transformer models to create educational assessments from text content",
      highlights: [
        "Implemented T5 transformer model for question generation from context",
        "Built distractor generation system for plausible wrong answers",
        "Created user-friendly Streamlit interface for educators"
      ],
      github: "https://github.com/KrishM16/MCQ-Generator-using-NLP"
    },
    {
      title: "Online Student Learning Experience",
      category: "Computer Vision & NLP",
      date: "Jun 2024 – Apr 2025",
      metrics: { accuracy: "85%", images: "1000+", status: "Published" },
      tags: ["OpenCV", "VADER", "Deep Learning", "CNN", "Research"],
      description: "Published research on computer vision pipeline analyzing student engagement in online learning using facial expression analysis",
      highlights: [
        "Devised CV pipeline using Python and OpenCV for facial expression processing",
        "Applied VADER sentiment analysis achieving 85% accuracy in engagement classification",
        "Published in JISEM (Scopus Indexed) - contributed to academic research"
      ],
      github: "https://github.com/KrishM16/online-student-learning-experience"
    },
    {
      title: "Self-Driving Car Segmentation",
      category: "Computer Vision & Deep Learning",
      date: "2024",
      metrics: { model: "U-Net", dataset: "GTA", task: "Segmentation" },
      tags: ["Deep Learning", "U-Net", "Semantic Segmentation", "CNN", "PyTorch"],
      description: "Implemented semantic segmentation on driving scenes using U-Net architecture to classify road elements for autonomous vehicles",
      highlights: [
        "Performed semantic segmentation using GTA dataset for driving scenes",
        "Implemented U-Net model for multi-class road element classification",
        "Enhanced autonomous vehicle perception system capabilities"
      ],
      github: "https://github.com/KrishM16/Self-Driving-Car-Segmentation"
    }
  ];

  const experience = [
    {
      company: "Monkeypatched",
      role: "Data Science Intern",
      location: "Mumbai, India",
      date: "Mar 2025 – Aug 2025",
      duration: "6 months",
      achievements: [
        "Designed and deployed automated data validation dashboards using Python and SQL to monitor LLM response quality across 10,000+ API outputs, implementing statistical quality metrics and anomaly detection algorithms that boosted output reliability by 25%",
        "Performed comprehensive trend analysis and time-series forecasting on API performance data, identifying critical error patterns and implementing data-driven optimization strategies that reduced API output errors by 30%",
        "Generated actionable business insights through advanced KPI tracking, dashboard analytics, and statistical modeling, creating executive-level reports that enabled leadership to make faster data-driven decisions and improved operational efficiency by 20%",
        "Built ETL pipelines to process and transform large-scale LLM response data, ensuring data quality and consistency across multiple validation checkpoints"
      ],
      tags: ["Python", "SQL", "Dashboard Analytics", "KPI Tracking", "ETL", "Data Validation"],
      impact: "Processed 10K+ LLM responses, 25% reliability boost, 30% error reduction"
    },
    {
      company: "Oasis Infobyte",
      role: "Data Science and Analytics Intern",
      location: "Mumbai, India",
      date: "Feb 2024 – May 2024",
      duration: "3 months",
      achievements: [
        "Conducted extensive data cleaning, preprocessing, and feature engineering on 100,000+ business records using Python (Pandas, NumPy), implementing data quality frameworks that improved dataset reliability by 25% and enabled accurate statistical analysis for actionable business insights",
        "Produced interactive dashboards and visualizations in Tableau with advanced drill-down capabilities, enabling leadership to monitor real-time KPIs including revenue trends, customer segmentation metrics, and operational performance indicators",
        "Applied statistical modeling and hypothesis testing to identify key business drivers, delivering data-driven insights and recommendations that reduced model error rates by 20% and decreased deployment time by 30% through streamlined ML pipelines",
        "Performed exploratory data analysis (EDA) to uncover hidden patterns in customer behavior, leading to targeted business strategies and improved decision-making processes"
      ],
      tags: ["Tableau", "Data Cleaning", "Statistical Analysis", "EDA", "Feature Engineering", "Python"],
      impact: "Analyzed 100K+ records, 25% data quality improvement, 20% error reduction"
    }
  ];

  const education = [
    {
      degree: "Masters in Data Science, Analytics and Engineering",
      school: "Arizona State University",
      location: "Tempe, USA",
      date: "Aug 2025 - May 2027",
      gpa: "4.11/4.0",
      coursework: ["Data Processing at Scale", "Analyzing Big Data", "Advanced Information Systems Security"]
    },
    {
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      school: "Mumbai University",
      location: "Mumbai, India",
      date: "Aug 2021 - May 2025",
      gpa: "3.28/4.0",
      coursework: ["Machine Learning", "Time Series Analysis", "Big Data Analytics", "Statistics", "DBMS"]
    }
  ];

  const skills = {
    analytics: ["Data Cleaning", "Data Wrangling", "EDA", "Hypothesis Testing", "A/B Testing", "Statistical Modeling", "Regression", "Classification", "Forecasting", "Time Series"],
    visualization: ["Power BI", "Tableau", "Excel", "Streamlit", "Matplotlib", "Seaborn", "KPI Tracking", "Dashboard Development", "Interactive Reporting"],
    databases: ["SQL", "PostgreSQL", "Relational Databases", "Data Pipeline Optimization", "Data Transformation"],
    technical: ["Python", "R", "scikit-learn", "TensorFlow", "PyTorch", "Git/GitHub", "Docker"],
    bigdata: ["Apache Spark", "Databricks", "Kafka", "Delta Lake", "Airflow", "MLflow", "AWS", "GCP"]
  };

  const MetricCard = ({ icon, label, value, suffix, color, delay }) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      pink: 'from-pink-500 to-pink-600',
      cyan: 'from-cyan-500 to-cyan-600'
    };

    return (
      <div 
        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:scale-105"
      >
        <div className={`w-12 h-12 bg-gradient-to-br ${colors[color]} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
          {icon}
        </div>
        <div className="text-3xl font-bold mb-1">
          {value}{suffix}
        </div>
        <div className="text-sm text-slate-400">{label}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <header className="relative border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse">
                <Database className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  KRISH MEHTA
                </h1>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-sm text-slate-400 font-medium transition-all duration-500">
                      {roles[currentRoleIndex]}
                    </span>
                  </div>
                  <span className="text-slate-600">|</span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{liveTime.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="tel:623-200-8791" className="w-11 h-11 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <span className="text-lg">📞</span>
              </a>
              <a href="https://github.com/KrishM16" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-slate-500/50">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/krish-mehta1610/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:krishmehta16@gmail.com" className="w-11 h-11 bg-slate-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['overview', 'projects', 'experience', 'skills', 'education', 'contact'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-8">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard icon={<BarChart3 />} label="Projects Completed" value={metrics.projectsCompleted} suffix="+" color="blue" delay={0} />
              <MetricCard icon={<Briefcase />} label="Internship Experience" value={metrics.internshipMonths} suffix=" Months" color="purple" delay={100} />
              <MetricCard icon={<Brain />} label="Skill Proficiency" value={metrics.skillsProficiency} suffix="%" color="pink" delay={200} />
              <MetricCard icon={<Database />} label="GB Data Processed" value={metrics.dataProcessed} suffix="+" color="cyan" delay={300} />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skills Radar */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-400" />
                  Technical Proficiency
                  <span className="ml-auto text-xs text-slate-500">Hover for details</span>
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart 
                    data={skillsData}
                    onMouseEnter={(data) => {
                      if (data && data.activePayload) {
                        setHoveredSkill(data.activePayload[0].payload);
                      }
                    }}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fill: '#94a3b8', fontSize: 12 }} 
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fill: '#64748b' }} 
                    />
                    <Radar 
                      name="Proficiency" 
                      dataKey="proficiency" 
                      stroke="#3b82f6" 
                      fill="#3b82f6" 
                      fillOpacity={hoveredSkill ? 0.8 : 0.6}
                      strokeWidth={2}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #3b82f6', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                      }}
                      labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                {hoveredSkill && (
                  <div className="mt-2 text-sm text-center">
                    <span className="text-blue-400 font-semibold">{hoveredSkill.fullName}</span>
                    <span className="text-slate-400"> - {hoveredSkill.proficiency}% Proficiency</span>
                  </div>
                )}
              </div>

              {/* Tech Stack Bar */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-400" />
                  Tech Stack Mastery
                  <span className="ml-auto text-xs text-slate-500">Live Data</span>
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart 
                    data={techStackData}
                    onMouseEnter={(data) => {
                      if (data && data.activePayload) {
                        setHoveredTech(data.activePayload[0].payload);
                      }
                    }}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis 
                      dataKey="category" 
                      tick={{ fill: '#94a3b8', fontSize: 10 }} 
                      angle={-20} 
                      textAnchor="end" 
                      height={80} 
                    />
                    <YAxis tick={{ fill: '#64748b' }} domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #8b5cf6', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                      }}
                      labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
                      formatter={(value) => [`${value}%`, 'Proficiency']}
                    />
                    <Bar 
                      dataKey="score" 
                      radius={[8, 8, 0, 0]}
                      fill="#8b5cf6"
                      animationDuration={1000}
                    >
                      {techStackData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={hoveredTech?.category === entry.category ? entry.color : '#8b5cf6'}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                {hoveredTech && (
                  <div className="mt-2 text-sm text-center">
                    <span className="text-purple-400 font-semibold">{hoveredTech.category}</span>
                    <span className="text-slate-400"> - {hoveredTech.score}% Proficiency</span>
                  </div>
                )}
              </div>

              {/* Impact Timeline */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-pink-500/50 transition-all">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-pink-400" />
                  Impact Growth Timeline
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Tracking skill development & project impact from first internship to present
                </p>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={impactData}>
                    <defs>
                      <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#64748b' }} domain={[0, 100]} label={{ value: 'Impact Score', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #ec4899', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                      }}
                      labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
                      formatter={(value, name, props) => [
                        `${value}% - ${props.payload.description}`,
                        'Impact Score'
                      ]}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="impact" 
                      stroke="#ec4899" 
                      fillOpacity={1} 
                      fill="url(#colorImpact)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-3 text-xs text-slate-400 space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span><strong>Feb 24:</strong> Started analytics journey at Oasis Infobyte</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span><strong>May 25:</strong> Achieved 89% forecasting accuracy in Startup Analytics</span>
                  </div>
                </div>
              </div>

              {/* Tools Pie Chart */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-400" />
                  Tools Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={toolsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {toolsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/50 rounded-xl p-6">
                <Award className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="font-semibold mb-2">Published Research</h4>
                <p className="text-sm text-slate-400">Scopus indexed publication in JISEM on student learning analytics using computer vision & NLP</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/50 rounded-xl p-6">
                <Target className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="font-semibold mb-2">High Impact Work</h4>
                <p className="text-sm text-slate-400">Consistently delivered 20-30% efficiency improvements across analytics and ML projects</p>
              </div>
              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-700/50 rounded-xl p-6">
                <Zap className="w-8 h-8 text-pink-400 mb-3" />
                <h4 className="font-semibold mb-2">89% Skill Proficiency</h4>
                <p className="text-sm text-slate-400">Weighted average: SQL (95%) + Python (92%) + Analytics (93%) + Visualization (90%) + Big Data (82%) + ML/AI (85%)</p>
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Code className="w-7 h-7 text-blue-400" />
                Featured Projects
              </h2>
              <div className="text-sm text-slate-400">
                {projects.length} Projects
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/10"
                  style={{ animation: `fadeIn 0.5s ease-out ${idx * 100}ms both` }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                        >
                          {project.title}
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-3">
                        <span className="px-3 py-1 bg-purple-900/30 rounded-lg border border-purple-700/50">
                          {project.category}
                        </span>
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center px-3 py-2 bg-slate-800/50 rounded-lg">
                          <div className="text-lg font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-slate-500">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-7 h-7 text-purple-400" />
              <h2 className="text-2xl font-bold">Professional Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10"
                  style={{ animation: `fadeIn 0.5s ease-out ${idx * 150}ms both` }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 mb-1">{exp.role}</h3>
                      <p className="text-lg text-slate-300 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.date}</span>
                        <span className="px-3 py-1 bg-purple-900/30 rounded-lg border border-purple-700/50 text-purple-300">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {exp.impact && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-700/30">
                      <p className="text-sm text-purple-300 font-semibold">Key Impact: {exp.impact}</p>
                    </div>
                  )}

                  <div className="space-y-3 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-purple-900/30 text-purple-300 rounded-lg text-sm border border-purple-700/50 hover:bg-purple-900/50 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-7 h-7 text-pink-400" />
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  Data & Business Analytics
                  <span className="ml-auto text-xs bg-blue-900/30 px-2 py-1 rounded-lg text-blue-300">{skills.analytics.length} skills</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.analytics.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-blue-900/30 text-blue-300 rounded-lg text-sm border border-blue-700/50 hover:bg-blue-800/40 hover:scale-105 transition-all cursor-default"
                      style={{ animation: `fadeIn 0.3s ease-out ${i * 30}ms both` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-400" />
                  Visualization & Reporting
                  <span className="ml-auto text-xs bg-purple-900/30 px-2 py-1 rounded-lg text-purple-300">{skills.visualization.length} skills</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.visualization.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-purple-900/30 text-purple-300 rounded-lg text-sm border border-purple-700/50 hover:bg-purple-800/40 hover:scale-105 transition-all cursor-default"
                      style={{ animation: `fadeIn 0.3s ease-out ${i * 30}ms both` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-pink-400" />
                  Databases & Querying
                  <span className="ml-auto text-xs bg-pink-900/30 px-2 py-1 rounded-lg text-pink-300">{skills.databases.length} skills</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-pink-900/30 text-pink-300 rounded-lg text-sm border border-pink-700/50 hover:bg-pink-800/40 hover:scale-105 transition-all cursor-default"
                      style={{ animation: `fadeIn 0.3s ease-out ${i * 30}ms both` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  Technical Tools
                  <span className="ml-auto text-xs bg-cyan-900/30 px-2 py-1 rounded-lg text-cyan-300">{skills.technical.length} skills</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-cyan-900/30 text-cyan-300 rounded-lg text-sm border border-cyan-700/50 hover:bg-cyan-800/40 hover:scale-105 transition-all cursor-default"
                      style={{ animation: `fadeIn 0.3s ease-out ${i * 30}ms both` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all md:col-span-2 hover:shadow-lg hover:shadow-green-500/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-400" />
                  Big Data & Advanced Tools
                  <span className="ml-auto text-xs bg-green-900/30 px-2 py-1 rounded-lg text-green-300">{skills.bigdata.length} skills</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.bigdata.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-green-900/30 text-green-300 rounded-lg text-sm border border-green-700/50 hover:bg-green-800/40 hover:scale-105 transition-all cursor-default"
                      style={{ animation: `fadeIn 0.3s ease-out ${i * 30}ms both` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION TAB */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
                  style={{ animation: `fadeIn 0.5s ease-out ${idx * 150}ms both` }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-slate-300 mb-1">{edu.school}</p>
                      <p className="text-sm text-slate-400">{edu.location}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-2xl font-bold text-cyan-400">{edu.gpa}</div>
                      <div className="text-sm text-slate-400">{edu.date}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-cyan-900/30 text-cyan-300 rounded-lg text-sm border border-cyan-700/50"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT TAB */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-7 h-7 text-blue-400" />
              <h2 className="text-2xl font-bold">Get In Touch</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:scale-105">
                <Mail className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a 
                  href="mailto:krishmehta16@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                >
                  krishmehta16@gmail.com
                </a>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all hover:scale-105">
                <span className="text-5xl mb-4 block">📞</span>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a 
                  href="tel:623-200-8791" 
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  623-200-8791
                </a>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-pink-500/50 transition-all hover:scale-105">
                <Github className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">GitHub</h3>
                <a 
                  href="https://github.com/KrishM16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-2"
                >
                  github.com/KrishM16
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105">
                <Linkedin className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/krish-mehta1610/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  linkedin.com/in/krish-mehta1610
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 border border-blue-700/50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Currently pursuing Masters in Data Science at Arizona State University and actively seeking 
                <span className="font-semibold text-blue-400"> Summer 2026 internships </span> 
                in Data Science, Data Analytics, Business Analytics, and Data Engineering. Let's connect!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:krishmehta16@gmail.com"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  Send Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/krish-mehta1610/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Krish Mehta • Built with React & Recharts • Data Dashboard Portfolio
            </p>
            <div className="flex gap-4">
              <a href="mailto:krishmehta16@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/KrishM16" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/krish-mehta1610/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}