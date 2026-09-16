document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));

    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    const projectData = {
        '1': {
            title: "Tathmeen",
            category: "Site Vitrine",
            image: "tathmeentn hero section.png",
            context: "Tathmeen est une agence spécialisée dans les solutions de biogaz destinées aux agriculteurs. L'entreprise avait besoin d'un site vitrine professionnel pour présenter ses services, sensibiliser aux énergies renouvelables et faciliter la prise de contact avec les agriculteurs et partenaires.",
            solution: "J'ai conçu un site vitrine moderne et clair mettant en avant les solutions de biogaz proposées. La structure comprend une page d'accueil avec hero immersif, une section services détaillée, une présentation de l'entreprise, les avantages du biogaz et un formulaire de contact. Le design évoque l'écologie et l'innovation tout en restant accessible au public cible.",
            pages: ["Accueil avec hero", "Services & solutions", "À propos", "Avantages du biogaz", "Contact"],
            features: ["Design éco-responsable", "Sections informatives claires", "Formulaire de contact", "Responsive mobile-first", "Optimisation SEO", "Navigation intuitive"],
            tech: ["WordPress", "Elementor", "CSS personnalisé", "Responsive Design", "SEO de base"],
            result: "Un site vitrine professionnel et engagé qui positionne Tathmeen comme acteur clé des solutions de biogaz en Tunisie. Le site est 100% responsive et offre une expérience utilisateur fluide.",
            gallery: [
                { label: "Hero Desktop", url: "tathmeentn hero section.png" },
                { label: "Section Services", url: "service section tathmeentn.png" },
                { label: "Version Mobile", url: "view tel tathmeen.png" }
            ],
            link: "https://tathmeen.tn"
        },
        '2': {
            title: "Webly",
            category: "Site Vitrine",
            image: "hero section webly.png",
            context: "Webly est une agence spécialisée dans la création de sites web professionnels. L'agence avait besoin d'un site vitrine percutant pour présenter ses prestations, mettre en valeur son expertise et convaincre de futurs clients de faire appel à ses services.",
            solution: "J'ai créé un site vitrine moderne et dynamique reflétant l'expertise de Webly dans la création web. Le site présente les services de l'agence, ses réalisations, sa méthode de travail et un appel à l'action pour les prospects. Le design est épuré, professionnel et orienté conversion avec des animations légères pour renforcer l'impact visuel.",
            pages: ["Accueil percutante", "Services", "Réalisations", "Méthode de travail", "Contact / Devis"],
            features: ["Design moderne et dynamique", "Animations CSS légères", "Sections orientées conversion", "Présentation des services", "Formulaire de demande de devis", "Responsive desktop/tablette/mobile"],
            tech: ["WordPress", "Elementor", "CSS personnalisé", "Responsive Design", "SEO de base", "Performance"],
            result: "Un site vitrine professionnel et convaincant qui positionne Webly comme une agence de création web experte et fiable. Le site est entièrement responsive et optimisé pour la conversion.",
            gallery: [
                { label: "Hero Desktop", url: "hero section webly.png" },
                { label: "Section Services", url: "section service webly.png" },
                { label: "Version Mobile", url: "view tel webly.png" }
            ],
            link: "https://www.webly.flexystoretunisie.com"
        },
        '3': {
            title: "Hydrosan",
            category: "E-commerce / Sur mesure",
            image: "hydrosan home.png",
            context: "Hydrosan est une industrie spécialisée dans la vente de bidons, bouchons et flacons alimentaires et industriels. L'entreprise avait besoin d'un site e-commerce sur mesure pour présenter son catalogue de produits en grande quantité, avec une approche B2B basée sur les demandes de devis plutôt que la vente en ligne directe.",
            solution: "J'ai développé un site e-commerce personnalisé sous WordPress/WooCommerce, adapté au modèle économique de l'entreprise. Chaque produit dispose d'une fiche détaillée avec fiches techniques téléchargeables. Le système de panier a été remplacé par un formulaire de demande de devis permettant aux clients de demander un devis pour de grandes quantités. Le catalogue est organisé par catégories (bidons, bouchons, flacons) avec filtrage et recherche.",
            pages: ["Homepage avec catalogue", "Pages catégories", "Fiches produits détaillées", "Fiches techniques (PDF)", "Formulaire de demande de devis", "Contact"],
            features: ["Catalogue produits par catégories", "Fiches produits avec fiches techniques PDF", "Système de demande de devis", "Formulaire de contact professionnel", "Design sur mesure industriel", "Responsive mobile-first"],
            tech: ["WordPress", "WooCommerce", "Elementor", "CSS personnalisé", "PHP", "Responsive Design"],
            result: "Un site e-commerce professionnel et sur mesure qui positionne Hydrosan comme acteur industriel credible. Le système de devis facilite les échanges commerciaux et le catalogue produits est facilement administrable par le client.",
            gallery: [
                { label: "Homepage", url: "hydrosan home.png" },
                { label: "Section Produits", url: "hydrosan section produit.png" },
                { label: "Page Produit", url: "hydrosan page produit.png" },
                { label: "Formulaire Contact", url: "hydrosan formulaire de contact.png" }
            ],
            link: "https://hydrosan.tn"
        }
    };

    document.querySelectorAll('.view-project').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const data = projectData[id];
            if (!data) return;

            modalContent.innerHTML = `
                <div class="mb-8">
                    <span class="text-primary font-bold text-sm uppercase">${data.category}</span>
                    <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mt-2 mb-4">${data.title}</h2>
                </div>

                <div class="mb-8">
                    <img src="${data.image}" alt="${data.title}" class="rounded-2xl w-full object-cover shadow-2xl border border-slate-800">
                </div>

                <div class="grid md:grid-cols-2 gap-10 mb-10">
                    <div>
                        <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <i data-lucide="target" class="text-primary w-5 h-5"></i> Contexte & Besoin
                        </h3>
                        <p class="text-slate-400 text-sm leading-relaxed">${data.context}</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <i data-lucide="lightbulb" class="text-secondary w-5 h-5"></i> Solution
                        </h3>
                        <p class="text-slate-400 text-sm leading-relaxed">${data.solution}</p>
                    </div>
                </div>

                <div class="mb-10">
                    <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <i data-lucide="file-text" class="text-primary w-5 h-5"></i> Pages créées
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        ${data.pages.map(p => `<span class="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg">${p}</span>`).join('')}
                    </div>
                </div>

                <div class="mb-10">
                    <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <i data-lucide="check-square" class="text-secondary w-5 h-5"></i> Fonctionnalités
                    </h3>
                    <div class="grid md:grid-cols-2 gap-3">
                        ${data.features.map(f => `<div class="flex items-center gap-2 text-sm text-slate-400"><i data-lucide="check-circle-2" class="text-secondary w-4 h-4 flex-shrink-0"></i> ${f}</div>`).join('')}
                    </div>
                </div>

                <div class="mb-10">
                    <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <i data-lucide="wrench" class="text-primary w-5 h-5"></i> Technologies
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        ${data.tech.map(t => `<span class="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded-full font-semibold">${t}</span>`).join('')}
                    </div>
                </div>

                <div class="mb-10">
                    <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <i data-lucide="trophy" class="text-secondary w-5 h-5"></i> Résultat
                    </h3>
                    <p class="text-slate-400 text-sm leading-relaxed">${data.result}</p>
                </div>

                <div class="mb-10">
                    <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <i data-lucide="image" class="text-primary w-5 h-5"></i> Galerie
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${data.gallery.map(g => `
                            <div class="relative rounded-xl overflow-hidden border border-slate-800 group cursor-pointer">
                                <img src="${g.url}" alt="${g.label}" class="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500">
                                <div class="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="text-white text-xs font-bold px-2 py-1 bg-black/50 rounded">${g.label}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
                    <h3 class="text-xl font-bold text-white mb-3">Vous avez un projet similaire ?</h3>
                    <p class="text-slate-400 mb-6 text-sm">Parlons de votre projet et donnons vie à votre site web.</p>
                    <div class="flex flex-wrap justify-center gap-4">
                        ${data.link && data.link !== '#' ? `<a href="${data.link}" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all">Voir le site en ligne <i data-lucide="external-link" class="w-4 h-4"></i></a>` : ''}
                        <a href="#contact" onclick="document.getElementById('project-modal').classList.add('hidden'); document.getElementById('project-modal').classList.remove('flex'); document.body.style.overflow='auto';" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all">
                            Parler de votre projet <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            `;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal.click();
    });

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            showStatus('Veuillez remplir tous les champs.', 'error');
            return;
        }

        showStatus('Envoi en cours...', 'info');

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                showStatus('Merci ! Votre message a été envoyé avec succès.', 'success');
                contactForm.reset();
            } else {
                showStatus('Une erreur est survenue. Veuillez réessayer.', 'error');
            }
        } catch {
            showStatus('Erreur réseau. Veuillez réessayer.', 'error');
        }
    });

    function showStatus(msg, type) {
        formStatus.textContent = msg;
        formStatus.classList.remove('hidden', 'text-red-500', 'text-green-500', 'text-blue-400');
        if (type === 'error') formStatus.classList.add('text-red-500');
        else if (type === 'success') formStatus.classList.add('text-green-500');
        else formStatus.classList.add('text-blue-400');
        formStatus.classList.remove('hidden');
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
