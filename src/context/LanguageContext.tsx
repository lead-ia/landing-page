import {
  createContext,
  useContext,
  useEffect,
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

  // Target Audience
  target_badge = "target_badge",
  target_title = "target_title",
  target_title_custom = "target_title_custom",
  target_title_custom_gradient = "target_title_custom_gradient",
  target_desc_1 = "target_desc_1",
  target_desc_2 = "target_desc_2",
  target_intro = "target_intro",
  target_point_1_title = "target_point_1_title",
  target_point_1_desc = "target_point_1_desc",
  target_point_2_title = "target_point_2_title",
  target_point_2_desc = "target_point_2_desc",
  target_point_3_title = "target_point_3_title",
  target_point_3_desc = "target_point_3_desc",

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

  // Terms of Service
  terms_title = "terms_title",
  terms_intro = "terms_intro",
  terms_section_1_title = "terms_section_1_title",
  terms_section_1_content = "terms_section_1_content",
  terms_section_2_title = "terms_section_2_title",
  terms_section_2_content = "terms_section_2_content",
  terms_section_3_title = "terms_section_3_title",
  terms_section_3_content = "terms_section_3_content",
  terms_section_4_title = "terms_section_4_title",
  terms_section_4_content = "terms_section_4_content",
  terms_section_5_title = "terms_section_5_title",
  terms_section_5_content = "terms_section_5_content",

  // Privacy Policy
  privacy_title = "privacy_title",
  privacy_intro = "privacy_intro",
  privacy_section_1_title = "privacy_section_1_title",
  privacy_section_1_content = "privacy_section_1_content",
  privacy_section_2_title = "privacy_section_2_title",
  privacy_section_2_content = "privacy_section_2_content",
  privacy_section_3_title = "privacy_section_3_title",
  privacy_section_3_content = "privacy_section_3_content",
  privacy_section_4_title = "privacy_section_4_title",
  privacy_section_4_content = "privacy_section_4_content",

  // Contact Form
  contact_title = "contact_title",
  contact_description = "contact_description",
  contact_name_label = "contact_name_label",
  contact_name_placeholder = "contact_name_placeholder",
  contact_email_label = "contact_email_label",
  contact_email_placeholder = "contact_email_placeholder",
  contact_phone_label = "contact_phone_label",
  contact_phone_placeholder = "contact_phone_placeholder",
  contact_submit = "contact_submit",
  contact_error_specialty = "contact_error_specialty",
  contact_error_general = "contact_error_general",

  // Start Chat
  start_chat_message = "start_chat_message",
  start_chat_button = "start_chat_button",

  // Select Specialty
  specialty_label = "specialty_label",
  specialty_placeholder = "specialty_placeholder",
  specialty_other_label = "specialty_other_label",
  specialty_other_placeholder = "specialty_other_placeholder",
  specialty_anesthesiology = "specialty_anesthesiology",
  specialty_cardiology = "specialty_cardiology",
  specialty_dermatology = "specialty_dermatology",
  specialty_emergency = "specialty_emergency",
  specialty_family = "specialty_family",
  specialty_gastroenterology = "specialty_gastroenterology",
  specialty_internal = "specialty_internal",
  specialty_neurology = "specialty_neurology",
  specialty_obgyn = "specialty_obgyn",
  specialty_oncology = "specialty_oncology",
  specialty_orthopedic = "specialty_orthopedic",
  specialty_pediatrics = "specialty_pediatrics",
  specialty_psychiatry = "specialty_psychiatry",
  specialty_radiology = "specialty_radiology",
  specialty_surgery = "specialty_surgery",
  specialty_other = "specialty_other",
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
      "More than 50% of appointments are attempted outside of business hours.",
    [TranslationKeys.problem_card_title]: "Missed Opportunity",
    [TranslationKeys.problem_card_desc]:
      '"I tried to book but got no reply. Found another doctor."',
    [TranslationKeys.problem_point_1_title]: "The 10-Minute Rule",
    [TranslationKeys.problem_point_1_desc]:
      "If the response takes more than 10 minutes, 62% look for another doctor.",
    [TranslationKeys.problem_point_2_title]: "Revenue Potential",
    [TranslationKeys.problem_point_2_desc]:
      "Your schedule could yield 20%–40% more — just with agility.",
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
      "You test LeadIA for 7 days with your own patients to ensure it meets your standards.",
    [TranslationKeys.how_step_3_title]: "3. Activation",
    [TranslationKeys.how_step_3_desc]:
      "We activate it full-time. No installation, no complex configuration, no system change.",

    // Target Audience
    [TranslationKeys.target_badge]: "For Whom",
    [TranslationKeys.target_title]:
      "Made for practices that value excellence, time, and experience.",
    [TranslationKeys.target_title_custom]: "Made for practices that value",
    [TranslationKeys.target_title_custom_gradient]:
      "excellence, time, and experience.",
    [TranslationKeys.target_desc_1]:
      "If you serve patients who value quality, privacy, and organization —",
    [TranslationKeys.target_desc_2]: "LeadIA is for you.",
    [TranslationKeys.target_intro]:
      "LeadIA is the perfect solution if your patients:",
    [TranslationKeys.target_point_1_title]: "Value their time",
    [TranslationKeys.target_point_1_desc]:
      "They expect quick responses and efficient scheduling without waiting on hold.",
    [TranslationKeys.target_point_2_title]: "Appreciate Quality",
    [TranslationKeys.target_point_2_desc]:
      "They expect a seamless and high-quality service experience when scheduling appointments.",
    [TranslationKeys.target_point_3_title]: "Demand Privacy",
    [TranslationKeys.target_point_3_desc]:
      "They appreciate professional, secure, and discreet communication handling.",

    // Testimonials
    [TranslationKeys.testimonials_badge]: "Testimonials",
    [TranslationKeys.testimonials_title]: "Trusted by Specialists",
    [TranslationKeys.testimonials_desc]:
      "See what your colleagues are saying about LeadIA.",
    [TranslationKeys.testimonial_1_text]:
      "I never lost a patient due to a delayed response again. LeadIA completely changed the flow of my office.",
    [TranslationKeys.testimonial_1_author]: "Dr. Geórgia Dorigon",
    [TranslationKeys.testimonial_1_role]: "Endocrinologist — Beta User",
    [TranslationKeys.testimonial_2_text]:
      "My returns were getting lost for months. With LeadIA, I increased my number of appointments by 67%. It's like having a perfect secretary — 24 hours.",
    [TranslationKeys.testimonial_2_author]: "Dr. Carol Coutinho",
    [TranslationKeys.testimonial_2_role]: "Psychiatrist — Beta User",

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

    // Terms of Service
    [TranslationKeys.terms_title]: "Terms of Service",
    [TranslationKeys.terms_intro]:
      "By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
    [TranslationKeys.terms_section_1_title]: "1. Use License",
    [TranslationKeys.terms_section_1_content]:
      "Permission is granted to temporarily download one copy of the materials (information or software) on LeadIA's website for personal, non-commercial transitory viewing only.",
    [TranslationKeys.terms_section_2_title]: "2. Disclaimer",
    [TranslationKeys.terms_section_2_content]:
      "The materials on LeadIA's website are provided on an 'as is' basis. LeadIA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    [TranslationKeys.terms_section_3_title]: "3. Limitations",
    [TranslationKeys.terms_section_3_content]:
      "In no event shall LeadIA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LeadIA's website.",
    [TranslationKeys.terms_section_4_title]: "4. Accuracy of Materials",
    [TranslationKeys.terms_section_4_content]:
      "The materials appearing on LeadIA's website could include technical, typographical, or photographic errors. LeadIA does not warrant that any of the materials on its website are accurate, complete or current.",
    [TranslationKeys.terms_section_5_title]: "5. Modifications",
    [TranslationKeys.terms_section_5_content]:
      "LeadIA may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.",

    // Privacy Policy
    [TranslationKeys.privacy_title]: "Privacy Policy",
    [TranslationKeys.privacy_intro]:
      "Your privacy is important to us. It is LeadIA's policy to respect your privacy regarding any information we may collect from you across our website.",
    [TranslationKeys.privacy_section_1_title]: "1. Information We Collect",
    [TranslationKeys.privacy_section_1_content]:
      "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.",
    [TranslationKeys.privacy_section_2_title]: "2. How We Use Information",
    [TranslationKeys.privacy_section_2_content]:
      "We use the collected information to provide, operate, and maintain our website, improve, personalize, and expand our website, and understand and analyze how you use our website.",
    [TranslationKeys.privacy_section_3_title]: "3. Data Retention",
    [TranslationKeys.privacy_section_3_content]:
      "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.",
    [TranslationKeys.privacy_section_4_title]: "4. Third Party Links",
    [TranslationKeys.privacy_section_4_content]:
      "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.",

    // Contact Form
    [TranslationKeys.contact_title]: "Contact Information",
    [TranslationKeys.contact_description]:
      "Fill in your details and we'll get back to you",
    [TranslationKeys.contact_name_label]: "Full Name",
    [TranslationKeys.contact_name_placeholder]: "Enter your full name",
    [TranslationKeys.contact_email_label]: "Email Address",
    [TranslationKeys.contact_email_placeholder]: "Enter your email address",
    [TranslationKeys.contact_phone_label]: "Phone Number",
    [TranslationKeys.contact_phone_placeholder]: "Enter your phone number",
    [TranslationKeys.contact_submit]: "Submit",
    [TranslationKeys.contact_error_specialty]: "Please select a specialty",
    [TranslationKeys.contact_error_general]: "Error sending contact form",

    // Start Chat
    [TranslationKeys.start_chat_message]:
      "You've been registered for the LeadIA pre-launch. Start your test now!",
    [TranslationKeys.start_chat_button]: "Chat with LeadIA",

    // Select Specialty
    [TranslationKeys.specialty_label]: "Doctor Specialty",
    [TranslationKeys.specialty_placeholder]: "Select your specialty",
    [TranslationKeys.specialty_other_label]: "Specify Your Specialty",
    [TranslationKeys.specialty_other_placeholder]: "Enter your specialty",
    [TranslationKeys.specialty_anesthesiology]: "Anesthesiology",
    [TranslationKeys.specialty_cardiology]: "Cardiology",
    [TranslationKeys.specialty_dermatology]: "Dermatology",
    [TranslationKeys.specialty_emergency]: "Emergency Medicine",
    [TranslationKeys.specialty_family]: "Family Medicine",
    [TranslationKeys.specialty_gastroenterology]: "Gastroenterology",
    [TranslationKeys.specialty_internal]: "Internal Medicine",
    [TranslationKeys.specialty_neurology]: "Neurology",
    [TranslationKeys.specialty_obgyn]: "Obstetrics and Gynecology",
    [TranslationKeys.specialty_oncology]: "Oncology",
    [TranslationKeys.specialty_orthopedic]: "Orthopedic Surgery",
    [TranslationKeys.specialty_pediatrics]: "Pediatrics",
    [TranslationKeys.specialty_psychiatry]: "Psychiatry",
    [TranslationKeys.specialty_radiology]: "Radiology",
    [TranslationKeys.specialty_surgery]: "Surgery",
    [TranslationKeys.specialty_other]: "Other",
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
      "Mais de 50% dos agendamentos são tentados fora do horário comercial.",
    [TranslationKeys.problem_card_title]: "Oportunidade Perdida",
    [TranslationKeys.problem_card_desc]:
      '"Tentei marcar mas demorei a obter resposta. Achei outro médico."',
    [TranslationKeys.problem_point_1_title]: "A Regra dos 10 Minutos",
    [TranslationKeys.problem_point_1_desc]:
      "Se a resposta ultrapassa 10 minutos, 62% procuram outro médico.",
    [TranslationKeys.problem_point_2_title]: "Potencial de Receita",
    [TranslationKeys.problem_point_2_desc]:
      "Sua agenda poderia render 20%–40% mais — apenas com agilidade.",
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
      "Você testa a LeadIA por 7 dias com seus próprios pacientes para garantir que atenda seus padrões.",
    [TranslationKeys.how_step_3_title]: "3. Ativação",
    [TranslationKeys.how_step_3_desc]:
      "Ativamos em tempo integral. Sem instalação, sem configuração complexa, sem mudança de sistema.",

    // Target Audience
    [TranslationKeys.target_badge]: "Para quem é",
    [TranslationKeys.target_title]:
      "Feita para consultórios que valorizam excelência, tempo e experiência.",
    [TranslationKeys.target_title_custom]:
      "Feita para consultórios que valorizam",
    [TranslationKeys.target_title_custom_gradient]:
      "excelência, tempo e experiência.",
    [TranslationKeys.target_desc_1]:
      "Se você atende pacientes que valorizam qualidade, privacidade e organização —",
    [TranslationKeys.target_desc_2]: "LeadIA é para você.",
    [TranslationKeys.target_intro]:
      "LeadIA é a solução perfeita se seus pacientes:",
    [TranslationKeys.target_point_1_title]: "Valorizam seu tempo",
    [TranslationKeys.target_point_1_desc]:
      "Eles esperam respostas rápidas e agendamento eficiente sem esperar na linha.",
    [TranslationKeys.target_point_2_title]: "Prezam pela Qualidade",
    [TranslationKeys.target_point_2_desc]:
      "Eles esperam uma experiência de atendimento impecável e de alta qualidade ao agendar.",
    [TranslationKeys.target_point_3_title]: "Exigem Privacidade",
    [TranslationKeys.target_point_3_desc]:
      "Eles apreciam um tratamento profissional, seguro e discreto.",

    // Testimonials
    [TranslationKeys.testimonials_badge]: "Depoimentos",
    [TranslationKeys.testimonials_title]: "Confiado por Especialistas",
    [TranslationKeys.testimonials_desc]:
      "Veja o que seus colegas estão dizendo sobre a LeadIA.",
    [TranslationKeys.testimonial_1_text]:
      "Nunca mais perdi um paciente por demora na resposta. A LeadIA mudou completamente o fluxo do meu consultório.",
    [TranslationKeys.testimonial_1_author]: "Drª Geórgia Dorigon",
    [TranslationKeys.testimonial_1_role]: "Endocrinologista — Usuária Beta",
    [TranslationKeys.testimonial_2_text]:
      "Meus retornos estavam se perdendo há meses. Com a LeadIA, aumentei meu número de consultas em 67%. É como ter uma secretária perfeita — 24 horas.",
    [TranslationKeys.testimonial_2_author]: "Drª Carol Coutinho",
    [TranslationKeys.testimonial_2_role]: "Psiquiatra — Usuária Beta",

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

    // Terms of Service
    [TranslationKeys.terms_title]: "Termos de Serviço",
    [TranslationKeys.terms_intro]:
      "Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.",
    [TranslationKeys.terms_section_1_title]: "1. Licença de Uso",
    [TranslationKeys.terms_section_1_content]:
      "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da LeadIA, apenas para visualização transitória pessoal e não comercial.",
    [TranslationKeys.terms_section_2_title]: "2. Isenção de Responsabilidade",
    [TranslationKeys.terms_section_2_content]:
      "Os materiais no site da LeadIA são fornecidos 'como estão'. A LeadIA não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.",
    [TranslationKeys.terms_section_3_title]: "3. Limitações",
    [TranslationKeys.terms_section_3_content]:
      "Em nenhum caso a LeadIA ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em LeadIA.",
    [TranslationKeys.terms_section_4_title]: "4. Precisão dos Materiais",
    [TranslationKeys.terms_section_4_content]:
      "Os materiais exibidos no site da LeadIA podem incluir erros técnicos, tipográficos ou fotográficos. A LeadIA não garante que qualquer material em seu site seja preciso, completo ou atual.",
    [TranslationKeys.terms_section_5_title]: "5. Modificações",
    [TranslationKeys.terms_section_5_content]:
      "A LeadIA pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.",

    // Privacy Policy
    [TranslationKeys.privacy_title]: "Política de Privacidade",
    [TranslationKeys.privacy_intro]:
      "Sua privacidade é importante para nós. É política da LeadIA respeitar a sua privacidade em relação a qualquer informação que possamos coletar de você em nosso site.",
    [TranslationKeys.privacy_section_1_title]: "1. Informações que Coletamos",
    [TranslationKeys.privacy_section_1_content]:
      "Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.",
    [TranslationKeys.privacy_section_2_title]: "2. Como Usamos as Informações",
    [TranslationKeys.privacy_section_2_content]:
      "Usamos as informações coletadas para fornecer, operar e manter nosso site, melhorar, personalizar e expandir nosso site, e entender e analisar como você usa nosso site.",
    [TranslationKeys.privacy_section_3_title]: "3. Retenção de Dados",
    [TranslationKeys.privacy_section_3_content]:
      "Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.",
    [TranslationKeys.privacy_section_4_title]: "4. Links de Terceiros",
    [TranslationKeys.privacy_section_4_content]:
      "Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.",

    // Contact Form
    [TranslationKeys.contact_title]: "Informações de Contato",
    [TranslationKeys.contact_description]:
      "Preencha seus dados e entraremos em contato",
    [TranslationKeys.contact_name_label]: "Nome Completo",
    [TranslationKeys.contact_name_placeholder]: "Digite seu nome completo",
    [TranslationKeys.contact_email_label]: "Endereço de Email",
    [TranslationKeys.contact_email_placeholder]: "Digite seu endereço de email",
    [TranslationKeys.contact_phone_label]: "Número de Telefone",
    [TranslationKeys.contact_phone_placeholder]:
      "Digite seu número de telefone",
    [TranslationKeys.contact_submit]: "Enviar",
    [TranslationKeys.contact_error_specialty]:
      "Por favor, selecione uma especialidade",
    [TranslationKeys.contact_error_general]:
      "Erro ao enviar formulário de contato",

    // Start Chat
    [TranslationKeys.start_chat_message]:
      "Você foi cadastrado no pré-lançamento da LeadIA. Comece seu teste agora!",
    [TranslationKeys.start_chat_button]: "Conversar com LeadIA",

    // Select Specialty
    [TranslationKeys.specialty_label]: "Especialidade Médica",
    [TranslationKeys.specialty_placeholder]: "Selecione sua especialidade",
    [TranslationKeys.specialty_other_label]: "Especifique Sua Especialidade",
    [TranslationKeys.specialty_other_placeholder]: "Digite sua especialidade",
    [TranslationKeys.specialty_anesthesiology]: "Anestesiologia",
    [TranslationKeys.specialty_cardiology]: "Cardiologia",
    [TranslationKeys.specialty_dermatology]: "Dermatologia",
    [TranslationKeys.specialty_emergency]: "Medicina de Emergência",
    [TranslationKeys.specialty_family]: "Medicina de Família",
    [TranslationKeys.specialty_gastroenterology]: "Gastroenterologia",
    [TranslationKeys.specialty_internal]: "Medicina Interna",
    [TranslationKeys.specialty_neurology]: "Neurologia",
    [TranslationKeys.specialty_obgyn]: "Obstetrícia e Ginecologia",
    [TranslationKeys.specialty_oncology]: "Oncologia",
    [TranslationKeys.specialty_orthopedic]: "Cirurgia Ortopédica",
    [TranslationKeys.specialty_pediatrics]: "Pediatria",
    [TranslationKeys.specialty_psychiatry]: "Psiquiatria",
    [TranslationKeys.specialty_radiology]: "Radiologia",
    [TranslationKeys.specialty_surgery]: "Cirurgia",
    [TranslationKeys.specialty_other]: "Outra",
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

  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0];
    if (browserLanguage === "pt") {
      setCurrentLanguage("pt");
    }
  }, []);

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
