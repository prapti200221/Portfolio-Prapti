import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Users, Target, TrendingUp } from 'lucide-react';

const AboutSkillsPage = ({ profileData, skills }) => {
  const coreCompetencies = [
    "Machine Learning",
    "Deep Learning", 
    "Data Visualization",
    "Statistical Analysis",
    "Graph Analytics",
    "Time Series Forecasting"
  ];

  const getSkillColor = (proficiency) => {
    if (proficiency >= 95) return 'bg-yellow-500';
    if (proficiency >= 85) return 'bg-green-500';
    if (proficiency >= 70) return 'bg-blue-500';
    return 'bg-gray-500';
  };

  const renderSkillChart = () => {
    return (
      <div className="space-y-4">
        {Object.entries(skills).map(([category, categorySkills]) => {
          const avgProficiency = Math.round(
            Object.values(categorySkills).reduce((a, b) => a + b, 0) / Object.values(categorySkills).length
          );
          
          return (
            <div key={category} className="group">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-300">{category}</h4>
                <span className="text-xs text-yellow-500 font-bold">{avgProficiency}%</span>
              </div>
              
              <div className="space-y-2">
                <Progress 
                  value={avgProficiency} 
                  className="h-3 bg-gray-700"
                />
                
                <div className="hidden group-hover:block bg-gray-800/60 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(categorySkills).map(([skill, proficiency]) => (
                      <div key={skill} className="flex justify-between">
                        <span className="text-gray-300">{skill}</span>
                        <span className="text-yellow-500 font-bold">{proficiency}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">About Me & Skills</h2>
        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* About Me Card */}
        <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-yellow-500" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <img
                src={profileData.photo}
                alt="Prapti Pradhan"
                className="w-20 h-20 rounded-lg border-2 border-yellow-500 flex-shrink-0"
              />
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Data nerd on a mission to turn chaos into clarity. Currently doing my MSc in Data Science at LSE, after leveling up with a BS in Data Science (IIT Madras) and a BSc in Computational Math & Stats (MIT-WPU). Obsessed with ML/DL, time-series tricks, and graph magic. I build dashboards (Power BI) that don't just look pretty but they tell stories and help decisions land faster. Messy data? I make it spill secrets, turn it into stories not headaches.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Overview Chart */}
        <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-yellow-500" />
              Skills Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderSkillChart()}
          </CardContent>
        </Card>
      </div>

      {/* Core Competencies */}
      <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Target className="w-5 h-5 mr-2 text-yellow-500" />
            Core Competencies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((competency, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-yellow-500 text-black hover:bg-yellow-400 px-4 py-2 cursor-pointer transition-colors"
              >
                {competency}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leadership Highlights */}
      <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Users className="w-5 h-5 mr-2 text-yellow-500" />
            Leadership Highlights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
              <div className="text-2xl font-bold text-yellow-500 mb-2">1,000+</div>
              <div className="text-sm text-gray-300">Members in Mental Health Society by me</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
              <div className="text-2xl font-bold text-yellow-500 mb-2">2,000+</div>
              <div className="text-sm text-gray-300">Participants in Coordinated Events by me</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSkillsPage;