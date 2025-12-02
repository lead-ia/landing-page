import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "pt";

export enum TranslationKeys {
  // Header
  header_cta = "header_cta",
  header_lang_placeholder = "header_lang_placeholder",
  header_lang_en = "header_lang_en",
  header_lang_pt = "header_lang_pt",

  // Hero
  hero_badge = "hero_badge",
  hero_title_1 = "hero_title_1",
  hero_title_2 = "hero_title_2",
  hero_description = "hero_description",
  hero_cta_primary = "hero_cta_primary",
  hero_cta_secondary = "hero_cta_secondary",
  hero_feature_1_title = "hero_feature_1_title",
  hero_feature_1_desc = "hero_feature_1_desc",
  hero_feature_2_title = "hero_feature_2_title",
  hero_feature_2_desc = "hero_feature_2_desc",
  hero_feature_3_title = "hero_feature_3_title",
  hero_feature_3_desc = "hero_feature_3_desc",
  hero_feature_4_title = "hero_feature_4_title",
  hero_feature_4_desc = "hero_feature_4_desc",

  // Problem
  problem_badge = "problem_badge",
  problem_title_1 = "problem_title_1",
  problem_title_2 = "problem_title_2",
  problem_description = "problem_description",
  problem_card_title = "problem_card_title",
  problem_card_desc = "problem_card_desc",
  problem_point_1_title = "problem_point_1_title",
  problem_point_1_desc = "problem_point_1_desc",
  problem_point_2_title = "problem_point_2_title",
  problem_point_2_desc = "problem_point_2_desc",
  problem_source = "problem_source",

  // Solution
  solution_badge = "solution_badge",
  solution_title_1 = "solution_title_1",
  solution_title_2 = "solution_title_2",
  solution_description = "solution_description",
  solution_vs_title = "solution_vs_title",
  solution_traditional_title = "solution_traditional_title",
  solution_traditional_desc = "solution_traditional_desc",
  solution_recommended = "solution_recommended",
  solution_leadia_title = "solution_leadia_title",
  solution_leadia_desc = "solution_leadia_desc",
  solution_trad_1 = "solution_trad_1",
  solution_trad_2 = "solution_trad_2",
  solution_trad_3 = "solution_trad_3",
  solution_trad_4 = "solution_trad_4",
  solution_trad_5 = "solution_trad_5",
  solution_leadia_1 = "solution_leadia_1",
  solution_leadia_2 = "solution_leadia_2",
  solution_leadia_3 = "solution_leadia_3",
  solution_leadia_4 = "solution_leadia_4",
  solution_leadia_5 = "solution_leadia_5",
  solution_leadia_6 = "solution_leadia_6",

  // Scope
  scope_badge = "scope_badge",
  scope_title_1 = "scope_title_1",
  scope_title_2 = "scope_title_2",
  scope_description = "scope_description",
  scope_does_title = "scope_does_title",
  scope_does_desc = "scope_does_desc",
  scope_does_1 = "scope_does_1",
  scope_does_2 = "scope_does_2",
  scope_does_customizable = "scope_does_customizable",
  scope_does_3 = "scope_does_3",
  scope_does_4 = "scope_does_4",
  scope_does_5 = "scope_does_5",
  scope_does_6 = "scope_does_6",
  scope_does_7 = "scope_does_7",
  scope_does_8 = "scope_does_8",
  scope_limits_title = "scope_limits_title",
  scope_limits_desc = "scope_limits_desc",
  scope_limits_safe = "scope_limits_safe",
  scope_limits_safe_desc = "scope_limits_safe_desc",
  scope_limit_1 = "scope_limit_1",
  scope_limit_2 = "scope_limit_2",
  scope_limit_3 = "scope_limit_3",
  scope_limit_4 = "scope_limit_4",

  // How It Works
  how_badge = "how_badge",
  how_title = "how_title",
  how_desc = "how_desc",
  how_step_1_title = "how_step_1_title",
  how_step_1_desc = "how_step_1_desc",
  how_step_2_title = "how_step_2_title",
  how_step_2_desc = "how_step_2_desc",
  how_step_3_title = "how_step_3_title",
  how_step_3_desc = "how_step_3_desc",

  // Testimonials
  testimonials_badge = "testimonials_badge",
  testimonials_title = "testimonials_title",
  testimonials_desc = "testimonials_desc",
  testimonial_1_text = "testimonial_1_text",
  testimonial_1_author = "testimonial_1_author",
  testimonial_1_role = "testimonial_1_role",
  testimonial_2_text = "testimonial_2_text",
  testimonial_2_author = "testimonial_2_author",
  testimonial_2_role = "testimonial_2_role",
  testimonial_3_text = "testimonial_3_text",
  testimonial_3_author = "testimonial_3_author",
  testimonial_3_role = "testimonial_3_role",

  // Offer
  offer_badge = "offer_badge",
  offer_title = "offer_title",
  offer_desc = "offer_desc",
  offer_limited = "offer_limited",
  offer_limited_desc = "offer_limited_desc",
  offer_list_title = "offer_list_title",
  offer_benefit_1 = "offer_benefit_1",
  offer_benefit_2 = "offer_benefit_2",
  offer_benefit_3 = "offer_benefit_3",
  offer_benefit_4 = "offer_benefit_4",

  // CTA
  cta_title = "cta_title",
  cta_desc = "cta_desc",
  cta_button = "cta_button",
  cta_disclaimer = "cta_disclaimer",

  // Footer
  footer_desc = "footer_desc",
  footer_product = "footer_product",
  footer_features = "footer_features",
  footer_pricing = "footer_pricing",
  footer_security = "footer_security",
  footer_company = "footer_company",
  footer_about = "footer_about",
  footer_contact = "footer_contact",
  footer_rights = "footer_rights",
  footer_privacy = "footer_privacy",
  footer_terms = "footer_terms",
}

const translations: Record<Language, Record<TranslationKeys, string>> = {
  en: {
    // Header
    [TranslationKeys.header_cta]: "Get Started",
    [TranslationKeys.header_lang_placeholder]: "Lang",
    [TranslationKeys.header_lang_en]: "🇺🇸 EN",
    [TranslationKeys.header_lang_pt]: "🇧🇷 PT",

    // Hero
    [TranslationKeys.hero_badge]: "Your Smart Secretary",
    [TranslationKeys.hero_title_1]: "The Human-Like Secretary",
    [TranslationKeys.hero_title_2]: "For Modern Doctors",
    [TranslationKeys.hero_description]:
      "Automate appointments, welcome patients, and organize your office 24/7. LeadIA replies within seconds, trained specifically for your specialty.",
    [TranslationKeys.hero_cta_primary]: "Schedule Demo",
    [TranslationKeys.hero_cta_secondary]: "Learn More",
    [TranslationKeys.hero_feature_1_title]: "Instant Response",
    [TranslationKeys.hero_feature_1_desc]:
      "Patient conversion drops by 80% after 5 minutes. LeadIA responds instantly, ensuring you never lose a patient to delays.",
    [TranslationKeys.hero_feature_2_title]: "Google Calendar",
    [TranslationKeys.hero_feature_2_desc]:
      "Seamlessly syncs with your Google Calendar. LeadIA manages your schedule without you ever needing to check availability.",
    [TranslationKeys.hero_feature_3_title]: "Specialty Trained",
    [TranslationKeys.hero_feature_3_desc]:
      "Understands your specific medical field and vocabulary.",
    [TranslationKeys.hero_feature_4_title]: "WhatsApp Native",
    [TranslationKeys.hero_feature_4_desc]:
      "Works where your patients are. No new apps needed.",

    // Problem
    [TranslationKeys.problem_badge]: "The Problem",
    [TranslationKeys.problem_title_1]: "You're Losing Patients",
    [TranslationKeys.problem_title_2]: "While You Sleep",
    [TranslationKeys.problem_description]:
      "Did you know that more than 50% of patients try to book appointments outside of commercial hours?",
    [TranslationKeys.problem_card_title]: "Missed Opportunity",
    [TranslationKeys.problem_card_desc]:
      '"I tried to book but got no reply. Found another doctor."',
    [TranslationKeys.problem_point_1_title]: "The 10-Minute Rule",
    [TranslationKeys.problem_point_1_desc]:
      "If you take more than 10 minutes to reply, patients start looking for another doctor. Speed is critical.",
    [TranslationKeys.problem_point_2_title]: "Overwhelmed Staff",
    [TranslationKeys.problem_point_2_desc]:
      "Your current staff can't be available 24/7 without significant cost and burnout.",
    [TranslationKeys.problem_source]: "Source: Doctoralia, Salesforce Health",

    // Solution
    [TranslationKeys.solution_badge]: "The Solution",
    [TranslationKeys.solution_title_1]: "LeadIA Takes Care of Patients",
    [TranslationKeys.solution_title_2]: "While You Focus on Care",
    [TranslationKeys.solution_description]:
      "LeadIA does everything a secretary should do, but faster, cheaper, and without ever taking a break.",
    [TranslationKeys.solution_vs_title]: "Why LeadIA Wins",
    [TranslationKeys.solution_traditional_title]: "Traditional Secretary",
    [TranslationKeys.solution_traditional_desc]: "Human limitations",
    [TranslationKeys.solution_recommended]: "RECOMMENDED",
    [TranslationKeys.solution_leadia_title]: "LeadIA Smart Secretary",
    [TranslationKeys.solution_leadia_desc]: "AI-powered perfection",
    [TranslationKeys.solution_trad_1]: "Available 8 hours/day",
    [TranslationKeys.solution_trad_2]: "Replies in minutes/hours",
    [TranslationKeys.solution_trad_3]: "Can miss calls/messages",
    [TranslationKeys.solution_trad_4]: "High monthly salary",
    [TranslationKeys.solution_trad_5]: "Does not follow up well",
    [TranslationKeys.solution_leadia_1]: "Available 24/7",
    [TranslationKeys.solution_leadia_2]: "Replies in < 5 seconds",
    [TranslationKeys.solution_leadia_3]: "Never misses a patient",
    [TranslationKeys.solution_leadia_4]: "Follows your POP & tone",
    [TranslationKeys.solution_leadia_5]: "Fraction of the cost of a secretary",
    [TranslationKeys.solution_leadia_6]: "WhatsApp Integrated",

    // Scope
    [TranslationKeys.scope_badge]: "Scope of Service",
    [TranslationKeys.scope_title_1]: "Complete Administrative Support",
    [TranslationKeys.scope_title_2]: "With Strict Safety Boundaries",
    [TranslationKeys.scope_description]:
      "LeadIA handles all secretary duties with empathy and efficiency, while strictly adhering to non-clinical boundaries.",
    [TranslationKeys.scope_does_title]: "What LeadIA Does",
    [TranslationKeys.scope_does_desc]:
      "Comprehensive administrative automation",
    [TranslationKeys.scope_does_1]: "Humanized & Empathetic Triage",
    [TranslationKeys.scope_does_2]: "Context-Aware Conversations",
    [TranslationKeys.scope_does_customizable]: "Customizable and trainable",
    [TranslationKeys.scope_does_3]: "Structured Initial Screening",
    [TranslationKeys.scope_does_4]: "In-person & Online Scheduling",
    [TranslationKeys.scope_does_5]: "Automated Confirmations",
    [TranslationKeys.scope_does_6]: "Appointment Reminders",
    [TranslationKeys.scope_does_7]: "Post-Appointment Follow-up",
    [TranslationKeys.scope_does_8]: "Google Calendar Integration",
    [TranslationKeys.scope_limits_title]: "Safety Boundaries",
    [TranslationKeys.scope_limits_desc]: "LeadIA never performs clinical tasks",
    [TranslationKeys.scope_limits_safe]: "100% Safe & Administrative",
    [TranslationKeys.scope_limits_safe_desc]:
      "LeadIA is restricted to secretary behaviors only. It does not replace medical judgment.",
    [TranslationKeys.scope_limit_1]: "Medical Diagnostics",
    [TranslationKeys.scope_limit_2]: "Prescription Recommendations",
    [TranslationKeys.scope_limit_3]: "Exam Analysis",
    [TranslationKeys.scope_limit_4]: "Clinical Opinions",

    // How It Works
    [TranslationKeys.how_badge]: "How It Works",
    [TranslationKeys.how_title]: "Simple, Seamless Integration",
    [TranslationKeys.how_desc]:
      "Get started without disrupting your current workflow.",
    [TranslationKeys.how_step_1_title]: "1. Training",
    [TranslationKeys.how_step_1_desc]:
      "We train LeadIA with your POP, agenda, and your unique communication style.",
    [TranslationKeys.how_step_2_title]: "2. Testing",
    [TranslationKeys.how_step_2_desc]:
      "You test LeadIA for 14 days with your own patients to ensure it meets your standards.",
    [TranslationKeys.how_step_3_title]: "3. Activation",
    [TranslationKeys.how_step_3_desc]:
      "We activate it full-time. No installation, no complex configuration, no system change.",

    // Testimonials
    [TranslationKeys.testimonials_badge]: "Testimonials",
    [TranslationKeys.testimonials_title]: "Trusted by Specialists",
    [TranslationKeys.testimonials_desc]:
      "See what your colleagues are saying about LeadIA.",
    [TranslationKeys.testimonial_1_text]:
      "LeadIA has completely transformed my practice. My patients love the instant responses, and I love that I don't have to worry about missed appointments anymore. It captures the nuance of my instructions perfectly.",
    [TranslationKeys.testimonial_1_author]: "Dr. Sarah Chen",
    [TranslationKeys.testimonial_1_role]: "Endocrinologist",
    [TranslationKeys.testimonial_2_text]:
      "Empathy is crucial in my field. I was skeptical at first, but LeadIA's tone is incredibly human and supportive. It handles the initial triage with such care that my patients feel heard immediately.",
    [TranslationKeys.testimonial_2_author]: "Dr. James Wilson",
    [TranslationKeys.testimonial_2_role]: "Psychiatrist",
    [TranslationKeys.testimonial_3_text]:
      "The efficiency is unmatched. It handles scheduling, reminders, and basic questions so my staff can focus on in-clinic patient care. The Google Calendar integration is flawless.",
    [TranslationKeys.testimonial_3_author]: "Dr. Maria Rodriguez",
    [TranslationKeys.testimonial_3_role]: "Cardiologist",

    // Offer
    [TranslationKeys.offer_badge]: "Exclusive Pre-launch Offer",
    [TranslationKeys.offer_title]: "Join the Waiting List",
    [TranslationKeys.offer_desc]:
      "Secure your spot today and unlock exclusive benefits for early adopters.",
    [TranslationKeys.offer_limited]: "Limited Seats:",
    [TranslationKeys.offer_limited_desc]:
      "We have limited capacity for this pre-launch phase.",
    [TranslationKeys.offer_list_title]: "What you'll get:",
    [TranslationKeys.offer_benefit_1]: "Prior access to LeadIA",
    [TranslationKeys.offer_benefit_2]: "30% OFF in the first 3 months",
    [TranslationKeys.offer_benefit_3]: "Premium and personalized onboarding",
    [TranslationKeys.offer_benefit_4]: "Priority support for the next 90 days",

    // CTA
    [TranslationKeys.cta_title]:
      "Your patients deserve a better experience, and you deserve your time back.",
    [TranslationKeys.cta_desc]:
      "Join now our waiting list and have access to the prelaunching.",
    [TranslationKeys.cta_button]: "Join Waiting List",
    [TranslationKeys.cta_disclaimer]:
      "No credit card required for demo • Cancel anytime",

    // Footer
    [TranslationKeys.footer_desc]:
      "The smart, humanized AI secretary designed for modern healthcare professionals.",
    [TranslationKeys.footer_product]: "Product",
    [TranslationKeys.footer_features]: "Features",
    [TranslationKeys.footer_pricing]: "Pricing",
    [TranslationKeys.footer_security]: "Security",
    [TranslationKeys.footer_company]: "Company",
    [TranslationKeys.footer_about]: "About Us",
    [TranslationKeys.footer_contact]: "Contact",
    [TranslationKeys.footer_rights]: "All rights reserved.",
    [TranslationKeys.footer_privacy]: "Privacy",
    [TranslationKeys.footer_terms]: "Terms",
  },
  pt: {
    // Header
    [TranslationKeys.header_cta]: "Começar Agora",
    [TranslationKeys.header_lang_placeholder]: "Lang",
    [TranslationKeys.header_lang_en]: "🇺🇸 EN",
    [TranslationKeys.header_lang_pt]: "🇧🇷 PT",

    // Hero
    [TranslationKeys.hero_badge]: "Sua Secretária Inteligente",
    [TranslationKeys.hero_title_1]: "A Secretária Humanizada",
    [TranslationKeys.hero_title_2]:
      "Para Médicos que estão cansados de deixar dinheiro na mesa",
    [TranslationKeys.hero_description]:
      "Automatize agendamentos, acolha pacientes e organize seu consultório 24/7. LeadIA responde em segundos, treinada especificamente para sua especialidade.",
    [TranslationKeys.hero_cta_primary]: "Agendar Demo",
    [TranslationKeys.hero_cta_secondary]: "Saiba Mais",
    [TranslationKeys.hero_feature_1_title]: "Responde Instantaneamente",
    [TranslationKeys.hero_feature_1_desc]:
      "Pacientes recebem respostas em segundos, não horas.",
    [TranslationKeys.hero_feature_2_title]: "Google Agenda",
    [TranslationKeys.hero_feature_2_desc]:
      "Integração perfeita com sua agenda existente.",
    [TranslationKeys.hero_feature_3_title]: "Treinável na sua Especialidade",
    [TranslationKeys.hero_feature_3_desc]:
      "Entende seu campo médico e vocabulário específico.",
    [TranslationKeys.hero_feature_4_title]: "Nativa no WhatsApp",
    [TranslationKeys.hero_feature_4_desc]:
      "Funciona onde seus pacientes estão. Sem novos apps.",

    // Problem
    [TranslationKeys.problem_badge]: "O Problema",
    [TranslationKeys.problem_title_1]: "Você Está Perdendo Pacientes",
    [TranslationKeys.problem_title_2]: "Enquanto Dorme",
    [TranslationKeys.problem_description]:
      "Você sabia que mais de 50% dos pacientes tentam agendar consultas fora do horário comercial?",
    [TranslationKeys.problem_card_title]: "Oportunidade Perdida",
    [TranslationKeys.problem_card_desc]:
      '"Tentei marcar mas demorei a obter resposta. Achei outro médico."',
    [TranslationKeys.problem_point_1_title]: "A Regra dos 10 Minutos",
    [TranslationKeys.problem_point_1_desc]:
      "Se você demora mais de 10 minutos para responder, pacientes procuram outro médico. Rapidez é crítica.",
    [TranslationKeys.problem_point_2_title]: "Equipe Sobrecarregada",
    [TranslationKeys.problem_point_2_desc]:
      "Sua equipe atual não pode estar disponível 24/7 sem custo significativo e burnout.",
    [TranslationKeys.problem_source]: "Fonte: Doctoralia, Salesforce Health",

    // Solution
    [TranslationKeys.solution_badge]: "A Solução",
    [TranslationKeys.solution_title_1]: "LeadIA cuida da sua agenda",
    [TranslationKeys.solution_title_2]:
      "enquanto você foca no cuidado dos seus pacientes",
    [TranslationKeys.solution_description]:
      "LeadIA faz tudo que uma secretária deve fazer, mas mais rápido, mais barato e sem nunca fazer pausa.",
    [TranslationKeys.solution_vs_title]: "Por que LeadIA Vence",
    [TranslationKeys.solution_traditional_title]: "Secretária Tradicional",
    [TranslationKeys.solution_traditional_desc]: "Limitações humanas",
    [TranslationKeys.solution_recommended]: "RECOMENDADO",
    [TranslationKeys.solution_leadia_title]: "LeadIA Secretária Inteligente",
    [TranslationKeys.solution_leadia_desc]: "Perfeição com IA",
    [TranslationKeys.solution_trad_1]: "Disponível 8 horas/dia",
    [TranslationKeys.solution_trad_2]: "Responde em minutos/horas",
    [TranslationKeys.solution_trad_3]: "Pode perder chamadas/mensagens",
    [TranslationKeys.solution_trad_4]: "Salário mensal alto",
    [TranslationKeys.solution_trad_5]: "Não faz um bom follow up",
    [TranslationKeys.solution_leadia_1]: "Disponível 24 horas",
    [TranslationKeys.solution_leadia_2]: "Responde em < 5 segundos",
    [TranslationKeys.solution_leadia_3]: "Nunca perde um paciente",
    [TranslationKeys.solution_leadia_4]: "Segue seu POP e tom",
    [TranslationKeys.solution_leadia_5]: "Fração do custo de uma secretária",
    [TranslationKeys.solution_leadia_6]: "Integrado ao WhatsApp",

    // Scope
    [TranslationKeys.scope_badge]: "Escopo do Serviço",
    [TranslationKeys.scope_title_1]: "Suporte Administrativo Completo",
    [TranslationKeys.scope_title_2]: "Com Limites de Segurança Estritos",
    [TranslationKeys.scope_description]:
      "LeadIA lida com todas as tarefas de secretária com empatia e eficiência, aderindo estritamente a limites não clínicos.",
    [TranslationKeys.scope_does_title]: "O que LeadIA Faz",
    [TranslationKeys.scope_does_desc]: "Automação administrativa abrangente",
    [TranslationKeys.scope_does_1]: "Triagem humanizada e empática",
    [TranslationKeys.scope_does_2]: "Conversas com contexto",
    [TranslationKeys.scope_does_customizable]: "Personalizável e treinável",
    [TranslationKeys.scope_does_3]: "Perguntas iniciais padronizadas",
    [TranslationKeys.scope_does_4]: "Agendamento presencial e online",
    [TranslationKeys.scope_does_5]: "Confirmações automatizadas",
    [TranslationKeys.scope_does_6]: "Lembretes de consulta",
    [TranslationKeys.scope_does_7]: "Follow-up pós-consulta",
    [TranslationKeys.scope_does_8]: "Integração com Google Agenda",
    [TranslationKeys.scope_limits_title]: "Limites de Segurança",
    [TranslationKeys.scope_limits_desc]:
      "LeadIA nunca realiza tarefas clínicas",
    [TranslationKeys.scope_limits_safe]: "100% seguro e administrativo",
    [TranslationKeys.scope_limits_safe_desc]:
      "LeadIA é restrita a comportamentos de secretária. Não substitui julgamento médico.",
    [TranslationKeys.scope_limit_1]: "Diagnósticos médicos",
    [TranslationKeys.scope_limit_2]: "Recomendações de receitas",
    [TranslationKeys.scope_limit_3]: "Análise de exames",
    [TranslationKeys.scope_limit_4]: "Opiniões clínicas",

    // How It Works
    [TranslationKeys.how_badge]: "Como Funciona",
    [TranslationKeys.how_title]: "Integração Simples e Perfeita",
    [TranslationKeys.how_desc]:
      "Comece sem interromper seu fluxo de trabalho atual.",
    [TranslationKeys.how_step_1_title]: "1. Treinamento",
    [TranslationKeys.how_step_1_desc]:
      "Treinamos a LeadIA com seu POP, agenda e seu estilo único de comunicação.",
    [TranslationKeys.how_step_2_title]: "2. Teste",
    [TranslationKeys.how_step_2_desc]:
      "Você testa a LeadIA por 14 dias com seus próprios pacientes para garantir que atenda seus padrões.",
    [TranslationKeys.how_step_3_title]: "3. Ativação",
    [TranslationKeys.how_step_3_desc]:
      "Ativamos em tempo integral. Sem instalação, sem configuração complexa, sem mudança de sistema.",

    // Testimonials
    [TranslationKeys.testimonials_badge]: "Depoimentos",
    [TranslationKeys.testimonials_title]: "Confiado por Especialistas",
    [TranslationKeys.testimonials_desc]:
      "Veja o que seus colegas estão dizendo sobre a LeadIA.",
    [TranslationKeys.testimonial_1_text]:
      "A LeadIA transformou completamente meu consultório. Meus pacientes adoram as respostas instantâneas, e eu adoro não ter que me preocupar com consultas perdidas. Ela captura a nuance das minhas instruções perfeitamente.",
    [TranslationKeys.testimonial_1_author]: "Dra. Sarah Chen",
    [TranslationKeys.testimonial_1_role]: "Endocrinologista",
    [TranslationKeys.testimonial_2_text]:
      "Empatia é crucial na minha área. Eu estava cético no início, mas o tom da LeadIA é incrivelmente humano e solidário. Ela lida com a triagem inicial com tanto cuidado que meus pacientes se sentem ouvidos imediatamente.",
    [TranslationKeys.testimonial_2_author]: "Dr. James Wilson",
    [TranslationKeys.testimonial_2_role]: "Psiquiatra",
    [TranslationKeys.testimonial_3_text]:
      "A eficiência é inigualável. Ela lida com agendamento, lembretes e perguntas básicas para que minha equipe possa focar no atendimento ao paciente na clínica. A integração com o Google Agenda é impecável.",
    [TranslationKeys.testimonial_3_author]: "Dra. Maria Rodriguez",
    [TranslationKeys.testimonial_3_role]: "Cardiologista",

    // Offer
    [TranslationKeys.offer_badge]: "Oferta Exclusiva de Pré-lançamento",
    [TranslationKeys.offer_title]: "Entre na Lista de Espera",
    [TranslationKeys.offer_desc]:
      "Garanta sua vaga hoje e desbloqueie benefícios exclusivos para os primeiros usuários.",
    [TranslationKeys.offer_limited]: "Vagas Limitadas:",
    [TranslationKeys.offer_limited_desc]:
      "Temos capacidade limitada para esta fase de pré-lançamento.",
    [TranslationKeys.offer_list_title]: "O que você ganha:",
    [TranslationKeys.offer_benefit_1]: "Acesso prioritário à LeadIA",
    [TranslationKeys.offer_benefit_2]: "30% OFF nos primeiros 3 meses",
    [TranslationKeys.offer_benefit_3]: "Onboarding premium e personalizado",
    [TranslationKeys.offer_benefit_4]:
      "Suporte prioritário pelos próximos 90 dias",

    // CTA
    [TranslationKeys.cta_title]:
      "Seus pacientes merecem uma experiência melhor, e você merece seu tempo de volta.",
    [TranslationKeys.cta_desc]:
      "Entre agora na nossa lista de espera e tenha acesso ao pré-lançamento.",
    [TranslationKeys.cta_button]: "Entrar na Lista de Espera",
    [TranslationKeys.cta_disclaimer]:
      "Sem cartão de crédito para demo • Cancele a qualquer momento",

    // Footer
    [TranslationKeys.footer_desc]:
      "A secretária com IA inteligente e humanizada, projetada para profissionais de saúde modernos.",
    [TranslationKeys.footer_product]: "Produto",
    [TranslationKeys.footer_features]: "Recursos",
    [TranslationKeys.footer_pricing]: "Preços",
    [TranslationKeys.footer_security]: "Segurança",
    [TranslationKeys.footer_company]: "Empresa",
    [TranslationKeys.footer_about]: "Sobre Nós",
    [TranslationKeys.footer_contact]: "Contato",
    [TranslationKeys.footer_rights]: "Todos os direitos reservados.",
    [TranslationKeys.footer_privacy]: "Privacidade",
    [TranslationKeys.footer_terms]: "Termos",
  },
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const t = (key: TranslationKeys): string => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setLanguage: setCurrentLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useCurrentLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useCurrentLanguage must be used within a LanguageProvider"
    );
  }
  return {
    currentLanguage: context.currentLanguage,
    setLanguage: context.setLanguage,
  };
}

export function useTranslations() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslations must be used within a LanguageProvider");
  }
  return {
    forKey: context.t,
  };
}
