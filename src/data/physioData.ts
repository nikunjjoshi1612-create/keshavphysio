export interface ConditionItem {
  slug: string;
  title: string;
  category: 'Spine & Back' | 'Shoulder & Arm' | 'Knee & Lower Limb' | 'Neurological' | 'Post-Surgical & Trauma';
  shortDesc: string;
  fullIntro: string;
  commonPresentations: string[];
  assessmentIncludes: string[];
  physioManagement: string[];
  rehabilitationGoals: string;
  medicalCoordination: string;
  image?: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  overview: string[];
  features: string[];
  clinicalHighlights: { title: string; desc: string }[];
  whoIsThisFor: string[];
  image: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  shortTag: string;
  description: string;
  clinicalUse: string;
  benefits: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  qualification: string;
  designation: string;
  experience: string;
  image: string;
  bio: string;
  clinicalFocus: string[];
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Treatments' | 'Home Visits' | 'Sessions';
}

export interface AwardItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  badge: string;
  image: string;
  description: string;
}

export const CLINIC_INFO = {
  name: "Keshav Advanced Physiotherapy Center",
  tagline: "One Place • Infinite Physiotherapy Solutions",
  subtagline: "Center Physiotherapy + Physiotherapy at Home",
  phone: "+91 9898773128",
  phoneRaw: "9898773128",
  homePhone: "+91 9328150133",
  homePhoneRaw: "9328150133",
  homeWhatsappUrl: "https://wa.me/919328150133?text=Hello%20Keshav%20Advanced%20Physiotherapy,%20I%20would%20like%20to%20inquire%20about%20Home%20Physiotherapy%20Care.",
  whatsappUrl: "https://wa.me/919898773128?text=Hello%20Keshav%20Advanced%20Physiotherapy%20Center,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20consultation.",
  email: "contact@keshavphysiotherapy.in",
  address: "GF/11, Shree Nivas Complex, Next to Gurukul Classes, Near Siddhinath Park Society, Ghodasar, Ahmedabad, Gujarat 380050",
  googleMapsUrl: "https://maps.google.com/?q=GF/11,+Shree+Nivas+Complex,+Next+to+Gurukul+Classes,+Near+Siddhinath+Park+Society,+Ghodasar,+Ahmedabad",
  timings: {
    weekdays: "Morning: 8:00 AM – 1:00 PM | Evening: 4:00 PM – 8:30 PM",
    saturday: "Morning: 8:00 AM – 1:00 PM | Evening: 4:00 PM – 8:30 PM",
    sunday: "By Appointment Only (Post-Operative & Emergency)"
  },
  homeServiceAreas: [
    "Ghodasar",
    "Maninagar",
    "Isanpur",
    "Vatva",
    "Kankaria",
    "C.T.M",
    "Jasodanagar",
    "Pushpakunj",
    "Dakshini Society",
    "Surrounding South Ahmedabad Localities"
  ]
};

export const CLINICAL_PHILOSOPHY = {
  headline: "Understanding First. Progressive Movement Next.",
  body: "At Keshav Advanced Physiotherapy Center, physiotherapy begins with understanding the patient's symptoms, movement limitations, functional goals and relevant clinical history. Treatment is individualized. Depending on the presentation, care may combine education, therapeutic exercise, manual therapy, movement retraining and appropriate physiotherapy modalities.",
  disclaimer: "Equipment supports treatment but does not replace clinical assessment, active rehabilitation or appropriate medical care."
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "center-physiotherapy",
    title: "Center Physiotherapy",
    category: "In-Clinic Rehabilitation",
    tagline: "Comprehensive, multi-disciplinary physiotherapy care in a state-of-the-art clinical environment.",
    shortDesc: "In-clinic advanced assessment, manual therapy, biomechanics evaluation, and specialized modalities in Ghodasar, Ahmedabad.",
    overview: [
      "Our center is fully equipped to deliver rigorous, individualized care across orthopaedic, sports, neurological, and post-operative conditions.",
      "Every patient undergoes a thorough baseline assessment, evaluating joint mobility, neural integrity, muscle strength, and movement patterns before formulating a goal-oriented treatment plan.",
      "We integrate modern evidence-based equipment as supportive therapy while keeping active exercises and patient self-management at the core."
    ],
    features: [
      "Detailed physiotherapy assessment and clinical diagnosis",
      "Orthopaedic and musculoskeletal rehabilitation",
      "Sports rehabilitation and return-to-sport protocols",
      "Neurological rehabilitation with parallel bars & gait aids",
      "Post-operative rehabilitation following surgical protocols",
      "Manual therapy and joint mobilisations",
      "Therapeutic exercise and supervised movement retraining",
      "Biomechanical and functional movement assessment",
      "Advanced supportive physiotherapy modalities (Laser, PEMF, Traction)",
      "Strength, mobility and functional rehabilitation"
    ],
    clinicalHighlights: [
      {
        title: "Individualized Assessment",
        desc: "Each patient receives an in-depth clinical evaluation of symptoms, range of motion, muscle balance, and functional goals."
      },
      {
        title: "Active Functional Recovery",
        desc: "We prioritize progressive exercise and neuromuscular retraining so recovery is sustainable long term."
      },
      {
        title: "Advanced Modality Suite",
        desc: "Equipped with therapeutic laser, ultrasound, PEMF, and motorized spinal traction to assist symptom modulation."
      }
    ],
    whoIsThisFor: [
      "Patients experiencing spinal, joint, or tendon pain",
      "Individuals recovering from knee, hip, or shoulder surgery",
      "Athletes requiring targeted sports injury rehabilitation",
      "Neurological patients able to visit our clinic for intensive motor retraining"
    ],
    image: "/images/clinic-reception.webp"
  },
  {
    slug: "home-physiotherapy",
    title: "Physiotherapy at Home",
    category: "Home Care Service",
    tagline: "Professional, compassionate physiotherapy delivered in the comfort and safety of your residence.",
    shortDesc: "Dedicated home visits for elderly, mobility-restricted, stroke, and post-surgery patients across South Ahmedabad.",
    overview: [
      "For patients who cannot safely travel to our clinic, Keshav Advanced Physiotherapy Center brings clinical expertise directly to your home.",
      "Our assigned physiotherapists are experienced professionals selected based on your clinical needs, location, and mobility constraints.",
      "We focus on real-world functional transfers, home environment fall prevention, bed mobility, and empowering both patients and family caregivers."
    ],
    features: [
      "Comprehensive initial assessment in the home setting",
      "Individualized bedside and living room exercise plans",
      "Post-operative knee & hip replacement rehabilitation",
      "Stroke and neurological recovery programs",
      "Elderly mobility, balance, and fall-prevention training",
      "Gait retraining and walking aid prescription",
      "Caregiver education and safe transfer techniques",
      "Home exercise program formulation with scheduled progress reviews"
    ],
    clinicalHighlights: [
      {
        title: "Safe Environment",
        desc: "Therapy is adapted specifically to the patient's domestic setting, stairs, chairs, and bathroom ergonomics."
      },
      {
        title: "Caregiver Training",
        desc: "We train family members and attendants on safe transfer mechanics, positioning, and routine assistance."
      },
      {
        title: "Structured Progress",
        desc: "Regular clinical reassessments ensure exercises advance safely toward independent standing and walking."
      }
    ],
    whoIsThisFor: [
      "Post-operative patients immediately following hospital discharge",
      "Elderly individuals with reduced mobility or fear of falling",
      "Stroke, Parkinson's, and neurological patients",
      "Bedbound or acute pain patients unable to travel to the clinic"
    ],
    image: "/images/home-physiotherapy.webp"
  },
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    category: "Hands-on Clinical Treatment",
    tagline: "Skillful, hands-on clinical techniques to restore joint glide, modulate pain, and ease tissue restriction.",
    shortDesc: "Evidence-guided joint mobilisations, soft-tissue techniques, myofascial release, and muscle energy techniques.",
    overview: [
      "Manual therapy is integrated when assessment indicates that hands-on treatment could support mobility, symptom modulation, or functional rehabilitation.",
      "Rather than an isolated passive treatment, manual therapy at our center is strategically coupled with active movement and neuromuscular education.",
      "Our therapists apply Maitland and Mulligan-inspired mobilisations with movement (MWM) to minimize joint stiffness."
    ],
    features: [
      "Joint mobilisation (Spinal and peripheral)",
      "Soft-tissue techniques and therapeutic massage",
      "Myofascial release for chronic tension",
      "Muscle energy techniques (MET)",
      "Manual-assisted active movement",
      "Cervical and lumbar spinal mobilization",
      "Peripheral joint mobilization (Shoulder, Knee, Ankle, Wrist)"
    ],
    clinicalHighlights: [
      {
        title: "Mobilisation with Movement",
        desc: "Combines sustained joint glide with active patient movement to immediately ease painful restrictions."
      },
      {
        title: "Soft Tissue Desensitization",
        desc: "Relieves muscle guarding, spasms, and trigger point irritability to restore comfortable movement."
      },
      {
        title: "Integrative Philosophy",
        desc: "Always delivered as part of: Manual Therapy + Exercise + Movement Correction."
      }
    ],
    whoIsThisFor: [
      "Patients with stiff joints following immobilization or arthritis",
      "Cervical or lumbar spine stiffness and mechanical neck/back pain",
      "Frozen shoulder stages needing passive glenohumeral glide",
      "Tennis elbow, Achilles tendinopathy, and myofascial restrictions"
    ],
    image: "/images/manual-therapy.webp"
  },
  {
    slug: "biomechanics-rehabilitation",
    title: "Biomechanics-Based Rehabilitation",
    category: "Movement Science",
    tagline: "Root-cause movement analysis addressing how joints, muscles, and kinetic chains interact.",
    shortDesc: "In-depth postural, kinetic, and gait analysis to identify underlying movement faults and prevent recurrence.",
    overview: [
      "Our biomechanics-focused approach considers how joints, muscles, and movement patterns interact during functional activity.",
      "The goal is to identify relevant movement limitations, faulty compensation patterns, and kinetic imbalances to build an individualized rehabilitation strategy.",
      "Whether analyzing a runner's strike or desk posture, we look beyond the site of pain to evaluate the whole kinetic chain."
    ],
    features: [
      "Postural alignment and ergonomic evaluation",
      "Joint mobility and segment flexibility testing",
      "Kinetic movement pattern screening",
      "Muscle strength and endurance testing",
      "Dynamic gait and weight-bearing analysis",
      "Load distribution and kinetic chain balance",
      "Motor control and stabilization retraining",
      "Functional movement progression"
    ],
    clinicalHighlights: [
      {
        title: "Root-Cause Identification",
        desc: "Identifies whether foot pronation triggers knee pain, or hip weakness contributes to lumbar spine stress."
      },
      {
        title: "Ergonomic Correction",
        desc: "Practical workplace and daily activity modifications to prevent repetitive overload."
      },
      {
        title: "Kinetic Retraining",
        desc: "Re-educates efficient motor patterns so daily movement feels effortless and resilient."
      }
    ],
    whoIsThisFor: [
      "Office professionals suffering recurrent posture-related neck and back strain",
      "Runners, badminton, cricket, and gym athletes with overuse injuries",
      "Individuals with gait asymmetry or unequal weight-bearing",
      "Patients seeking long-term preventive movement health"
    ],
    image: "/images/spine-rehab.webp"
  },
  {
    slug: "therapeutic-exercise",
    title: "Therapeutic Exercise",
    category: "Active Rehabilitation",
    tagline: "Targeted, science-backed exercise prescriptions to restore strength, control, and endurance.",
    shortDesc: "Progressive resistance training, core stabilization, balance, motor control, and personalized home exercise programs.",
    overview: [
      "Active movement is the cornerstone of sustainable physical recovery. Therapeutic exercise at Keshav Center is tailored specifically to your healing stage and physical capacity.",
      "We utilize specialized exercise bands, Swiss stability balls, balance boards, and bodyweight progression to systematically rebuild muscle function.",
      "Every patient is equipped with a clear, illustrated home exercise program to maintain momentum between in-clinic sessions."
    ],
    features: [
      "Mobility and flexibility training",
      "Progressive resistance training",
      "Core/trunk strengthening and spinal stabilization",
      "Upper- and lower-limb strengthening",
      "Balance and proprioception exercises",
      "Motor-control training and movement coordination",
      "Functional task and daily activity strengthening",
      "Gait training and step-stride rehabilitation",
      "Sport-specific progression when appropriate",
      "Home exercise programs and progress review"
    ],
    clinicalHighlights: [
      {
        title: "Graded Loading",
        desc: "Carefully calibrated resistance that strengthens tissues without flaring underlying inflammation."
      },
      {
        title: "Proprioceptive Balance",
        desc: "Improves neuromuscular joint awareness to reduce fall risks and prevent recurrent ankle or knee sprains."
      },
      {
        title: "Self-Management Empowerment",
        desc: "Patients gain full confidence and knowledge to manage their spinal and joint health independently."
      }
    ],
    whoIsThisFor: [
      "Patients recovering from muscle strains, tendonitis, or joint degeneration",
      "Individuals rebuilding strength after cast removal or surgery",
      "Seniors wanting to enhance balance and functional stamina",
      "Anyone striving for pain-free daily physical capacity"
    ],
    image: "/images/exercise-therapy.webp"
  },
  {
    slug: "advanced-equipment",
    title: "Advanced Physiotherapy Equipment",
    category: "Supportive Modalities",
    tagline: "High-grade electrotherapy, thermal, and traction technologies supporting active healing.",
    shortDesc: "Therapeutic Laser, PEMF, Ultrasound, TENS, Traction, Cryotherapy, and Pneumatic Compression.",
    overview: [
      "At Keshav Advanced Physiotherapy Center, we incorporate state-of-the-art modalities to assist with acute pain relief, tissue healing, and swelling reduction.",
      "Important Clinical Notice: Equipment is presented as supportive therapy. It should not be marketed as a guaranteed cure or as a replacement for clinical assessment and active rehabilitation.",
      "Each modality is prescribed selectively based on medical indications, contraindication screening, and patient comfort."
    ],
    features: [
      "Therapeutic Laser: Adjunct in selected rehabilitation programs",
      "PEMF Therapy: Pulsed electromagnetic field-based modality",
      "Therapeutic Ultrasound: Selective deep tissue acoustic therapy",
      "TENS: Electrical neuro-stimulation for symptom management",
      "Infrared Therapy: Thermal modality for localized circulation",
      "Pneumatic Compression: Intermittent compression for lymphatic drainage and athletic recovery",
      "Cryotherapy: Targeted cold therapy for acute inflammation",
      "Wax Therapy: Thermal paraffin treatment for hand/foot stiffness",
      "Cervical & Lumbar Traction: Computerized spinal distraction",
      "Suspension / Exercise Therapy: Assisted progressive functional exercise"
    ],
    clinicalHighlights: [
      {
        title: "Supportive Symptom Modulation",
        desc: "Calms high-irritability pain so patients can transition into active therapeutic exercises sooner."
      },
      {
        title: "Strict Safety Screening",
        desc: "All modalities are monitored by qualified physiotherapists adhering to clinical indications and safety protocols."
      },
      {
        title: "Ethical Practice",
        desc: "Used selectively to enhance active recovery, never as a stand-alone passive substitute."
      }
    ],
    whoIsThisFor: [
      "Acute post-injury patients needing swelling and pain modulation",
      "Severe spinal nerve compression candidates suitable for traction",
      "Stiff rheumatoid or arthritic hands benefiting from paraffin wax",
      "Athletes seeking rapid recovery via pneumatic compression"
    ],
    image: "/images/advanced-equipment.webp"
  },
  {
    slug: "sports-rehabilitation",
    title: "Sports Injury Rehabilitation",
    category: "Sports Medicine",
    tagline: "Accelerated, sport-specific recovery designed to return athletes to peak performance safely.",
    shortDesc: "Ligament, tendon, muscle tear rehab, biomechanical screening, and return-to-play training.",
    overview: [
      "Under the leadership of fellowship-trained sports physiotherapists, our sports injury program bridges the gap between acute injury management and high-level athletic performance.",
      "We treat cricketers, runners, badminton players, gym enthusiasts, and weekend athletes across Ahmedabad.",
      "Rehabilitation progresses from acute symptom management toward strength, movement control, plyometrics, and sport-specific drills."
    ],
    features: [
      "Acute soft tissue and joint assessment",
      "Rotator cuff and throwing shoulder protocols",
      "ACL and knee ligament rehabilitation programs",
      "Hamstring, groin, and calf strain rehabilitation",
      "Ankle sprain agility and stability retraining",
      "Jump, landing, and change-of-direction training",
      "Sport-specific movement and conditioning drills",
      "Objective return-to-sport testing and clearance"
    ],
    clinicalHighlights: [
      {
        title: "Fellowship-Led Care",
        desc: "Directed by Dr. Nikunj Joshi and Dr. Priyanshi Vani with post-graduate sports qualifications."
      },
      {
        title: "Functional Loading",
        desc: "Builds tissue tolerance for explosive movements, sudden deceleration, and cutting maneuvers."
      },
      {
        title: "Re-injury Prevention",
        desc: "Identifies kinetic chain vulnerabilities to keep athletes performing at their best without relapse."
      }
    ],
    whoIsThisFor: [
      "Athletes suffering acute ligament sprains or muscle tears",
      "Post-surgical athletes recovering from ACL, meniscus, or labral surgery",
      "Overuse sports conditions like tennis elbow, jumper's knee, or shin splints",
      "Sports enthusiasts aiming to safely resume competition"
    ],
    image: "/images/sports-rehab.webp"
  },
  {
    slug: "neurological-rehabilitation",
    title: "Neurological Rehabilitation",
    category: "Neuro Recovery",
    tagline: "Restoring neural plasticity, motor control, balance, and independence after neurological events.",
    shortDesc: "Evidence-based therapy for Stroke, Parkinson's Disease, Spinal Cord Injury, and Peripheral Neuropathy.",
    overview: [
      "Neurological rehabilitation focuses on safe movement and functional independence according to the individual's neurological deficits and recovery stage.",
      "We utilize neuro-facilitation techniques, task-specific practice, and balance retraining to stimulate neuroplasticity and regain everyday motor skills.",
      "Care is delivered either in our clinic or at home for patients with limited mobility."
    ],
    features: [
      "Comprehensive neurological screening & motor control testing",
      "Task-specific functional movement practice",
      "Balance and fall-prevention training",
      "Gait retraining with bodyweight support and parallel bars",
      "Upper-limb functional retraining and fine motor practice",
      "Bed-to-chair transfer and wheelchair mobility skills",
      "Caregiver education and home safety adaptation",
      "Maintenance routines for progressive conditions"
    ],
    clinicalHighlights: [
      {
        title: "Neuroplasticity Focus",
        desc: "High-repetition, meaningful functional tasks designed to stimulate brain and nerve recovery."
      },
      {
        title: "Dignity & Independence",
        desc: "Prioritizes practical everyday activities: standing, walking, feeding, grooming, and transfers."
      },
      {
        title: "Multi-Disciplinary Coordination",
        desc: "Continuous coordination with treating neurologists and family members."
      }
    ],
    whoIsThisFor: [
      "Stroke survivors working to regain arm function and walking ability",
      "Patients diagnosed with Parkinson's disease experiencing stiffness and gait freezing",
      "Individuals recovering from spinal cord injuries or nerve trauma",
      "Diabetic or metabolic peripheral neuropathy patients with balance deficits"
    ],
    image: "/images/neuro-rehab.webp"
  },
  {
    slug: "post-operative-rehabilitation",
    title: "Post-Operative & Post-Fracture Rehabilitation",
    category: "Surgical Recovery",
    tagline: "Structured, surgeon-aligned rehabilitation protocols for safe and speedy post-surgical recovery.",
    shortDesc: "Rehab for Total Knee/Hip Replacement, ACL Reconstruction, Fractures, and Spine Surgeries.",
    overview: [
      "Following orthopaedic surgery or fracture stabilization, physiotherapy is essential to regain joint range of motion, reactivate muscles, and prevent joint stiffness.",
      "Rehabilitation is planned strictly around the surgical procedure, tissue healing stages, orthopaedic precautions, and functional milestones.",
      "We coordinate closely with operating orthopaedic surgeons to ensure complete protocol compliance."
    ],
    features: [
      "Strict adherence to orthopaedic surgeon protocols",
      "Early swelling and incision scar management",
      "Safe passive, active-assisted, and active range of motion",
      "Quadriceps and stabilizing muscle re-activation",
      "Gait training with walker, crutches, and cane progression",
      "Weight-bearing tolerance progression per surgical clearance",
      "Stair climbing and chair transfer training",
      "Comprehensive home exercise program and ongoing monitoring"
    ],
    clinicalHighlights: [
      {
        title: "Surgeon Protocol Compliance",
        desc: "Every phase respects tissue healing timelines and medical weight-bearing restrictions."
      },
      {
        title: "Joint Mobility Recovery",
        desc: "Prevents arthrofibrosis and flexion contractures after knee or hip replacement."
      },
      {
        title: "Smooth Transition to Home",
        desc: "Home physiotherapy seamlessly transitions to advanced clinic rehab as mobility improves."
      }
    ],
    whoIsThisFor: [
      "Patients recovering from Total Knee Replacement (TKR) or Total Hip Replacement (THR)",
      "Individuals post-fracture fixation (plates, screws, casts, or external fixators)",
      "Patients post-arthroscopic ACL, PCL, or Meniscus repair",
      "Post-spinal surgery patients (discectomy, decompression, fusion)"
    ],
    image: "/images/knee-rehab.webp"
  }
];

export const CONDITIONS: ConditionItem[] = [
  {
    slug: "low-back-pain",
    title: "Low Back Pain",
    category: "Spine & Back",
    shortDesc: "Pain or stiffness in the lower back affecting sitting, standing, bending, lifting, and walking.",
    fullIntro: "Low back pain is one of the most common musculoskeletal presentations. It can stem from postural strain, muscular imbalance, lumbar facet joint irritation, or disc loading. Physiotherapy focuses on understanding pain behaviour, restoring lumbar mobility, strengthening core stabilizers, and empowering patients with sustainable self-management.",
    commonPresentations: [
      "Low-back pain or stiffness",
      "Pain with prolonged sitting or standing",
      "Reduced trunk or hip mobility",
      "Difficulty lifting or bending",
      "Reduced strength or movement confidence"
    ],
    assessmentIncludes: [
      "Pain behaviour and aggravating activities",
      "Lumbar and hip movement analysis",
      "Strength and flexibility evaluation",
      "Functional movement screening",
      "Neurological screening when indicated"
    ],
    physioManagement: [
      "Education and activity modification",
      "Mobility exercises for lumbar spine and hips",
      "Trunk/core and hip strengthening",
      "Motor-control training",
      "Manual therapy when clinically appropriate",
      "Progressive return to functional activity"
    ],
    rehabilitationGoals: "Improve mobility, strength, activity tolerance and confidence while supporting long-term self-management.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/spine-rehab.webp"
  },
  {
    slug: "sciatica",
    title: "Sciatica / Lumbar Radicular Symptoms",
    category: "Spine & Back",
    shortDesc: "Radiating symptoms into the buttock, thigh, or calf with tingling, numbness, or leg pain.",
    fullIntro: "Some lumbar spine conditions produce symptoms that travel down into the buttock, thigh, or leg due to nerve root irritation or compression. Physiotherapy carefully considers the symptom pattern, neurological findings, and functional limitations to design safe, directional-preference rehabilitation.",
    commonPresentations: [
      "Radiating leg pain (electric, dull, or sharp)",
      "Tingling or altered sensation in foot/leg",
      "Back pain accompanied by leg symptoms",
      "Difficulty sitting, standing or walking"
    ],
    assessmentIncludes: [
      "Neurological screening (reflexes, dermatomes, myotomes)",
      "Strength and sensation when appropriate",
      "Movement testing and directional preference",
      "Functional assessment",
      "Response to repeated or relevant movements"
    ],
    physioManagement: [
      "Patient education on nerve sensitivity & positions of ease",
      "Graded activity and nerve neurodynamics",
      "Individualized exercise and directional mobility",
      "Motor-control training",
      "Manual therapy when appropriate",
      "Progressive functional rehabilitation"
    ],
    rehabilitationGoals: "Improve walking and daily activity tolerance and restore strength and movement confidence.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change (e.g. foot drop or bowel/bladder changes) or other concerning features.",
    image: "/images/spine-rehab.webp"
  },
  {
    slug: "neck-pain",
    title: "Neck Pain / Cervical Pain",
    category: "Spine & Back",
    shortDesc: "Discomfort, stiffness, or rotation pain associated with sustained postures or muscular strain.",
    fullIntro: "Neck pain may be associated with sustained desk positions, smartphone use, movement limitations, muscular fatigue, injury, or degenerative cervical changes. Our physiotherapy focuses on cervical and thoracic joint mobility, deep neck flexor activation, and ergonomic posture retraining.",
    commonPresentations: [
      "Neck stiffness and tension",
      "Pain with neck rotation or looking up/down",
      "Discomfort after prolonged sitting or computer work",
      "Upper shoulder-region and trapezius discomfort",
      "Reduced neck range of movement"
    ],
    assessmentIncludes: [
      "Cervical movement and segmental mobility",
      "Shoulder and thoracic spine movement",
      "Deep neck flexor strength and endurance",
      "Posture and functional work tasks",
      "Neurological screening when indicated"
    ],
    physioManagement: [
      "Ergonomic and activity education",
      "Gentle cervical mobility exercises",
      "Cervical and scapular strengthening",
      "Thoracic mobility and extension retraining",
      "Manual therapy when appropriate"
    ],
    rehabilitationGoals: "Improve movement, strength, work tolerance and daily function.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/spine-rehab.webp"
  },
  {
    slug: "cervical-lumbar-spondylosis",
    title: "Cervical / Lumbar Spondylosis",
    category: "Spine & Back",
    shortDesc: "Degenerative spinal changes managed through functional mobility, endurance, and symptom relief.",
    fullIntro: "Degenerative changes in the spine are common normal age-related adaptations and do not always directly explain pain. Physiotherapy focuses on your symptoms, daily function, and modifiable physical limitations rather than relying purely on radiological scans.",
    commonPresentations: [
      "Pain and persistent stiffness in neck or lower back",
      "Reduced spinal range of motion",
      "Activity-related discomfort following prolonged postures",
      "Reduced muscular strength and spinal endurance"
    ],
    assessmentIncludes: [
      "Comprehensive history and symptom behaviour",
      "Spinal and regional mobility testing",
      "Muscular strength and endurance",
      "Functional daily limitation analysis",
      "Neurological screening where relevant"
    ],
    physioManagement: [
      "Tailored exercise rehabilitation",
      "Mobility work for the entire spine",
      "Strength and endurance training for stabilizing muscles",
      "Postural and activity education",
      "Manual therapy when indicated"
    ],
    rehabilitationGoals: "Maintain or improve movement, physical capacity and long-term self-management.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/spine-rehab.webp"
  },
  {
    slug: "sacroiliac-pelvic-dysfunction",
    title: "Sacroiliac / Pelvic Movement Dysfunction",
    category: "Spine & Back",
    shortDesc: "Discomfort around the lower back, buttocks, or groin assessed alongside the lumbar spine and hips.",
    fullIntro: "Pain around the lower back, buttock or pelvic region should be assessed together with the lumbar spine, hip, and overall movement pattern. Pelvic movement dysfunction often involves altered force transmission between the spine and lower limbs.",
    commonPresentations: [
      "Buttock and lower-back pain, often unilateral",
      "Pain during sit-to-stand transfers, rolling, or stair climbing",
      "Difficulty with prolonged sitting or standing postures",
      "Movement asymmetry and altered weight-bearing"
    ],
    assessmentIncludes: [
      "Lumbar and hip movement integration",
      "Functional movement screening (squats, single-leg stance)",
      "Strength and pelvic motor control testing",
      "Relevant clinical pain provocation tests"
    ],
    physioManagement: [
      "Hip and trunk strengthening",
      "Pelvic and hip mobility work",
      "Motor-control training and pelvic stabilization",
      "Manual therapy when appropriate",
      "Graded activity and progressive loading"
    ],
    rehabilitationGoals: "Improve functional movement and tolerance of daily activities.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/spine-rehab.webp"
  },
  {
    slug: "frozen-shoulder",
    title: "Frozen Shoulder / Adhesive Capsulitis",
    category: "Shoulder & Arm",
    shortDesc: "Progressive shoulder pain and stiffness affecting reaching, dressing, and overhead movements.",
    fullIntro: "Frozen shoulder commonly presents with pain and progressive restriction of shoulder movement across freezing, frozen, and thawing stages. Rehabilitation is carefully progressed according to clinical irritability, restoring capsule flexibility and functional reach.",
    commonPresentations: [
      "Deep shoulder pain and aching",
      "Difficulty reaching overhead (e.g. shelves)",
      "Difficulty reaching behind the back (e.g. dressing)",
      "Night discomfort and sleep interruption in some patients",
      "Progressive capsule stiffness in all directions"
    ],
    assessmentIncludes: [
      "Active and passive range of motion measurements",
      "Tissue irritability and pain rating assessment",
      "Functional reach assessment",
      "Rotator cuff strength when tolerated",
      "Cervical and surrounding thoracic region screening"
    ],
    physioManagement: [
      "Education on condition stages and expectations",
      "Gentle or progressive mobility based on irritability",
      "Range-of-motion exercises (pendulums, pulleys, active-assisted)",
      "Strengthening as tolerated",
      "Manual therapy when indicated"
    ],
    rehabilitationGoals: "Restore useful shoulder movement and improve dressing, grooming and reaching.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/manual-therapy.webp"
  },
  {
    slug: "rotator-cuff-pain",
    title: "Rotator Cuff-Related Shoulder Pain",
    category: "Shoulder & Arm",
    shortDesc: "Pain during lifting or overhead reaching managed via load management and progressive strengthening.",
    fullIntro: "Shoulder pain during lifting or reaching can be managed through structured load management, progressive rotator cuff strengthening, and scapular movement rehabilitation. Most rotator cuff presentations respond favorably to conservative exercise.",
    commonPresentations: [
      "Pain with arm lifting and overhead activities",
      "Discomfort when sleeping on the affected side",
      "Reduced shoulder muscle endurance",
      "Ache or stiffness after increased physical activity"
    ],
    assessmentIncludes: [
      "Shoulder active and passive range",
      "Rotator cuff muscle strength testing",
      "Scapular and thoracic movement mechanics",
      "Functional loading capacity"
    ],
    physioManagement: [
      "Load modification and temporary aggravating activity rest",
      "Progressive rotator cuff strengthening (isometric to dynamic)",
      "Scapular stabilizer exercises",
      "Thoracic mobility work",
      "Manual therapy when indicated"
    ],
    rehabilitationGoals: "Improve shoulder capacity and return to desired activities.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/manual-therapy.webp"
  },
  {
    slug: "shoulder-impingement",
    title: "Shoulder Impingement / Subacromial Pain",
    category: "Shoulder & Arm",
    shortDesc: "Irritation of subacromial structures responsive to activity modification and movement retraining.",
    fullIntro: "Subacromial pain related to repetitive loading or altered mechanics responds well to education, temporary activity modification, and progressive exercise targeting the rotator cuff and scapular upward rotators.",
    commonPresentations: [
      "Pain with overhead activity or reaching",
      "Repetitive-use discomfort during sports or chores",
      "Reduced strength and shoulder endurance",
      "Painful arc between 60 to 120 degrees of elevation"
    ],
    assessmentIncludes: [
      "Detailed pain and activity history",
      "Full shoulder range of motion",
      "Isometric and dynamic strength testing",
      "Functional loading tests"
    ],
    physioManagement: [
      "Activity modification and biomechanical adjustments",
      "Progressive strengthening for supraspinatus and infraspinatus",
      "Movement retraining for healthy scapular rhythm",
      "Mobility exercises where appropriate"
    ],
    rehabilitationGoals: "Improve shoulder load tolerance and functional use.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/manual-therapy.webp"
  },
  {
    slug: "tennis-elbow",
    title: "Tennis Elbow (Lateral Epicondylitis)",
    category: "Shoulder & Arm",
    shortDesc: "Tendinopathy of the wrist extensors causing elbow pain during gripping, lifting, or twisting.",
    fullIntro: "Tennis elbow is a musculoskeletal condition characterized by pain and tenderness over the lateral epicondyle of the elbow due to tendinopathy of the wrist extensor muscles, particularly the extensor carpi radialis brevis (ECRB). It commonly occurs due to repetitive wrist extension, gripping and overuse of the forearm muscles.",
    commonPresentations: [
      "Pain and tenderness over the lateral epicondyle",
      "Pain during gripping, lifting or wrist extension",
      "Reduced grip strength",
      "Pain radiating from the elbow down to the forearm",
      "Difficulty performing daily activities such as lifting objects or opening jars"
    ],
    assessmentIncludes: [
      "Observation: Swelling, posture and upper-limb movement patterns",
      "Palpation: Tenderness over the lateral epicondyle",
      "Range of Motion (ROM): Elbow, wrist and forearm movements",
      "Special Tests: Cozen's test, Mill's test and Maudsley's test",
      "Strength Assessment: Wrist extensor strength and grip strength dynamometry"
    ],
    physioManagement: [
      "Pain Management: Ice application and appropriate pain-relieving modalities, if indicated",
      "Manual Therapy: Mobilization with movement (MWM) and soft tissue mobilization",
      "Stretching Exercises: Gentle stretching of the wrist extensor muscles",
      "Strengthening Exercises: Isometric, concentric and eccentric wrist extensor exercises",
      "Progressive Loading: Gradual strengthening of forearm, grip and upper-limb muscles",
      "Ergonomic Advice: Activity modification, proper lifting techniques and avoidance of repetitive overloading"
    ],
    rehabilitationGoals: "Reduce pain and tenderness while improving elbow and wrist mobility. Restore grip strength, muscle endurance and functional upper-limb capacity. Enable a safe return to daily activities.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/manual-therapy.webp"
  },
  {
    slug: "knee-osteoarthritis",
    title: "Knee Osteoarthritis",
    category: "Knee & Lower Limb",
    shortDesc: "Cartilage wear leading to stiffness, swelling, and difficulty walking or using stairs.",
    fullIntro: "Knee osteoarthritis may cause pain, joint stiffness, and reduced physical endurance. Evidence demonstrates that structured exercise, quadriceps strengthening, and low-impact activity are the front-line management to relieve discomfort and delay or avoid surgery.",
    commonPresentations: [
      "Pain during walking or standing",
      "Stair climbing or squatting difficulty",
      "Morning stiffness lasting under 30 minutes",
      "Quadriceps muscle weakness and joint crepitus",
      "Reduced activity tolerance in daily routines"
    ],
    assessmentIncludes: [
      "Pain and functional scores (WOMAC/KOOS concepts)",
      "Knee range of motion (flexion and extension lag)",
      "Quadriceps and hip abductor strength",
      "Gait pattern and weight distribution",
      "Functional tasks (chair rises, stair climb)",
      "Balance and proprioception when relevant"
    ],
    physioManagement: [
      "Progressive strengthening for quadriceps, hamstrings, and hips",
      "Aerobic and low-impact physical activity guidance",
      "Mobility exercises to preserve joint range",
      "Functional training for stairs and sit-to-stand",
      "Patient education on weight and joint protection",
      "Manual therapy when appropriate"
    ],
    rehabilitationGoals: "Improve walking, stairs, strength, confidence and participation in family and social life.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/knee-rehab.webp"
  },
  {
    slug: "patellofemoral-pain",
    title: "Patellofemoral Pain (Runner's Knee)",
    category: "Knee & Lower Limb",
    shortDesc: "Anterior kneecap ache aggravated by stairs, squatting, prolonged sitting, or running.",
    fullIntro: "Pain around the kneecap can be associated with loading activities such as stairs, squatting or running. Rehabilitation focuses on optimizing patellar tracking, strengthening hip and quadriceps stabilizers, and adjusting training load.",
    commonPresentations: [
      "Anterior knee pain around or behind the kneecap",
      "Stair climbing pain, especially going down",
      "Squatting or kneeling discomfort",
      "Pain after prolonged sitting with bent knees (movie-goer's sign)",
      "Running-related symptoms"
    ],
    assessmentIncludes: [
      "Knee and hip strength testing",
      "Squat and single-leg step-down movement quality",
      "Mobility of quadriceps, hamstrings, and IT band",
      "Activity load history"
    ],
    physioManagement: [
      "Quadriceps strengthening focusing on VMO activation",
      "Hip abductor and external rotator strengthening",
      "Progressive functional loading",
      "Activity modification and gradual progression"
    ],
    rehabilitationGoals: "Improve knee load tolerance and return to desired sport or daily activity.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/knee-rehab.webp"
  },
  {
    slug: "acl-ligament-rehab",
    title: "ACL / Ligament Rehabilitation",
    category: "Knee & Lower Limb",
    shortDesc: "Systematic pre-hab and post-reconstruction rehab for knee stability and return to sport.",
    fullIntro: "Rehabilitation after anterior cruciate ligament (ACL) injury or reconstruction is progressed according to healing stage, surgical protocol, muscle strength, and functional milestones to safely restore rotational knee stability.",
    commonPresentations: [
      "Pain and joint swelling following knee trauma",
      "Giving-way sensation or joint instability",
      "Reduced quadriceps and hamstring strength",
      "Difficulty running, jumping, cutting, or pivoting"
    ],
    assessmentIncludes: [
      "Range of motion and knee effusion swelling",
      "Quadriceps and hamstring strength symmetry",
      "Balance and single-leg stability",
      "Movement mechanics during landing and deceleration",
      "Objective functional hop testing"
    ],
    physioManagement: [
      "Progressive strength training (open and closed kinetic chain)",
      "Neuromuscular training and dynamic stability",
      "Balance and proprioception exercises",
      "Running progression protocol",
      "Jump and landing preparation mechanics",
      "Sport-specific progression drills"
    ],
    rehabilitationGoals: "Restore strength, control and confidence and support gradual return to athletic activity.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/sports-rehab.webp"
  },
  {
    slug: "meniscus-knee-problems",
    title: "Meniscus-Related Knee Problems",
    category: "Knee & Lower Limb",
    shortDesc: "Joint-line tenderness, swelling, and twisting pain managed through tailored strength and load control.",
    fullIntro: "Meniscal problems may present with joint-line pain, swelling, and mechanical symptoms. Management depends on the individual presentation, tear type, age, and medical assessment, progressing from protected loading to full functional tolerance.",
    commonPresentations: [
      "Joint-line pain on the inner or outer side of knee",
      "Swelling after activity or twisting movements",
      "Pain aggravated by deep squats or pivots",
      "Catching, clicking, or occasional mechanical sensation"
    ],
    assessmentIncludes: [
      "Knee range of motion (end-range flexion/extension)",
      "Swelling and joint effusion grading",
      "Strength of thigh and hip stabilizers",
      "Functional tasks and squat testing",
      "Mechanical symptoms screening"
    ],
    physioManagement: [
      "Strengthening of surrounding knee stabilizers",
      "Mobility exercises within pain-free boundaries",
      "Load modification and pivot protection",
      "Balance and movement control training",
      "Post-operative rehabilitation when surgery is performed"
    ],
    rehabilitationGoals: "Restore strength and functional joint load tolerance.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or locked knee symptoms.",
    image: "/images/knee-rehab.webp"
  },
  {
    slug: "total-knee-replacement",
    title: "Total Knee Replacement Rehabilitation",
    category: "Post-Surgical & Trauma",
    shortDesc: "Post-op clinical and home physiotherapy to restore full knee extension, flexion, and independent walking.",
    fullIntro: "Post-operative physiotherapy supports recovery of knee mobility, strength, walking, and functional independence while strictly following surgical precautions and wound healing stages.",
    commonPresentations: [
      "Post-operative pain and knee swelling",
      "Reduced knee flexion and extension range",
      "Quadriceps inhibition and weakness",
      "Difficulty walking without assistance",
      "Difficulty with stair climbing and chair transfers"
    ],
    assessmentIncludes: [
      "Knee range of motion (degrees of flexion/extension)",
      "Quadriceps voluntary activation and lag",
      "Gait pattern and walking aid reliance",
      "Swelling, wound healing, and function",
      "Transfers and stair performance"
    ],
    physioManagement: [
      "Gentle and progressive mobility exercises",
      "Progressive quadriceps, hamstring, and calf strengthening",
      "Gait training transitioning from walker to independent walking",
      "Balance and weight-shifting exercises",
      "Functional transfer and stair training",
      "Home exercise program with progress milestones"
    ],
    rehabilitationGoals: "Restore safe mobility, strength and daily functional independence.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change, calf pain/DVT symptoms or infection signs.",
    image: "/images/knee-rehab.webp"
  },
  {
    slug: "hip-osteoarthritis",
    title: "Hip Pain / Hip Osteoarthritis",
    category: "Knee & Lower Limb",
    shortDesc: "Groin and hip stiffness affecting walking, transfers, and lower-limb functional movements.",
    fullIntro: "Hip problems can affect walking, stairs, transfers, and general lower-limb function. Physiotherapy focuses on restoring hip capsule mobility, building gluteal strength, and optimizing pelvis-spine load sharing.",
    commonPresentations: [
      "Hip, groin, or deep buttock pain",
      "Stiffness, particularly after waking or sitting",
      "Walking difficulty and shortened stride",
      "Difficulty with sit-to-stand transfers and stairs"
    ],
    assessmentIncludes: [
      "Hip range of motion (internal/external rotation, flexion)",
      "Strength of hip abductors and extensors",
      "Gait mechanics and Trendelenburg sign screening",
      "Functional movement screening",
      "Lumbar spine and knee screening"
    ],
    physioManagement: [
      "Mobility exercises for the hip joint",
      "Hip and lower-limb progressive strengthening",
      "Gait retraining and walking speed improvement",
      "Functional exercise (squats, step-ups)",
      "Activity modification and load management"
    ],
    rehabilitationGoals: "Improve walking, strength and daily physical function.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/exercise-therapy.webp"
  },
  {
    slug: "ankle-sprain",
    title: "Ankle Sprain",
    category: "Knee & Lower Limb",
    shortDesc: "Inversion ankle injury rehabilitation restoring ligament healing, balance, and preventing instability.",
    fullIntro: "Ankle sprains may produce pain, swelling, stiffness, and balance deficits. Rehabilitation progresses from early mobility and protected loading to strength, proprioception, and functional agility drills.",
    commonPresentations: [
      "Lateral ankle pain and swelling",
      "Reduced ankle movement and dorsiflexion stiffness",
      "Difficulty weight-bearing and walking",
      "Balance deficit and joint giving-way sensation",
      "History of recurrent ankle sprains"
    ],
    assessmentIncludes: [
      "Ankle range of motion (weight-bearing lunge test)",
      "Swelling and bruising distribution",
      "Peroneal and calf muscle strength",
      "Balance and single-leg proprioception",
      "Functional gait and hopping tests"
    ],
    physioManagement: [
      "Early pain relief, compression, and mobility exercises",
      "Progressive calf and peroneal muscle strengthening",
      "Balance and neuromuscular coordination training",
      "Gait retraining and normal heel-strike",
      "Running, jumping, and sport progression"
    ],
    rehabilitationGoals: "Restore walking, strength, balance and activity confidence while preventing recurrent sprains.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, inability to bear weight (Ottawa rules) or concerning features.",
    image: "/images/sports-rehab.webp"
  },
  {
    slug: "plantar-fasciitis",
    title: "Plantar Fasciitis / Heel Pain",
    category: "Knee & Lower Limb",
    shortDesc: "Sharp heel pain with first morning steps, aggravated by prolonged standing or walking.",
    fullIntro: "Heel pain can be influenced by activity load, calf tightness, foot intrinsic strength, and biomechanical factors. Rehabilitation focuses on load management, targeted plantar fascia and calf stretching, and progressive tissue loading.",
    commonPresentations: [
      "Sharp or throbbing pain beneath the heel",
      "Pain during the first steps out of bed in the morning",
      "Calf and Achilles tendon stiffness",
      "Reduced tolerance for prolonged standing or walking"
    ],
    assessmentIncludes: [
      "Foot and ankle movement and arch assessment",
      "Calf flexibility and gastrocnemius-soleus tightness",
      "Foot intrinsic and lower-limb muscle strength",
      "Activity load and footwear inspection"
    ],
    physioManagement: [
      "Load management and temporary activity adjustments",
      "High-load plantar fascia strengthening and calf loading",
      "Targeted stretching for calf and plantar fascia",
      "Mobility exercises and supportive taping",
      "Gradual return-to-activity progression"
    ],
    rehabilitationGoals: "Improve walking and standing tolerance and gradually restore daily physical activities.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/exercise-therapy.webp"
  },
  {
    slug: "stroke-rehabilitation",
    title: "Stroke Rehabilitation",
    category: "Neurological",
    shortDesc: "Neuro-recovery restoring arm control, balance, sit-to-stand transfers, and walking independence.",
    fullIntro: "Stroke rehabilitation focuses on safe movement and functional independence according to the individual's neurological deficits and recovery stage. Our center and home programs stimulate neuroplasticity through repetitive, task-specific practice.",
    commonPresentations: [
      "Hemiparesis or muscle weakness on one side",
      "Balance problems in sitting and standing",
      "Gait difficulty and altered walking rhythm",
      "Coordination and motor planning challenges",
      "Transfer difficulty from bed to chair or wheelchair"
    ],
    assessmentIncludes: [
      "Muscle strength and motor control grading",
      "Balance assessment (static and dynamic)",
      "Gait speed, endurance, and kinematics",
      "Bed mobility and transfer safety",
      "Upper-limb reach, grasp, and release function",
      "Functional independence measures"
    ],
    physioManagement: [
      "Task-specific functional movement practice",
      "Strength and mobility maintenance for affected limbs",
      "Balance and gait retraining with walking aids",
      "Transfer training for bed, chair, and toilet",
      "Caregiver education on safe handling and assistance"
    ],
    rehabilitationGoals: "Improve safe mobility and functional independence in everyday life.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or sudden clinical deterioration.",
    image: "/images/neuro-rehab.webp"
  },
  {
    slug: "parkinsons-disease",
    title: "Parkinson's Disease Rehabilitation",
    category: "Neurological",
    shortDesc: "Targeted therapy addressing tremors, rigidity, bradykinesia, freezing of gait, and posture.",
    fullIntro: "Physiotherapy for Parkinson's disease addresses mobility, gait, balance, muscle strength, and functional activity according to individual clinical stages. We use high-amplitude movement strategies and auditory/visual cues to overcome movement freezing.",
    commonPresentations: [
      "Slowness of movement (bradykinesia)",
      "Stiffness and muscle rigidity",
      "Balance difficulty and postural instability",
      "Gait changes including short shuffling steps and freezing",
      "Difficulty with sit-to-stand transfers"
    ],
    assessmentIncludes: [
      "Gait characteristics and balance testing",
      "Functional mobility and transfer ease",
      "Muscular strength and flexibility",
      "Movement amplitude and movement execution",
      "Falls risk assessment"
    ],
    physioManagement: [
      "High-amplitude movement training",
      "Gait strategies using visual and rhythmic cueing",
      "Dynamic balance and dual-task training",
      "Strengthening and spinal extension exercises",
      "Functional practice for chair and bed transfers",
      "Individualized home exercise routine"
    ],
    rehabilitationGoals: "Maintain mobility, support independence, reduce fall risk and improve movement confidence.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/neuro-rehab.webp"
  },
  {
    slug: "spinal-cord-injury",
    title: "Spinal Cord Injury Rehabilitation",
    category: "Neurological",
    shortDesc: "Functional independence, transfer retraining, wheelchair skills, and standing mobility.",
    fullIntro: "Rehabilitation may involve mobility, strength, transfers, balance, gait, or wheelchair skills depending on the level and completeness of injury. Our goal is empowering patients to reach their highest possible physical capability safely.",
    commonPresentations: [
      "Muscle weakness or paralysis below injury level",
      "Balance limitations in sitting or standing",
      "Difficulty with functional transfers",
      "Mobility limitations and reliance on equipment"
    ],
    assessmentIncludes: [
      "Neurological and functional status evaluation",
      "Muscle strength testing (key motor muscles)",
      "Passive and active joint range of motion",
      "Transfer capability and technique",
      "Sitting and standing balance capacity",
      "Gait and wheelchair functional skills"
    ],
    physioManagement: [
      "Strength and upper-body conditioning",
      "Bed mobility and transfer training",
      "Seated and standing balance exercises",
      "Gait retraining where clinically appropriate",
      "Caregiver education and adaptive technique training"
    ],
    rehabilitationGoals: "Maximize safe functional independence and daily living capacity.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change, skin breakdown, or autonomic dysreflexia symptoms.",
    image: "/images/neuro-rehab.webp"
  },
  {
    slug: "peripheral-neuropathy",
    title: "Peripheral Neuropathy",
    category: "Neurological",
    shortDesc: "Managing numbness, weakness, and altered sensation to restore balance and prevent falls.",
    fullIntro: "Peripheral neuropathy may affect sensation, strength, balance, and walking. Rehabilitation is tailored to the underlying cause and severity, with an emphasis on sensory compensation, lower-limb strengthening, and fall prevention.",
    commonPresentations: [
      "Numbness, tingling, or burning in hands and feet",
      "Weakness in foot or lower leg muscles",
      "Balance problems, especially in dim light or uneven surfaces",
      "Altered walking and unsteadiness"
    ],
    assessmentIncludes: [
      "Sensation testing (light touch, proprioception, vibration)",
      "Lower-limb strength and ankle stability",
      "Balance testing (eyes open vs eyes closed)",
      "Gait assessment and foot clearance",
      "Functional safety and fall risk evaluation"
    ],
    physioManagement: [
      "Progressive lower-limb strengthening",
      "Balance training utilizing visual and vestibular cues",
      "Gait training with appropriate footwear advice",
      "Fall prevention education and home hazards review",
      "Functional education on daily foot inspection"
    ],
    rehabilitationGoals: "Improve safe mobility, muscle strength, stability and movement confidence.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or skin ulcers.",
    image: "/images/neuro-rehab.webp"
  },
  {
    slug: "sports-injuries",
    title: "Sports Injury Rehabilitation",
    category: "Shoulder & Arm",
    shortDesc: "Muscle strains, ligament tears, and joint problems rehabilitated toward peak athletic performance.",
    fullIntro: "Sports rehabilitation progresses from symptom management toward strength, movement control, agility, and sport-specific capacity. We design progressive return-to-sport programs to safely restore athlete confidence and conditioning.",
    commonPresentations: [
      "Muscle strains (hamstrings, quadriceps, calves)",
      "Ligament injuries and joint sprains",
      "Tendon problems (Achilles, patellar, rotator cuff)",
      "Joint and overuse sports injuries",
      "Reduced athletic performance and fear of reinjury"
    ],
    assessmentIncludes: [
      "Pain and swelling evaluation",
      "Active range of motion",
      "Isometric and dynamic strength testing",
      "Dynamic balance and control",
      "Movement quality during functional tasks",
      "Sport-specific capacity and endurance"
    ],
    physioManagement: [
      "Load management and tissue protection",
      "Progressive resistance and eccentric strengthening",
      "Mobility and flexibility maintenance",
      "Neuromuscular control training",
      "Running progression drills",
      "Jump, landing, and change-of-direction training when appropriate"
    ],
    rehabilitationGoals: "Restore physical capacity and support a structured, gradual return to sport.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or other concerning features.",
    image: "/images/sports-rehab.webp"
  },
  {
    slug: "post-fracture-rehabilitation",
    title: "Post-Fracture Rehabilitation",
    category: "Post-Surgical & Trauma",
    shortDesc: "Safely rebuilding bone, joint, and muscle function after cast or surgical fixation removal.",
    fullIntro: "After fracture union and management, physiotherapy helps restore joint movement, muscle strength, balance, and daily function once medically cleared by the treating orthopaedic surgeon.",
    commonPresentations: [
      "Joint stiffness following immobilization in plaster or brace",
      "Muscle weakness and disuse atrophy",
      "Reduced weight-bearing tolerance",
      "Reduced function and apprehension using the limb"
    ],
    assessmentIncludes: [
      "Range of motion of joints above and below fracture",
      "Muscle strength and bulk measurement",
      "Gait mechanics and weight-bearing capability",
      "Balance and functional tasks",
      "Adherence to medical weight-bearing clearance"
    ],
    physioManagement: [
      "Gentle joint and soft-tissue mobility exercises",
      "Progressive strengthening adhering to healing bone tolerance",
      "Gait training with progressive weight bearing",
      "Balance and proprioceptive exercises",
      "Functional rehabilitation for daily tasks"
    ],
    rehabilitationGoals: "Restore movement and strength while strictly following medical weight-bearing restrictions.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or unexpected focal pain.",
    image: "/images/knee-rehab.webp"
  },
  {
    slug: "post-operative-orthopaedic",
    title: "Post-Operative Orthopaedic Rehabilitation",
    category: "Post-Surgical & Trauma",
    shortDesc: "Comprehensive care planned around surgical procedure, tissue healing stages, and functional goals.",
    fullIntro: "Post-operative orthopaedic rehabilitation is planned around the surgical procedure, tissue healing stage, surgeon precautions, and functional goals to ensure complete, safe functional recovery.",
    commonPresentations: [
      "Post-operative pain and surgical swelling",
      "Reduced joint mobility and guarding",
      "Muscular weakness from surgical intervention",
      "Difficulty with walking, stairs, or daily activities"
    ],
    assessmentIncludes: [
      "Verification of surgical precautions and protocols",
      "Range of motion and swelling assessment",
      "Strength of surrounding motor units",
      "Gait and functional mobility",
      "Functional ability in daily transfers"
    ],
    physioManagement: [
      "Incision-friendly mobility exercises",
      "Progressive strengthening tailored to tissue healing",
      "Gait and functional task training",
      "Individualized home exercise program",
      "Regular progress monitoring and surgeon updates"
    ],
    rehabilitationGoals: "Support safe surgical recovery and gradual return to full everyday function.",
    medicalCoordination: "Medical coordination is important when symptoms are severe, rapidly worsening, associated with major trauma, significant neurological change or wound complications.",
    image: "/images/knee-rehab.webp"
  }
];

export const EQUIPMENT: EquipmentItem[] = [
  {
    id: "laser",
    name: "Therapeutic Laser",
    shortTag: "Photobiomodulation",
    description: "Delivers specific light wavelengths to stimulate cellular repair, reduce localized inflammatory markers, and alleviate musculoskeletal discomfort.",
    clinicalUse: "Used as an adjunct in selected rehabilitation programs according to clinical assessment for tendinopathies, acute sprains, and joint pain.",
    benefits: ["Cellular energy support", "Tissue healing acceleration", "Non-invasive & comfortable"]
  },
  {
    id: "pemf",
    name: "PEMF Therapy",
    shortTag: "Pulsed Electromagnetic Field",
    description: "Employs pulsed electromagnetic frequencies that penetrate deep into bone and soft tissue to support cellular regeneration.",
    clinicalUse: "Pulsed electromagnetic field-based modality that may be incorporated in selected rehabilitation settings for delayed union fractures and chronic inflammation.",
    benefits: ["Deep tissue penetration", "Supports bone & soft tissue health", "Pain-free modality"]
  },
  {
    id: "ultrasound",
    name: "Therapeutic Ultrasound",
    shortTag: "Deep Acoustic Therapy",
    description: "High-frequency sound waves provide deep thermal and mechanical micro-massage to soften scar tissue and improve local tissue extensibility.",
    clinicalUse: "A modality that may be used selectively within a broader physiotherapy plan for muscle spasms, ligament sprains, and tendon stiffness.",
    benefits: ["Improves blood flow", "Enhances collagen extensibility", "Relieves muscle spasms"]
  },
  {
    id: "tens",
    name: "TENS Therapy",
    shortTag: "Neuromuscular Pain Modulation",
    description: "Transcutaneous electrical nerve stimulation activates sensory gate-control mechanisms to relieve acute and chronic neuropathic and musculoskeletal pain.",
    clinicalUse: "Electrical stimulation that may be used as an adjunct for symptom management in suitable patients to enable early active movement.",
    benefits: ["Drug-free pain modulation", "Stimulates natural endorphins", "Immediate symptom easing"]
  },
  {
    id: "infrared",
    name: "Infrared Therapy",
    shortTag: "Deep Thermal Modality",
    description: "Soothing thermal therapy that penetrates deep into muscular layers, inducing vasodilation, easing rigid tissues, and preparing joints for manual therapy.",
    clinicalUse: "A thermal modality that may be used as part of selected treatment plans to relieve back stiffness, muscle spasms, and chronic aches.",
    benefits: ["Promotes microcirculation", "Relaxes tight musculature", "Prepares tissues for exercise"]
  },
  {
    id: "pneumatic",
    name: "Pneumatic Compression",
    shortTag: "Dynamic Sequential Compression",
    description: "Specialized multi-chamber compression sleeves deliver sequential pressure waves to accelerate venous return, clear metabolic waste, and relieve swelling.",
    clinicalUse: "Compression-based therapy used in selected rehabilitation and recovery contexts for post-surgical edema and athletic recovery.",
    benefits: ["Rapid edema reduction", "Lymphedema support", "Enhanced athletic recovery"]
  },
  {
    id: "cryotherapy",
    name: "Cryotherapy",
    shortTag: "Targeted Cold Therapy",
    description: "Controlled application of cold temperature to reduce vascular permeability, blunt nerve conduction velocity, and control acute trauma swelling.",
    clinicalUse: "Cold therapy used selectively for symptom or swelling management following acute sports sprains or post-operative joint flare-ups.",
    benefits: ["Rapid acute pain relief", "Controls tissue swelling", "Vasoconstrictive control"]
  },
  {
    id: "wax",
    name: "Wax Therapy (Paraffin Bath)",
    shortTag: "Thermal Paraffin Soak",
    description: "Warm medical paraffin wax envelops arthritic or stiff extremities, delivering sustained moist heat deep into small joints of the hands and feet.",
    clinicalUse: "Thermal treatment commonly used for selected hand/foot stiffness presentations such as rheumatoid arthritis and post-fracture joint tightness.",
    benefits: ["Eases small joint stiffness", "Softens superficial scar tissue", "Deep soothing warmth"]
  },
  {
    id: "traction",
    name: "Cervical & Lumbar Traction",
    shortTag: "Motorized Spinal Decompression",
    description: "Precise, calibrated mechanical distraction of spinal vertebrae designed to widen intervertebral foramina and decompress nerve roots.",
    clinicalUse: "May be considered for selected patients following assessment; not appropriate for every spinal presentation (e.g. cervical radiculopathy).",
    benefits: ["Reduces disc pressure", "Relieves nerve root impingement", "Smooth motorized control"]
  },
  {
    id: "suspension",
    name: "Suspension / Exercise Therapy",
    shortTag: "Gravity-Neutral Retraining",
    description: "Elastic sling and suspension pulley system that offsets body weight, enabling pain-free active movement and core neuromuscular recruitment.",
    clinicalUse: "Supports assisted, progressive and functional exercise in early post-op recovery and neurological gait training.",
    benefits: ["Gravity-assisted active exercise", "Zero joint impact", "Progressive kinetic challenge"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-nikunj-joshi",
    name: "Dr. Nikunj Arvindkumar Joshi",
    qualification: "MPT – Orthopaedics | Fellowship in Sports Physiotherapy",
    designation: "Founder / Director — Keshav Advanced Physiotherapy Center",
    experience: "12+ Years Clinical Excellence",
    image: "/images/dr_nikunj.webp",
    bio: "Dr. Nikunj Joshi leads the clinic's physiotherapy and rehabilitation vision, with a clinical focus centered on orthopaedic rehabilitation, sports physiotherapy, biomechanics-oriented assessment, manual therapy, and exercise-based rehabilitation. He is deeply committed to ethical, evidence-grounded patient recovery.",
    clinicalFocus: [
      "Orthopaedic physiotherapy & joint recovery",
      "Spine and musculoskeletal rehabilitation",
      "Sports injury rehabilitation & return-to-play",
      "Biomechanics and functional movement assessment",
      "Manual therapy & joint mobilisations",
      "Exercise-based rehabilitation",
      "Post-operative orthopaedic rehabilitation"
    ],
    quote: "My approach to physiotherapy is centered on understanding the patient's movement, functional limitations and rehabilitation goals. Treatment is selected after assessment and progressed according to the patient's response and functional needs."
  },
  {
    id: "dr-priyanshi-vani",
    name: "Dr. Priyanshi D. Vani",
    qualification: "MPT – Sports Physiotherapy",
    designation: "Clinical Partner — Keshav Advanced Physiotherapy Center",
    experience: "Post-Graduate Sports Physiotherapist",
    image: "/images/dr_priyanshi.webp",
    bio: "Dr. Priyanshi D. Vani is part of the clinic's professional leadership team with a postgraduate qualification in sports physiotherapy. Her profile focuses on sports rehabilitation, exercise-based recovery, return-to-activity planning, and individualized patient care, keeping all claims strictly grounded in verified clinical experience.",
    clinicalFocus: [
      "Sports physiotherapy & athletic conditioning",
      "Musculoskeletal rehabilitation & injury triage",
      "Exercise prescription & progressive loading",
      "Functional rehabilitation & gait mechanics",
      "Return-to-activity and return-to-sport planning",
      "Women's musculoskeletal and posture health"
    ],
    quote: "Recovery is not just about relieving pain today; it is about building resilient strength and movement confidence so you can return to the activities you love without fear."
  }
];

export const CLINICAL_AWARDS: AwardItem[] = [
  {
    id: "delhi-aiims-award",
    title: "National Award at AIIMS New Delhi",
    subtitle: "Distinguished Physiotherapy Excellence",
    organization: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    badge: "National Honour",
    image: "/images/delhi_aiims_award.webp",
    description: "Honoured at AIIMS New Delhi in recognition of dedicated clinical service, superior patient rehabilitation outcomes, and evidence-grounded physiotherapy practice."
  },
  {
    id: "clinical-excellence-award",
    title: "Physiotherapy Clinical Excellence Award",
    subtitle: "Excellence in Patient Recovery & Care",
    organization: "Physiotherapy Leadership Forum",
    badge: "Excellence Award",
    image: "/images/award.webp",
    description: "Felicitated for clinical dedication, patient-first care ethics, and outstanding musculoskeletal and sports injury rehabilitation outcomes."
  },
  {
    id: "media-news-coverage",
    title: "Prominent Media & News Spotlight",
    subtitle: "Featured Clinical Milestones",
    organization: "Leading Press & Media Publications",
    badge: "Media Coverage",
    image: "/images/award_news.webp",
    description: "Highlighted in regional news press for introducing advanced non-invasive electrotherapy technology, community outreach, and compassionate home care."
  }
];

export const TEAM_PHILOSOPHY = "Our team works toward individualized, ethical and patient-centered rehabilitation. We combine clinical assessment, education, active exercise, manual therapy and appropriate physiotherapy modalities according to each patient's presentation and goals.";

export const PATIENT_JOURNEY = [
  {
    step: "01",
    title: "BOOK",
    subtitle: "Simple & Seamless",
    desc: "Patient contacts the clinic by phone, WhatsApp, or through our quick appointment booking form. Our coordinator confirms your convenient slot for either Center or Home Physiotherapy."
  },
  {
    step: "02",
    title: "ASSESS",
    subtitle: "Clinical & Functional",
    desc: "Physiotherapist takes detailed medical history, evaluates symptoms, pain behaviour, joint mobility, muscle strength, and movement limitations to pinpoint the root cause."
  },
  {
    step: "03",
    title: "PLAN",
    subtitle: "Transparent Goals",
    desc: "An individualized rehabilitation plan is explained in detail, including expected milestones, recovery duration, and home care strategies tailored to your lifestyle."
  },
  {
    step: "04",
    title: "TREAT",
    subtitle: "Active & Supportive Care",
    desc: "Treatment combines hands-on manual therapy, targeted therapeutic exercises, movement retraining, posture education, and supportive advanced modalities when clinically indicated."
  },
  {
    step: "05",
    title: "PROGRESS",
    subtitle: "Reassess & Self-Manage",
    desc: "Progress is continuously reassessed, loads are progressively challenged, and programs are adjusted toward total functional independence and recurrence prevention."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you provide both center and home physiotherapy?",
    answer: "Yes. Keshav Advanced Physiotherapy Center provides center-based physiotherapy at our Ghodasar clinic and home physiotherapy visits for suitable patients across South Ahmedabad who have mobility limitations or are recovering from surgery.",
    category: "General"
  },
  {
    question: "What conditions do you treat?",
    answer: "The clinic provides physiotherapy for a broad range of orthopaedic, musculoskeletal, sports, neurological, and post-operative rehabilitation needs. This includes back pain, sciatica, neck spondylosis, frozen shoulder, tennis elbow, knee osteoarthritis, ligament tears, stroke, and joint replacements.",
    category: "Treatments"
  },
  {
    question: "Will I receive the same treatment every session?",
    answer: "Not necessarily. Treatment can be modified or progressed according to your changing symptoms, clinical findings, functional goals, and how your body responds to therapy.",
    category: "Sessions"
  },
  {
    question: "Do you use machines in every treatment?",
    answer: "No. Modalities are selected strictly when clinically appropriate. Active exercise, education, manual therapy, and functional rehabilitation are the central, most important pillars of your care.",
    category: "Treatments"
  },
  {
    question: "Do you provide home exercises?",
    answer: "Yes. An individualized home exercise program is provided when appropriate to reinforce gains and support continuous rehabilitation between your scheduled clinic or home sessions.",
    category: "Sessions"
  },
  {
    question: "Do you provide post-operative rehabilitation?",
    answer: "Yes. Rehabilitation is provided according to your specific surgical procedure, healing stage, and orthopaedic precautions (e.g. knee replacements, ligament reconstructions, fracture union).",
    category: "Treatments"
  },
  {
    question: "Do you treat sports injuries?",
    answer: "Yes. Comprehensive sports injury assessment, load modification, biomechanical screening, and sport-specific return-to-play rehabilitation are available under our sports physiotherapy specialists.",
    category: "Treatments"
  },
  {
    question: "Can I consult a physiotherapist directly?",
    answer: "For many musculoskeletal and mobility concerns, patients can consult a physiotherapist directly. Some complex medical or post-operative situations may require coordination with your treating doctor or orthopaedic surgeon.",
    category: "General"
  },
  {
    question: "What areas do you cover for home physiotherapy?",
    answer: "Our home physiotherapy team covers Ghodasar, Maninagar, Isanpur, Vatva, Kankaria, C.T.M, Jasodanagar, and adjacent South Ahmedabad localities. Physiotherapists are assigned based on availability, proximity, and appropriate clinical specialty.",
    category: "Home Visits"
  },
  {
    question: "How should I dress for my physiotherapy appointment?",
    answer: "Please wear loose, comfortable clothing (such as track pants, shorts, or a comfortable t-shirt) that allows easy access to the area being examined (e.g., knee, shoulder, or back) and permits free movement.",
    category: "Sessions"
  }
];

export const TESTIMONIALS = [
  {
    name: "Ramesh Patel",
    location: "Ghodasar, Ahmedabad",
    condition: "Total Knee Replacement Recovery",
    text: "After my knee replacement, traveling was impossible. Dr. Nikunj and the home visit team visited my residence daily. Their gentle guidance and structured walking retraining helped me walk without a stick in just 4 weeks. Extremely grateful!",
    rating: 5
  },
  {
    name: "Pooja Shah",
    location: "Maninagar, Ahmedabad",
    condition: "Cervical Pain & Desk Posture Strain",
    text: "Long IT work hours caused constant neck stiffness and headaches. Dr. Priyanshi did an amazing ergonomic and postural assessment. Combining manual therapy with targeted neck exercises completely relieved my tension.",
    rating: 5
  },
  {
    name: "Ketan Mehta",
    location: "Isanpur, Ahmedabad",
    condition: "Rotator Cuff & Frozen Shoulder",
    text: "I couldn't lift my arm to wear a shirt. Unlike other places that just put machines, Keshav Clinic worked on joint mobilization, stretching, and progressive strengthening. My shoulder movement is almost 100% back.",
    rating: 5
  },
  {
    name: "Deepak Trivedi",
    location: "Kankaria, Ahmedabad",
    condition: "Stroke Neuro Rehabilitation",
    text: "My father had balance and walking difficulties after a stroke. The therapists at Keshav Center showed incredible patience and clinical skill on the parallel bars. He has regained his confidence to walk around our home.",
    rating: 5
  }
];
