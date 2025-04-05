import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Kalifullah DHAMEEM Ansari</h1>
          <p className="text-slate-400">DevOps / Technical Support Engineer</p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <Card className="bg-slate-800">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">About Me</h2>
              <p>
                DevOps and Technical Support Engineer with 5+ years of experience in
                managing cloud infrastructure, CI/CD pipelines, troubleshooting, and ensuring
                system reliability. Passionate about automation and continuous improvement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Skills</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Azure / AWS Cloud</li>
                <li>CI/CD Pipelines</li>
                <li>Linux / Windows Server</li>
                <li>Monitoring & Logging</li>
                <li>Automation (Bash, PowerShell)</li>
                <li>Networking & Security</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-slate-800">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Cloud Monitoring System</h3>
                <p>
                  Built a real-time monitoring dashboard using Azure Monitor and Grafana,
                  improving system uptime and reducing response time.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">CI/CD Pipeline Setup</h3>
                <p>
                  Designed and deployed CI/CD pipelines using Azure DevOps and GitHub
                  Actions for faster and reliable deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex gap-4">
            <Button variant="outline" className="text-white border-slate-600 hover:bg-slate-700">
              <Mail className="mr-2 h-4 w-4" /> kalians2000@gmail.com
            </Button>
            <Button variant="outline" className="text-white border-slate-600 hover:bg-slate-700">
              <Linkedin className="mr-2 h-4 w-4" /> linkedin.com/in/kalifullah-devops
            </Button>
            <Button variant="outline" className="text-white border-slate-600 hover:bg-slate-700">
              <Github className="mr-2 h-4 w-4" /> github.com/kalifullah-dev
            </Button>
          </div>
        </section>

        <footer className="text-center text-slate-500 mt-10 text-sm">
          &copy; 2025 Kalifullah DHAMEEM Ansari. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
