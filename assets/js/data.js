/**
 * CENTRAL DATA FILE
 *
 * This file contains all structured content for the website.
 * In the future, this can be replaced with API calls to a headless CMS.
 *
 * Structure:
 * - Navigation items
 * - Services data
 * - Case studies
 * - Testimonials
 * - Team members
 * - Blog posts
 * - Key metrics
 * - Client logos
 */

const siteData = {
  // Site metadata
  site: {
    name: "Dubai Prod",
    tagline: "Global PR & Digital Agency",
    email: "info@dubaiprod.com",
    phone: "+971 (54) 333-35-87",
    phoneAlt: "+386 (40) 797-340",
    social: {
      linkedin: "https://linkedin.com/company/dubaiprod",
      facebook: "https://facebook.com/dubaiprod",
      instagram: "https://instagram.com/dubaiprod",
      youtube: "https://youtube.com/@dubaiprod"
    }
  },

  // Navigation structure
  navigation: [
    { label: "Home", href: "/index.html" },
    { label: "About", href: "/about.html" },
    {
      label: "Services",
      href: "/services/index.html",
      submenu: [
        { label: "Social Media", href: "/services/social-media.html" },
        { label: "Video Production", href: "/services/video-production.html" },
        { label: "3D & CGI", href: "/services/3d-cgi.html" },
        { label: "SEO", href: "/services/seo.html" },
        { label: "Web Development", href: "/services/web-development.html" },
        { label: "Ads Management", href: "/services/ads-management.html" },
        { label: "PR & Media", href: "/services/pr-media.html" },
        { label: "Branding", href: "/services/branding.html" }
      ]
    },
    { label: "Blog", href: "/blog/index.html" },
    { label: "Contact", href: "/contact.html" }
  ],

  // Key metrics
  metrics: [
    { value: "50+", label: "Projects Delivered", suffix: "+" },
    { value: "8", label: "Years Experience", suffix: "+" },
    { value: "4", label: "Global Markets", suffix: "" },
    { value: "98", label: "Client Satisfaction", suffix: "%" }
  ],

  // Services overview
  services: [
    {
      id: "social-media",
      name: "Social Media",
      slug: "social-media",
      icon: "📱",
      shortDescription: "Strategic social media marketing that builds communities and drives engagement across all platforms.",
      fullDescription: "We create data-driven social media strategies that amplify your brand voice, engage your audience, and convert followers into customers.",
      benefits: [
        "Increased brand awareness and reach",
        "Higher engagement rates",
        "Community building and loyalty",
        "Measurable ROI from social campaigns"
      ],
      process: [
        { step: "Audit", description: "Comprehensive analysis of your current social presence and competitors" },
        { step: "Strategy", description: "Custom content calendar and platform-specific strategies" },
        { step: "Creation", description: "High-quality content production (graphics, videos, copy)" },
        { step: "Management", description: "Daily posting, community engagement, and response management" },
        { step: "Optimization", description: "Ongoing analysis and strategy refinement based on performance data" }
      ],
      deliverables: [
        "Custom social media strategy document",
        "Content calendar (monthly)",
        "Platform-specific content creation",
        "Community management and engagement",
        "Monthly performance reports with insights",
        "Competitor analysis and benchmarking"
      ],
      faqs: [
        {
          question: "Which platforms do you manage?",
          answer: "We manage all major platforms including Instagram, Facebook, LinkedIn, Twitter/X, TikTok, YouTube, and emerging platforms based on your target audience."
        },
        {
          question: "How often will you post on our accounts?",
          answer: "Posting frequency is customized based on your goals and platform best practices, typically ranging from 3-7 times per week per platform."
        },
        {
          question: "Do you handle paid social advertising as well?",
          answer: "Yes, we offer integrated organic and paid social strategies. Check out our Ads Management service for more details on paid campaigns."
        }
      ]
    },
    {
      id: "video-production",
      name: "Video Production",
      slug: "video-production",
      icon: "🎥",
      shortDescription: "Cinematic video production that tells your brand story and captivates your audience.",
      fullDescription: "From concept to final cut, we produce premium video content that resonates with your audience and achieves your marketing objectives.",
      benefits: [
        "Professional, broadcast-quality video content",
        "Increased engagement and conversion rates",
        "Versatile content for multiple platforms",
        "Stronger emotional connection with audience"
      ],
      process: [
        { step: "Discovery", description: "Understanding your goals, audience, and brand message" },
        { step: "Concept", description: "Creative briefing, scripting, and storyboarding" },
        { step: "Pre-Production", description: "Casting, location scouting, and production planning" },
        { step: "Production", description: "Professional filming with cinema-grade equipment" },
        { step: "Post-Production", description: "Editing, color grading, motion graphics, and sound design" }
      ],
      deliverables: [
        "Full production planning and creative brief",
        "Professional filming (crew, equipment, locations)",
        "Premium post-production and editing",
        "Color grading and sound design",
        "Motion graphics and visual effects",
        "Multiple formats optimized for different platforms",
        "Raw footage and project files"
      ],
      faqs: [
        {
          question: "What types of videos do you produce?",
          answer: "We produce commercials, brand films, corporate videos, product videos, testimonials, event coverage, documentaries, and social media content."
        },
        {
          question: "What's the typical timeline for a video project?",
          answer: "Timelines vary based on complexity. A simple social video might take 1-2 weeks, while a full commercial production can take 4-8 weeks from concept to delivery."
        },
        {
          question: "Can you work with our existing footage?",
          answer: "Absolutely. We offer post-production services for existing footage, including editing, color grading, and motion graphics."
        }
      ]
    },
    {
      id: "3d-cgi",
      name: "3D & CGI",
      slug: "3d-cgi",
      icon: "🎨",
      shortDescription: "Stunning 3D visualization and CGI that brings your products and ideas to life.",
      fullDescription: "We create photorealistic 3D renders, product visualizations, and CGI animations that showcase your products and concepts in ways traditional photography can't match.",
      benefits: [
        "Photorealistic product visualization",
        "Unlimited creative possibilities",
        "Cost-effective alternative to physical prototyping",
        "Perfect for products not yet manufactured"
      ],
      process: [
        { step: "Brief", description: "Gathering specifications, references, and creative direction" },
        { step: "Modeling", description: "Creating detailed 3D models of products or environments" },
        { step: "Texturing", description: "Applying materials, textures, and surface details" },
        { step: "Lighting", description: "Setting up realistic lighting and environments" },
        { step: "Rendering", description: "Final high-resolution rendering and post-processing" }
      ],
      deliverables: [
        "Photorealistic 3D product renders",
        "360-degree product views",
        "3D animations and walkthroughs",
        "AR-ready 3D models",
        "Multiple output formats for web, print, and video",
        "Source files and assets"
      ],
      faqs: [
        {
          question: "What industries do you serve with 3D/CGI?",
          answer: "We work across real estate, architecture, product design, luxury goods, automotive, healthcare, and any industry needing high-quality visualization."
        },
        {
          question: "How realistic can the renders be?",
          answer: "Our renders are photorealistic and often indistinguishable from professional photography. We use industry-leading software and techniques."
        },
        {
          question: "Can you create animations, not just static images?",
          answer: "Yes, we create 3D animations, product demos, architectural walkthroughs, and complex motion graphics."
        }
      ]
    },
    {
      id: "seo",
      name: "SEO",
      slug: "seo",
      icon: "🔍",
      shortDescription: "Strategic SEO that drives organic traffic, improves rankings, and generates qualified leads.",
      fullDescription: "We implement comprehensive, white-hat SEO strategies that improve your search visibility, drive targeted organic traffic, and deliver measurable business results.",
      benefits: [
        "Higher search engine rankings",
        "Increased organic traffic and visibility",
        "Better quality leads and conversions",
        "Long-term, sustainable growth"
      ],
      process: [
        { step: "Audit", description: "Comprehensive technical, on-page, and off-page SEO audit" },
        { step: "Research", description: "Keyword research, competitor analysis, and opportunity identification" },
        { step: "Strategy", description: "Custom SEO roadmap aligned with business goals" },
        { step: "Implementation", description: "Technical fixes, content optimization, and link building" },
        { step: "Monitoring", description: "Ongoing tracking, reporting, and strategy refinement" }
      ],
      deliverables: [
        "Comprehensive SEO audit report",
        "Keyword research and strategy document",
        "Technical SEO fixes and recommendations",
        "On-page optimization (meta tags, content, structure)",
        "Content strategy and creation",
        "Link building and outreach campaigns",
        "Monthly performance reports and insights"
      ],
      faqs: [
        {
          question: "How long does it take to see SEO results?",
          answer: "SEO is a long-term strategy. You'll typically see initial improvements in 3-4 months, with significant results in 6-12 months, depending on competition and industry."
        },
        {
          question: "Do you guarantee first page rankings?",
          answer: "We don't guarantee specific rankings as search algorithms constantly evolve. However, we do guarantee best-practice implementation and transparent reporting on progress."
        },
        {
          question: "What makes your SEO approach different?",
          answer: "We focus on holistic, white-hat strategies that align with business goals. We prioritize quality over quantity and sustainable growth over quick fixes."
        }
      ]
    },
    {
      id: "web-development",
      name: "Web Development",
      slug: "web-development",
      icon: "💻",
      shortDescription: "Custom web development that combines beautiful design with powerful functionality.",
      fullDescription: "We build fast, secure, and scalable websites and web applications that deliver exceptional user experiences and drive business results.",
      benefits: [
        "Custom, scalable solutions built for your needs",
        "Fast, responsive, and mobile-optimized",
        "Secure and maintainable codebase",
        "Seamless CMS integration for easy content management"
      ],
      process: [
        { step: "Discovery", description: "Requirements gathering, user research, and technical planning" },
        { step: "Design", description: "UX/UI design, prototyping, and user testing" },
        { step: "Development", description: "Frontend and backend development with best practices" },
        { step: "Testing", description: "Quality assurance, performance optimization, and security testing" },
        { step: "Launch", description: "Deployment, monitoring, and ongoing support" }
      ],
      deliverables: [
        "Custom website or web application",
        "Responsive design (mobile, tablet, desktop)",
        "CMS integration (WordPress, headless CMS, etc.)",
        "SEO-friendly architecture",
        "Performance optimization",
        "Security implementation",
        "Analytics integration",
        "Documentation and training",
        "Ongoing support and maintenance options"
      ],
      faqs: [
        {
          question: "What technologies do you use?",
          answer: "We use modern frameworks and technologies based on project needs: React, Next.js, Vue, Node.js, WordPress, headless CMS solutions, and more."
        },
        {
          question: "Do you provide hosting and maintenance?",
          answer: "Yes, we offer hosting solutions and maintenance packages to keep your site secure, updated, and performing optimally."
        },
        {
          question: "Can you redesign our existing website?",
          answer: "Absolutely. We can redesign and rebuild existing sites, migrate content, and ensure a smooth transition with minimal downtime."
        }
      ]
    },
    {
      id: "ads-management",
      name: "Ads Management",
      slug: "ads-management",
      icon: "📊",
      shortDescription: "Data-driven paid advertising campaigns that maximize ROI across all platforms.",
      fullDescription: "We create, manage, and optimize paid advertising campaigns across Google, Meta, LinkedIn, and other platforms to drive qualified leads and maximize your advertising budget.",
      benefits: [
        "Higher conversion rates and lower cost per acquisition",
        "Advanced targeting and audience segmentation",
        "Transparent reporting and ROI tracking",
        "Continuous optimization for better performance"
      ],
      process: [
        { step: "Strategy", description: "Goal setting, audience research, and platform selection" },
        { step: "Setup", description: "Campaign structure, targeting, and creative development" },
        { step: "Launch", description: "Campaign deployment with proper tracking and analytics" },
        { step: "Optimization", description: "A/B testing, bid management, and continuous refinement" },
        { step: "Reporting", description: "Detailed performance analysis and strategic recommendations" }
      ],
      deliverables: [
        "Custom advertising strategy",
        "Campaign setup across chosen platforms",
        "Ad creative (copy, graphics, video)",
        "Audience research and targeting setup",
        "Conversion tracking implementation",
        "Landing page optimization recommendations",
        "Weekly performance monitoring",
        "Monthly detailed reports with insights",
        "Ongoing optimization and A/B testing"
      ],
      faqs: [
        {
          question: "What platforms do you advertise on?",
          answer: "We manage campaigns across Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter, TikTok, YouTube, and other platforms based on your audience."
        },
        {
          question: "What's the minimum ad budget?",
          answer: "We recommend a minimum monthly ad spend of $1,500-2,000 to generate meaningful data and results, though this varies by industry and goals."
        },
        {
          question: "How do you measure success?",
          answer: "We track metrics aligned with your goals: conversions, cost per acquisition, return on ad spend (ROAS), click-through rates, and overall ROI."
        }
      ]
    },
    {
      id: "pr-media",
      name: "PR & Media",
      slug: "pr-media",
      icon: "📰",
      shortDescription: "Strategic public relations that builds your brand reputation and earns media coverage.",
      fullDescription: "We develop and execute PR strategies that position your brand as an industry leader, secure valuable media coverage, and manage your public reputation.",
      benefits: [
        "Increased brand credibility and authority",
        "Valuable media coverage and exposure",
        "Crisis management and reputation protection",
        "Stronger relationships with key stakeholders"
      ],
      process: [
        { step: "Analysis", description: "Brand audit, media landscape analysis, and opportunity identification" },
        { step: "Strategy", description: "PR roadmap, messaging development, and target media identification" },
        { step: "Outreach", description: "Press release creation, media pitching, and relationship building" },
        { step: "Management", description: "Interview coordination, event PR, and crisis management" },
        { step: "Reporting", description: "Media monitoring, coverage analysis, and impact measurement" }
      ],
      deliverables: [
        "Comprehensive PR strategy",
        "Press release writing and distribution",
        "Media list and relationship building",
        "Interview preparation and media training",
        "Event PR and coverage",
        "Crisis communication planning",
        "Thought leadership content",
        "Monthly media coverage reports",
        "Reputation monitoring"
      ],
      faqs: [
        {
          question: "Can you guarantee media coverage?",
          answer: "While we can't guarantee specific placements, we have strong media relationships and a proven track record of securing quality coverage for our clients."
        },
        {
          question: "Do you handle crisis communications?",
          answer: "Yes, we provide crisis communication planning, rapid response strategies, and reputation management during challenging situations."
        },
        {
          question: "What industries do you specialize in?",
          answer: "We work across luxury, real estate, healthcare, technology, finance, and hospitality, with experience in both B2B and B2C communications."
        }
      ]
    },
    {
      id: "branding",
      name: "Branding",
      slug: "branding",
      icon: "✨",
      shortDescription: "Complete brand strategy and identity design that makes your business unforgettable.",
      fullDescription: "We create powerful brand identities and strategies that differentiate you from competitors, resonate with your audience, and drive long-term business value.",
      benefits: [
        "Clear, differentiated brand positioning",
        "Professional, cohesive visual identity",
        "Stronger customer recognition and loyalty",
        "Foundation for all marketing efforts"
      ],
      process: [
        { step: "Discovery", description: "Brand workshop, stakeholder interviews, and market research" },
        { step: "Strategy", description: "Brand positioning, messaging framework, and value proposition" },
        { step: "Identity", description: "Logo design, visual identity system, and brand guidelines" },
        { step: "Application", description: "Brand touchpoint design (website, collateral, packaging, etc.)" },
        { step: "Launch", description: "Brand rollout strategy and internal/external communication" }
      ],
      deliverables: [
        "Brand strategy document",
        "Brand positioning and messaging framework",
        "Logo design and variations",
        "Complete visual identity system (colors, typography, imagery)",
        "Comprehensive brand guidelines",
        "Business card and stationery design",
        "Digital and print templates",
        "Brand launch strategy",
        "Brand asset library"
      ],
      faqs: [
        {
          question: "Do you do rebrands or just new brands?",
          answer: "We do both! Whether you're starting fresh or evolving an existing brand, we tailor our approach to your specific needs."
        },
        {
          question: "How long does a branding project take?",
          answer: "A complete branding project typically takes 8-12 weeks, depending on scope. We can also work in phases for larger projects."
        },
        {
          question: "What if we only need a logo?",
          answer: "We offer logo design as a standalone service, though we recommend at least basic brand strategy to ensure the logo aligns with your business goals."
        }
      ]
    }
  ],

  // Case studies
  caseStudies: [
    {
      id: 1,
      title: "Luxury Real Estate Campaign",
      client: "Prime Properties Dubai",
      industry: "Real Estate",
      services: ["3D & CGI", "Video Production", "Social Media"],
      challenge: "Launch a new luxury development in a highly competitive market",
      solution: "Created photorealistic 3D renders and cinematic video tours before construction completion",
      results: [
        { metric: "+250%", label: "Lead Generation" },
        { metric: "85%", label: "Units Pre-Sold" },
        { metric: "2.5M+", label: "Video Views" }
      ],
      image: "placeholder-realestate.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Brand Transformation",
      client: "White Clinic",
      industry: "Healthcare",
      services: ["Branding", "Web Development", "SEO"],
      challenge: "Rebrand and establish digital presence for a growing medical clinic",
      solution: "Developed premium brand identity and SEO-optimized website with patient portal",
      results: [
        { metric: "+180%", label: "Organic Traffic" },
        { metric: "+320%", label: "Online Bookings" },
        { metric: "4.9/5", label: "Patient Satisfaction" }
      ],
      image: "placeholder-healthcare.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Tech Startup Launch",
      client: "InnovateTech",
      industry: "Technology",
      services: ["PR & Media", "Ads Management", "Social Media"],
      challenge: "Generate awareness and users for a new B2B SaaS platform",
      solution: "Integrated PR campaign with targeted paid advertising and thought leadership content",
      results: [
        { metric: "15+", label: "Media Features" },
        { metric: "1,200+", label: "Sign-ups in 90 Days" },
        { metric: "€2.80", label: "Cost Per Acquisition" }
      ],
      image: "placeholder-tech.jpg",
      featured: true
    },
    {
      id: 4,
      title: "E-commerce Growth Strategy",
      client: "Luxe Fashion House",
      industry: "Fashion & Retail",
      services: ["Ads Management", "Social Media", "Video Production"],
      challenge: "Increase online sales and brand awareness across Europe",
      solution: "Multi-platform advertising strategy with influencer partnerships and product videos",
      results: [
        { metric: "+410%", label: "Online Revenue" },
        { metric: "6.2x", label: "Return on Ad Spend" },
        { metric: "+850%", label: "Instagram Growth" }
      ],
      image: "placeholder-fashion.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Documentary Production",
      client: "Cultural Heritage Foundation",
      industry: "Non-Profit",
      services: ["Video Production", "PR & Media"],
      challenge: "Create compelling documentary to raise awareness and funding",
      solution: "Produced award-winning documentary with international distribution strategy",
      results: [
        { metric: "3", label: "Film Festival Awards" },
        { metric: "500K+", label: "Views" },
        { metric: "+200%", label: "Donations Increase" }
      ],
      image: "placeholder-documentary.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Restaurant Group Digital Presence",
      client: "Gourmet Collective",
      industry: "Hospitality",
      services: ["Web Development", "SEO", "Social Media"],
      challenge: "Create unified digital presence for 5 restaurant brands",
      solution: "Multi-site platform with centralized management and local SEO strategies",
      results: [
        { metric: "+290%", label: "Online Reservations" },
        { metric: "Top 3", label: "Local Search Rankings" },
        { metric: "+165%", label: "Social Engagement" }
      ],
      image: "placeholder-hospitality.jpg",
      featured: true
    },
    {
      id: 7,
      title: "Automotive Brand Launch",
      client: "ElectricDrive Motors",
      industry: "Automotive",
      services: ["Branding", "Video Production", "Ads Management"],
      challenge: "Launch premium electric vehicle brand in competitive market",
      solution: "Created distinctive brand identity with high-impact video campaigns and targeted digital advertising",
      results: [
        { metric: "12K+", label: "Pre-Orders" },
        { metric: "+520%", label: "Website Traffic" },
        { metric: "45M+", label: "Video Impressions" }
      ],
      image: "placeholder-automotive.jpg",
      featured: true
    },
    {
      id: 8,
      title: "Fintech App Growth Campaign",
      client: "PayFlow",
      industry: "Financial Technology",
      services: ["Ads Management", "SEO", "Social Media"],
      challenge: "Scale user acquisition while maintaining low CAC",
      solution: "Data-driven performance marketing across multiple channels with conversion optimization",
      results: [
        { metric: "150K+", label: "New Users" },
        { metric: "€1.20", label: "Cost Per Install" },
        { metric: "+380%", label: "App Store Ranking" }
      ],
      image: "placeholder-fintech.jpg",
      featured: true
    },
    {
      id: 9,
      title: "Education Platform Expansion",
      client: "LearnHub Academy",
      industry: "Education",
      services: ["Web Development", "Video Production", "Social Media"],
      challenge: "Expand online course platform to international markets",
      solution: "Multilingual platform development with localized video content and community building",
      results: [
        { metric: "25+", label: "Countries Reached" },
        { metric: "80K+", label: "Active Students" },
        { metric: "+600%", label: "Course Completions" }
      ],
      image: "placeholder-education.jpg",
      featured: true
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      quote: "Dubai Prod transformed our digital presence completely. Their strategic approach to social media and SEO delivered results beyond our expectations. We've seen a 250% increase in qualified leads.",
      author: "Gasper Tratnik",
      role: "CEO",
      company: "Prime Development Group",
      image: "placeholder-avatar-1.jpg"
    },
    {
      id: 2,
      quote: "The team's expertise in healthcare marketing and branding was invaluable. They understood our unique needs and created a sophisticated brand identity that resonates with our patients. Professional, creative, and results-driven.",
      author: "Dr. Sarah Mitchell",
      role: "Medical Director",
      company: "White Clinic",
      image: "placeholder-avatar-2.jpg"
    },
    {
      id: 3,
      quote: "Working with Dubai Prod on our 3D visualization and video production was a game-changer. The quality is exceptional, and their ability to bring our architectural concepts to life helped us pre-sell 85% of units.",
      author: "Mohammed Al-Rashid",
      role: "Development Director",
      company: "Skyline Properties",
      image: "placeholder-avatar-3.jpg"
    },
    {
      id: 4,
      quote: "Their PR and media outreach secured coverage we never thought possible. From Forbes to industry publications, Dubai Prod's relationships and strategic approach delivered real business impact.",
      author: "Elena Kovač",
      role: "CMO",
      company: "InnovateTech Solutions",
      image: "placeholder-avatar-4.jpg"
    },
    {
      id: 5,
      quote: "The paid advertising campaigns managed by Dubai Prod consistently deliver 5-6x ROAS. Their data-driven approach and creative excellence make them an invaluable partner for our growth.",
      author: "James Peterson",
      role: "E-commerce Director",
      company: "Luxe Fashion House",
      image: "placeholder-avatar-5.jpg"
    }
  ],

  // Team members
  team: [
    {
      id: 1,
      name: "Rok Veber",
      role: "Founder & CEO",
      bio: "Digital marketing strategist with 8+ years of experience building brands across Europe and the Middle East.",
      image: "placeholder-team-1.jpg",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Lara Novak",
      role: "Creative Director",
      bio: "Award-winning designer specializing in brand identity and visual storytelling for luxury brands.",
      image: "placeholder-team-2.jpg",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      role: "Head of Video Production",
      bio: "Filmmaker and cinematographer with experience in commercials, documentaries, and brand content.",
      image: "placeholder-team-3.jpg",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Nina Bergant",
      role: "SEO & Analytics Lead",
      bio: "Data-driven SEO specialist focused on sustainable growth strategies and technical optimization.",
      image: "placeholder-team-4.jpg",
      linkedin: "#"
    },
    {
      id: 5,
      name: "Marcus Chen",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating fast, scalable, and user-friendly web experiences.",
      image: "placeholder-team-5.jpg",
      linkedin: "#"
    },
    {
      id: 6,
      name: "Sophia Martinez",
      role: "PR & Communications Manager",
      bio: "Former journalist with deep media connections across Europe and the Middle East.",
      image: "placeholder-team-6.jpg",
      linkedin: "#"
    }
  ],

  // Blog posts
  blogPosts: [
    {
      id: 1,
      title: "The Future of SEO: How AI is Changing Search in 2025",
      slug: "future-of-seo-ai-2025",
      category: "SEO",
      excerpt: "Explore how artificial intelligence and machine learning are revolutionizing search engine optimization and what it means for your digital strategy.",
      author: "Nina Bergant",
      date: "2025-01-15",
      readTime: "8 min",
      image: "placeholder-blog-1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Social Media Strategy for Luxury Brands: A Complete Guide",
      slug: "social-media-strategy-luxury-brands",
      category: "Social Media",
      excerpt: "Learn how premium brands can leverage social media to build exclusivity, engage high-net-worth audiences, and drive meaningful conversions.",
      author: "Rok Veber",
      date: "2025-01-10",
      readTime: "12 min",
      image: "placeholder-blog-2.jpg",
      featured: true
    },
    {
      id: 3,
      title: "3D Product Visualization: Why It's Essential for Modern E-commerce",
      slug: "3d-product-visualization-ecommerce",
      category: "3D & CGI",
      excerpt: "Discover how photorealistic 3D renders and interactive product visualization can increase conversions and reduce return rates.",
      author: "Ahmed Hassan",
      date: "2025-01-05",
      readTime: "6 min",
      image: "placeholder-blog-3.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Web Development Trends to Watch in 2025",
      slug: "web-development-trends-2025",
      category: "Web Development",
      excerpt: "From AI integration to performance optimization, here are the web development trends shaping the digital landscape this year.",
      author: "Marcus Chen",
      date: "2024-12-28",
      readTime: "10 min",
      image: "placeholder-blog-4.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Video Marketing ROI: How to Measure What Matters",
      slug: "video-marketing-roi-measurement",
      category: "Video Production",
      excerpt: "Beyond vanity metrics — learn how to track and measure the real business impact of your video marketing efforts.",
      author: "Ahmed Hassan",
      date: "2024-12-20",
      readTime: "7 min",
      image: "placeholder-blog-5.jpg",
      featured: false
    },
    {
      id: 6,
      title: "PR in the Digital Age: Earned Media Still Matters",
      slug: "pr-digital-age-earned-media",
      category: "PR & Media",
      excerpt: "Why traditional PR and earned media coverage remain crucial components of a comprehensive digital marketing strategy.",
      author: "Sophia Martinez",
      date: "2024-12-15",
      readTime: "9 min",
      image: "placeholder-blog-6.jpg",
      featured: false
    },
    {
      id: 7,
      title: "Branding for Startups: Building Identity from Day One",
      slug: "branding-for-startups-guide",
      category: "Branding",
      excerpt: "A practical guide to developing a strong brand foundation that scales with your startup's growth.",
      author: "Lara Novak",
      date: "2024-12-10",
      readTime: "11 min",
      image: "placeholder-blog-7.jpg",
      featured: false
    },
    {
      id: 8,
      title: "Meta Ads vs. Google Ads: Choosing the Right Platform",
      slug: "meta-ads-vs-google-ads-comparison",
      category: "Ads Management",
      excerpt: "An objective comparison of Meta and Google advertising platforms to help you allocate your budget effectively.",
      author: "Rok Veber",
      date: "2024-12-05",
      readTime: "8 min",
      image: "placeholder-blog-8.jpg",
      featured: false
    }
  ],

  // Client logos for carousel
  clients: [
    { name: "Prime Properties", logo: "placeholder-client-1.png" },
    { name: "White Clinic", logo: "placeholder-client-2.png" },
    { name: "InnovateTech", logo: "placeholder-client-3.png" },
    { name: "Luxe Fashion", logo: "placeholder-client-4.png" },
    { name: "Gourmet Collective", logo: "placeholder-client-5.png" },
    { name: "Skyline Properties", logo: "placeholder-client-6.png" },
    { name: "Heritage Foundation", logo: "placeholder-client-7.png" },
    { name: "Tech Ventures", logo: "placeholder-client-8.png" }
  ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
