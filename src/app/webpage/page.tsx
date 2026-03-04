
"use client";

import { useState, useEffect } from "react";
import {
    Menu, X, Github, Linkedin, Mail, Code2, Palette,
    Sparkles, ArrowRight, ExternalLink, Download,
    Briefcase, GraduationCap, Award, User
} from "lucide-react";

// Define the Resume type
interface ResumeData {
    Name: string;
    Email: string;
    Phone: string;
    Education: {
        Degree: string;
        Specialization: string;
        "School/college": string;
        Year: string;
        CGPA: string;
    }[];
    Experience: {
        Title: string;
        Time: string;
        Description: string;
    }[];
    Skills: string[];
    Projects: {
        Title: string;
        Time?: string;
        Description: string;
    }[];
    Certifications: {
        Title: string;
        Validity?: string;
        Time?: string;
    }[];
    Languages: string[];
    Linkedin: string;
}

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [resumeData, setResumeData] = useState<ResumeData | null>(null);

    useEffect(() => {
        // Fetch data from the JSON file
        const fetchData = async () => {
            try {
                const resumeJson = {
                    "Name": "DUTTALA NAGA REETHIKA REDDY",
                    "Email": "duttalareethika2003@gmail.com",
                    "Phone": "+918121418351",
                    "Education": [
                        {
                            "Degree": "B.Tech",
                            "Specialization": "Computer Science and Engineering",
                            "School/college": "Sree Vidyanikethan Engineering College",
                            "Year": "2021-2025",
                            "CGPA": "9.2"
                        },
                        {
                            "Degree": "BIEAP",
                            "Specialization": "MPC(Maths, physics, chemistry)",
                            "School/college": "Sri Chaitanya Junior College",
                            "Year": "2019-2021",
                            "CGPA": "10.0"
                        },
                        {
                            "Degree": "SSC",
                            "Specialization": "General",
                            "School/college": "Sri Chaitanya Techno School",
                            "Year": "2019",
                            "CGPA": "9.8"
                        }
                    ],
                    "Experience": [
                        {
                            "Title": "AWS Virtual Cloud Intern (AICTE)",
                            "Time": "Oct-Dec2024",
                            "Description": "- Completed a 10 week virtual internship gaining hands-on experience with AWS cloud computing services."
                        }
                    ],
                    "Skills": [
                        "Languages:java,python,Sql,Html,Css,javascript",
                        "SpringBoot",
                        "linux",
                        "git",
                        "dockers",
                        "kubernets",
                        "Cloud computing:aws (amazon web services)",
                        "TOOLS: powerBI,VS code, github"
                    ],
                    "Projects": [
                        {
                            "Title": "EEG based depression detection using deep Learning",
                            "Time": "Nov 2024-present",
                            "Description": "Depression Detection System using EEG signal analysis to assess RNNs, Transformers, and VAE, followed by Neural ODEs, which were executed for the final model, achieving the highest accuracy for real-time mental health monitoring and early intervention."
                        },
                        {
                            "Title": "Kubernetes Project on Eks(elastic kubernetes service)",
                            "Description": "Deployed a real-time 2048 game on Amazon EKS using Kubernetes, configuring Ingress with the AWS ALB controller for seamless external access."
                        }
                    ],
                    "Certifications": [
                        {
                            "Title": "AWS solution architect -associate(Amazon web services)",
                            "Validity": "validity-Nov 2024-2027"
                        },
                        {
                            "Title": "AWS Certified Cloud Practitioner (Amazon web services)",
                            "Validity": "validity-July 2024-2027"
                        },
                        {
                            "Title": "Data Structures and algorithms in java",
                            "Time": "July -oct 2023"
                        },
                        {
                            "Title": "Salesforce Administrator Virtual Internship",
                            "Time": "oct - nov 2023"
                        },
                        {
                            "Title": "Web development internship -Digital Bheem",
                            "Time": "oct - nov 2023"
                        },
                        {
                            "Title": "Project Calculator Application(HTML.CSS,Java script,php)"
                        }
                    ],
                    "Languages": [
                        "ENGLISH: Intermediate",
                        "TELUGU:Fluent",
                        "HINDI :Intermediate"
                    ],
                    "Linkedin": "https://www.linkedin.com/in/d-naga-reethika-reddy-0982ba259"
                }
                setResumeData(resumeJson);
            } catch (error) {
                console.error("Error fetching resume data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "experience", "contact"];
            const current = sections.find((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    if (!resumeData) {
        return <div>Loading...</div>;
    }

    const skills = resumeData.Skills;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-100 scroll-smooth font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-gray-800 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        {resumeData.Name}'s Portfolio
                    </h1>
                    <div className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors ${activeSection === item.id
                                    ? "text-pink-400"
                                    : "text-gray-400 hover:text-pink-400"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <button
                        className="md:hidden text-gray-400 hover:text-pink-400"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-black border-t border-gray-800 px-6 py-3 space-y-2 animate-fadeIn">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === item.id
                                    ? "bg-pink-500 text-white"
                                    : "text-gray-300 hover:bg-gray-800"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero */}
            <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
                <p className="mb-4 text-pink-400 font-medium">👋 Available for Freelance Work</p>
                <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Hi, I'm {resumeData.Name}
                </h1>
                <p className="mt-6 text-xl text-gray-400 max-w-2xl">
                    Full Stack Developer & Creative Problem Solver — building beautiful, functional web experiences.
                </p>
                <div className="flex gap-4 mt-8">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-500/40 transition-all"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="px-6 py-3 rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-500 hover:text-white transition-all"
                    >
                        Get in Touch
                    </button>
                </div>

                <div className="flex gap-6 mt-10">
                    <a
                        href={resumeData.Linkedin}
                        className="p-3 rounded-full border border-gray-700 hover:border-pink-400 hover:shadow-pink-500/40 transition-all"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href={`mailto:${resumeData.Email}`}
                        className="p-3 rounded-full border border-gray-700 hover:border-pink-400 hover:shadow-pink-500/40 transition-all"
                    >
                        <Mail />
                    </a>
                    <a
                        href="https://github.com/ReethikaDuttala"
                        className="p-3 rounded-full border border-gray-700 hover:border-pink-400 hover:shadow-pink-500/40 transition-all"
                    >
                        <Github />
                    </a>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 px-6 bg-gray-900/40">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <User className="text-pink-400" />
                        <h2 className="text-4xl font-bold">About Me</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I’m a passionate developer with strong expertise in cloud, web, and AI. I love blending
                                data science with creativity to build meaningful, user-friendly applications.
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Currently exploring hybrid AI models for depression detection and developing impactful solutions.
                            </p>
                            <button className="px-6 py-3 border border-pink-400 rounded-lg text-pink-400 hover:bg-pink-500 hover:text-white transition-all">
                                <Download className="inline-block mr-2" size={18} />
                                Download Resume
                            </button>
                        </div>
                        <div className="bg-gray-800/60 rounded-xl p-8 shadow-lg border border-gray-700 hover:border-pink-400 transition-all">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Code2 className="text-pink-400" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Development</h3>
                                        <p className="text-gray-400">Building scalable apps using React, Node, and modern stacks.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Palette className="text-purple-400" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Design</h3>
                                        <p className="text-gray-400">Creating visually appealing, user-friendly interfaces.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Sparkles className="text-indigo-400" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Innovation</h3>
                                        <p className="text-gray-400">Adapting cutting-edge AI tools and technologies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <Award className="text-indigo-400" />
                        <h2 className="text-4xl font-bold">Skills & Technologies</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 border border-indigo-400/60 text-indigo-300 rounded-lg hover:bg-indigo-500 hover:text-white transition-all"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 px-6 bg-gray-900/40">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <Sparkles className="text-purple-400" />
                        <h2 className="text-4xl font-bold">Featured Projects</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resumeData.Projects.map((project) => (
                            <div
                                key={project.Title}
                                className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 hover:border-purple-400 hover:shadow-purple-500/30 transition-all"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <Code2 className="text-purple-400" />
                                    <ExternalLink className="text-gray-400 hover:text-purple-400 transition" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{project.Title}</h3>
                                <p className="text-gray-400 mb-4">{project.Description}</p>
                                {/* Assuming skills are to be displayed here and not defined in the data */}
                                {/*<div className="flex flex-wrap gap-2">*/}
                                {/*  {project.tech.map((t) => (*/}
                                {/*    <span*/}
                                {/*      key={t}*/}
                                {/*      className="px-2 py-1 text-xs border border-purple-400/50 rounded-md text-purple-300"*/}
                                {/*    >*/}
                                {/*      {t}*/}
                                {/*    </span>*/}
                                {/*  ))}*/}
                                {/*</div>*/}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <Briefcase className="text-pink-400" />
                        <h2 className="text-4xl font-bold">Work Experience</h2>
                    </div>
                    <div className="space-y-6">
                        {resumeData.Experience.map((exp) => (
                            <div
                                key={exp.Title}
                                className="border-l-4 border-pink-400 pl-6 py-4 bg-gray-800/40 rounded-r-xl hover:shadow-pink-500/20 transition-all"
                            >
                                <h3 className="text-xl font-semibold">{exp.Title}</h3>
                                {/*<p className="text-pink-400">{exp.company}</p>*/}
                                <p className="text-sm text-gray-400 mb-1">{exp.Time}</p>
                                <p className="text-gray-300">{exp.Description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-6 bg-gray-900/40 text-center">
                <h2 className="text-4xl font-bold text-pink-400 mb-6">Get in Touch</h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">
                    I’m open to discussing new projects, collaborations, or opportunities.
                </p>
                <button
                    onClick={() => (window.location.href = `mailto:${resumeData.Email}`)}
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-500/40 transition-all"
                >
                    <Mail className="inline-block mr-2" /> Send Email
                </button>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
                © {new Date().getFullYear()} {resumeData.Name} — Built with ❤ using Next.js & TailwindCSS
            </footer>
        </div>
    );
}
