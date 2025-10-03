import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Award, Filter, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectsCertificationsPage = ({ 
  projects, 
  certifications, 
  projectFilter, 
  setProjectFilter, 
  certificationFilter, 
  setCertificationFilter 
}) => {
  const projectCategories = ['All', ...new Set(projects.map(p => p.category))];
  const certificationCategories = ['All', ...new Set(certifications.map(c => c.category))];
  const certificationIssuers = ['All', ...new Set(certifications.map(c => c.issuer))];
  
  const filteredProjects = projects.filter(project => 
    projectFilter === 'All' || project.category === projectFilter
  );
  
  const filteredCertifications = certifications.filter(cert => 
    certificationFilter === 'All' || cert.issuer === certificationFilter
  );

  const renderProjectCard = (project, index) => {
    return (
      <Card key={index} className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-white leading-tight">{project.title}</h3>
              <Badge variant="secondary" className="bg-yellow-500 text-black text-xs">
                {project.year}
              </Badge>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="outline" 
                    className="text-xs border-gray-600/50 text-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Badge className="bg-blue-500/30 backdrop-blur-sm text-blue-300 border-blue-500/50">
                {project.category}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderCertificationCard = (cert, index) => {
    return (
      <Card key={index} className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-md font-semibold text-white leading-tight">{cert.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
              </div>
              
              <div className="text-right">
                <Badge variant="secondary" className="bg-yellow-500 text-black text-xs mb-1">
                  {cert.year}
                </Badge>
                {cert.credentialId && (
                  <div className="text-xs text-gray-500 mt-1">
                    ID: {cert.credentialId.substring(0, 12)}...
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Badge className="bg-green-500/30 backdrop-blur-sm text-green-300 border-green-500/50">
                {cert.category}
              </Badge>
              
              {cert.credentialId && (
                <Button size="sm" variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-gray-700/50 text-xs p-1 h-auto">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Certifications & Projects</h2>
        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Projects Section */}
        <div className="xl:col-span-2 space-y-4">
          <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-yellow-500" />
                  Projects Portfolio
                </CardTitle>
                
                {/* Project Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-yellow-500" />
                  <Select value={projectFilter} onValueChange={setProjectFilter}>
                    <SelectTrigger className="w-[180px] bg-gray-800/60 backdrop-blur-sm border-gray-600/50 text-white">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800/80 backdrop-blur-sm border-gray-600/50">
                      {projectCategories.map(category => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-gray-700/50">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {filteredProjects.map((project, index) => renderProjectCard(project, index))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Section */}
        <div className="space-y-4">
          <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <div className="space-y-3">
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Certifications
                </CardTitle>
                
                {/* Certification Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-yellow-500" />
                  <Select value={certificationFilter} onValueChange={setCertificationFilter}>
                    <SelectTrigger className="w-full bg-gray-800/60 backdrop-blur-sm border-gray-600/50 text-white">
                      <SelectValue placeholder="Filter by issuer" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800/80 backdrop-blur-sm border-gray-600/50">
                      {certificationIssuers.map(issuer => (
                        <SelectItem key={issuer} value={issuer} className="text-white hover:bg-gray-700/50">
                          {issuer}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredCertifications.map((cert, index) => renderCertificationCard(cert, index))}
              </div>
            </CardContent>
          </Card>
          
          {/* Certification Stats */}
          <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white text-sm">Certification Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Total Certifications</span>
                  <span className="text-yellow-500 font-bold">{certifications.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">This Year</span>
                  <span className="text-yellow-500 font-bold">{certifications.filter(c => c.year === 2025).length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Categories</span>
                  <span className="text-yellow-500 font-bold">{certificationCategories.length - 1}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCertificationsPage;