export interface HealthPackage {
  name: string;
  summary: string;
  includes: string[];
}

export interface Investigation {
  name: string;
  category: string;
  kind: "Laboratory test" | "Ultrasound scan";
}

export const healthPackages: HealthPackage[] = [
  {
    name: "Wellness Package",
    summary: "A broad check-up for anyone interested in routine health screening.",
    includes: ["Full blood count", "Fasting blood sugar", "Lipid profile", "Liver and kidney function", "Urinalysis and stool examination", "Hepatitis B & C, HIV and syphilis screening"],
  },
  {
    name: "STI Screening Package",
    summary: "Sexual health screening for people with symptoms or possible exposure.",
    includes: ["HIV I & II", "Hepatitis B & C", "Syphilis (VDRL)", "Urinalysis"],
  },
  {
    name: "Domestic Staff / House-Help Screening",
    summary: "Screening for domestic staff, house-helps, cooks and drivers.",
    includes: ["Full blood count", "Stool examination", "Hepatitis B & C", "HIV and syphilis screening", "Urinalysis"],
  },
  {
    name: "New Employee Screening",
    summary: "A screening package for employees joining a new organisation.",
    includes: ["Full blood count", "HIV screening", "Hepatitis B & C", "Syphilis (VDRL)", "Urinalysis and stool examination"],
  },
  {
    name: "Couples Package",
    summary: "Health checks for couples, with general or STI-focused screening.",
    includes: ["HIV I & II", "Hepatitis B & C", "Blood group and genotype", "Syphilis (VDRL)", "Full blood count and urinalysis", "Semen analysis for males"],
  },
  {
    name: "Pre-marital Screening Package",
    summary: "Screening for couples preparing for marriage.",
    includes: ["HIV I & II", "Hepatitis B & C", "Blood group and genotype", "Syphilis (VDRL)", "Full blood count and urinalysis"],
  },
  {
    name: "Fertility Evaluation Package",
    summary: "Male and female investigations for couples facing conception challenges.",
    includes: ["Semen analysis", "Male hormonal profile", "Female hormonal profile"],
  },
  {
    name: "Diabetes Monitoring Package",
    summary: "Monitoring for people living with diabetes or at risk.",
    includes: ["Fasting blood sugar", "HbA1c", "Lipid profile", "Kidney function", "Urinalysis"],
  },
  {
    name: "Hypertension Package",
    summary: "A check-up package for people with high blood pressure.",
    includes: ["Electrolytes, urea and creatinine", "Lipid profile", "Full blood count", "Fasting blood sugar"],
  },
  {
    name: "Executive / Corporate Wellness",
    summary: "A comprehensive health check for business executives, managers or clients.",
    includes: ["Full blood count, fasting blood sugar and HbA1c", "Lipid, liver and kidney function", "Thyroid function", "Hepatitis B & C and HIV I & II", "Urinalysis and stool examination", "PSA for men over 40"],
  },
  {
    name: "Thyroid Function Package",
    summary: "Thyroid investigations for symptoms or a history of thyroid disorder.",
    includes: ["TSH", "T3", "T4"],
  },
  {
    name: "Kidney Health Package",
    summary: "Kidney screening for people with hypertension, diabetes or kidney risk.",
    includes: ["Kidney function: urea, creatinine and electrolytes", "Urinalysis"],
  },
  {
    name: "Liver Function Package",
    summary: "A liver check-up, including for people on long-term medication or with hepatitis.",
    includes: ["ALT", "AST", "ALP", "Bilirubin", "Gamma GT", "Albumin"],
  },
  {
    name: "Geriatric / Senior Citizen Package",
    summary: "Health screening for older adults.",
    includes: ["Full blood count", "Fasting blood sugar", "Lipid profile", "PSA for men", "Liver and kidney function", "Urinalysis"],
  },
  {
    name: "Pediatric Health Screening",
    summary: "Screening for children, including school health and general wellness checks.",
    includes: ["Full blood count", "Urinalysis", "Stool examination", "Malaria parasite", "Blood group and genotype"],
  },
];

export const signaturePackages: HealthPackage[] = [
  {
    name: "Silver Signature",
    summary: "The Executive / Corporate Wellness Package with an appropriate ultrasound scan.",
    includes: ["Complete executive wellness investigations", "One appropriate ultrasound scan", "PSA for men aged 40 and above"],
  },
  {
    name: "Gold Signature",
    summary: "Executive wellness investigations with added blood group and genotype screening.",
    includes: ["Complete executive wellness investigations", "Blood group and genotype", "Up to two appropriate ultrasound scans"],
  },
  {
    name: "Platinum Signature",
    summary: "Executive wellness investigations with a specialised investigation of your choice.",
    includes: ["Complete executive wellness investigations", "Choose a hormonal profile or semen analysis", "Up to two appropriate ultrasound scans"],
  },
];

export const investigations: Investigation[] = [
  { name: "Full Blood Count", category: "Blood & infection", kind: "Laboratory test" },
  { name: "Packed Cell Volume", category: "Blood & infection", kind: "Laboratory test" },
  { name: "HB Genotype", category: "Blood & infection", kind: "Laboratory test" },
  { name: "Blood Grouping", category: "Blood & infection", kind: "Laboratory test" },
  { name: "ESR", category: "Blood & infection", kind: "Laboratory test" },
  { name: "Malaria Parasite (MP)", category: "Blood & infection", kind: "Laboratory test" },
  { name: "VDRL", category: "Blood & infection", kind: "Laboratory test" },
  { name: "Hepatitis B", category: "Blood & infection", kind: "Laboratory test" },
  { name: "Hepatitis C", category: "Blood & infection", kind: "Laboratory test" },
  { name: "Blood Pregnancy Test (PT)", category: "Blood & infection", kind: "Laboratory test" },
  { name: "HIV Screening", category: "Blood & infection", kind: "Laboratory test" },
  { name: "H. Pylori (Serum)", category: "Blood & infection", kind: "Laboratory test" },
  { name: "Blood Microfilaria", category: "Blood & infection", kind: "Laboratory test" },
  { name: "Blood Film", category: "Blood & infection", kind: "Laboratory test" },
  { name: "E/U/Cr", category: "Kidney & electrolytes", kind: "Laboratory test" },
  { name: "Electrolyte", category: "Kidney & electrolytes", kind: "Laboratory test" },
  { name: "Urea", category: "Kidney & electrolytes", kind: "Laboratory test" },
  { name: "Creatinine", category: "Kidney & electrolytes", kind: "Laboratory test" },
  { name: "Calcium (Serum)", category: "Kidney & electrolytes", kind: "Laboratory test" },
  { name: "Sodium (Na)", category: "Kidney & electrolytes", kind: "Laboratory test" },
  { name: "Potassium (K+)", category: "Kidney & electrolytes", kind: "Laboratory test" },
  { name: "Liver Function Test", category: "Liver health", kind: "Laboratory test" },
  { name: "Albumin", category: "Liver health", kind: "Laboratory test" },
  { name: "Bilirubin (Total & Direct)", category: "Liver health", kind: "Laboratory test" },
  { name: "Total Protein", category: "Liver health", kind: "Laboratory test" },
  { name: "Gamma GT", category: "Liver health", kind: "Laboratory test" },
  { name: "AST (SGOT)", category: "Liver health", kind: "Laboratory test" },
  { name: "ALT (SGPT)", category: "Liver health", kind: "Laboratory test" },
  { name: "ALP", category: "Liver health", kind: "Laboratory test" },
  { name: "Lipid Profile", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "LDL", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "HDL", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "Total Cholesterol", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "Triglycerides", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "Fasting Blood Sugar (FBS)", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "Random Blood Sugar (RBS)", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "HbA1c", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "Oral Glucose Tolerance Test (OGTT)", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "2HPP", category: "Heart & diabetes", kind: "Laboratory test" },
  { name: "Hormonal Profile (Female)", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Hormonal Profile (Male)", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "LH", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "FSH", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Prolactin", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Estradiol", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Progesterone", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Testosterone", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "PSA", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Seminal Fluid Analysis (SFA)", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Seminal Fluid Analysis (SFA + MCS)", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "T3", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "T4", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "TSH", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Thyroid Function Test (TFT)", category: "Hormones & fertility", kind: "Laboratory test" },
  { name: "Urinalysis", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Urine Microscopy", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Urine M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Stool Microscopy", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Stool M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "HVS M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Ear Swab M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "ECS M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Sputum M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Urethra Swab M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Wound Swab M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Throat Swab M/C/S", category: "Urine, stool & cultures", kind: "Laboratory test" },
  { name: "Obstetric Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Pelvic Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Abdominal Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Abdomino-Pelvic Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Trans-vaginal Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Bio-physical Profile Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Breast Scan (one)", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Breast Scan (both)", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Prostate Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Thyroid Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "KUB Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Scrotal Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Small Parts Scan", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Follicular Tracking (3 days)", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Follicular Tracking (5 days)", category: "Ultrasound scans", kind: "Ultrasound scan" },
  { name: "Anomaly Scan (Foetal)", category: "Ultrasound scans", kind: "Ultrasound scan" },
];

export const serviceCatalog: Investigation[] = [
  ...healthPackages.map(({ name }) => ({ name, category: "Health packages", kind: "Laboratory test" as const })),
  ...signaturePackages.map(({ name }) => ({ name, category: "Health packages", kind: "Laboratory test" as const })),
  ...investigations,
];

export const appointmentKinds = ["Laboratory test", "Health package", "Ultrasound scan"] as const;
