import React from 'react';
import { Sun, Moon, Mail, Code, User, Briefcase, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300">
      <nav className="p-4 flex justify-between items-center bg-white shadow-md">
        <h1 className="text-2xl font-bold">Nickil Vishwaa MS</h1>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction Card */}
        <Card className="mb-16 animate-fade-in overflow-hidden shadow-lg">
          <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center">
            <img
              src="./nickili pfp 1.png"
              alt="Nickil Vishwaa MS"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-10 shadow-lg animate-slide-in"
            />
            <div className="animate-slide-in space-y-4">
              <h2 className="text-4xl font-bold">Hello, I'm Nickil Vishwaa MS</h2>
              <p className="text-xl text-gray-700">Software Developer | B. Tech in Electrical & Computer Engineering</p>
              <p className="text-gray-700">Self-driven and detail-oriented software developer with a proactive approach to engineering tasks and deep enthusiasm for technological advancements.</p>
              <div className="flex space-x-4">
                <Button variant="primary" size="lg" className="rounded-full hover:bg-blue-700 transition-colors duration-200" asChild>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button variant="primary" size="lg" className="rounded-full hover:bg-blue-700 transition-colors duration-200" asChild>
                  <a href="https://www.linkedin.com/in/nickilvishwaams" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button variant="primary" size="lg" className="rounded-full hover:bg-blue-700 transition-colors duration-200" asChild>
                  <a href="mailto:nickilvishwaams@gmail.com">
                    <Mail className="mr-2 h-4 w-4 inline" /> Email
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Card */}
        <Card className="mb-16 animate-fade-in shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-2">
            <Code className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold">Skills</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Python', 'C#', 'C', 'HTML 5', 'CSS 3', 'Javascript', '.Net Framework', 'Django', 'Flask', 'MySQL', 'PostgreSQL', 'Git'].map((skill, index) => (
                <Badge
                  key={skill}
                  className="text-sm p-2 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Card */}
        <Card className="mb-16 animate-fade-in shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-2">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold">Projects</h3>
          </CardHeader>
          <CardContent className="space-y-8">
            {[
              {
                title: "Personalized Roadmap for Engineering Student",
                description: "Web application to create personalized project roadmaps for 2nd-year undergraduate engineering students."
              },
              {
                title: "Student Attendance System",
                description: "Face recognition-based attendance system for recording student presence in class."
              },
              {
                title: "Demand Prediction System for Charging Station",
                description: "Developed using TD3 algorithm to predict energy consumption for charging stations."
              }
            ].map((project, index) => (
              <Card key={index} className="animate-slide-up hover:shadow-2xl transition-shadow duration-200">
                <CardHeader>
                  <h4 className="text-xl font-semibold text-blue-600">{project.title}</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Certifications Card */}
        <Card className="animate-fade-in shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-2">
            <Award className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pcap" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pcap" className="text-blue-600 border-b-2 border-blue-600">
                  PCAP
                </TabsTrigger>
                <TabsTrigger value="pcep" className="text-blue-600 border-b-2 border-blue-600">
                  PCEP
                </TabsTrigger>
              </TabsList>
              <TabsContent value="pcap">
                <Card className="shadow-none">
                  <CardHeader>
                    <h4 className="text-lg font-semibold">PCAP – Certified Associate Python Programmer</h4>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Obtained in March 2024</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="pcep">
                <Card className="shadow-none">
                  <CardHeader>
                    <h4 className="text-lg font-semibold">PCEP – Certified Entry-Level Python Programmer</h4>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Obtained in January 2024</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center py-4 mt-8 bg-white shadow-md">
        <p className="text-gray-600">&copy; 2024 Nickil Vishwaa MS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
