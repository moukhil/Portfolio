import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminModal from './components/AdminModal';
import { getProfile, getSkills, getProjects } from './services/api';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [profileRes, skillsRes, projectsRes] = await Promise.all([
          getProfile().catch(err => {
            console.warn('Profile fetch fallback:', err);
            return null;
          }),
          getSkills().catch(err => {
            console.warn('Skills fetch fallback:', err);
            return null;
          }),
          getProjects().catch(err => {
            console.warn('Projects fetch fallback:', err);
            return null;
          })
        ]);

        if (profileRes && profileRes.success) {
          setProfileData(profileRes.data);
        }
        if (skillsRes && skillsRes.success) {
          setSkills(skillsRes.data);
        }
        if (projectsRes && projectsRes.success) {
          setProjects(projectsRes.data);
        }
      } catch (err) {
        console.error('Error fetching initial portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleProjectCreated = (newProj) => {
    setProjects((prev) => [newProj, ...prev]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const profile = profileData?.profile || {
    name: "Shaik Moukhil",
    role: "Java Full Stack Developer",
    email: "shaikmoukhil@gmail.com",
    phone: "+91 6301915182",
    location: "Hyderabad, Telangana, India"
  };

  const education = profileData?.education || [];
  const experience = profileData?.experience || [];
  const achievements = profileData?.achievements || [];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white relative">
      {/* Dynamic Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 z-50 transition-all duration-75 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Navbar */}
      <Navbar onOpenAdmin={() => setAdminModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero profile={profile} />
        <About
          profile={profile}
          education={education}
          experience={experience}
          achievements={achievements}
        />
        <Skills skillsData={skills} />
        <Projects
          projects={projects}
          onOpenAdmin={() => setAdminModalOpen(true)}
        />
        <Experience
          education={education}
          experience={experience}
          achievements={achievements}
        />
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-slate-900/90 hover:bg-cyan-500 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-white shadow-xl shadow-cyan-500/10 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Live Admin / Database CRUD Modal */}
      {adminModalOpen && (
        <AdminModal
          isOpen={adminModalOpen}
          onClose={() => setAdminModalOpen(false)}
          onProjectCreated={handleProjectCreated}
        />
      )}
    </div>
  );
}

export default App;
