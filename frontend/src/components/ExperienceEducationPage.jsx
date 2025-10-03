import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Calendar, MapPin, Building, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';

const ExperienceEducationPage = ({ experience, education }) => {
  const [expandedExperience, setExpandedExperience] = useState({});

  const toggleExperience = (id) => {
    setExpandedExperience(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Project': return 'bg-green-500';
      case 'Internship': return 'bg-blue-500';
      case 'Full-time': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const renderTimelineItem = (item, index) => {
    const isExpanded = expandedExperience[item.id];
    const isLast = index === experience.length - 1;

    return (
      <div key={item.id} className="relative">
        {/* Timeline Line */}
        {!isLast && (
          <div className="absolute left-4 top-12 w-0.5 h-full bg-gray-700 z-0"></div>
        )}
        
        {/* Timeline Dot */}
        <div className={`absolute left-2 top-4 w-4 h-4 rounded-full border-2 border-gray-900 z-10 ${getTypeColor(item.type)}`}></div>
        
        {/* Content Card */}
        <div className="ml-10 mb-6">
          <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/50 transition-colors cursor-pointer" onClick={() => toggleExperience(item.id)}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <Badge variant="secondary" className={`${getTypeColor(item.type)} text-white text-xs`}>
                      {item.type}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm space-x-4 mb-2">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {item.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.period}
                    </div>
                  </div>
                </div>
                
                <div className="text-gray-400">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>
              
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <h4 className="text-sm font-medium text-yellow-500 mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  const renderEducationMatrix = () => {
    return (
      <div className="space-y-4">
        {education.map((edu, index) => {
          const isCurrently = edu.status === 'Current';
          
          return (
            <Card key={index} className={`border transition-all duration-300 hover:shadow-lg ${
              isCurrently 
                ? 'bg-yellow-500/20 backdrop-blur-sm border-yellow-500/50 shadow-yellow-500/20' 
                : 'bg-gray-900/40 backdrop-blur-sm border-gray-700/50'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isCurrently ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-yellow-500'
                    }`}>
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h3 className={`font-semibold ${
                        isCurrently ? 'text-yellow-500' : 'text-white'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      isCurrently ? 'text-yellow-500' : 'text-gray-300'
                    }`}>
                      {edu.period}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={isCurrently 
                        ? 'bg-yellow-500 text-black' 
                        : 'bg-gray-700 text-gray-300'
                      }
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Experience & Education</h2>
        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
      </div>

      {/* Experience Timeline */}
      <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-yellow-500" />
            Experience Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {experience.map((item, index) => renderTimelineItem(item, index))}
          </div>
        </CardContent>
      </Card>

      {/* Education Matrix */}
      <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <GraduationCap className="w-5 h-5 mr-2 text-yellow-500" />
            Education Journey
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderEducationMatrix()}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceEducationPage;