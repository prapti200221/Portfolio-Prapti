import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import AboutSkillsPage from './AboutSkillsPage';
import ExperienceEducationPage from './ExperienceEducationPage';
import ProjectsCertificationsPage from './ProjectsCertificationsPage';
import ContactExtracurricularsPage from './ContactExtracurricularsPage';
import { 
  User, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Github,
  Linkedin,
  BarChart3,
  Calendar,
  Filter,
  TrendingUp
} from 'lucide-react';

const PowerBIDashboard = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [projectFilter, setProjectFilter] = useState('All');
  const [certificationFilter, setCertificationFilter] = useState('All');

  const profileData = {
    name: "Prapti Pradhan",
    headline: "Data Science Professional | ML • DL • Graph Analytics • Power BI • Data Analytics • AI Strategist",
    location: "Rourkela, Odisha, India",
    email: "praptipradhan21@gmail.com",
    phone: "+91 9556342111",
    linkedin: "https://www.linkedin.com/in/prapti-pradhan-37889a234/",
    github: "https://github.com/prapti200221",
    photo: "https://customer-assets.emergentagent.com/job_2233ae0b-9743-4715-bb92-315e7aa65666/artifacts/ooj7kl4p_WhatsApp%20Image%202025-09-30%20at%2021.19.49_4997b633.jpg",
    summary: "Result-oriented Data Scientist with a strong foundation in ML, predictive modeling, graph analytics, and data storytelling. Comfortable translating complex data into actionable insights and communicating with both technical and non-technical stakeholders."
  };

  const kpis = [
    { label: "Company Experience", value: "4+", icon: TrendingUp },
    { label: "Projects", value: "11+", icon: BarChart3 },
    { label: "Certifications", value: "9+", icon: Award }
  ];

  const skills = {
    "Programming": {
      "Python": 99,
      "SQL": 95,
      "R": 95
    },
    "ML & DS": {
      "scikit-learn": 98,
      "XGBoost": 95,
      "SVM": 95,
      "Clustering": 95,
      "ARIMA/LSTM": 90,
      "Feature Selection": 95,
      "Graph Models": 95,
      "Pandas": 99,
      "NumPy": 99
    },
    "Deep Learning": {
      "TensorFlow": 95,
      "PyTorch": 95,
      "Keras": 95,
      "CNNs": 95,
      "GNNs": 95,
      "U-Net": 95,
      "Transformers": 95
    },
    "Big Data & Cloud": {
      "PySpark": 80,
      "Hadoop": 80,
      "GCP (BigQuery)": 90,
      "Cloud Storage": 90
    },
    "Viz & Reporting": {
      "Power BI": 99,
      "Excel": 100,
      "Matplotlib": 99,
      "Seaborn": 99,
      "Plotly": 99,
      "Dashboards": 99,
      "Data Storytelling": 100
    },
    "NLP": {
      "spaCy": 70,
      "NLTK": 70,
      "Topic Modeling": 78,
      "LDA": 80
    }
  };

  const experience = [
    {
      id: 1,
      title: "Capstone Project — Data Science (Collaboration with Meta)",
      company: "London School of Economics",
      location: "London",
      period: "Nov 2024–Aug 2025",
      type: "Project",
      achievements: [
        "Forecasting key ocean parameters (chlorophyll, turbidity, suspended matter) from ESA Sentinel-3 ocean-colour datasets using NN models",
        "Spatio-temporal learning for environmental monitoring and climate assessment"
      ]
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "BodhBridge ESPL",
      location: "Chennai",
      period: "Jul–Sep 2023",
      type: "Internship",
      achievements: [
        "SEO + analytics campaigns across ed-tech sub-brands",
        "Improved reach & engagement metrics significantly"
      ]
    },
    {
      id: 3,
      title: "Research Analyst",
      company: "EDERA",
      location: "Pune (Remote)",
      period: "Apr–Jul 2023",
      type: "Internship",
      achievements: [
        "Built interactive Power BI dashboards for data visualization",
        "Implemented segmentation/clustering algorithms",
        "Optimized SQL queries for faster reporting",
        "Informed curriculum strategy through data insights"
      ]
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "ICCW (IITM Research Park)",
      location: "Chennai",
      period: "Jan–Mar 2023",
      type: "Internship",
      achievements: [
        "Analyzed geospatial & chemical datasets for government reports",
        "Produced interactive maps and dashboards",
        "Automated data pipelines with Python + GIS tools"
      ]
    }
  ];

  const education = [
    {
      degree: "MSc Data Science",
      institution: "London School of Economics",
      period: "2024–2025",
      status: "Current"
    },
    {
      degree: "BS Data Science & Programming",
      institution: "IIT Madras",
      period: "2021–2024",
      status: "Completed"
    },
    {
      degree: "BSc Computational Mathematics & Statistics",
      institution: "MIT-WPU, Pune",
      period: "2020–2023",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Data Science Professional",
      issuer: "Oracle",
      year: 2025,
      category: "Cloud"
    },
    {
      title: "Microsoft Power BI for Business Intelligence",
      issuer: "Udemy",
      year: 2025,
      category: "BI",
      credentialId: "UC-86ea475d-491d-4428-a453-2c8b018fec48"
    },
    {
      title: "Power BI Essential Training",
      issuer: "LinkedIn",
      year: 2025,
      category: "BI"
    },
    {
      title: "BCG Data Science Job Simulation",
      issuer: "BCG X",
      year: 2025,
      category: "Data Science"
    },
    {
      title: "Tata Data Visualisation Job Simulation",
      issuer: "TCS/Forage",
      year: 2025,
      category: "Data Viz"
    },
    {
      title: "Intro to Data Analytics in R",
      issuer: "Dataquest",
      year: 2024,
      category: "Programming"
    },
    {
      title: "What is Data Science",
      issuer: "IBM",
      year: 2023,
      category: "Data Science"
    }
  ];

  const projects = [
    {
      title: "Ocean Water Quality Forecasting",
      description: "Hybrid statistical (VAR, Factor Models) + DL (CNN/GNN) on Sentinel-3 data for coastal/open-ocean forecasting",
      tags: ["Time-Series", "DL", "Remote Sensing"],
      category: "Deep Learning",
      year: 2025
    },
    {
      title: "Underwater Trash Detection",
      description: "YOLOv8, EfficientDet, U-Net (VGG/ResNet/ConvNeXt) on ocean-waste dataset; real-time detection/segmentation",
      tags: ["CV", "Segmentation", "YOLO"],
      category: "Computer Vision",
      year: 2024
    },
    {
      title: "Graph-based HIV Inhibitor Identification",
      description: "Compare GNNs (GIN/GCN) with graph kernels on OGB-MolHIV; ROC-AUC benchmarking",
      tags: ["Graph ML", "GNN", "Benchmarking"],
      category: "Graph ML",
      year: 2024
    },
    {
      title: "Influence of Indian Cricket Captaincy Style",
      description: "2006–2024 T20I data; leadership style vs outcomes; strategy insights",
      tags: ["Sports Analytics", "Leadership", "Strategy"],
      category: "Analytics",
      year: 2024
    },
    {
      title: "Global Superstore Sales Dashboard",
      description: "Executive Power BI with supply chain & product strategy insights",
      tags: ["Power BI", "Sales", "Supply Chain"],
      category: "BI Dashboards",
      year: 2023
    },
    {
      title: "Analysis of Passing Rates at Different Driving Test Centers of London",
      description: "Predict expected passing rates for individuals at different driving test centres, comparing nearest to home vs LSE and testing for significant statistical differences",
      tags: ["Statistical Analysis", "Prediction", "Hypothesis Testing"],
      category: "Analytics",
      year: 2024
    },
    {
      title: "Binary Classification and Feature Selection in Machine Learning and Data Mining",
      description: "Applied various statistical learning methods to binary classification on RNA dataset and drug discovery dataset with emphasis on feature selection",
      tags: ["Binary Classification", "Feature Selection", "ML"],
      category: "Machine Learning",
      year: 2024
    },
    {
      title: "Business Data Management Capstone Project",
      description: "Analyzed business industry problems, collected data from business owners and provided solutions to increase revenue and customer trust",
      tags: ["Business Analytics", "Revenue Optimization", "Strategy"],
      category: "Business Intelligence",
      year: 2023
    }
  ];

  const navigationItems = [
    { id: 'about', label: 'About & Skills', icon: User },
    { id: 'experience', label: 'Experience & Education', icon: GraduationCap },
    { id: 'projects', label: 'Certifications & Projects', icon: Award },
    { id: 'contact', label: 'Extracurriculars & Contact', icon: Mail }
  ];

  const renderHeader = () => (
    <div className="bg-gray-900/30 backdrop-blur-sm border-b border-gray-700/50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={profileData.photo}
            alt="Prapti Pradhan"
            className="w-16 h-16 rounded-full border-2 border-yellow-500"
          />
          <div>
            <h1 className="text-xl font-semibold text-white">{profileData.name}</h1>
            <p className="text-sm text-gray-300">{profileData.headline}</p>
            <div className="flex items-center text-xs text-gray-400 mt-1">
              <MapPin className="w-3 h-3 mr-1" />
              {profileData.location}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4">
          {kpis.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <Card key={index} className="bg-gray-800/40 backdrop-blur-sm border-gray-700/50 min-w-[120px]">
                <CardContent className="p-3">
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4 text-yellow-500" />
                    <div>
                      <div className="text-lg font-bold text-white">{kpi.value}</div>
                      <div className="text-xs text-gray-400">{kpi.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className="bg-gray-900/30 backdrop-blur-sm border-r border-gray-700/50 w-64 min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Portfolio Dashboard</h2>
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeTab === item.id
                    ? 'bg-yellow-500 text-black font-medium'
                    : 'text-gray-300 hover:bg-gray-800/40 hover:text-white'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen text-white" 
      style={{ 
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        backgroundImage: `url('https://customer-assets.emergentagent.com/job_visual-datadocs/artifacts/ij2fdhvo_ChatGPT%20Image%20Oct%203%2C%202025%2C%2008_20_52%20PM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {renderHeader()}
      
      <div className="flex">
        {renderSidebar()}
        
        <div className="flex-1 p-6">
          {activeTab === 'about' && (
            <AboutSkillsPage 
              profileData={profileData} 
              skills={skills}
            />
          )}
          {activeTab === 'experience' && (
            <ExperienceEducationPage 
              experience={experience} 
              education={education}
            />
          )}
          {activeTab === 'projects' && (
            <ProjectsCertificationsPage 
              projects={projects}
              certifications={certifications}
              projectFilter={projectFilter}
              setProjectFilter={setProjectFilter}
              certificationFilter={certificationFilter}
              setCertificationFilter={setCertificationFilter}
            />
          )}
          {activeTab === 'contact' && (
            <ContactExtracurricularsPage profileData={profileData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PowerBIDashboard;