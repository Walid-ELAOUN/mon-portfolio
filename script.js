document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // --- Project Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
            filterBtns.forEach(b => b.classList.add('border-slate-800', 'text-slate-400'));
            
            btn.classList.add('active', 'bg-primary', 'text-white');
            btn.classList.remove('border-slate-800', 'text-slate-400', 'hover:border-primary/50');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    // --- Project Modal Logic ---
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    
    // Mock Data for Projects
    const projectData = {
        '1': {
            title: "Prédiction du Diabète",
            category: "Data Science",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
            description: "Développement d'une application web capable de prédire avec précision le diabète chez les patients en utilisant des modèles de Machine Learning (Random Forest, SVM).",
            details: [
                "Prétraitement complet des données (nettoyage, normalisation).",
                "Implémentation de plusieurs modèles de classification.",
                "Évaluation via matrice de confusion et courbe ROC.",
                "Interface utilisateur fluide avec Streamlit."
            ],
            tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
            link: "#"
        },
        '2': {
            title: "Boutique E-commerce WooCommerce",
            category: "Web / E-commerce",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
            description: "Création d'une plateforme e-commerce complète sous WordPress/WooCommerce pour une entreprise leader en Tunisie.",
            details: [
                "Design UI/UX personnalisé avec Elementor Pro.",
                "Intégration de passerelles de paiement locales.",
                "Optimisation SEO et temps de chargement.",
                "Gestion automatisée des stocks et facturation."
            ],
            tech: ["WordPress", "Elementor", "WooCommerce", "MySQL"],
            link: "#"
        },
        '3': {
            title: "Analyse Hébergement Touristique",
            category: "Business Intelligence",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            description: "Analyse approfondie du secteur de l'hébergement touristique en Tunisie via des outils BI modernes.",
            details: [
                "Collecte et nettoyage de données multisources.",
                "Création de KPI stratégiques pour les décideurs.",
                "Visualisations interactives complexes.",
                "Rapports automatisés mensuels."
            ],
            tech: ["Power BI", "Python", "SQL", "PostgreSQL"],
            link: "#"
        }
    };

    document.querySelectorAll('.view-project').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const data = projectData[id];
            
            if (data) {
                modalContent.innerHTML = `
                    <div class="grid md:grid-cols-2 gap-10">
                        <div>
                            <img src="${data.image}" alt="${data.title}" class="rounded-2xl w-full object-cover shadow-2xl border border-slate-800">
                        </div>
                        <div>
                            <span class="text-primary font-bold text-sm uppercase">${data.category}</span>
                            <h2 class="text-3xl font-bold text-white mt-2 mb-4">${data.title}</h2>
                            <p class="text-slate-400 mb-6">${data.description}</p>
                            
                            <h4 class="text-white font-semibold mb-3">Points clés :</h4>
                            <ul class="space-y-2 mb-8">
                                ${data.details.map(item => `<li class="flex items-start gap-2 text-sm text-slate-400"><i data-lucide="check-circle-2" class="text-secondary w-5 h-5 flex-shrink-0"></i> ${item}</li>`).join('')}
                            </ul>
                            
                            <div class="flex flex-wrap gap-2 mb-8">
                                ${data.tech.map(t => `<span class="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">${t}</span>`).join('')}
                            </div>
                            
                            <a href="${data.link}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
                                Visiter le projet <i data-lucide="external-link" class="w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                `;
                
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent scroll
                lucide.createIcons(); // Re-init icons
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    });

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal.click();
        }
    });

    // --- Form Validation & Submission ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic Validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            showStatus('Veuillez remplir tous les champs.', 'error');
            return;
        }

        // Simulate sending (you can integrate Formspree or EmailJS here)
        showStatus('Envoi en cours...', 'info');
        
        setTimeout(() => {
            showStatus('Merci ! Votre message a été envoyé avec succès.', 'success');
            contactForm.reset();
        }, 1500);
    });

    function showStatus(msg, type) {
        formStatus.textContent = msg;
        formStatus.classList.remove('hidden', 'text-red-500', 'text-green-500', 'text-blue-400');
        
        if (type === 'error') formStatus.classList.add('text-red-500');
        else if (type === 'success') formStatus.classList.add('text-green-500');
        else formStatus.classList.add('text-blue-400');
        
        formStatus.classList.remove('hidden');
    }

    // --- Smooth Scroll for anchor links (handled by CSS scroll-smooth, but fallback) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
