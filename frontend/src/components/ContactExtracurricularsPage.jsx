import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Users, 
  Trophy,
  Star,
  Send
} from 'lucide-react';

const ContactExtracurricularsPage = ({ profileData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const extracurriculars = [
    {
      title: "Founder & President, Raahat (IIT Madras)",
      description: "Built 1,000+ member student mental-health society; awareness campaigns & peer support",
      impact: "1,000+ Members",
      type: "Leadership",
      icon: Users
    },
    {
      title: "Super Coordinator, IIT Madras BS Programme",
      description: "Led academic/cultural events; logistics & cross-team operations",
      impact: "500+ Participants",
      type: "Management",
      icon: Star
    },
    {
      title: "Event Coordinator, Cosmos IITM",
      description: "Organized and managed technical and cultural events for the institute",
      impact: "Multiple Events",
      type: "Events",
      icon: Trophy
    },
    {
      title: "Leadership Training Volunteer (USM)",
      description: "Universal Solidarity Movement - Contributing to leadership development programs",
      impact: "Community Impact",
      type: "Volunteer",
      icon: Users
    }
  ];

  const contactMethods = [
    {
      type: 'Email',
      value: profileData.email,
      icon: Mail,
      href: `mailto:${profileData.email}`,
      color: 'text-red-400'
    },
    {
      type: 'Phone',
      value: profileData.phone,
      icon: Phone,
      href: `tel:${profileData.phone}`,
      color: 'text-green-400'
    },
    {
      type: 'LinkedIn',
      value: 'Connect on LinkedIn',
      icon: Linkedin,
      href: profileData.linkedin,
      color: 'text-blue-400'
    },
    {
      type: 'GitHub',
      value: 'View Code & Projects',
      icon: Github,
      href: profileData.github,
      color: 'text-purple-400'
    }
  ];

  const renderExtracurricularCard = (item, index) => {
    const IconComponent = item.icon;
    
    return (
      <Card key={index} className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-yellow-500/30 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-5 h-5 text-yellow-500" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-white text-sm leading-tight mb-2">{item.title}</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-3">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <Badge className="bg-blue-500/30 backdrop-blur-sm text-blue-300 border-blue-500/50 text-xs">
                  {item.type}
                </Badge>
                <div className="text-yellow-500 font-bold text-xs">{item.impact}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Extracurriculars & Contact</h2>
        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Extracurriculars & Leadership */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Leadership & Extracurriculars
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {extracurriculars.map((item, index) => renderExtracurricularCard(item, index))}
              </div>
            </CardContent>
          </Card>

          {/* Impact Summary */}
          <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Leadership Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500 mb-1">1,500+</div>
                  <div className="text-xs text-gray-400">People Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500 mb-1">4+</div>
                  <div className="text-xs text-gray-400">Leadership Roles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500 mb-1">3+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Mail className="w-5 h-5 mr-2 text-yellow-500" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contactMethods.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.type === 'LinkedIn' || contact.type === 'GitHub' ? '_blank' : '_self'}
                      rel={contact.type === 'LinkedIn' || contact.type === 'GitHub' ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700/60 transition-colors group"
                    >
                      <IconComponent className={`w-5 h-5 mr-3 ${contact.color}`} />
                      <div className="flex-1">
                        <div className="text-white text-sm font-medium">{contact.type}</div>
                        <div className="text-gray-400 text-xs">{contact.value}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-yellow-500 transition-colors" />
                    </a>
                  );
                })}
              </div>
              
              {/* Location */}
              <div className="mt-4 p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-yellow-500" />
                  <div>
                    <div className="text-white text-sm font-medium">Location</div>
                    <div className="text-gray-400 text-xs">{profileData.location}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Send className="w-5 h-5 mr-2 text-yellow-500" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-800/60 backdrop-blur-sm border-gray-600/50 text-white placeholder-gray-400"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-800/60 backdrop-blur-sm border-gray-600/50 text-white placeholder-gray-400"
                  required
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-gray-800/60 backdrop-blur-sm border-gray-600/50 text-white placeholder-gray-400"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-800/60 backdrop-blur-sm border-gray-600/50 text-white placeholder-gray-400 resize-none"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactExtracurricularsPage;