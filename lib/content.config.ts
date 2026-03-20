// =============================================================================
// RAIIDIUS Content Configuration
// =============================================================================
// This file contains all editable content for the RAIIDIUS symposium website.
// Non-developers can easily update this file to change content across the site.
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions
// -----------------------------------------------------------------------------

export interface Partner {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  logo?: string;
  url?: string;
}


type SpeakerRole =
  | 'keynote'
  | 'panelist'
  | 'breakout-lead'
  | 'founder'
  | 'presenter'
  | 'organizer'
  | 'moderator'
  | 'general-chair'
  | 'program-chair';

export interface Speaker {
  id: string;
  name: string;
  affiliation: string;
  title?: string;
  role: SpeakerRole | SpeakerRole[];
  bio: string;
  keywords: string[];
  headshot?: string;
  email?: string;
}

export interface Session {
  id: string;
  title: string;
  format: 'registration' | 'keynote' | 'breakout' | 'panel' | 'poster' | 'session' | 'roundtable' | 'reception' | 'break' | 'lunch' | 'remarks';
  startTime: string;
  endTime: string;
  description: string;
  track?: string;
  speakers?: string[]; // Speaker IDs
  location?: string;
}

export interface BreakoutTrack {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ImportantDate {
  label: string;
  date: string;
  description?: string;
  isPast?: boolean;
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Edition {
  year: number;
  slug: string;
  themeTitle: string;
  themeShortTitle: string;
  themeDescription: string;
  date: string;
  dateFormatted: string;
  timezone: string;
  venue: string;
  venueRoom: string;
  address: string;
  city: string;
  state: string;
  fullAddress: string;
  mapUrl?: string;
  partners: Partner[];
  sponsorName: string;
  sponsorUrl?: string;
  registrationUrl: string;
  submissionUrl: string;
  contactEmail: string;
  isActive: boolean;
  isUpcoming: boolean;
  agenda: Session[];
  breakoutTracks: BreakoutTrack[];
  speakers: Speaker[];
  importantDates: ImportantDate[];
  themes: Theme[];
  faqs: FAQ[];
}

// -----------------------------------------------------------------------------
// Series Configuration
// -----------------------------------------------------------------------------

export const siteConfig = {
  seriesName: 'Responsible AI for Infectious Disease Intervention, Understanding, & Surveillance',
  seriesAcronym: 'RAIIDIUS',
  seriesDescription: 'RAIIDIUS is an annual symposium series advancing responsible AI and informatics for infectious diseases across biological discovery, translational research, diagnostics, clinical decision support, surveillance, treatment, and implementation in clinical and public health settings.',
  seriesTagline: 'Responsible AI for Infectious Disease Intervention, Understanding, & Surveillance',
  defaultEditionYear: 2026,
  socialLinks: {
  	twitter: '',
  	linkedin: '',
  },
  codeOfConductEmail: 'raiidius@cumc.columbia.edu',
} as const;

// -----------------------------------------------------------------------------
// Partners (shared across editions or per-edition)
// -----------------------------------------------------------------------------

const partners2026: Partner[] = [
  {
    id: 'cuimc-id',
    name: 'CUIMC Division of Infectious Diseases',
    shortName: 'CUIMC ID',
    description: 'The Division of Infectious Diseases at Columbia University Irving Medical Center (CUIMC) is devoted to excellence in patient care, research, and teaching, and to developing the next generation of leaders in academic medicine and public health.',
    url: 'https://www.infectiousdiseases.cuimc.columbia.edu/',
  },
  {
    id: 'ai-vps',
    name: 'AI@VP&S Initiative',
    shortName: 'AI@VP&S',
    description: 'The AI@VP&S Initiative at Columbia Vagelos College of Physicians and Surgeons (VP&S) spearheads innovative, safe, and responsible AI through collaborative research, transformative education, bi-directional community engagement, and patient-centered and clinician-supportive approaches.',
    url: 'https://www.vagelos.columbia.edu/',
  },
  {
    id: 'astda',
    name: 'American Sexually Transmitted Diseases Association',
    shortName: 'ASTDA',
    description: 'The American Sexually Transmitted Diseases Association (ASTDA) aims to foster scientific knowledge, develop leadership, and champion practice in the field of sexually transmitted infections. ASTDA membership includes physicians, research scientists, nurses, public health professionals, and other STD investigators.',
    url: 'https://www.astda.org/',
  },
];

// -----------------------------------------------------------------------------
// Speakers for 2026
// -----------------------------------------------------------------------------

const speakers2026: Speaker[] = [
  {
    id: 'speaker-1',
    name: 'Harry Reyes Nieva, PhD, MAS',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Postdoctoral Research Scientist',
    role: ['founder','program-chair','organizer'],
    bio: 'Dr. Reyes Nieva is a biomedical informatician specializing in artificial intelligence (AI) in medicine and public health. His research aims to advance precision health for all populations by harnessing AI and informatics to accelerate scientific knowledge discovery and translation at scale, strengthen next-generation learning health systems, and interrogate the ethical, legal, and social considerations necessary for the development of human-centered AI. Dr. Reyes Nieva received his PhD in Biomedical Informatics from Columbia University, while concurrently a Visiting Postgraduate Research Fellow in the Department of Medicine at Harvard Medical School. He also holds a Master of Applied Science in Spatial Analysis from the Johns Hopkins Bloomberg School of Public Health and a BA in History and Sociology from Yale University. Recently he was named a STAT Wunderkind, which highlights 30 of the top early-career researchers in health and medicine in North America.',
    keywords: ['Human-Centered AI', 'Precision Health', 'Learning Health Systems', 'Clinical and Public Health Informatics'],
    headshot: '/raiidius/speakers/harry-reyes-nieva.jpg',
  },
  {
    id: 'speaker-2',
    name: 'Delivette Castor, PhD, MPH, MSc',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Assistant Professor of Medical Sciences (in Medicine and in Epidemiology)',
    role: ['keynote','organizer'],
    bio: 'Dr. Castor is Assistant Professor (in Medicine), Department of Medicine, Division of Infectious Diseases, the Columbia University Medical Center. She is an epidemiologist who studies how to deliver public health innovations at scale by examining the unique and joint effects of biomedical, behavioral and structural factors that affect infectious diseases in priority populations in low- and middle-income country settings (LMICS), and in marginalized populations in the US. She joined the faculty of Columbia University Irving Medical Center (CUIMC) in November 2019. Prior, she led implementation research activities within the President’s Plan for AIDS Relief (PEPFAR) at two U.S. government agencies; as Senior Epidemiologist and eventually, acting chief of Implementation Science branch, the Office of HIV/AIDS (OHA), United States Agency for International Development (USAID); and Senior Epidemiologist in the Office of Research and Science, the Office of the Global AIDS Coordinator, Department of State (S/GAC). She worked within PEPFAR-supported programs to design, implement and evaluate comprehensive HIV interventions, introduce and scale-up novel prevention technologies. These often involved designing large community trials utilizing quantitative and qualitative methods, stakeholder engagement, capacity building, analysis, dissemination and utilization of study findings through coordination with policymakers and program-planners. Her HIV research involves intersecting areas of interest such as women’s and reproductive health, health disparities, mental health, nutrition, cervical cancer and other emerging infections (i.e., SARS-CoV-2).',
    keywords: ['Epidemiology', 'Implementation Science', 'Surveillance', 'Public Health'],
    headshot: '/raiidius/speakers/delivette-castor.jpg',
  },
  {
    id: 'speaker-3',
    name: 'Jason E. Zucker, MD, MS',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Assistant Professor of Medicine at CUIMC',
    role: ['keynote','organizer'],
    bio: 'Dr. Zucker is an Assistant Professor of Medicine in the Division of Infectious Diseases at Columbia University Medical Center and Assistant Medical Director of the New York City STD Prevention Training Center. Dr. Zucker trained as a combined adult and pediatric infectious diseases physician and is an experienced HIV, HIV prevention, and sexual health care provider providing status-neutral care to patients of all ages in the NewYork-Presbyterian/Columbia Comprehensive Health Program Sexual Health Clinic. His research focuses on the intersection of data science, behavioral science, and implementation science, focusing on developing and testing ways to optimize engagement in the sexual health cascade of care for individuals both living with or at risk of sexually transmitted infections.',
    keywords: ['Infectious Diseases', 'Sexual Health Care', 'Data Science', 'Behavioral Science'],
    headshot: '/raiidius/speakers/jason-zucker.jpg',
  },
  {
    id: 'speaker-4',
    name: 'Magdalena E. Sobieszczyk, MD, MPH',
    affiliation: 'CUIMC Division of Infectious Diseases',
   title: 'Harold C. Neu Professor of Infectious Diseases and Chief of Infectious Diseases at CUIMC',
    role: ['moderator','organizer'],
    bio: 'Dr. Sobieszczyk is the Harold Neu Professor of Infectious Diseases (in Medicine) at the Columbia University Medical Center. She is the Chief of Infectious Diseases at the Columbia University Irving Medical Center in New York. Dr. Sobieszczyk is a clinical virologist and the principal investigator of the NIH-funded Columbia Collaborative Clinical Trials Unit which has been advancing the science of HIV and emerging infections like SARS-CoV-2.',
    keywords: ['Clinical Virology', 'HIV Clinical Trials', 'HIV Vaccines', 'HIV Care'],
    headshot: '/raiidius/speakers/magdalena-sobieszczyk.jpg',
  },
  {
    id: 'speaker-5',
    name: 'Safura Abdool Karim, PhD, LLM',
    affiliation: 'Columbia Mailman SPH, Heilbrunn Department of Population and Family Health',
    title: 'Adjunct Assistant Professor',
    role: ['panelist'],
    bio: 'Dr. Abdool Karim is a public health lawyer whose research focuses on using the law to improve health outcomes. Safura is currently the Oxford-Hopkins GLIDE postdoctoral fellow at the Berman Institute, Johns Hopkins University and an Adjunct-Assistant Professor at the Mailman School of Public Health, Columbia University. Safura holds chambers at the Bridge Group of Advocates and is a member of the Johannesburg Society of Advocates and the Pan African Bar Association. Safura has been involved in researching and advocating on issues in COVID-19, including equitable vaccine access, human rights and criminalization of COVID-19. Safura has done extensive work on the legal issues on COVID-19 vaccines, serving on the DPME/NRF Expert Group developing the COVID-19 Country Report and the Africa CDC’s COVID-19 Vaccine Delivery Alliance and the Technology and Intellectual Property Workstream of the Partnerships for African Vaccine Manufacturing. Safura also worked with the Occupational Health and Safety Workstream of the NDOH Ministerial Advisory Committee on COVID-19 to provide advice on streamlining the pricing of COVID-19 testing. Safura has also provided technical support for key litigation and assisted in the development of workplace mandatory vaccination policies.',
    keywords: ['Public Health', 'Bioethics', 'Human Rights', 'Vaccines'],
    headshot: '/raiidius/speakers/safura-abdool-karim.jpeg',
 },
  {
    id: 'speaker-6',
    name: 'Preeti Pathela, DrPH, MPH',
    affiliation: 'NYC Department of Health and Mental Hygiene',
   title: 'Director of Research and Evaluation, Bureau of Sexually Transmitted Infections',
    role: ['panelist'],
    bio: 'Dr. Pathela is the Executive Director of the STI Program in the Bureau of Hepatitis, HIV, and STI at the New York City Department of Health and Mental Hygiene. She has overall responsibility for directing, evaluating, and coordinating the activities of the Program, which consists of roughly 90 staff who conduct work in STI program implementation, surveillance and field operations, and epidemiology, research and evaluation. She serves on the American STD Association’s Board of Directors and as an Associate Editor of the journal Sexually Transmitted Diseases.',
    keywords: ['HIV', 'STIs', 'Public Health','Program Implementation'],
    headshot: '/raiidius/speakers/preeti-pathela.png',
  },
  {
    id: 'speaker-7',
    name: 'Craig Heck, PhD, MPH',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Postdoctoral Research Scientist',
    role: ['presenter','organizer'],
    bio: 'Dr. Heck is a postdoctoral research scientist in Columbia University’s Division of Infectious Diseases. He is an epidemiologist with a decade of experience researching HIV prevention strategies for key and vulnerable populations in eastern and southern Africa. His research primarily seeks to improve the availability, access, use, and continuation of HIV prevention services, methods, and interventions using social, behavioral, and implementation science approaches. Recently, he has been examining the dynamics of risk perception and its influence on risk-reduction behaviors. Dr. Heck is also interested in identifying and addressing social, structural, and systemic drivers of health disparities. Dr. Heck holds a PhD in epidemiology and an MPH in population and family health, both from the Columbia University Mailman School of Public Health.',
    keywords: ['Epidemiology','HIV Prevention','Risk Perception','Risk-Reduction Behaviors'],
    headshot: '/raiidius/speakers/craig-heck.jpg',
  },
  {
    id: 'speaker-8',
    name: 'George Hripcsak, MD, MS',
    affiliation: 'CUIMC Department of Biomedical Informatics',
   title: 'Vivian Beaumont Allen Professor',
    role: 'presenter',
    bio: 'Dr. Hripcsak is Vivian Beaumont Allen Professor in the Department of Biomedical Informatics at Columbia University. He is a board-certified internist with degrees in chemistry, medicine, and biostatistics. Dr. Hripcsak’s current research focus is on the clinical information stored in electronic health records and on the development of next-generation health record systems. Using nonlinear time series analysis, machine learning, knowledge engineering, and natural language processing, he is developing the methods necessary to support clinical research and patient safety initiatives. For his work in precision medicine, he serves as a PI on Columbia’s eMERGE grant, as a PI on Columbia’s regional recruitment center for the All of Us precision medicine program, and as site PI for Columbia’s role on the All of Us Data and Research Center. He co-chaired the Meaningful Use Workgroup of U.S. Department of Health and Human Services’s Office of the National Coordinator of Health Information Technology; it defines the criteria by which health care providers collect incentives for using electronic health records. He led the effort to create the Arden Syntax, a language for representing health knowledge that has become a national standard. Dr. Hripcsak is a fellow of the National Academy of Medicine, the American College of Medical Informatics, and the New York Academy of Medicine, and he chaired the U.S. National Library of Medicine’s Biomedical Library and Informatics Review Committee. He has published over 350 papers.',
    keywords: ['Observational Research', 'Electronic Health Records', 'Causal Inference', 'Decision Support'],
    headshot: '/raiidius/speakers/george-hripcsak.jpg',
  },
  {
    id: 'speaker-9',
    name: 'Anna Ostropolets, MD, PhD',
    affiliation: 'CUIMC Department of Biomedical Informatics',
    title: 'Adjunct Assistant Professor of Biomedical Informatics',
    role: 'presenter',
    bio: 'Dr. Ostropolets is an Associate Director at Janssen Research and Development, a Johnson & Johnson Company where she works on methods to advance observational research for medical products safety. More broadly, as Adjunct Assistant Professor of Biomedical Informatics at Columbia University and a long-standing OHDSI collaborator, she designs, builds and disseminates frameworks, approaches and tools for minimizing bias in observational research with a specific focus on patient phenotyping. Since 2022, she has led the OHDSI Vocabulary improvement initiative focused on improving the quality, fit-for-use, and transparency of the OHDSI Standardized Vocabularies. Dr. Ostropolets received her medical degree and completed her residency at Kharkiv National Medical University. Before joining Janssen, she was Director, Head of Innovation Lab for Odysseus Data Services coordinating business intelligence initiative for harmonization and visualization of real-world data.',
    keywords: ['Real-World Evidence', 'Clinical Phenotyping', 'Knowledge Engineering', 'Medical Ontologies'],
    headshot: '/raiidius/speakers/anna-ostropolets.jpg',
  },
  {
    id: 'speaker-10',
    name: 'Michael T. Yin, MD, MS',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Professor of Medicine',
    role: ['presenter','organizer'],
    bio: 'Dr. Yin is an infectious disease specialist who has dedicated his career towards optimizing HIV treatment and prevention. His research focuses upon non-infectious complications of HIV which is growing in significance as people with HIV live longer with effective antiretrovirals therapy (ART) and experience accentuated aging-related complications. He has evaluated the epidemiology and pathogenic mechanisms of HIV associated bone loss in postmenopausal women, adolescents, and children with perinatal infection. Using novel imaging techniques and translational bone cell assays, he has made important discoveries about the dysregulation of bone metabolism associated with HIV infection and ART and investigated therapeutic strategies to mitigate bone loss and fracture. In addition to skeletal complications, Dr. Yin has also studied the impact of HIV and ART on cardiovascular disease, metabolic syndrome, obesity, frailty and falls. Recent work has extended to evaluation of epigenetic aging in children, adolescents and adults living with HIV.',
    keywords: ['Clinical Informatics', 'HIV', 'Aging', 'Epigenetics'],
    headshot: '/raiidius/speakers/michael-yin.jpg',
  },
//  {
//    id: 'speaker-11',
//    name: 'Pierre Elias, MD',
//    affiliation: 'CUIMC Division of Cardiology and Department of Biomedical Informatics',
//    title: 'Assistant Professor of Medicine at CUIMC',
//    role: 'panelist',
//    bio: 'Dr. Elias is an Assistant Professor in the Division of Cardiology and the Department of Biomedical Informatics at Columbia University Irving Medical Center, where he practices as a general cardiologist. He is also the Medical Director for Artificial Intelligence at NewYork-Presbyterian. His research lab develops machine learning technologies for medical imaging to improve the detection and management of cardiovascular disease. Dr. Elias received his medical degree at Duke University School of Medicine in North Carolina. He completed his residency in Internal Medicine and fellowship in Cardiovascular Disease at NewYork-Presbyterian/Columbia University Irving Medical Center through the Clinician-Scientist Pathway. He completed his postdoc under Dr. Adler Perotte in the Department of Biomedical Informatics. He has been named a STAT News Wunderkind highlighting 20 of the most innovative junior researchers in the country and has received the Emerging Generation Award from the American Society of Clinical Investigation. He was previously a data scientist at Lumiata, helping develop Google\'s Knowledge Graph for Health.',
//    keywords: ['Deep Learning', 'Medical Imaging', 'Clinical Informatics', 'General Cardiology'],
//    headshot: '/raiidius/speakers/pierre-elias.jpg',
//  },
//  {
//    id: 'speaker-12',
//    name: 'Karintha Holifield, MD',
//    affiliation: 'Housing Works Community Healthcare',
//    title: 'Medical Director, 125th Street Community Health Center',
//    role: 'panelist',
//    bio: 'Dr. Holifield is a board-certified internist and Medical Director for the Housing Works 125th Street Community Health Center. Dr. Holifield takes a thorough and personalized approach to internal medicine, focusing on effectively addressing diverse health challenges. She prioritizes preventive care and fosters a collaborative atmosphere where patients actively participate in their health journey. Combining medical expertise with clear communication, Dr. Holifield helps patients understand their conditions and available treatment options. Dr. Holifield earned her medical degree from the University of Miami and BA in Sociology from Yale University. She completed her residency in internal medicine from the Icahn School of Medicine at Mount Sinai Morningside and Mount Sinai West.',
//    keywords: ['Internal Medicine', 'HIV', 'Preventive Care', 'Patient Empowerment'],
//    headshot: '/raiidius/speakers/karintha-holifield.jpeg',
//  },
];


// -----------------------------------------------------------------------------
// Agenda for 2026
// -----------------------------------------------------------------------------

const agenda2026: Session[] = [
  {
    id: 'registration',
    title: 'Registration & Breakfast',
    format: 'registration',
    startTime: '8:00 AM',
    endTime: '8:30 AM',
    description: 'Check in, pick up your badge, and enjoy breakfast while networking with fellow attendees.',
    location: 'VEC Lobby',
  },
  {
    id: 'opening',
    title: 'Welcome & Opening Remarks',
    format: 'remarks',
    startTime: '8:30 AM',
    endTime: '9:00 AM',
    description: 'RAIIDIUS Founder and Program Chair, Dr. Harry Reyes Nieva, presents the vision and key objectives for RAIIDIUS 2026 and beyond.',
    location: 'VEC 401',
    speakers: ['speaker-1'],
  },
  {
    id: 'keynote-1',
    title: 'Keynote 1: AI at the Point of Care',
    format: 'keynote',
    startTime: '9:00 AM',
    endTime: '9:30 AM',
    description: 'Dr. Jason Zucker presents case examples demonstrating AI applications in STI diagnosis and treatment decision support.',
    location: 'VEC 401',
    speakers: ['speaker-3'],
  },
  {
    id: 'keynote-2',
    title: 'Keynote 2: Surveillance in the AI Era',
    format: 'keynote',
    startTime: '9:30 AM',
    endTime: '10:00 AM',
    description: 'Dr. Delivette Castor shares AI-driven opportunities and implementation concerns for STI surveillance and outbreak response.',
    location: 'VEC 401',
    speakers: ['speaker-2'],
  },
  {
    id: 'oral-session-1',
    title: 'Session 1: Oral Presentations',
//    title: 'Session 1: AI-Powered Patient Engagement Tools',
    format: 'session',
    startTime: '10:00 AM',
    endTime: '10:50 AM',
    description: 'TBD.',
//  description: 'Presentations on sexual-health chatbots, adherence apps, and patient outreach tools leveraging AI to improve engagement and outcomes.',
    location: 'VEC 401',
    speakers: [],
  },
  {
    id: 'break-morning',
    title: 'Morning Coffee Break & Networking',
    format: 'break',
    startTime: '10:50 AM',
    endTime: '11:00 AM',
    description: 'Refreshments and informal networking.',
    location: 'VEC 401 Atrium',
  },
  {
    id: 'panel',
    title: 'Panel Discussion & Q&A',
    format: 'panel',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    description: '"Implementing AI in Clinical and Public Health STI Practice" — Panel includes clinicians, public health leaders, and community advocates discussing real-world implementation challenges and opportunities.',
    location: 'VEC 401',
    speakers: ['speaker-4', 'speaker-5', 'speaker-6'],
  },
  {
    id: 'lunch-poster',
    title: 'Boxed Lunch & Poster Preview',
    format: 'lunch',
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    description: 'Enjoy lunch while previewing poster presentations showcasing AI-based STI research by trainees.',
    location: 'VEC 401 Atrium',
  },
  {
    id: 'ohdsi-workshop',
    title: 'Workshop Tutorial: Introduction to OHDSI and Generating Real-World Evidence',
    format: 'session',
    startTime: '1:00 PM',
    endTime: '2:20 PM',
    description: 'A condensed, hands-on tutorial inspired by the Columbia OHDSI Summer School introducing the OHDSI community, open-source tools, and practical approaches to working with observational health data and generating real-world evidence.',
    location: 'VEC 401',
    speakers: ['speaker-8', 'speaker-9'],
  },
  {
    id: 'break-afternoon',
    title: 'Afternoon Coffee Break & Networking',
    format: 'break',
    startTime: '2:20 PM',
    endTime: '2:30 PM',
    description: 'Refreshments and continued networking.',
    location: 'VEC 401 Atrium',
  },
  {
    id: 'oral-session-2',
    title: 'Session 2: Oral Presentations',
    format: 'session',
    startTime: '2:30 PM',
    endTime: '3:20 PM',
    description: 'TBD.',
    location: 'VEC 401',
    speakers: [],
  },
  {
    id: 'roundtable',
    title: 'Roundtable Discussions: Next Steps',
    format: 'roundtable',
    startTime: '3:20 PM',
    endTime: '4:40 PM',
    description: '"Next Steps: Collaborations, Pilots & Policy" — Planning future initiatives and multidisciplinary partnerships to advance responsible AI in STI prevention.',
    location: 'VEC 401',
  },
  {
    id: 'closing',
    title: 'Closing Remarks',
    format: 'remarks',
    startTime: '4:40 PM',
    endTime: '5:00 PM',
    description: 'Dr. Reyes Nieva presents summary takeaways and next steps for the RAIIDIUS community.',
    location: 'VEC 401',
  },
  {
    id: 'poster-networking',
    title: 'Poster Session and Networking Reception: AI and Informatics-based Methods and Applications for Infectious Disease Research',
    format: 'poster',
    startTime: '5:00 PM',
    endTime: '7:00 PM',
    description: 'Join us for refreshments, continued conversation, and dedicated poster viewing time featuring trainee research on AI and informatics methods for infectious disease applications.',
    location: 'VEC Lobby',
  },
];
// -----------------------------------------------------------------------------
// Breakout Tracks for 2026
// -----------------------------------------------------------------------------

const breakoutTracks2026: BreakoutTrack[] = [];

// -----------------------------------------------------------------------------
// Important Dates for 2026
// -----------------------------------------------------------------------------

const importantDates2026: ImportantDate[] = [
  {
    label: 'Abstract Submission Opens',
    date: 'March 15, 2026',
    description: 'Submit your abstracts for oral or poster presentations.',
  },
  {
    label: 'Registration Opens',
    date: 'March 15, 2026',
    description: 'Registration opens for attendees.',
  },
  {
    label: 'Abstract Submission Deadline',
    date: 'April 30, 2026',
    description: 'Final deadline for abstract submissions.',
  },
  {
    label: 'Notification of Acceptance',
    date: 'May 9, 2026',
    description: 'Authors notified of abstract acceptance.',
  },
  {
    label: 'Registration Deadline',
    date: 'May 30, 2026',
    description: 'Last day to register in advance.',
  },
  {
    label: 'RAIIDIUS 2026 Symposium',
    date: 'June 9, 2026',
    description: 'Join us at Columbia University Irving Medical Center.',
  },
];

// -----------------------------------------------------------------------------
// Themes for 2026
// -----------------------------------------------------------------------------

const themes2026: Theme[] = [
  {
    id: 'biological',
    title: 'Biological Discovery & Translational Research',
    description: 'AI and informatics approaches for biomarker discovery, host–pathogen interactions, mechanistic infectious disease research, and translational science.',
    icon: 'microscope',
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics & Point-of-Care Testing',
    description: 'AI-powered diagnostic tools, computer vision for lesion identification, automated lab result interpretation.',
    icon: 'microscope',
  },
  {
    id: 'surveillance',
    title: 'Surveillance & Outbreak Detection',
    description: 'Real-time monitoring systems, predictive modeling for outbreak response, contact tracing optimization.',
    icon: 'activity',
  },
  {
    id: 'predictive',
    title: 'Predictive Modeling & Risk Stratification',
    description: 'Machine learning models for risk prediction, treatment response forecasting, resource allocation.',
    icon: 'trending-up',
  },
  {
    id: 'ethics',
    title: 'Ethical, Legal, and Social Implications',
    description: 'Interrogating important notions including trust, transparency, governance, alignment, and potential for harm.',
    icon: 'scale',
  },
  {
    id: 'implementation',
    title: 'Clinical, Public Health & Patient-Facing Implementation',
    description: 'Real-world deployment challenges, workflow integration, scalable decision support, and patient-facing tools across translational, clinical, and public health applications.',
    icon: 'building',
  },
];

// -----------------------------------------------------------------------------
// FAQs for 2026
// -----------------------------------------------------------------------------

const faqs2026: FAQ[] = [
  {
    question: 'Who should attend RAIIDIUS 2026?',
    answer: 'RAIIDIUS welcomes researchers, clinicians, public health professionals, computational scientists, data scientists, trainees, and other collaborators interested in the use of AI and informatics across biological discovery, translational research, clinical care, and public health in infectious diseases.',
  },
  {
    question: 'What types of abstracts are you accepting?',
    answer: 'We accept abstracts for oral presentations and poster sessions. Topics may include biological discovery, host–pathogen research, biomarkers, multi-omics and computational discovery, diagnostics, surveillance, predictive modeling, clinical and public health implementation, ethics, and patient-facing or digital tools in infectious diseases.',
  },
  {
    question: 'Will presentations be recorded?',
    answer: 'Select sessions may be recorded with speaker permission. Registered attendees will receive access to available recordings after the event.',
  },
  {
    question: 'How can I request accessibility accommodations?',
    answer: 'Please indicate any accessibility needs during registration or contact us at the email provided. We are committed to making RAIIDIUS accessible to all attendees.',
  },
  {
    question: 'Can I present virtually?',
    answer: 'RAIIDIUS 2026 is an in-person event.',
  },
];

// -----------------------------------------------------------------------------
// Editions
// -----------------------------------------------------------------------------

export const editions: Edition[] = [
  {
    year: 2026,
    slug: '2026',
    themeTitle: 'Sexually Transmitted Infections (STIs)',
    themeShortTitle: 'STIs',
    themeDescription: 'RAIIDIUS 2026 focuses on responsible AI and informatics for sexually transmitted infections, spanning biological discovery, translational research, clinical care, and public health practice. This edition brings together researchers, clinicians, public health professionals, and technologists to explore how AI can support STI diagnostics, surveillance, treatment, patient engagement, real-world implementation, and new scientific discovery.',
    date: '2026-06-09',
    dateFormatted: 'June 9, 2026',
    timezone: 'Eastern Time (ET)',
    venue: 'Roy and Diana Vagelos Education Center',
    venueRoom: 'VEC 401',
    address: '104 Haven Ave',
    city: 'New York',
    state: 'NY',
    fullAddress: '104 Haven Ave, New York, NY',
    mapUrl: 'https://maps.google.com/?q=104+Haven+Ave,+New+York,+NY',
    partners: partners2026,
    sponsorName: 'American Sexually Transmitted Diseases Association (ASTDA)',
    sponsorUrl: 'https://www.astda.org/',
    registrationUrl: 'https://www.eventbrite.com/e/raiidius-symposium-tickets-1985484124464',
    submissionUrl: 'https://forms.gle/SZg9CmR9c6EezfP78',
    contactEmail: 'raiidius@cumc.columbia.edu',
    isActive: true,
    isUpcoming: true,
    agenda: agenda2026,
    breakoutTracks: breakoutTracks2026,
    speakers: speakers2026,
    importantDates: importantDates2026,
    themes: themes2026,
    faqs: faqs2026,
  },
  {
    year: 2027,
    slug: '2027',
    themeTitle: 'Theme To Be Announced',
    themeShortTitle: 'TBD',
    themeDescription: 'RAIIDIUS 2027 will continue our mission of advancing responsible AI for infectious diseases. The specific disease domain focus will be announced in late 2026.',
    date: '2027-06-01',
    dateFormatted: 'June 2027',
    timezone: 'Eastern Time (ET)',
    venue: 'To Be Announced',
    venueRoom: 'TBD',
    address: 'TBD',
    city: 'New York',
    state: 'NY',
    fullAddress: 'Location to be announced',
    partners: [],
    sponsorName: 'To Be Announced',
    registrationUrl: '',
    submissionUrl: '',
    contactEmail: 'raiidius@cumc.columbia.edu',
    isActive: false,
    isUpcoming: true,
    agenda: [],
    breakoutTracks: [],
    speakers: [],
    importantDates: [],
    themes: [],
    faqs: [],
  },
];

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

export function getEdition(year: number): Edition | undefined {
  return editions.find((e) => e.year === year);
}

export function getDefaultEdition(): Edition {
  return editions.find((e) => e.year === siteConfig.defaultEditionYear) || editions[0];
}

export function getActiveEditions(): Edition[] {
  return editions.filter((e) => e.isActive);
}

export function getSpeaker(edition: Edition, speakerId: string): Speaker | undefined {
  return edition.speakers.find((s) => s.id === speakerId);
}

export function getSessionSpeakers(edition: Edition, session: Session): Speaker[] {
  if (!session.speakers) return [];
  return session.speakers.map((id) => getSpeaker(edition, id)).filter((s): s is Speaker => !!s);
}

// -----------------------------------------------------------------------------
// Navigation Configuration
// -----------------------------------------------------------------------------

export const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Program' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/abstracts', label: 'Abstracts' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/venue', label: 'Venue' },
  { href: '/about', label: 'About' },
  { href: '/editions', label: 'Editions' },
];

// -----------------------------------------------------------------------------
// What to Expect Cards
// -----------------------------------------------------------------------------

export const whatToExpectCards = [
  {
    title: 'Keynote Presentations',
    description: 'Hear from leading experts at the intersection of AI, infectious diseases, and public health.',
    icon: 'presentation',
  },
//  {
//    title: 'Breakout Sessions',
//    description: 'Dive deep into specialized topics with interactive, focused discussions.',
//    icon: 'users',
//  },
  {
    title: 'Panel & Q&A',
    description: 'Engage with diverse perspectives from clinicians, researchers, and advocates.',
    icon: 'messages',
  },
  {
    title: 'OHDSI Workshop Tutorial',
    description: 'Join a condensed tutorial inspired by Columbia’s OHDSI Summer School on observational health data science and real-world evidence.',
    icon: 'users',
  },
  {
    title: 'Methods & Implementation',
    description: 'Learn practical AI and informatics approaches spanning biological discovery, translational science, and real-world clinical and public health implementation.',
    icon: 'code',
  },
  {
    title: 'Poster Showcase',
    description: 'Explore cutting-edge trainee research in AI and informatics for infectious diseases.',
    icon: 'layout',
  },
  {
    title: 'Networking Reception',
    description: 'Connect with peers and build collaborations over refreshments.',
    icon: 'wine',
  },
];

// -----------------------------------------------------------------------------
// Submission Guidelines
// -----------------------------------------------------------------------------

export const submissionGuidelines = {
  formats: ['Oral Presentation (15 minutes)', 'Poster Presentation'],
  wordLimit: 500,
  categories: [
    'Biological Discovery & Translational Research',
    'Diagnostics & Point-of-Care Testing',
    'Surveillance & Outbreak Detection',
    'Predictive Modeling & Risk Stratification',
    'Ethical, Legal, and Social Implications',
    'Clinical & Public Health Implementation',
    'Patient Engagement & Digital Tools',
  ],
  reviewCriteria: [
    'Scientific merit and innovation',
    'Relevance to symposium themes',
    'Clarity of methodology and results',
    'Potential for real-world impact',
    'Quality of presentation materials',
  ],
};

// -----------------------------------------------------------------------------
// Anticipated Outcomes
// -----------------------------------------------------------------------------

export const anticipatedOutcomes = [
  {
    title: 'Cross-Disciplinary Dialogue',
    description: 'Foster collaboration between AI researchers, clinicians, epidemiologists, and public health professionals.',
  },
  {
    title: 'Early-Career Development',
    description: 'Provide exposure to AI/informatics methods and professional development resources for trainees.',
  },
  {
    title: 'White Paper & Recommendations',
    description: 'Develop a summary document outlining key findings, recommendations, and next steps for the field.',
  },
  {
    title: 'Community Building',
    description: 'Establish a network of stakeholders committed to responsible AI adoption in infectious disease prevention.',
  },
];
