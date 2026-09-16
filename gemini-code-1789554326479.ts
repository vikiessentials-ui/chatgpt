import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  CheckCircle,
  Award,
  BarChart,
  User,
  Shield,
  Menu,
  X,
  ExternalLink,
  Book,
  Clock,
  Sparkles,
  Database,
  ArrowRight
} from 'lucide-react';

// Coursera Theme Tokens
// Primary Blue: #0056D2
// Pure White: #FFFFFF
// Light Gray: #F5F5F5
// Border Gray: #E1E1E1
// Text Dark: #1F1F1F
// Text Muted: #555555

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'tracks' | 'certificates' | 'verify'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [certId, setCertId] = useState('');
  const [verifiedResult, setVerifiedResult] = useState<any>(null);

  // Sample Tracks Data
  const tracks = [
    {
      id: 1,
      title: 'Google Ads Search Certification Track',
      provider: 'Learn With Flow',
      level: 'Beginner to Advanced',
      duration: '4 Weeks',
      modules: 12,
      description: 'Master Google Ads Search campaigns, keyword bidding strategies, and performance optimization.'
    },
    {
      id: 2,
      title: 'Google Analytics Professional Track',
      provider: 'Learn With Flow',
      level: 'Intermediate',
      duration: '6 Weeks',
      modules: 18,
      description: 'Learn GA4 setup, custom event tracking, conversion funnels, and data reporting techniques.'
    },
    {
      id: 3,
      title: 'Meta Media Buying & Meta Business Suite',
      provider: 'Learn With Flow',
      level: 'Professional',
      duration: '5 Weeks',
      modules: 15,
      description: 'Comprehensive guide on ad creation, target audience selection, and Campaign Manager 360.'
    },
    {
      id: 4,
      title: 'Data Science & Machine Learning Essentials',
      provider: 'Learn With Flow',
      level: 'Intermediate',
      duration: '8 Weeks',
      modules: 24,
      description: 'Practical data science using Python, Pandas, SQL, and integration with Kaggle environments.'
    }
  ];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certId.trim()) {
      setVerifiedResult({
        id: certId.toUpperCase(),
        studentName: 'Muhammad Talha',
        issueDate: 'September 2026',
        status: 'Verified & Authentic',
        trackTitle: 'Digital Marketing & Analytics Specialization'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1F1F1F] font-sans flex flex-col">
      {/* Top Banner / Announcement */}
      <div className="bg-[#0056D2] text-white text-xs md:text-sm py-2 px-4 text-center font-medium">
        <span>Explore 182 comprehensive learning tracks and get verified certificates — 100% Free.</span>
      </div>

      {/* Header / Navigation */}
      <header className="bg-white border-b border-[#E1E1E1] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <div className="flex items-center space-x-8">
              <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setActiveTab('home')}
              >
                <div className="bg-[#0056D2] text-white p-2 rounded-sm font-bold text-lg leading-none">
                  LWF
                </div>
                <span className="text-xl font-bold tracking-tight text-[#0056D2]">
                  Learn With Flow
                </span>
              </div>

              {/* Desktop Search Bar */}
              <div className="hidden md:flex items-center relative w-80">
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-[#E1E1E1] rounded-full text-sm focus:outline-none focus:border-[#0056D2] bg-white text-[#1F1F1F]"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#555555]" />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <button
                onClick={() => setActiveTab('home')}
                className={`transition-colors py-1 ${
                  activeTab === 'home'
                    ? 'text-[#0056D2] border-b-2 border-[#0056D2] font-semibold'
                    : 'text-[#1F1F1F] hover:text-[#0056D2]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('tracks')}
                className={`transition-colors py-1 ${
                  activeTab === 'tracks'
                    ? 'text-[#0056D2] border-b-2 border-[#0056D2] font-semibold'
                    : 'text-[#1F1F1F] hover:text-[#0056D2]'
                }`}
              >
                Learning Tracks
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`transition-colors py-1 ${
                  activeTab === 'certificates'
                    ? 'text-[#0056D2] border-b-2 border-[#0056D2] font-semibold'
                    : 'text-[#1F1F1F] hover:text-[#0056D2]'
                }`}
              >
                Certificates
              </button>
              <button
                onClick={() => setActiveTab('verify')}
                className={`transition-colors py-1 ${
                  activeTab === 'verify'
                    ? 'text-[#0056D2] border-b-2 border-[#0056D2] font-semibold'
                    : 'text-[#1F1F1F] hover:text-[#0056D2]'
                }`}
              >
                Verify Certificate
              </button>

              <button 
                onClick={() => setActiveTab('tracks')}
                className="bg-[#0056D2] hover:bg-[#00419e] text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors"
              >
                Join for Free
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1F1F1F] hover:text-[#0056D2]"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E1E1E1] px-4 pt-2 pb-4 space-y-2">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="What do you want to learn?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#E1E1E1] rounded-full text-sm bg-white"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#555555]" />
            </div>
            <button
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-base font-medium text-[#1F1F1F]"
            >
              Home
            </button>
            <button
              onClick={() => { setActiveTab('tracks'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-base font-medium text-[#1F1F1F]"
            >
              Learning Tracks
            </button>
            <button
              onClick={() => { setActiveTab('certificates'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-base font-medium text-[#1F1F1F]"
            >
              Certificates
            </button>
            <button
              onClick={() => { setActiveTab('verify'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-base font-medium text-[#1F1F1F]"
            >
              Verify Certificate
            </button>
            <button 
              onClick={() => { setActiveTab('tracks'); setMobileMenuOpen(false); }}
              className="w-full bg-[#0056D2] text-white py-2 rounded-md font-semibold text-center mt-2"
            >
              Join for Free
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        
        {/* TAB 1: HOME */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="bg-white border-b border-[#E1E1E1] py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1F1F1F] leading-tight mb-6">
                      Learn Without Limits with <span className="text-[#0056D2]">Learn With Flow</span>
                    </h1>
                    <p className="text-lg text-[#555555] mb-8 leading-relaxed">
                      Start, switch, or advance your career with 182 comprehensive learning tracks, modular assessments, and industry-recognized certificates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => setActiveTab('tracks')}
                        className="bg-[#0056D2] hover:bg-[#00419e] text-white font-semibold px-8 py-3.5 rounded-md text-base transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Explore 182 Tracks</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setActiveTab('verify')}
                        className="border border-[#0056D2] text-[#0056D2] hover:bg-[#F5F5F5] font-semibold px-8 py-3.5 rounded-md text-base transition-colors text-center"
                      >
                        Verify Credentials
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#F5F5F5] p-8 rounded-lg border border-[#E1E1E1] shadow-sm">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#0056D2] text-white p-3 rounded-md">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-[#1F1F1F]">182 Structured Tracks</h3>
                          <p className="text-sm text-[#555555]">Curated pathways designed for real-world mastery and skill building.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#0056D2] text-white p-3 rounded-md">
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-[#1F1F1F]">Verified Certificates</h3>
                          <p className="text-sm text-[#555555]">Earn sharable certificates with unique verification codes upon completion.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#0056D2] text-white p-3 rounded-md">
                          <BarChart className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-[#1F1F1F]">Modular Assessments</h3>
                          <p className="text-sm text-[#555555]">Test your knowledge with step-by-step assessments at every stage.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Tracks Preview */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F]">Popular Learning Tracks</h2>
                  <p className="text-[#555555] mt-1">Explore top-rated pathways chosen by learners worldwide.</p>
                </div>
                <button
                  onClick={() => setActiveTab('tracks')}
                  className="text-[#0056D2] font-semibold text-sm hover:underline flex items-center space-x-1"
                >
                  <span>See all tracks</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tracks.map((track) => (
                  <div
                    key={track.id}
                    className="border border-[#E1E1E1] rounded-lg p-5 bg-white hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-semibold text-[#0056D2] uppercase tracking-wider mb-2">
                        {track.provider}
                      </div>
                      <h3 className="font-bold text-base text-[#1F1F1F] mb-2 line-clamp-2">
                        {track.title}
                      </h3>
                      <p className="text-xs text-[#555555] mb-4 line-clamp-3">
                        {track.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#E1E1E1] flex justify-between items-center text-xs text-[#555555]">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{track.duration}</span>
                      </span>
                      <span className="bg-[#F5F5F5] px-2 py-1 rounded text-[#1F1F1F] font-medium">
                        {track.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: LEARNING TRACKS */}
        {activeTab === 'tracks' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 border-b border-[#E1E1E1] pb-6">
              <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">Comprehensive Learning Tracks</h1>
              <p className="text-[#555555]">Access all 182 structured pathways with hands-on practice and assessments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track) => (
                <div key={track.id} className="border border-[#E1E1E1] rounded-lg p-6 bg-white hover:border-[#0056D2] transition-colors flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[#F5F5F5] text-[#0056D2] text-xs font-bold px-2.5 py-1 rounded mb-3">
                      Specialization
                    </span>
                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">{track.title}</h3>
                    <p className="text-sm text-[#555555] mb-6 leading-relaxed">{track.description}</p>
                  </div>

                  <div>
                    <div className="space-y-2 text-xs text-[#555555] mb-6 bg-[#F5F5F5] p-3 rounded">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-semibold text-[#1F1F1F]">{track.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Modules:</span>
                        <span className="font-semibold text-[#1F1F1F]">{track.modules} Modules</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Skill Level:</span>
                        <span className="font-semibold text-[#1F1F1F]">{track.level}</span>
                      </div>
                    </div>

                    <button className="w-full bg-[#0056D2] hover:bg-[#00419e] text-white font-semibold py-2.5 rounded text-sm transition-colors">
                      Enroll Track
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CERTIFICATES */}
        {activeTab === 'certificates' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 border-b border-[#E1E1E1] pb-6">
              <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">Verified Certificates</h1>
              <p className="text-[#555555]">Demonstrate your commitment and credentials to employers across the globe.</p>
            </div>

            <div className="bg-[#F5F5F5] border border-[#E1E1E1] rounded-lg p-8 max-w-3xl mx-auto text-center my-8">
              <Award className="h-16 w-16 text-[#0056D2] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-2">Earn Official Recognition</h2>
              <p className="text-[#555555] text-sm mb-6 max-w-lg mx-auto">
                Every completed track grants you a shareable certificate containing an official verification ID and QR code for instant authentication.
              </p>
              <button 
                onClick={() => setActiveTab('verify')}
                className="bg-[#0056D2] text-white font-semibold px-6 py-2.5 rounded text-sm hover:bg-[#00419e] transition-colors"
              >
                Go to Certificate Verification
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: VERIFY CERTIFICATE */}
        {activeTab === 'verify' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <Shield className="h-12 w-12 text-[#0056D2] mx-auto mb-3" />
              <h1 className="text-3xl font-bold text-[#1F1F1F]">Certificate Authentication</h1>
              <p className="text-[#555555] text-sm mt-1">Enter a Learn With Flow certificate ID to verify authenticity.</p>
            </div>

            <div className="bg-white border border-[#E1E1E1] rounded-lg p-6 md:p-8 shadow-sm mb-8">
              <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="e.g. LWF-2026-89A12"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  className="flex-1 px-4 py-3 border border-[#E1E1E1] rounded text-sm text-[#1F1F1F] focus:outline-none focus:border-[#0056D2]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#0056D2] hover:bg-[#00419e] text-white font-semibold px-8 py-3 rounded text-sm transition-colors"
                >
                  Verify Now
                </button>
              </form>
            </div>

            {verifiedResult && (
              <div className="bg-[#F5F5F5] border-2 border-[#0056D2] rounded-lg p-6 text-left">
                <div className="flex items-center space-x-2 text-[#0056D2] font-bold mb-4">
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg">Certificate Validated</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#1F1F1F]">
                  <div>
                    <span className="text-[#555555] block text-xs">Certificate ID:</span>
                    <span className="font-semibold">{verifiedResult.id}</span>
                  </div>
                  <div>
                    <span className="text-[#555555] block text-xs">Recipient:</span>
                    <span className="font-semibold">{verifiedResult.studentName}</span>
                  </div>
                  <div>
                    <span className="text-[#555555] block text-xs">Issue Date:</span>
                    <span className="font-semibold">{verifiedResult.issueDate}</span>
                  </div>
                  <div>
                    <span className="text-[#555555] block text-xs">Status:</span>
                    <span className="font-semibold text-green-700">{verifiedResult.status}</span>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-[#E1E1E1]">
                    <span className="text-[#555555] block text-xs">Specialization Track:</span>
                    <span className="font-semibold text-base">{verifiedResult.trackTitle}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E1E1E1] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm text-[#555555]">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#0056D2] text-white p-1.5 rounded-sm font-bold text-sm">LWF</div>
                <span className="font-bold text-base text-[#0056D2]">Learn With Flow</span>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                Free technology education platform featuring 182 comprehensive learning tracks, modular assessments, and verified certificates.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1F1F1F] mb-3 text-xs uppercase tracking-wider">Top Specializations</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-[#0056D2]">Google Ads Search</a></li>
                <li><a href="#" className="hover:text-[#0056D2]">Google Analytics GA4</a></li>
                <li><a href="#" className="hover:text-[#0056D2]">Meta Media Buying</a></li>
                <li><a href="#" className="hover:text-[#0056D2]">Data Science Essentials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1F1F1F] mb-3 text-xs uppercase tracking-wider">Platform</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-[#0056D2]">182 Track Directory</a></li>
                <li><a href="#" className="hover:text-[#0056D2]">Verification Portal</a></li>
                <li><a href="#" className="hover:text-[#0056D2]">Assessments</a></li>
                <li><a href="#" className="hover:text-[#0056D2]">Owner Dashboard</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1F1F1F] mb-3 text-xs uppercase tracking-wider">Community</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-[#0056D2]">Kaggle Integration</a></li>
                <li><a href="#" className="hover:text-[#0056D2]">Meta Blueprint Review</a></li>
                <li><a href="#" className="hover:text-[#0056D2]">IBM SkillsBuild</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#E1E1E1] pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#555555]">
            <p>© 2026 Learn With Flow Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#0056D2]">Privacy Policy</a>
              <a href="#" className="hover:text-[#0056D2]">Terms of Service</a>
              <a href="#" className="hover:text-[#0056D2]">Help Center</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}