/* PRISMA LEGAL — interactive layer */

// ============================================================
//  TRANSLATIONS
// ============================================================
const translations = {
  es: {
    'nav-about': 'Quiénes somos',
    'nav-services': 'Qué hacemos',
    'nav-practice': 'Áreas',
    'nav-team': 'Equipo',
    'nav-contact': 'Contacto',
    'nav-cta': 'Agendar consulta',
    'cta-wa': 'WhatsApp',
    'hero-title': 'Claridad jurídica<br/>para <em>decisiones</em><br/>de alto impacto.',
    'hero-lede': 'Estudio jurídico boutique, senior-led, con base en Asunción. Asesoramos a directorios y equipos ejecutivos en asuntos corporativos, financieros y laborales, con enfoque regulatorio y transaccional. Convertimos complejidad legal en decisiones claras y ejecutables.',
    'hero-btn-primary': 'Escribir por WhatsApp',
    'hero-btn-primary-short': 'WhatsApp',
    'hero-btn-ghost': 'Áreas de práctica',
    'hero-btn-ghost-short': 'Áreas',
    'hero-meta-sede-k': 'Sede',
    'hero-meta-foco-k': 'Foco',
    'hero-meta-foco-v': 'Corporativo · Financiero · Civil • Laboral • Penal • Marcario • Mercantil • Litigios',
    'hero-meta-modelo-k': 'Modelo',
    'hero-meta-modelo-v': 'Atención senior dedicada',
    'hero-meta-idiomas-k': 'Idiomas',
    'about-num': '01 — Quiénes somos',
    'about-title': 'Un estudio boutique<br/>construido sobre <em>criterio</em>.',
    'about-col1-lang': 'Quiénes somos',
    'about-col1-lead': 'Prisma Legal es un estudio jurídico boutique con base en Asunción, enfocado en asesoría corporativa y transaccional, derecho bancario y financiero, regulación, fintech y medios de pago, derecho civil, marcario, marítimo y penal.',
    'about-col1-p': 'Acompañamos a clientes locales y extranjeros en operaciones complejas donde la combinación de criterio regulatorio y ejecución transaccional define el resultado. Cada mandato es liderado por un socio del estudio, sin intermediación ni curva de aprendizaje.',
    'about-col2-lang': 'Principios',
    'about-p1': ' Atención senior dedicada en cada mandato.',
    'about-p2': ' Lectura profunda del marco regulatorio aplicable.',
    'about-p3': ' Documentación contractual rigurosa y trazable.',
    'about-p4': ' Comunicación clara con foco en la decisión del cliente.',
    'about-stat1-l': 'Áreas de práctica',
    'about-stat2-l': 'Atención senior',
    'about-stat3-l': 'Mandatos bilingües',
    'about-stat4-l': 'Sede en Asunción',
    'diff-num': '02 — Diferenciales',
    'diff-title': 'Por qué los clientes <em>nos eligen</em>.',
    'diff1-title': 'Enfoque regulatorio',
    'diff1-text': 'Lectura profunda de marcos sectoriales — banca, fintech, seguros, mercado de valores — traducida en estructuras que resisten el escrutinio.',
    'diff2-title': 'Ejecución transaccional',
    'diff2-text': 'Negociación, documentación y cierre de operaciones complejas con disciplina de plazos, claridad contractual y trazabilidad total.',
    'diff3-title': 'Atención senior',
    'diff3-text': 'Cada mandato es liderado por un socio del estudio. Sin intermediación, sin curva de aprendizaje, sin pérdida de matiz en la comunicación.',
    'services-num': '03 — Qué hacemos',
    'services-title': 'Servicios <em>técnicos</em>,<br/>resultados pragmáticos.',
    'service1-h': 'Estructuración y negociación de contratos',
    'service1-p': 'Arquitectura contractual para operaciones locales y cross-border.',
    'service2-h': 'Asesoría fintech y pagos',
    'service2-p': 'Licenciamiento, modelos de negocio, esquemas de medios de pago.',
    'service3-h': 'Gobierno corporativo y M&amp;A',
    'service3-p': 'Fusiones, adquisiciones, reorganizaciones y due diligence.',
    'service4-h': 'Derecho marítimo y naviero',
    'service4-p': 'Fletamentos, registro de buques, hipoteca naval, transporte fluvial.',
    'service5-h': 'Cumplimiento normativo',
    'service5-p': 'Programas de PLD/FT, políticas internas, auditorías regulatorias.',
    'service6-h': 'Seguros y reaseguros',
    'service6-p': 'Estructuración de productos, siniestros complejos, regulación SIS.',
    'service7-h': 'Litigios civiles y comerciales',
    'service7-p': 'Estrategia procesal en disputas de alto valor y arbitraje.',
    'service8-h': 'Propiedad intelectual',
    'service8-p': 'Marcas, patentes, secretos comerciales y litigios de PI.',
    'sectors-num': '04 — Sectores',
    'sectors-title': 'Industrias que <em>servimos</em>.',
    'sectors-intro': 'Trabajamos en asuntos donde la precisión jurídica, el criterio regulatorio y la velocidad de ejecución hacen la diferencia.',
    'sector1': 'Fintech',
    'sector2': 'Seguros',
    'sector3': 'Servicios financieros',
    'sector4': 'Comercio y tecnología',
    'sector5': 'Mercado de valores',
    'sector6': 'Marítimo y logística',
    'sector7': 'Trabajo y seguridad social',
    'sector8': 'Derecho Civil',
    'sector9': 'Derecho Penal',
    'sector10': 'Derecho Marcario',
    'practice-num': '05 — Áreas de práctica',
    'practice-title': 'Diez áreas. <em>Un solo</em> estándar.',
    'p01-h': 'Derecho Laboral y Seguridad Social',
    'p01-p': 'Relaciones individuales y colectivas, fiscalizaciones del MTESS, seguridad social.',
    'p02-h': 'Corporativo, civil y comercial',
    'p02-p': 'Contratos, sociedades, gobierno corporativo, sucesiones, divorcio, recupero de carteras.',
    'p03-h': 'Regulatorio y administrativo',
    'p03-p': 'Relación con reguladores, procedimientos sancionatorios.',
    'p04-h': 'Bancario y financiero',
    'p04-p': 'Financiamientos sindicados, garantías, productos bancarios, regulación BCP.',
    'p05-h': 'Fintech y medios de pago',
    'p05-p': 'Licencias EMPE, billeteras, adquirencia, criptoactivos.',
    'p06-h': 'Litigios y arbitraje',
    'p06-p': 'Disputas civiles, comerciales y arbitraje doméstico e internacional.',
    'p07-h': 'Tributario y aduanero',
    'p07-p': 'Planificación fiscal, contingencias, recursos administrativos.',
    'p08-h': 'Propiedad intelectual',
    'p08-p': 'Registro, defensa y licenciamiento de activos intangibles.',
    'p09-h': 'Marítimo y logística',
    'p09-p': 'Transporte fluvial, contratos de fletamento, hipoteca naval.',
    'p10-h': 'Seguros y reaseguros',
    'p10-p': 'Estructuración de pólizas, siniestros, cumplimiento SIS.',
    'process-num': '06 — Cómo trabajamos',
    'process-title': 'Un método <em>repetible</em>,<br/>resultados a la medida.',
    'step1-h': 'Diagnóstico',
    'step1-p': 'Mapeo regulatorio, riesgos y objetivos del cliente. Definimos el alcance con el socio responsable.',
    'step2-h': 'Estrategia',
    'step2-p': 'Diseño de la estructura legal y plan de trabajo con plazos, entregables y matriz de decisiones.',
    'step3-h': 'Documentación',
    'step3-p': 'Redacción, negociación y revisión de contratos, opiniones legales y presentaciones regulatorias.',
    'step4-h': 'Implementación',
    'step4-p': 'Cierre, acompañamiento post-cierre y monitoreo de cumplimiento continuo.',
    'quote-text': 'Rigurosidad técnica,<br/><em>comunicación clara</em><br/>y ejecución pragmática.',
    'quote-cite': 'Principio operativo · Prisma Legal',
    'team-num': '07 — Equipo',
    'team-title': 'Socios <em>responsables</em><br/>de cada mandato.',
    't1-role': 'Managing Partner',
    't1-bio': 'Lidera la práctica corporativa, bancaria y de fintech del estudio. Asesor de cierres de operaciones cross-border y estructuras regulatorias complejas.',
    't2-role': 'Partner',
    't2-bio': 'Especialista en litigios, arbitraje y derecho regulatorio. Experiencia en disputas comerciales de alto valor y procedimientos sancionatorios. Agente de Marcas.',
    't3-role': 'Of Counsel',
    't3-bio': 'Experto en derecho del trabajo y seguridad social. Asesoramiento a empleadores en fiscalizaciones y estructuraciones de personal.',
    't4-role': 'Of Counsel',
    't4-bio': 'Experto en derecho de seguros. Asesoría en mercado de seguros. Foco en derecho laboral, seguridad social y tributario. Asesora a empleadores en fiscalizaciones y reestructuraciones de personal.',
    'silent-tag': 'Áreas de práctica',
    'silent-h': 'Práctica Marítima y Naviera',
    'silent-p': 'Asesoría especializada en derecho marítimo, incluyendo abanderamiento de buques y contratos marítimos de todo tipo.',
    'contact-num': '08 — Contacto',
    'contact-title': 'Conversemos sobre<br/>su <em>próximo</em> mandato.',
    'contact-sede-k': 'Sede',
    'contact-sede-v': 'Asunción, Paraguay<br/><small>Reuniones con cita previa</small>',
    'contact-web-k': 'Web',
    'contact-wa-k': 'WhatsApp',
    'contact-email-k': 'Email',
    'contact-cta': 'Escribir por WhatsApp',
    'footer-nav-h': 'Navegación',
    'footer-nav-about': 'Quiénes somos',
    'footer-nav-services': 'Qué hacemos',
    'footer-nav-practice': 'Áreas de práctica',
    'footer-nav-team': 'Equipo',
    'footer-contact-h': 'Contacto',
    'footer-social-h': 'Síganos',
    'footer-copy': '© {year} Prisma Legal. Todos los derechos reservados.',
    'footer-dev': 'Desarrollado por',
    'form-nombre-l': 'Nombre',
    'form-empresa-l': 'Empresa / Organización',
    'form-email-l': 'Email',
    'form-tel-l': 'Teléfono',
    'form-asunto-l': 'Asunto',
    'form-mensaje-l': 'Mensaje',
    'form-submit': 'Enviar consulta',
    'form-success': 'Su mensaje fue enviado. Le responderemos a la brevedad.',
  },

  en: {
    'nav-about': 'Who We Are',
    'nav-services': 'What We Do',
    'nav-practice': 'Areas',
    'nav-team': 'Team',
    'nav-contact': 'Contact',
    'nav-cta': 'Schedule a Consultation',
    'cta-wa': 'WhatsApp',
    'hero-title': 'Legal clarity<br/>for <em>high-impact</em><br/>decisions.',
    'hero-lede': 'Boutique law firm, senior-led, based in Asunción. We advise boards and executive teams on corporate, financial and labor matters, with a regulatory and transactional focus. We turn legal complexity into clear, actionable decisions.',
    'hero-btn-primary': 'Contact via WhatsApp',
    'hero-btn-primary-short': 'WhatsApp',
    'hero-btn-ghost': 'Practice Areas',
    'hero-btn-ghost-short': 'Areas',
    'hero-meta-sede-k': 'HQ',
    'hero-meta-foco-k': 'Focus',
    'hero-meta-foco-v': 'Corporate · Financial · Civil • Labor • Criminal • Trademark • Commercial • Litigation',
    'hero-meta-modelo-k': 'Model',
    'hero-meta-modelo-v': 'Dedicated senior attention',
    'hero-meta-idiomas-k': 'Languages',
    'about-num': '01 — Who We Are',
    'about-title': 'A boutique firm<br/>built on <em>judgment</em>.',
    'about-col1-lang': 'Who We Are',
    'about-col1-lead': 'Prisma Legal is a boutique law firm based in Asunción, focused on corporate and transactional advisory, banking and financial law, regulation, fintech and payment systems, civil, trademark, maritime and criminal law.',
    'about-col1-p': 'We accompany local and international clients in complex operations where the combination of regulatory judgment and transactional execution defines the outcome. Each mandate is led by a firm partner, without intermediation or learning curve.',
    'about-col2-lang': 'Principles',
    'about-p1': ' Dedicated senior attention in every mandate.',
    'about-p2': ' Deep reading of the applicable regulatory framework.',
    'about-p3': ' Rigorous and traceable contractual documentation.',
    'about-p4': ' Clear communication focused on the client\'s decision.',
    'about-stat1-l': 'Practice areas',
    'about-stat2-l': 'Senior attention',
    'about-stat3-l': 'Bilingual mandates',
    'about-stat4-l': 'HQ in Asunción',
    'diff-num': '02 — Differentials',
    'diff-title': 'Why clients <em>choose us</em>.',
    'diff1-title': 'Regulatory Focus',
    'diff1-text': 'Deep reading of sector frameworks — banking, fintech, insurance, capital markets — translated into structures that withstand scrutiny.',
    'diff2-title': 'Transactional Execution',
    'diff2-text': 'Negotiation, documentation and closing of complex transactions with deadline discipline, contractual clarity and full traceability.',
    'diff3-title': 'Senior Attention',
    'diff3-text': 'Each mandate is led by a firm partner. No intermediation, no learning curve, no loss of nuance in communication.',
    'services-num': '03 — What We Do',
    'services-title': 'Technical <em>services</em>,<br/>pragmatic results.',
    'service1-h': 'Contract structuring and negotiation',
    'service1-p': 'Contractual architecture for local and cross-border transactions.',
    'service2-h': 'Fintech and payments advisory',
    'service2-p': 'Licensing, business models, payment systems schemes.',
    'service3-h': 'Corporate governance and M&amp;A',
    'service3-p': 'Mergers, acquisitions, reorganizations and due diligence.',
    'service4-h': 'Maritime and naval law',
    'service4-p': 'Chartering, vessel registration, ship mortgage, river transport.',
    'service5-h': 'Regulatory compliance',
    'service5-p': 'AML/CFT programs, internal policies, regulatory audits.',
    'service6-h': 'Insurance and reinsurance',
    'service6-p': 'Product structuring, complex claims, SIS regulation.',
    'service7-h': 'Civil and commercial litigation',
    'service7-p': 'Procedural strategy in high-value disputes and arbitration.',
    'service8-h': 'Intellectual property',
    'service8-p': 'Trademarks, patents, trade secrets and IP litigation.',
    'sectors-num': '04 — Sectors',
    'sectors-title': 'Industries we <em>serve</em>.',
    'sectors-intro': 'We work on matters where legal precision, regulatory judgment and execution speed make the difference.',
    'sector1': 'Fintech',
    'sector2': 'Insurance',
    'sector3': 'Financial services',
    'sector4': 'Commerce and technology',
    'sector5': 'Capital markets',
    'sector6': 'Maritime and logistics',
    'sector7': 'Labor and social security',
    'sector8': 'Civil Law',
    'sector9': 'Criminal Law',
    'sector10': 'Trademark Law',
    'practice-num': '05 — Practice Areas',
    'practice-title': 'Ten areas. <em>One</em> standard.',
    'p01-h': 'Labor Law and Social Security',
    'p01-p': 'Individual and collective labor relations, MTESS audits, social security.',
    'p02-h': 'Corporate, civil and commercial',
    'p02-p': 'Contracts, companies, corporate governance, successions, divorce, debt recovery.',
    'p03-h': 'Regulatory and administrative',
    'p03-p': 'Regulator relations, sanctioning procedures.',
    'p04-h': 'Banking and financial',
    'p04-p': 'Syndicated loans, guarantees, banking products, BCP regulation.',
    'p05-h': 'Fintech and payment systems',
    'p05-p': 'EMPE licenses, wallets, acquiring, cryptoassets.',
    'p06-h': 'Litigation and arbitration',
    'p06-p': 'Civil, commercial disputes and domestic and international arbitration.',
    'p07-h': 'Tax and customs',
    'p07-p': 'Tax planning, contingencies, administrative appeals.',
    'p08-h': 'Intellectual property',
    'p08-p': 'Registration, defense and licensing of intangible assets.',
    'p09-h': 'Maritime and logistics',
    'p09-p': 'River transport, charter contracts, ship mortgage.',
    'p10-h': 'Insurance and reinsurance',
    'p10-p': 'Policy structuring, claims, SIS compliance.',
    'process-num': '06 — How We Work',
    'process-title': 'A <em>repeatable</em> method,<br/>tailored results.',
    'step1-h': 'Diagnosis',
    'step1-p': 'Regulatory mapping, risks and client objectives. We define the scope with the responsible partner.',
    'step2-h': 'Strategy',
    'step2-p': 'Legal structure design and work plan with deadlines, deliverables and decision matrix.',
    'step3-h': 'Documentation',
    'step3-p': 'Drafting, negotiation and review of contracts, legal opinions and regulatory submissions.',
    'step4-h': 'Implementation',
    'step4-p': 'Closing, post-closing support and continuous compliance monitoring.',
    'quote-text': 'Technical rigor,<br/><em>clear communication</em><br/>and pragmatic execution.',
    'quote-cite': 'Operating principle · Prisma Legal',
    'team-num': '07 — Team',
    'team-title': 'Partners <em>responsible</em><br/>for every mandate.',
    't1-role': 'Managing Partner',
    't1-bio': 'Leads the firm\'s corporate, banking and fintech practice. Advisor on cross-border transaction closings and complex regulatory structures.',
    't2-role': 'Partner',
    't2-bio': 'Specialist in litigation, arbitration and regulatory law. Experience in high-value commercial disputes and sanctioning procedures. Trademark Agent.',
    't3-role': 'Of Counsel',
    't3-bio': 'Expert in labor law and social security. Advisory to employers on labor audits and workforce restructurings.',
    't4-role': 'Of Counsel',
    't4-bio': 'Expert in insurance law. Advisory in the insurance market. Focus on labor law, social security and taxation. Advises employers on audits and workforce restructurings.',
    'silent-tag': 'Practice Areas',
    'silent-h': 'Maritime and Naval Practice',
    'silent-p': 'Specialized advisory in maritime law, including vessel flagging and all types of maritime contracts.',
    'contact-num': '08 — Contact',
    'contact-title': 'Let\'s talk about<br/>your <em>next</em> mandate.',
    'contact-sede-k': 'HQ',
    'contact-sede-v': 'Asunción, Paraguay<br/><small>Meetings by appointment</small>',
    'contact-web-k': 'Web',
    'contact-wa-k': 'WhatsApp',
    'contact-email-k': 'Email',
    'contact-cta': 'Contact via WhatsApp',
    'footer-nav-h': 'Navigation',
    'footer-nav-about': 'Who We Are',
    'footer-nav-services': 'What We Do',
    'footer-nav-practice': 'Practice Areas',
    'footer-nav-team': 'Team',
    'footer-contact-h': 'Contact',
    'footer-social-h': 'Follow Us',
    'footer-copy': '© {year} Prisma Legal. All rights reserved.',
    'footer-dev': 'Developed by',
    'form-nombre-l': 'Name',
    'form-empresa-l': 'Company / Organization',
    'form-email-l': 'Email',
    'form-tel-l': 'Phone',
    'form-asunto-l': 'Subject',
    'form-mensaje-l': 'Message',
    'form-submit': 'Send inquiry',
    'form-success': 'Your message was sent. We will reply shortly.',
  },

  pt: {
    'nav-about': 'Quem Somos',
    'nav-services': 'O Que Fazemos',
    'nav-practice': 'Áreas',
    'nav-team': 'Equipe',
    'nav-contact': 'Contato',
    'nav-cta': 'Agendar Consulta',
    'cta-wa': 'WhatsApp',
    'hero-title': 'Clareza jurídica<br/>para <em>decisões</em><br/>de alto impacto.',
    'hero-lede': 'Escritório de advocacia boutique, senior-led, com sede em Assunção. Assessoramos diretorias e equipes executivas em assuntos corporativos, financeiros e trabalhistas, com foco regulatório e transacional. Convertemos complexidade jurídica em decisões claras e executáveis.',
    'hero-btn-primary': 'Contato via WhatsApp',
    'hero-btn-primary-short': 'WhatsApp',
    'hero-btn-ghost': 'Áreas de Prática',
    'hero-btn-ghost-short': 'Áreas',
    'hero-meta-sede-k': 'Sede',
    'hero-meta-foco-k': 'Foco',
    'hero-meta-foco-v': 'Corporativo · Financeiro · Civil • Trabalhista • Penal • Marcário • Mercantil • Litígios',
    'hero-meta-modelo-k': 'Modelo',
    'hero-meta-modelo-v': 'Atenção sênior dedicada',
    'hero-meta-idiomas-k': 'Idiomas',
    'about-num': '01 — Quem Somos',
    'about-title': 'Um escritório boutique<br/>construído sobre <em>critério</em>.',
    'about-col1-lang': 'Quem Somos',
    'about-col1-lead': 'Prisma Legal é um escritório de advocacia boutique com sede em Assunção, focado em assessoria corporativa e transacional, direito bancário e financeiro, regulação, fintech e meios de pagamento, direito civil, marcário, marítimo e penal.',
    'about-col1-p': 'Acompanhamos clientes locais e internacionais em operações complexas onde a combinação de critério regulatório e execução transacional define o resultado. Cada mandato é liderado por um sócio do escritório, sem intermediação nem curva de aprendizado.',
    'about-col2-lang': 'Princípios',
    'about-p1': ' Atenção sênior dedicada em cada mandato.',
    'about-p2': ' Leitura profunda do marco regulatório aplicável.',
    'about-p3': ' Documentação contratual rigorosa e rastreável.',
    'about-p4': ' Comunicação clara com foco na decisão do cliente.',
    'about-stat1-l': 'Áreas de prática',
    'about-stat2-l': 'Atenção sênior',
    'about-stat3-l': 'Mandatos bilíngues',
    'about-stat4-l': 'Sede em Assunção',
    'diff-num': '02 — Diferenciais',
    'diff-title': 'Por que os clientes <em>nos escolhem</em>.',
    'diff1-title': 'Foco Regulatório',
    'diff1-text': 'Leitura profunda de marcos setoriais — banco, fintech, seguros, mercado de valores — traduzida em estruturas que resistem ao escrutínio.',
    'diff2-title': 'Execução Transacional',
    'diff2-text': 'Negociação, documentação e fechamento de operações complexas com disciplina de prazos, clareza contratual e rastreabilidade total.',
    'diff3-title': 'Atenção Sênior',
    'diff3-text': 'Cada mandato é liderado por um sócio do escritório. Sem intermediação, sem curva de aprendizado, sem perda de nuance na comunicação.',
    'services-num': '03 — O Que Fazemos',
    'services-title': 'Serviços <em>técnicos</em>,<br/>resultados pragmáticos.',
    'service1-h': 'Estruturação e negociação de contratos',
    'service1-p': 'Arquitetura contratual para operações locais e cross-border.',
    'service2-h': 'Assessoria fintech e pagamentos',
    'service2-p': 'Licenciamento, modelos de negócio, esquemas de meios de pagamento.',
    'service3-h': 'Governança corporativa e M&amp;A',
    'service3-p': 'Fusões, aquisições, reorganizações e due diligence.',
    'service4-h': 'Direito marítimo e naval',
    'service4-p': 'Fretamentos, registro de embarcações, hipoteca naval, transporte fluvial.',
    'service5-h': 'Conformidade regulatória',
    'service5-p': 'Programas de PLD/FT, políticas internas, auditorias regulatórias.',
    'service6-h': 'Seguros e resseguros',
    'service6-p': 'Estruturação de produtos, sinistros complexos, regulação SIS.',
    'service7-h': 'Litígios civis e comerciais',
    'service7-p': 'Estratégia processual em disputas de alto valor e arbitragem.',
    'service8-h': 'Propriedade intelectual',
    'service8-p': 'Marcas, patentes, segredos comerciais e litígios de PI.',
    'sectors-num': '04 — Setores',
    'sectors-title': 'Indústrias que <em>servimos</em>.',
    'sectors-intro': 'Trabalhamos em assuntos onde a precisão jurídica, o critério regulatório e a velocidade de execução fazem a diferença.',
    'sector1': 'Fintech',
    'sector2': 'Seguros',
    'sector3': 'Serviços financeiros',
    'sector4': 'Comércio e tecnologia',
    'sector5': 'Mercado de valores',
    'sector6': 'Marítimo e logística',
    'sector7': 'Trabalho e previdência social',
    'sector8': 'Direito Civil',
    'sector9': 'Direito Penal',
    'sector10': 'Direito Marcário',
    'practice-num': '05 — Áreas de Prática',
    'practice-title': 'Dez áreas. <em>Um único</em> padrão.',
    'p01-h': 'Direito do Trabalho e Previdência Social',
    'p01-p': 'Relações individuais e coletivas, fiscalizações do MTESS, previdência social.',
    'p02-h': 'Corporativo, civil e comercial',
    'p02-p': 'Contratos, sociedades, governança corporativa, sucessões, divórcio, recuperação de carteiras.',
    'p03-h': 'Regulatório e administrativo',
    'p03-p': 'Relação com reguladores, procedimentos sancionatórios.',
    'p04-h': 'Bancário e financeiro',
    'p04-p': 'Financiamentos sindicados, garantias, produtos bancários, regulação BCP.',
    'p05-h': 'Fintech e meios de pagamento',
    'p05-p': 'Licenças EMPE, carteiras digitais, adquirência, criptoativos.',
    'p06-h': 'Litígios e arbitragem',
    'p06-p': 'Disputas civis, comerciais e arbitragem doméstica e internacional.',
    'p07-h': 'Tributário e aduaneiro',
    'p07-p': 'Planejamento fiscal, contingências, recursos administrativos.',
    'p08-h': 'Propriedade intelectual',
    'p08-p': 'Registro, defesa e licenciamento de ativos intangíveis.',
    'p09-h': 'Marítimo e logística',
    'p09-p': 'Transporte fluvial, contratos de fretamento, hipoteca naval.',
    'p10-h': 'Seguros e resseguros',
    'p10-p': 'Estruturação de apólices, sinistros, conformidade SIS.',
    'process-num': '06 — Como Trabalhamos',
    'process-title': 'Um método <em>repetível</em>,<br/>resultados sob medida.',
    'step1-h': 'Diagnóstico',
    'step1-p': 'Mapeamento regulatório, riscos e objetivos do cliente. Definimos o escopo com o sócio responsável.',
    'step2-h': 'Estratégia',
    'step2-p': 'Design da estrutura jurídica e plano de trabalho com prazos, entregáveis e matriz de decisões.',
    'step3-h': 'Documentação',
    'step3-p': 'Redação, negociação e revisão de contratos, pareceres legais e apresentações regulatórias.',
    'step4-h': 'Implementação',
    'step4-p': 'Fechamento, acompanhamento pós-fechamento e monitoramento de conformidade contínuo.',
    'quote-text': 'Rigor técnico,<br/><em>comunicação clara</em><br/>e execução pragmática.',
    'quote-cite': 'Princípio operativo · Prisma Legal',
    'team-num': '07 — Equipe',
    'team-title': 'Sócios <em>responsáveis</em><br/>por cada mandato.',
    't1-role': 'Managing Partner',
    't1-bio': 'Lidera a prática corporativa, bancária e de fintech do escritório. Assessor em fechamentos de operações cross-border e estruturas regulatórias complexas.',
    't2-role': 'Partner',
    't2-bio': 'Especialista em litígios, arbitragem e direito regulatório. Experiência em disputas comerciais de alto valor e procedimentos sancionatórios. Agente de Marcas.',
    't3-role': 'Of Counsel',
    't3-bio': 'Especialista em direito do trabalho e seguridade social. Assessoria a empregadores em fiscalizações e reestruturações de pessoal.',
    't4-role': 'Of Counsel',
    't4-bio': 'Especialista em direito de seguros. Assessoria no mercado de seguros. Foco em direito do trabalho, previdência social e tributário. Assessora empregadores em fiscalizações e reestruturações de pessoal.',
    'silent-tag': 'Áreas de prática',
    'silent-h': 'Prática Marítima e Naval',
    'silent-p': 'Assessoria especializada em direito marítimo, incluindo arvoragem de embarcações e contratos marítimos de todo tipo.',
    'contact-num': '08 — Contato',
    'contact-title': 'Conversemos sobre<br/>seu <em>próximo</em> mandato.',
    'contact-sede-k': 'Sede',
    'contact-sede-v': 'Assunção, Paraguai<br/><small>Reuniões com hora marcada</small>',
    'contact-web-k': 'Web',
    'contact-wa-k': 'WhatsApp',
    'contact-email-k': 'Email',
    'contact-cta': 'Contato via WhatsApp',
    'footer-nav-h': 'Navegação',
    'footer-nav-about': 'Quem Somos',
    'footer-nav-services': 'O Que Fazemos',
    'footer-nav-practice': 'Áreas de Prática',
    'footer-nav-team': 'Equipe',
    'footer-contact-h': 'Contato',
    'footer-social-h': 'Siga-nos',
    'footer-copy': '© {year} Prisma Legal. Todos os direitos reservados.',
    'footer-dev': 'Desenvolvido por',
    'form-nombre-l': 'Nome',
    'form-empresa-l': 'Empresa / Organização',
    'form-email-l': 'Email',
    'form-tel-l': 'Telefone',
    'form-asunto-l': 'Assunto',
    'form-mensaje-l': 'Mensagem',
    'form-submit': 'Enviar consulta',
    'form-success': 'Sua mensagem foi enviada. Responderemos em breve.',
  },
};

// ============================================================
//  LANGUAGE SYSTEM
// ============================================================
let currentLang = 'es';

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  const year = new Date().getFullYear();

  // Update all lang-switch instances (nav + offcanvas)
  document.querySelectorAll('.lang-switch').forEach((sw) => {
    const btn = sw.querySelector(`[data-lang="${lang}"]`);
    if (!btn) return;
    sw.style.setProperty('--lang-idx', btn.dataset.idx || '0');
    sw.querySelectorAll('.lang-switch__opt').forEach((o) => {
      o.classList.remove('is-active');
      o.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');
  });

  // Update mobile language dropdown button label + active option
  const langCurrentLabel = document.getElementById('langCurrentLabel');
  if (langCurrentLabel) langCurrentLabel.textContent = lang.toUpperCase();
  document.querySelectorAll('.nav__lang-opt').forEach((o) => {
    o.classList.toggle('is-active', o.dataset.lang === lang);
  });

  // Translate all marked elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = translations[lang][el.dataset.i18n];
    if (val !== undefined) {
      el.innerHTML = val.replace('{year}', year);
    }
  });

  try { localStorage.setItem('prisma-lang', lang); } catch (_) {}
}

// Attach lang-switch click listeners (covers both nav + offcanvas instances)
document.querySelectorAll('.lang-switch__opt').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Init language
(function initLang() {
  let lang = 'es';
  try { lang = localStorage.getItem('prisma-lang') || lang; } catch (_) {}
  if (!translations[lang]) lang = 'es';
  setLang(lang);
})();

// ============================================================
//  NAVBAR SCROLL STATE
// ============================================================
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ============================================================
//  SCROLL REVEAL
// ============================================================
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// ============================================================
//  MOBILE LANGUAGE DROPDOWN
// ============================================================
const langDropdownBtn = document.getElementById('langDropdownBtn');
const langDropdown    = document.getElementById('langDropdown');

function closeLangDropdown() {
  if (!langDropdown) return;
  langDropdown.classList.remove('is-open');
  langDropdown.setAttribute('aria-hidden', 'true');
  langDropdownBtn.setAttribute('aria-expanded', 'false');
}

if (langDropdownBtn && langDropdown) {
  langDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const opening = !langDropdown.classList.contains('is-open');
    if (opening) {
      langDropdown.classList.add('is-open');
      langDropdown.setAttribute('aria-hidden', 'false');
      langDropdownBtn.setAttribute('aria-expanded', 'true');
    } else {
      closeLangDropdown();
    }
  });

  langDropdown.querySelectorAll('.nav__lang-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      closeLangDropdown();
    });
  });

  document.addEventListener('click', (e) => {
    if (!langDropdownBtn.contains(e.target) && !langDropdown.contains(e.target)) {
      closeLangDropdown();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLangDropdown();
  });
}

// ============================================================
//  OFFCANVAS MOBILE MENU
// ============================================================
const burger          = document.getElementById('burger');
const offcanvas       = document.getElementById('offcanvas');
const offcanvasOverlay = document.getElementById('offcanvasOverlay');
const offcanvasClose  = document.getElementById('offcanvasClose');

function openOffcanvas() {
  closeLangDropdown();
  offcanvas.classList.add('is-open');
  offcanvasOverlay.classList.add('is-open');
  offcanvas.setAttribute('aria-hidden', 'false');
  offcanvasOverlay.setAttribute('aria-hidden', 'false');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeOffcanvas() {
  offcanvas.classList.remove('is-open');
  offcanvasOverlay.classList.remove('is-open');
  offcanvas.setAttribute('aria-hidden', 'true');
  offcanvasOverlay.setAttribute('aria-hidden', 'true');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (burger) burger.addEventListener('click', openOffcanvas);
if (offcanvasClose) offcanvasClose.addEventListener('click', closeOffcanvas);
if (offcanvasOverlay) offcanvasOverlay.addEventListener('click', closeOffcanvas);

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeOffcanvas();
});

// ============================================================
//  SMOOTH ANCHOR SCROLL (with offset for fixed nav)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    closeOffcanvas();
    const top = target.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ============================================================
//  CONTACT FORM — mailto
// ============================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre   = contactForm.nombre.value.trim();
    const empresa  = contactForm.empresa.value.trim();
    const email    = contactForm.email.value.trim();
    const telefono = contactForm.telefono.value.trim();
    const asunto   = contactForm.asunto.value.trim();
    const mensaje  = contactForm.mensaje.value.trim();

    const body = [
      `Nombre: ${nombre}`,
      empresa  ? `Empresa: ${empresa}`   : '',
      `Email: ${email}`,
      telefono ? `Teléfono: ${telefono}` : '',
      '',
      mensaje,
    ].filter(Boolean).join('\n');

    window.location.href =
      `mailto:info@prismalegal.com.py` +
      `?subject=${encodeURIComponent(asunto || 'Consulta — Prisma Legal')}` +
      `&body=${encodeURIComponent(body)}`;

    const success = document.getElementById('cfSuccess');
    if (success) { success.style.display = 'block'; }
    contactForm.reset();
  });
}
