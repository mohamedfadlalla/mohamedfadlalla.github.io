// Bilingual Support
    const translations = {
      en: {
        nav_services: "Services",
        nav_testimonials: "Testimonials",
        nav_whatsapp: "Book a Call",
        lang_label: "العربية",
        hero_title: "Does your digital presence reflect your business quality?",
        hero_subtitle: "I provide complete design and digital marketing solutions tailored for the Sudanese market — websites, logos, social content, and short videos at competitive prices.",
        chip1: "Affordable Price",
        chip2: "Fast Delivery",
        chip3: "Easy Scheduling",
        chip4: "Ready Packages",
        chip5: "Quality Guaranteed",
        cta_start: "Schedule a Meeting",
        cta_services: "View Services",
        hero_card1_title: "Quick Service: CV or Portfolio Setup",
        hero_card1_desc: "Transform your identity into a professional file suitable for job applications or showcasing services on social media.",
        hero_card1_cta: "Special price for limited time — Contact us now",
        hero_card2_title: "Quick Agreement via WhatsApp",
        hero_card2_desc: "A quick introductory call (10-15 minutes) to define project requirements with a clear execution plan.",
        hero_card2_btn1: "Book 30 Min Call",
        hero_card2_btn2: "Contact Info",
        stat1: "Projects Completed",
        stat2: "Satisfied Clients",
        stat3: "Avg. Response Time",
        stat4: "Quality Guarantee",
        services_title: "Our Premium Services",
        services_subtitle: "Comprehensive solutions for building your digital presence",
        service1_title: "Website Design",
        service1_desc: "Fast, responsive, and mobile-friendly websites. Fully compatible with small and medium business requirements.",
        service2_title: "Visual Identity & Logo",
        service2_desc: "Professional logo and simple identity guide to help maintain brand consistency.",
        service3_title: "Social Media Content",
        service3_desc: "Static posts, short videos (Reels/TikTok), and designs ready for immediate publishing.",
        service4_title: "Account Management",
        service4_desc: "Monthly plans for content management, engagement, and performance analysis.",
        service5_title: "Video Editing",
        service5_desc: "Professional editing suitable for TikTok and Facebook — short, engaging, and ready for publishing.",
        service6_title: "Business Email Setup",
        service6_desc: "Set up a professional email server for your business (Google Workspace / DNS setup / security).",
        testimonials_title: "Client Reviews",
        testimonials_subtitle: "What our clients say about our services",
        contact_title: "Ready to start?",
        contact_subtitle: "Send a message or call via WhatsApp and we'll respond during business hours.",
        contact_whatsapp: "Schedule via Calendly"
      },
      ar: {
        nav_services: "الخدمات",
        nav_testimonials: "آراء العملاء",
        nav_whatsapp: "احجز مكالمة",
        lang_label: "English",
        hero_title: "هل سيرتك الرقمية تعكس جودة عملك؟",
        hero_subtitle: "أنا بقدم حلول تصميم وتسويق رقمية كاملة ومعدّة خصيصاً للسوق السوداني — مواقع، شعارات، محتوى سوشيال، وفيديوهات قصيرة بأسعار منافسة.",
        chip1: "سعر مناسب",
        chip2: "تسليم سريع",
        chip3: "جدولة سهلة",
        chip4: "باكجات جاهزة",
        chip5: "ضمان الجودة",
        cta_start: "حدد موعداً",
        cta_services: "اطلع على الخدمات",
        hero_card1_title: "خدمة سريعة: تجهيز سيرة ذاتية أو صفحة أعمال",
        hero_card1_desc: "تحويل الهوية إلى ملف احترافي مناسب للتقديم على الوظائف أو عرض الخدمات عبر السوشيال ميديا.",
        hero_card1_cta: "سعر خاص لفترة محدودة — راسلنا الآن",
        hero_card2_title: "اتفاق سريع عبر واتساب",
        hero_card2_desc: "مكالمة تعريفية سريعة (10-15 دقيقة) ونحدد متطلبات المشروع مع خطة تنفيذ واضحة.",
        hero_card2_btn1: "احجز مكالمة 30 دقيقة",
        hero_card2_btn2: "معلومات التواصل",
        stat1: "مشروع مكتمل",
        stat2: "عميل راضي",
        stat3: "متوسط وقت الاستجابة",
        stat4: "ضمان الجودة",
        services_title: "خدماتنا المتميزة",
        services_subtitle: "حلول شاملة لبناء حضورك الرقمي",
        service1_title: "تصميم مواقع",
        service1_desc: "مواقع سريعة، متجاوبة، ومهيأة للعرض على الموبايل. متوافقة تماماً مع متطلبات الأعمال الصغيرة والمتوسطة.",
        service2_title: "هوية بصرية وشعار",
        service2_desc: "شعار احترافي ودليل هوية بسيط帮助你 على الحفاظ على اتساق العلامة التجارية.",
        service3_title: "محتوى السوشيال",
        service3_desc: "بوستات ثابتة، فيديوهات قصيرة (Reels/TikTok)، وتصميمات قابلة للنشر مباشرة.",
        service4_title: "إدارة حسابات",
        service4_desc: "خطط شهرية لإدارة المحتوى، التفاعل، وتحليل الأداء.",
        service5_title: "تحرير فيديو",
        service5_desc: "مونتاج احترافي مناسب لتيك توك وفيسبوك — قصير، جذاب، ومُهيأ للنشر.",
        service6_title: "إعداد البريد المؤسسي",
        service6_desc: "نصّب سيرفر بريد احترافي لعملك (جيميل للأعمال / إعداد DNS / أمان).",
        testimonials_title: "آراء عملائنا",
        testimonials_subtitle: "ماذا يقول عملاؤنا عن خدماتنا",
        contact_title: "جاهز تبدأ؟",
        contact_subtitle: "أرسل رسالة أو اتصل عبر واتساب وسنرد خلال ساعات العمل.",
        contact_whatsapp: "احجز عبر Calendly"
      }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem('lang', lang);
      
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });

      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }

    document.getElementById('langToggle').addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(newLang);
    });

    setLanguage(currentLang);

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuToggle && mainNav) {
      mobileMenuToggle.addEventListener('click', () => {
        const isActive = mainNav.classList.contains('active');
        mainNav.classList.toggle('active');
        mobileMenuToggle.querySelector('.material-symbols-outlined').textContent = isActive ? 'menu' : 'close';
      });

      // Close menu when clicking a link
      mainNav.querySelectorAll('.nav-link, .btn').forEach(link => {
        link.addEventListener('click', () => {
          mainNav.classList.remove('active');
          mobileMenuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
        });
      });
    }

    // Update year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all scroll reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    });

    // Add subtle animations on page load
    window.addEventListener('load', () => {
      document.querySelectorAll('.fade-in-up').forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 100);
      });
    });

    // Enhanced mobile experience
    if (window.innerWidth <= 640) {
      // Add mobile navigation toggle if needed
      const nav = document.querySelector('.nav');
      if (nav) {
        nav.style.display = 'none'; // Hide on mobile for now
      }
    }
