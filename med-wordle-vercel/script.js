const CASES = [
  {
    "answer": "Myocardial infarction",
    "accepted": [
      "myocardial infarction",
      "mi",
      "heart attack"
    ],
    "clues": [
      "Crushing chest pain is a classic presenting symptom.",
      "Pain may radiate to the left arm or jaw.",
      "Troponin is usually elevated.",
      "ECG may show ST-segment changes.",
      "It is usually caused by acute coronary artery occlusion.",
      "Rapid reperfusion therapy is time-sensitive."
    ]
  },
  {
    "answer": "Stable angina",
    "accepted": [
      "stable angina"
    ],
    "clues": [
      "This condition causes chest discomfort with exertion.",
      "Symptoms improve with rest or nitroglycerin.",
      "There is usually transient myocardial ischemia without necrosis.",
      "Troponin is typically normal.",
      "Atherosclerotic coronary narrowing is the usual cause.",
      "It reflects a supply-demand mismatch during activity."
    ]
  },
  {
    "answer": "Pericarditis",
    "accepted": [
      "pericarditis"
    ],
    "clues": [
      "Chest pain is often sharp and pleuritic.",
      "Pain may improve when sitting forward.",
      "A friction rub can be heard on exam.",
      "ECG can show diffuse ST elevation.",
      "Inflammation involves the sac around the heart.",
      "A recent viral illness may precede it."
    ]
  },
  {
    "answer": "Aortic dissection",
    "accepted": [
      "aortic dissection"
    ],
    "clues": [
      "Severe sudden pain is a hallmark.",
      "The pain is often described as tearing.",
      "Blood pressure or pulses may differ between limbs.",
      "It can involve the ascending or descending aorta.",
      "Hypertension is a major risk factor.",
      "This is a vascular emergency."
    ]
  },
  {
    "answer": "Heart failure",
    "accepted": [
      "heart failure"
    ],
    "clues": [
      "Patients often report breathlessness and fatigue.",
      "Peripheral edema may be present.",
      "Orthopnea and paroxysmal nocturnal dyspnea are classic clues.",
      "BNP can be elevated.",
      "Pulmonary crackles may be heard.",
      "The heart cannot meet the body’s circulatory demands."
    ]
  },
  {
    "answer": "Atrial fibrillation",
    "accepted": [
      "atrial fibrillation",
      "af",
      "afib",
      "a fib"
    ],
    "clues": [
      "This rhythm is irregularly irregular.",
      "Palpitations are a common complaint.",
      "The atria lose coordinated contraction.",
      "It increases stroke risk.",
      "Anticoagulation is often considered.",
      "ECG shows absent discrete P waves."
    ]
  },
  {
    "answer": "Endocarditis",
    "accepted": [
      "endocarditis"
    ],
    "clues": [
      "Fever can be the first clue.",
      "A new or changing murmur may be present.",
      "It often affects previously abnormal or prosthetic valves.",
      "Blood cultures are important.",
      "Vegetations form on endocardial surfaces.",
      "IV drug use can be a risk factor."
    ]
  },
  {
    "answer": "Hypertrophic cardiomyopathy",
    "accepted": [
      "hypertrophic cardiomyopathy"
    ],
    "clues": [
      "Young people may present with syncope or exertional symptoms.",
      "A systolic murmur may increase with Valsalva.",
      "There is abnormal thickening of the ventricular septum.",
      "Family history can be relevant.",
      "It is an important cause of sudden cardiac death in athletes.",
      "The outflow tract may become obstructed."
    ]
  },
  {
    "answer": "Pulmonary embolism",
    "accepted": [
      "pulmonary embolism"
    ],
    "clues": [
      "Acute dyspnea is common.",
      "Pleuritic chest pain may occur.",
      "Tachycardia is often present.",
      "Recent immobilization or surgery raises suspicion.",
      "The problem is usually a thrombus lodging in pulmonary arteries.",
      "This can be life-threatening if massive."
    ]
  },
  {
    "answer": "Deep vein thrombosis",
    "accepted": [
      "deep vein thrombosis"
    ],
    "clues": [
      "A unilateral swollen painful leg is a classic clue.",
      "Risk increases with immobility.",
      "The calf may be warm and tender.",
      "Ultrasound is commonly used for diagnosis.",
      "It can embolize to the lungs.",
      "Venous thrombosis is the core problem."
    ]
  },
  {
    "answer": "Asthma",
    "accepted": [
      "asthma"
    ],
    "clues": [
      "Episodes of wheeze and shortness of breath recur.",
      "Symptoms may be triggered by exercise or allergens.",
      "Airflow obstruction is usually reversible.",
      "A bronchodilator can improve symptoms quickly.",
      "Inflammation affects the airways.",
      "Nighttime cough is common."
    ]
  },
  {
    "answer": "COPD",
    "accepted": [
      "copd",
      "chronic obstructive pulmonary disease"
    ],
    "clues": [
      "Chronic cough and dyspnea are common.",
      "Smoking is a major risk factor.",
      "Airflow limitation is not fully reversible.",
      "Patients may have chronic bronchitis, emphysema, or both.",
      "Exacerbations are often triggered by infections.",
      "Spirometry shows obstructive physiology."
    ]
  },
  {
    "answer": "Pneumonia",
    "accepted": [
      "pneumonia"
    ],
    "clues": [
      "Fever and cough often occur together.",
      "Sputum production may be present.",
      "Crackles may be heard on exam.",
      "Consolidation can appear on chest imaging.",
      "Infection affects the lung parenchyma.",
      "Shortness of breath can accompany it."
    ]
  },
  {
    "answer": "Tuberculosis",
    "accepted": [
      "tuberculosis"
    ],
    "clues": [
      "Chronic cough is a common feature.",
      "Weight loss and night sweats raise suspicion.",
      "Hemoptysis may occur.",
      "Risk is increased in immunosuppression.",
      "The causative organism is acid-fast.",
      "The lungs are commonly affected, but other sites can be involved."
    ]
  },
  {
    "answer": "Pneumothorax",
    "accepted": [
      "pneumothorax"
    ],
    "clues": [
      "Sudden unilateral pleuritic chest pain may occur.",
      "Breath sounds may be reduced on one side.",
      "It can happen spontaneously in tall thin young people.",
      "A tension form can cause hemodynamic compromise.",
      "Air accumulates in the pleural space.",
      "This can collapse a lung."
    ]
  },
  {
    "answer": "Pleural effusion",
    "accepted": [
      "pleural effusion"
    ],
    "clues": [
      "Breathlessness may develop gradually.",
      "Percussion can be stony dull over the affected area.",
      "Breath sounds may be decreased.",
      "Fluid accumulates outside the lung.",
      "Causes include heart failure, infection, and malignancy.",
      "Imaging shows blunting at the costophrenic angle."
    ]
  },
  {
    "answer": "Obstructive sleep apnea",
    "accepted": [
      "obstructive sleep apnea"
    ],
    "clues": [
      "Loud snoring is a clue.",
      "Daytime sleepiness is common.",
      "Obesity is a frequent association.",
      "Airway collapse occurs during sleep.",
      "It can worsen hypertension.",
      "Sleep studies help confirm it."
    ]
  },
  {
    "answer": "ARDS",
    "accepted": [
      "ards",
      "acute respiratory distress syndrome"
    ],
    "clues": [
      "Severe hypoxemia can develop rapidly.",
      "Patients are often critically ill.",
      "Diffuse bilateral infiltrates appear on imaging.",
      "It can follow sepsis, trauma, or aspiration.",
      "There is noncardiogenic pulmonary edema.",
      "Mechanical ventilation is often required."
    ]
  },
  {
    "answer": "Sarcoidosis",
    "accepted": [
      "sarcoidosis"
    ],
    "clues": [
      "This inflammatory disease can affect multiple organs.",
      "Young adults may present with cough or dyspnea.",
      "Bilateral hilar lymphadenopathy is a classic imaging clue.",
      "Noncaseating granulomas are characteristic.",
      "It commonly involves the lungs.",
      "Erythema nodosum may be seen."
    ]
  },
  {
    "answer": "Lung cancer",
    "accepted": [
      "lung cancer"
    ],
    "clues": [
      "Persistent cough can be a presenting symptom.",
      "Hemoptysis may occur.",
      "Smoking is a major risk factor.",
      "Weight loss can accompany advanced disease.",
      "A mass may be seen on chest imaging.",
      "It is a malignant tumor arising in the lung."
    ]
  },
  {
    "answer": "Appendicitis",
    "accepted": [
      "appendicitis"
    ],
    "clues": [
      "Pain often starts near the umbilicus.",
      "It then classically migrates to the right lower quadrant.",
      "Nausea and low-grade fever are common.",
      "McBurney point tenderness is a classic finding.",
      "The appendix becomes inflamed.",
      "Surgery is often performed."
    ]
  },
  {
    "answer": "Cholecystitis",
    "accepted": [
      "cholecystitis"
    ],
    "clues": [
      "Right upper quadrant pain is common.",
      "The pain may follow a fatty meal.",
      "Fever can be present.",
      "Murphy sign may be positive.",
      "Gallstones often underlie it.",
      "The gallbladder is inflamed."
    ]
  },
  {
    "answer": "Pancreatitis",
    "accepted": [
      "pancreatitis"
    ],
    "clues": [
      "Severe epigastric pain can radiate to the back.",
      "Nausea and vomiting are common.",
      "Lipase is often elevated.",
      "Alcohol and gallstones are common causes.",
      "The pancreas becomes inflamed.",
      "Pain may improve when leaning forward."
    ]
  },
  {
    "answer": "Peptic ulcer disease",
    "accepted": [
      "peptic ulcer disease"
    ],
    "clues": [
      "Epigastric pain is a common complaint.",
      "Symptoms may relate to meals.",
      "NSAID use is a risk factor.",
      "Helicobacter pylori is strongly associated.",
      "An ulcer forms in the stomach or duodenum.",
      "Complications include bleeding or perforation."
    ]
  },
  {
    "answer": "GERD",
    "accepted": [
      "gerd",
      "gastroesophageal reflux disease",
      "gord"
    ],
    "clues": [
      "Heartburn is a classic symptom.",
      "Symptoms may worsen after meals or when lying down.",
      "A sour taste can occur.",
      "Acid suppression often helps.",
      "The problem is reflux of stomach contents into the esophagus.",
      "Chronic cases can cause esophagitis."
    ]
  },
  {
    "answer": "Celiac disease",
    "accepted": [
      "celiac disease"
    ],
    "clues": [
      "Chronic diarrhea or bloating may occur.",
      "Iron deficiency can develop.",
      "Symptoms are triggered by gluten exposure.",
      "Villous atrophy affects the small bowel.",
      "There may be associated dermatitis herpetiformis.",
      "It is an immune-mediated enteropathy."
    ]
  },
  {
    "answer": "Crohn disease",
    "accepted": [
      "crohn disease"
    ],
    "clues": [
      "This inflammatory bowel disease can affect any part of the GI tract.",
      "Abdominal pain and diarrhea are common.",
      "Weight loss may occur.",
      "Skip lesions are characteristic.",
      "Transmural inflammation can cause fistulas.",
      "The terminal ileum is a common site."
    ]
  },
  {
    "answer": "Ulcerative colitis",
    "accepted": [
      "ulcerative colitis"
    ],
    "clues": [
      "This inflammatory bowel disease starts in the rectum.",
      "Bloody diarrhea is common.",
      "Inflammation is continuous rather than skip-like.",
      "Disease is limited to the colon.",
      "There is increased risk of colorectal cancer with longstanding disease.",
      "Toxic megacolon is a feared complication."
    ]
  },
  {
    "answer": "Irritable bowel syndrome",
    "accepted": [
      "irritable bowel syndrome"
    ],
    "clues": [
      "Abdominal discomfort is recurrent.",
      "Symptoms are associated with changes in stool form or frequency.",
      "There are no structural lesions causing it.",
      "Stress can worsen symptoms.",
      "It is a functional GI disorder.",
      "Patients often feel better after defecation."
    ]
  },
  {
    "answer": "Viral hepatitis",
    "accepted": [
      "viral hepatitis"
    ],
    "clues": [
      "Jaundice may develop.",
      "Liver enzymes can be elevated.",
      "Dark urine and fatigue may occur.",
      "The liver is inflamed.",
      "Different viruses can cause it.",
      "Transmission depends on the specific hepatitis type."
    ]
  },
  {
    "answer": "Cirrhosis",
    "accepted": [
      "cirrhosis"
    ],
    "clues": [
      "Chronic liver damage leads to scarring.",
      "Patients may develop ascites.",
      "Spider angiomas can be seen.",
      "Portal hypertension is a major consequence.",
      "Risk factors include alcohol misuse and chronic viral hepatitis.",
      "The liver architecture becomes nodular and fibrotic."
    ]
  },
  {
    "answer": "Diverticulitis",
    "accepted": [
      "diverticulitis"
    ],
    "clues": [
      "Left lower quadrant pain is common.",
      "Fever may be present.",
      "It usually occurs when diverticula become inflamed.",
      "Older adults are commonly affected.",
      "Complications include abscess or perforation.",
      "CT imaging is often used for evaluation."
    ]
  },
  {
    "answer": "Bowel obstruction",
    "accepted": [
      "bowel obstruction"
    ],
    "clues": [
      "Abdominal distension and vomiting are common.",
      "Colicky pain may occur.",
      "Patients may stop passing stool and flatus.",
      "Adhesions are a frequent cause.",
      "Dilated bowel loops can be seen on imaging.",
      "Intestinal contents cannot pass normally."
    ]
  },
  {
    "answer": "Mesenteric ischemia",
    "accepted": [
      "mesenteric ischemia"
    ],
    "clues": [
      "Pain can be severe and disproportionate to exam findings.",
      "Older adults with vascular disease are at risk.",
      "Atrial fibrillation can predispose to one cause.",
      "Lactate may rise.",
      "There is compromised blood flow to the intestines.",
      "This is an abdominal emergency."
    ]
  },
  {
    "answer": "Colon cancer",
    "accepted": [
      "colon cancer"
    ],
    "clues": [
      "Change in bowel habits may occur.",
      "Iron deficiency anemia can be a clue.",
      "Weight loss can develop.",
      "Occult blood may be present in stool.",
      "Screening colonoscopy helps detect it.",
      "It is a malignancy of the large intestine."
    ]
  },
  {
    "answer": "Type 1 diabetes mellitus",
    "accepted": [
      "type 1 diabetes mellitus",
      "type 1 diabetes",
      "t1dm",
      "type 1 dm"
    ],
    "clues": [
      "This often presents in childhood or adolescence.",
      "Polyuria and polydipsia are common.",
      "Weight loss may occur despite eating.",
      "Autoimmune destruction targets beta cells.",
      "Insulin is required for treatment.",
      "DKA can be the first presentation."
    ]
  },
  {
    "answer": "Type 2 diabetes mellitus",
    "accepted": [
      "type 2 diabetes mellitus",
      "type 2 diabetes",
      "t2dm",
      "type 2 dm"
    ],
    "clues": [
      "This is associated with insulin resistance.",
      "It is strongly linked to obesity.",
      "Polyuria and polydipsia may occur.",
      "Acanthosis nigricans can be a clue.",
      "Lifestyle change and oral agents are often used initially.",
      "Hyperglycemia develops gradually."
    ]
  },
  {
    "answer": "DKA",
    "accepted": [
      "dka",
      "diabetic ketoacidosis"
    ],
    "clues": [
      "Abdominal pain and vomiting can occur.",
      "Patients often have dehydration.",
      "Ketones are elevated.",
      "There is a high anion gap metabolic acidosis.",
      "It is a serious complication of insulin deficiency.",
      "Kussmaul breathing may be seen."
    ]
  },
  {
    "answer": "Hypothyroidism",
    "accepted": [
      "hypothyroidism"
    ],
    "clues": [
      "Fatigue and cold intolerance are common.",
      "Weight gain and constipation may occur.",
      "Skin can become dry.",
      "TSH is often elevated in primary disease.",
      "The thyroid is underactive.",
      "Bradycardia may be present."
    ]
  },
  {
    "answer": "Hyperthyroidism",
    "accepted": [
      "hyperthyroidism"
    ],
    "clues": [
      "Weight loss despite appetite can occur.",
      "Heat intolerance is common.",
      "Tremor and palpitations may be present.",
      "TSH is often suppressed.",
      "The thyroid is overactive.",
      "Atrial fibrillation can complicate it."
    ]
  },
  {
    "answer": "Graves disease",
    "accepted": [
      "graves disease"
    ],
    "clues": [
      "This is a common cause of thyrotoxicosis.",
      "Autoantibodies stimulate the thyroid receptor.",
      "Diffuse goiter can be present.",
      "Eye findings may occur.",
      "Pretibial myxedema is a classic association.",
      "It is an autoimmune disease."
    ]
  },
  {
    "answer": "Hashimoto thyroiditis",
    "accepted": [
      "hashimoto thyroiditis"
    ],
    "clues": [
      "This is a common cause of hypothyroidism.",
      "The thyroid may be firm and enlarged.",
      "Anti-TPO antibodies are often present.",
      "It is autoimmune in origin.",
      "Lymphocytic destruction affects the gland.",
      "Long-term underactivity develops."
    ]
  },
  {
    "answer": "Cushing syndrome",
    "accepted": [
      "cushing syndrome"
    ],
    "clues": [
      "Excess cortisol is the core problem.",
      "Patients may develop central obesity.",
      "Purple striae can be seen.",
      "Hyperglycemia and hypertension are common.",
      "Proximal muscle weakness may occur.",
      "Steroid exposure is one major cause."
    ]
  },
  {
    "answer": "Addison disease",
    "accepted": [
      "addison disease"
    ],
    "clues": [
      "Fatigue and weight loss can occur.",
      "Hypotension is common.",
      "Hyperpigmentation may be seen in primary disease.",
      "Hyponatremia and hyperkalemia can occur.",
      "There is adrenal insufficiency.",
      "The body lacks adequate cortisol, often also aldosterone."
    ]
  },
  {
    "answer": "Primary hyperparathyroidism",
    "accepted": [
      "primary hyperparathyroidism"
    ],
    "clues": [
      "Hypercalcemia is the key lab clue.",
      "Patients may have kidney stones.",
      "Bone pain or fractures can occur.",
      "PTH is inappropriately elevated.",
      "The parathyroid glands are overactive.",
      "Psychic overtones and abdominal groans are classic phrases."
    ]
  },
  {
    "answer": "SIADH",
    "accepted": [
      "siadh",
      "syndrome of inappropriate antidiuretic hormone secretion"
    ],
    "clues": [
      "Hyponatremia is central to the diagnosis.",
      "Patients can appear euvolemic.",
      "Urine is inappropriately concentrated.",
      "A lung malignancy is one possible cause.",
      "Excess ADH activity is the mechanism.",
      "Low serum osmolality is expected."
    ]
  },
  {
    "answer": "Diabetes insipidus",
    "accepted": [
      "diabetes insipidus"
    ],
    "clues": [
      "Patients have polyuria and polydipsia.",
      "Urine is very dilute.",
      "Hypernatremia can develop if water intake is limited.",
      "The problem relates to ADH deficiency or resistance.",
      "A water deprivation test can help evaluate it.",
      "Large volumes of free water are lost."
    ]
  },
  {
    "answer": "Pheochromocytoma",
    "accepted": [
      "pheochromocytoma"
    ],
    "clues": [
      "Episodic headaches may occur.",
      "Sweating and palpitations are common.",
      "Hypertension can be paroxysmal.",
      "Catecholamine excess drives the symptoms.",
      "The tumor is often in the adrenal medulla.",
      "Metanephrines are used in evaluation."
    ]
  },
  {
    "answer": "Acromegaly",
    "accepted": [
      "acromegaly"
    ],
    "clues": [
      "Coarsened facial features may develop slowly.",
      "Hands and feet can enlarge.",
      "Glucose intolerance may occur.",
      "Excess growth hormone is the cause.",
      "A pituitary adenoma is often responsible.",
      "IGF-1 is typically elevated."
    ]
  },
  {
    "answer": "Iron deficiency anemia",
    "accepted": [
      "iron deficiency anemia"
    ],
    "clues": [
      "Fatigue and pallor are common.",
      "Microcytic hypochromic cells are typical.",
      "Ferritin is usually low.",
      "Blood loss is a common cause.",
      "Pica can occur.",
      "Iron stores are depleted."
    ]
  },
  {
    "answer": "Vitamin B12 deficiency",
    "accepted": [
      "vitamin b12 deficiency"
    ],
    "clues": [
      "This anemia is usually macrocytic.",
      "Patients may have neuropathy.",
      "Glossitis can occur.",
      "Intrinsic factor problems can underlie it.",
      "The deficiency impairs DNA synthesis.",
      "Pernicious anemia is one cause."
    ]
  },
  {
    "answer": "Acute leukemia",
    "accepted": [
      "acute leukemia"
    ],
    "clues": [
      "Fatigue and infections may develop.",
      "Bruising can occur due to thrombocytopenia.",
      "Blasts appear in blood or marrow.",
      "Bone marrow failure is central.",
      "White cell counts can be high, low, or normal.",
      "This is a hematologic malignancy."
    ]
  },
  {
    "answer": "Lymphoma",
    "accepted": [
      "lymphoma"
    ],
    "clues": [
      "Painless lymph node enlargement may occur.",
      "B symptoms can be present.",
      "It arises from lymphoid tissue.",
      "Different subtypes exist, including Hodgkin and non-Hodgkin.",
      "Extranodal disease can occur.",
      "Malignant lymphocytes are involved."
    ]
  },
  {
    "answer": "Multiple myeloma",
    "accepted": [
      "multiple myeloma"
    ],
    "clues": [
      "Bone pain is a common complaint.",
      "Anemia and renal dysfunction may occur.",
      "Hypercalcemia can be present.",
      "A monoclonal protein is produced.",
      "Lytic bone lesions are classic.",
      "Plasma cells proliferate abnormally."
    ]
  },
  {
    "answer": "Hemophilia A",
    "accepted": [
      "hemophilia a"
    ],
    "clues": [
      "Bleeding into joints is a clue.",
      "This is often inherited in an X-linked pattern.",
      "PT is typically normal.",
      "aPTT is prolonged.",
      "Factor VIII is deficient.",
      "Deep tissue bleeding is more typical than mucosal bleeding."
    ]
  },
  {
    "answer": "Von Willebrand disease",
    "accepted": [
      "von willebrand disease",
      "vwd"
    ],
    "clues": [
      "Easy bruising or mucosal bleeding can occur.",
      "Heavy menstrual bleeding may be a clue.",
      "It is the most common inherited bleeding disorder.",
      "Platelet adhesion is impaired.",
      "aPTT may be normal or mildly prolonged.",
      "Deficiency or dysfunction of von Willebrand factor is central."
    ]
  },
  {
    "answer": "DIC",
    "accepted": [
      "dic",
      "disseminated intravascular coagulation"
    ],
    "clues": [
      "Bleeding and thrombosis can occur together.",
      "The condition can complicate sepsis or obstetric emergencies.",
      "Platelets are consumed.",
      "Fibrin degradation products rise.",
      "Coagulation becomes systemically activated.",
      "This is a consumptive coagulopathy."
    ]
  },
  {
    "answer": "Sickle cell disease",
    "accepted": [
      "sickle cell disease"
    ],
    "clues": [
      "Pain crises are common.",
      "Hemolytic anemia occurs.",
      "It is due to a hemoglobin mutation.",
      "Functional asplenia increases infection risk.",
      "Vaso-occlusion drives many complications.",
      "The abnormal hemoglobin polymerizes when deoxygenated."
    ]
  },
  {
    "answer": "Migraine",
    "accepted": [
      "migraine"
    ],
    "clues": [
      "Recurrent headaches are typical.",
      "Photophobia and nausea are common.",
      "Some patients have an aura.",
      "Triggers can include stress or sleep changes.",
      "The neurologic exam is usually normal between attacks.",
      "This is a primary headache disorder."
    ]
  },
  {
    "answer": "Tension headache",
    "accepted": [
      "tension headache"
    ],
    "clues": [
      "This headache is often described as band-like.",
      "Nausea is usually absent.",
      "It is often bilateral.",
      "Muscle tension and stress can contribute.",
      "It is the most common primary headache type.",
      "The pain is usually mild to moderate."
    ]
  },
  {
    "answer": "Cluster headache",
    "accepted": [
      "cluster headache"
    ],
    "clues": [
      "This headache is excruciating and unilateral.",
      "Attacks often occur in clusters over weeks.",
      "Autonomic features accompany the pain.",
      "A patient may pace rather than lie still.",
      "The pain is often around one eye.",
      "Tearing and nasal congestion can be present."
    ]
  },
  {
    "answer": "Stroke",
    "accepted": [
      "stroke"
    ],
    "clues": [
      "Sudden focal neurologic deficit is the key clue.",
      "Weakness or speech disturbance may occur.",
      "Time-sensitive evaluation is crucial.",
      "A vascular event in the brain is responsible.",
      "Imaging helps distinguish ischemic from hemorrhagic causes.",
      "FAST symptoms are commonly taught."
    ]
  },
  {
    "answer": "TIA",
    "accepted": [
      "tia",
      "transient ischemic attack"
    ],
    "clues": [
      "Neurologic deficits resolve completely.",
      "Symptoms can mimic stroke.",
      "It is a warning sign for future cerebrovascular events.",
      "The deficit is transient.",
      "Urgent risk-factor management is still important.",
      "No lasting infarction is expected by modern definition."
    ]
  },
  {
    "answer": "Subarachnoid hemorrhage",
    "accepted": [
      "subarachnoid hemorrhage"
    ],
    "clues": [
      "A sudden thunderclap headache is classic.",
      "Neck stiffness may occur.",
      "Ruptured berry aneurysm is a classic cause.",
      "This is a neurologic emergency.",
      "Blood enters the subarachnoid space.",
      "Patients may describe the worst headache of their life."
    ]
  },
  {
    "answer": "Epilepsy",
    "accepted": [
      "epilepsy"
    ],
    "clues": [
      "Recurrent unprovoked seizures define it.",
      "There may be focal or generalized events.",
      "Postictal confusion can follow some seizures.",
      "EEG can aid evaluation.",
      "The brain has an enduring predisposition to seizures.",
      "Antiseizure medications are often used."
    ]
  },
  {
    "answer": "Meningitis",
    "accepted": [
      "meningitis"
    ],
    "clues": [
      "Fever, headache, and neck stiffness form a classic triad.",
      "Photophobia can occur.",
      "This is infection of the meninges.",
      "CSF analysis is important.",
      "Altered mental status may develop.",
      "It can be bacterial, viral, or fungal."
    ]
  },
  {
    "answer": "Encephalitis",
    "accepted": [
      "encephalitis"
    ],
    "clues": [
      "Patients may have fever and confusion.",
      "Seizures can occur.",
      "Brain parenchyma is inflamed.",
      "HSV is a classic cause of a severe form.",
      "CSF and imaging can help.",
      "Personality or behavior changes may develop."
    ]
  },
  {
    "answer": "Parkinson disease",
    "accepted": [
      "parkinson disease"
    ],
    "clues": [
      "Resting tremor can be an early sign.",
      "Bradykinesia is a core feature.",
      "Rigidity may be present.",
      "Postural instability tends to develop later.",
      "There is degeneration of dopaminergic neurons.",
      "The substantia nigra is involved."
    ]
  },
  {
    "answer": "Multiple sclerosis",
    "accepted": [
      "multiple sclerosis"
    ],
    "clues": [
      "This disease often affects young adults.",
      "Symptoms are separated in time and space.",
      "Optic neuritis can occur.",
      "MRI shows demyelinating lesions.",
      "It is autoimmune in nature.",
      "The CNS myelin is attacked."
    ]
  },
  {
    "answer": "Guillain-Barre syndrome",
    "accepted": [
      "guillain-barre syndrome",
      "gbs",
      "guillain barre"
    ],
    "clues": [
      "Weakness often ascends from the legs upward.",
      "A recent infection may precede it.",
      "Reflexes are reduced or absent.",
      "Respiratory failure can occur in severe cases.",
      "It is an acute demyelinating polyradiculoneuropathy.",
      "CSF may show albuminocytologic dissociation."
    ]
  },
  {
    "answer": "Myasthenia gravis",
    "accepted": [
      "myasthenia gravis"
    ],
    "clues": [
      "Fatigable muscle weakness is characteristic.",
      "Ptosis or diplopia may occur.",
      "Symptoms worsen with use.",
      "The neuromuscular junction is affected.",
      "Autoantibodies often target acetylcholine receptors.",
      "The thymus can be involved."
    ]
  },
  {
    "answer": "Alzheimer disease",
    "accepted": [
      "alzheimer disease"
    ],
    "clues": [
      "Progressive memory impairment is common.",
      "It typically affects older adults.",
      "Daily functioning gradually declines.",
      "Language and visuospatial deficits can develop.",
      "This is the most common cause of dementia.",
      "Amyloid plaques and tau tangles are associated."
    ]
  },
  {
    "answer": "Bacterial vaginosis",
    "accepted": [
      "bacterial vaginosis"
    ],
    "clues": [
      "Vaginal discharge may be the presenting complaint.",
      "A fishy odor is a clue.",
      "The discharge is often thin and gray.",
      "The vaginal pH is elevated.",
      "Clue cells can be seen microscopically.",
      "This reflects a shift in vaginal flora rather than a classic STI."
    ]
  },
  {
    "answer": "Pelvic inflammatory disease",
    "accepted": [
      "pelvic inflammatory disease"
    ],
    "clues": [
      "Lower abdominal pain can occur.",
      "Cervical motion tenderness is a classic exam clue.",
      "Fever may be present.",
      "Ascending infection from the lower genital tract is involved.",
      "Chlamydia or gonorrhea are common pathogens.",
      "Untreated disease can affect fertility."
    ]
  },
  {
    "answer": "Ectopic pregnancy",
    "accepted": [
      "ectopic pregnancy"
    ],
    "clues": [
      "Early pregnancy with abdominal pain should raise concern.",
      "Vaginal bleeding may occur.",
      "A ruptured case can cause shock.",
      "The pregnancy implants outside the uterus.",
      "The fallopian tube is the most common site.",
      "This is an obstetric emergency."
    ]
  },
  {
    "answer": "Preeclampsia",
    "accepted": [
      "preeclampsia"
    ],
    "clues": [
      "This occurs after 20 weeks of pregnancy.",
      "Hypertension is central to the diagnosis.",
      "Proteinuria may be present.",
      "Headache or visual symptoms can suggest severe disease.",
      "The condition is pregnancy-specific.",
      "Magnesium sulfate may be used for seizure prevention."
    ]
  },
  {
    "answer": "Endometriosis",
    "accepted": [
      "endometriosis"
    ],
    "clues": [
      "Pelvic pain is common.",
      "Symptoms may worsen around menstruation.",
      "Infertility can be associated.",
      "Ectopic endometrial tissue is present.",
      "Dyspareunia can occur.",
      "The lesions are outside the uterine cavity."
    ]
  },
  {
    "answer": "PCOS",
    "accepted": [
      "pcos",
      "polycystic ovary syndrome"
    ],
    "clues": [
      "Irregular menstrual cycles are common.",
      "Hyperandrogenic features may be present.",
      "Insulin resistance is often associated.",
      "Polycystic ovaries may be seen on ultrasound.",
      "Infertility can be a concern.",
      "This endocrine disorder affects ovulation."
    ]
  },
  {
    "answer": "Torsion of the testis",
    "accepted": [
      "torsion of the testis"
    ],
    "clues": [
      "Sudden severe scrotal pain is the key clue.",
      "This is a urologic emergency.",
      "The affected testis may sit high.",
      "Nausea and vomiting may accompany it.",
      "Blood flow becomes compromised.",
      "Rapid surgery can save the organ."
    ]
  },
  {
    "answer": "Benign prostatic hyperplasia",
    "accepted": [
      "benign prostatic hyperplasia"
    ],
    "clues": [
      "Older men may report urinary hesitancy.",
      "Weak stream and nocturia are common.",
      "The problem is obstruction at the bladder outlet.",
      "It is not prostate cancer.",
      "The prostate enlarges benignly.",
      "Alpha blockers may improve symptoms."
    ]
  },
  {
    "answer": "Nephrolithiasis",
    "accepted": [
      "nephrolithiasis"
    ],
    "clues": [
      "Colicky flank pain is classic.",
      "Pain may radiate to the groin.",
      "Hematuria is common.",
      "Patients may be restless.",
      "A stone in the urinary tract is responsible.",
      "Hydronephrosis can result if obstruction occurs."
    ]
  },
  {
    "answer": "Pyelonephritis",
    "accepted": [
      "pyelonephritis"
    ],
    "clues": [
      "Fever and flank pain suggest this diagnosis.",
      "Dysuria may also be present.",
      "Costovertebral angle tenderness is common.",
      "This is an upper urinary tract infection.",
      "Nausea and vomiting can occur.",
      "Kidney involvement distinguishes it from simple cystitis."
    ]
  },
  {
    "answer": "Acute kidney injury",
    "accepted": [
      "acute kidney injury"
    ],
    "clues": [
      "Creatinine rises over a short period.",
      "Urine output may fall.",
      "Causes can be prerenal, intrinsic, or postrenal.",
      "Electrolyte disturbances may develop.",
      "The kidneys acutely lose function.",
      "Medication toxicity can be one cause."
    ]
  },
  {
    "answer": "Chronic kidney disease",
    "accepted": [
      "chronic kidney disease"
    ],
    "clues": [
      "Kidney dysfunction persists over months or longer.",
      "Diabetes and hypertension are leading causes.",
      "Anemia can develop.",
      "Proteinuria may be present.",
      "The kidneys lose function progressively.",
      "Longstanding disease can lead to mineral bone disorder."
    ]
  },
  {
    "answer": "Nephrotic syndrome",
    "accepted": [
      "nephrotic syndrome"
    ],
    "clues": [
      "Edema is a common feature.",
      "Protein loss in urine is heavy.",
      "Albumin levels fall.",
      "Lipids are often elevated.",
      "The glomerular filtration barrier becomes leaky to protein.",
      "Patients are at increased thrombotic risk."
    ]
  },
  {
    "answer": "Nephritic syndrome",
    "accepted": [
      "nephritic syndrome"
    ],
    "clues": [
      "Hematuria is a key clue.",
      "Hypertension may occur.",
      "Renal function can decline.",
      "Red cell casts may be present.",
      "This reflects glomerular inflammation.",
      "Proteinuria is usually less massive than in nephrotic syndrome."
    ]
  },
  {
    "answer": "Rheumatoid arthritis",
    "accepted": [
      "rheumatoid arthritis"
    ],
    "clues": [
      "Morning stiffness is characteristic.",
      "Small joints are often affected symmetrically.",
      "This is an autoimmune inflammatory arthritis.",
      "Rheumatoid factor or anti-CCP may be present.",
      "Joint damage can progress over time.",
      "The MCP and PIP joints are commonly involved."
    ]
  },
  {
    "answer": "Osteoarthritis",
    "accepted": [
      "osteoarthritis"
    ],
    "clues": [
      "Joint pain worsens with use.",
      "Older age is a major risk factor.",
      "Crepitus may be present.",
      "It is a degenerative joint disease.",
      "Weight-bearing joints are commonly affected.",
      "Morning stiffness is usually brief."
    ]
  },
  {
    "answer": "Gout",
    "accepted": [
      "gout"
    ],
    "clues": [
      "Sudden severe joint pain can occur overnight.",
      "The first MTP joint is a classic site.",
      "Uric acid crystal deposition is the mechanism.",
      "Alcohol and diuretics can contribute.",
      "The joint becomes hot, red, and tender.",
      "Needle-shaped negatively birefringent crystals are classic."
    ]
  },
  {
    "answer": "Systemic lupus erythematosus",
    "accepted": [
      "systemic lupus erythematosus",
      "sle",
      "lupus"
    ],
    "clues": [
      "This autoimmune disease can affect many organs.",
      "Young women are commonly affected.",
      "A malar rash may occur.",
      "Renal disease can develop.",
      "ANA is often positive.",
      "Photosensitivity is a classic clue."
    ]
  },
  {
    "answer": "Ankylosing spondylitis",
    "accepted": [
      "ankylosing spondylitis"
    ],
    "clues": [
      "Chronic inflammatory back pain is typical.",
      "Symptoms improve with exercise.",
      "Morning stiffness is common.",
      "The sacroiliac joints are often involved.",
      "Young men are commonly affected.",
      "It is associated with HLA-B27."
    ]
  },
  {
    "answer": "Temporal arteritis",
    "accepted": [
      "temporal arteritis"
    ],
    "clues": [
      "An older adult with a new headache raises suspicion.",
      "Jaw claudication is a classic clue.",
      "Vision loss is a feared complication.",
      "ESR is often elevated.",
      "This is a vasculitis of large and medium vessels.",
      "Steroids should not be delayed when strongly suspected."
    ]
  },
  {
    "answer": "Septic arthritis",
    "accepted": [
      "septic arthritis"
    ],
    "clues": [
      "An acutely painful swollen joint is typical.",
      "Fever may be present.",
      "Joint aspiration is essential.",
      "This is infection inside a joint.",
      "Rapid treatment helps prevent joint destruction.",
      "Staphylococcus aureus is a common cause."
    ]
  },
  {
    "answer": "Cellulitis",
    "accepted": [
      "cellulitis"
    ],
    "clues": [
      "A skin area becomes red, warm, and tender.",
      "Borders are often not sharply raised.",
      "Fever can accompany it.",
      "Bacteria infect the deeper dermis and subcutaneous tissue.",
      "The lower leg is a common site.",
      "Streptococci or staphylococci are common pathogens."
    ]
  },
  {
    "answer": "Erysipelas",
    "accepted": [
      "erysipelas"
    ],
    "clues": [
      "This skin infection is more superficial than cellulitis.",
      "The affected area is bright red and raised.",
      "Fever can occur.",
      "The borders are sharply demarcated.",
      "Streptococci are classically involved.",
      "The face or legs may be affected."
    ]
  },
  {
    "answer": "Impetigo",
    "accepted": [
      "impetigo"
    ],
    "clues": [
      "This superficial skin infection is common in children.",
      "Honey-colored crusts are classic.",
      "It is contagious.",
      "Staph aureus or strep pyogenes may cause it.",
      "Lesions often occur around the nose or mouth.",
      "There is infection of the epidermis."
    ]
  },
  {
    "answer": "Psoriasis",
    "accepted": [
      "psoriasis"
    ],
    "clues": [
      "Well-demarcated plaques are typical.",
      "Silvery scale is a classic clue.",
      "Extensor surfaces are commonly affected.",
      "Nail pitting may occur.",
      "This is an immune-mediated skin disease.",
      "Auspitz sign is a classic exam association."
    ]
  },
  {
    "answer": "Atopic dermatitis",
    "accepted": [
      "atopic dermatitis"
    ],
    "clues": [
      "Itchy inflamed skin is the main complaint.",
      "Flexural surfaces are often affected in older children and adults.",
      "There is often a personal or family history of atopy.",
      "Scratching can worsen the rash.",
      "The skin barrier is impaired.",
      "This is eczema."
    ]
  },
  {
    "answer": "Scabies",
    "accepted": [
      "scabies"
    ],
    "clues": [
      "Intense itching, especially at night, is a clue.",
      "Burrows may be visible.",
      "Close contacts may also itch.",
      "The wrists and finger webs are common sites.",
      "A mite infestation causes it.",
      "Treatment usually includes permethrin."
    ]
  },
  {
    "answer": "Anaphylaxis",
    "accepted": [
      "anaphylaxis"
    ],
    "clues": [
      "This is a severe systemic allergic reaction.",
      "Hypotension may occur.",
      "Wheeze or airway swelling can develop.",
      "The onset is often rapid after exposure.",
      "Epinephrine is first-line treatment.",
      "Multiple organ systems are typically involved."
    ]
  },
  {
    "answer": "Sepsis",
    "accepted": [
      "sepsis"
    ],
    "clues": [
      "Infection leads to a dysregulated host response.",
      "Hypotension may occur in severe cases.",
      "Lactate can be elevated.",
      "Early antibiotics and fluids matter.",
      "Organ dysfunction is central to the definition.",
      "This is a medical emergency."
    ]
  },
  {
    "answer": "Osteomyelitis",
    "accepted": [
      "osteomyelitis"
    ],
    "clues": [
      "Bone pain and fever may occur.",
      "Inflammatory markers can be elevated.",
      "Diabetes can predispose in foot infections.",
      "MRI can help detect it.",
      "This is infection of bone.",
      "Staphylococcus aureus is a common cause."
    ]
  },
  {
    "answer": "Acute otitis media",
    "accepted": [
      "acute otitis media"
    ],
    "clues": [
      "Ear pain is common in children.",
      "The tympanic membrane may appear bulging.",
      "A recent upper respiratory infection may precede it.",
      "Middle ear effusion is present.",
      "Fever may occur.",
      "Hearing can be temporarily reduced."
    ]
  },
  {
    "answer": "Sinusitis",
    "accepted": [
      "sinusitis"
    ],
    "clues": [
      "Facial pain or pressure may be reported.",
      "Nasal congestion is common.",
      "Purulent nasal discharge can occur.",
      "Symptoms may worsen when bending forward.",
      "The paranasal sinuses are inflamed.",
      "A viral URI often comes first."
    ]
  },
  {
    "answer": "Glaucoma",
    "accepted": [
      "glaucoma"
    ],
    "clues": [
      "Vision loss can develop silently in one common form.",
      "Elevated intraocular pressure is a key risk factor.",
      "Peripheral vision may be lost first.",
      "The optic nerve is damaged.",
      "An acute angle-closure attack causes painful red eye.",
      "Ophthalmologic evaluation is important."
    ]
  },
  {
    "answer": "Cataract",
    "accepted": [
      "cataract"
    ],
    "clues": [
      "Vision becomes progressively cloudy.",
      "Older age is a strong risk factor.",
      "Night driving may become difficult.",
      "The lens becomes opaque.",
      "Surgery can restore vision.",
      "The red reflex can be reduced."
    ]
  },
  {
    "answer": "Retinal detachment",
    "accepted": [
      "retinal detachment"
    ],
    "clues": [
      "Flashes and floaters may be reported.",
      "A curtain coming over vision is classic.",
      "Myopia is a risk factor.",
      "This is an ophthalmic emergency.",
      "The retina separates from underlying tissue.",
      "Prompt repair can preserve vision."
    ]
  },
  {
    "answer": "Conjunctivitis",
    "accepted": [
      "conjunctivitis"
    ],
    "clues": [
      "A red irritated eye is common.",
      "Discharge may be watery or purulent depending on cause.",
      "Vision is usually preserved.",
      "The conjunctiva is inflamed.",
      "It can be viral, bacterial, or allergic.",
      "Highly contagious forms occur."
    ]
  },
  {
    "answer": "Measles",
    "accepted": [
      "measles"
    ],
    "clues": [
      "Fever and rash are classic.",
      "Cough, coryza, and conjunctivitis can precede the rash.",
      "Koplik spots are a classic clue.",
      "The rash spreads downward from the face.",
      "This is a highly contagious viral illness.",
      "Vaccination prevents it."
    ]
  },
  {
    "answer": "Mumps",
    "accepted": [
      "mumps"
    ],
    "clues": [
      "Parotid swelling is a classic sign.",
      "Fever and malaise may occur.",
      "Orchitis can complicate it in postpubertal males.",
      "It is caused by a virus.",
      "Vaccination reduces risk.",
      "The salivary glands are characteristically affected."
    ]
  },
  {
    "answer": "Rubella",
    "accepted": [
      "rubella"
    ],
    "clues": [
      "A mild febrile rash illness may occur.",
      "Posterior auricular lymphadenopathy is a clue.",
      "Congenital infection can be serious in pregnancy.",
      "Vaccination helps prevent it.",
      "This viral disease is also called German measles.",
      "The rash is often fine and pink."
    ]
  },
  {
    "answer": "Varicella",
    "accepted": [
      "varicella"
    ],
    "clues": [
      "An itchy vesicular rash is typical.",
      "Lesions are seen in different stages at once.",
      "Fever can occur.",
      "The rash is often described as dew drops on a rose petal.",
      "It is caused by primary infection with VZV.",
      "Vaccination reduces incidence."
    ]
  },
  {
    "answer": "Herpes zoster",
    "accepted": [
      "herpes zoster"
    ],
    "clues": [
      "A painful unilateral rash is characteristic.",
      "The lesions follow a dermatome.",
      "It occurs from reactivation of VZV.",
      "Older or immunosuppressed patients are at higher risk.",
      "Neuralgia can persist after the rash.",
      "This is shingles."
    ]
  },
  {
    "answer": "Mononucleosis",
    "accepted": [
      "mononucleosis"
    ],
    "clues": [
      "Sore throat and fatigue are common.",
      "Posterior cervical lymphadenopathy can occur.",
      "Splenomegaly may be present.",
      "EBV is a common cause.",
      "A heterophile test may be positive.",
      "Amoxicillin can trigger a rash in affected patients."
    ]
  },
  {
    "answer": "Lyme disease",
    "accepted": [
      "lyme disease"
    ],
    "clues": [
      "A tick bite may precede illness.",
      "An expanding erythematous rash may appear.",
      "Arthritis or neurologic features can occur later.",
      "Borrelia burgdorferi is the usual cause.",
      "The rash is classically called erythema migrans.",
      "This is a vector-borne disease."
    ]
  },
  {
    "answer": "Tetanus",
    "accepted": [
      "tetanus"
    ],
    "clues": [
      "Muscle rigidity and spasms can occur.",
      "Lockjaw is a classic clue.",
      "The organism produces a neurotoxin.",
      "Wounds can be the portal of entry.",
      "Vaccination prevents it.",
      "Inhibitory neurotransmission is impaired."
    ]
  },
  {
    "answer": "Botulism",
    "accepted": [
      "botulism"
    ],
    "clues": [
      "Descending flaccid paralysis is typical.",
      "Diplopia and dysphagia can occur.",
      "The toxin blocks acetylcholine release.",
      "Infants can get it from honey exposure.",
      "This is a neuroparalytic illness.",
      "Respiratory failure can occur."
    ]
  },
  {
    "answer": "Pertussis",
    "accepted": [
      "pertussis"
    ],
    "clues": [
      "Severe coughing fits are characteristic.",
      "A whooping sound may follow coughing in some patients.",
      "Post-tussive vomiting can occur.",
      "Vaccination reduces risk.",
      "It is caused by Bordetella pertussis.",
      "This is whooping cough."
    ]
  },
  {
    "answer": "Aplastic anemia",
    "accepted": [
      "aplastic anemia"
    ],
    "clues": [
      "Pancytopenia is present.",
      "Fatigue, infections, and bleeding can occur.",
      "Bone marrow is hypocellular.",
      "Medications, toxins, or autoimmune processes can cause it.",
      "There is bone marrow failure.",
      "Reticulocytes are typically low."
    ]
  },
  {
    "answer": "Hemolytic uremic syndrome",
    "accepted": [
      "hemolytic uremic syndrome"
    ],
    "clues": [
      "Anemia and kidney injury occur together.",
      "Thrombocytopenia is also present.",
      "A diarrheal illness may precede it.",
      "Schistocytes can be seen.",
      "Shiga toxin-producing E. coli is a classic association.",
      "Microangiopathic hemolysis is central."
    ]
  },
  {
    "answer": "Idiopathic thrombocytopenic purpura",
    "accepted": [
      "idiopathic thrombocytopenic purpura"
    ],
    "clues": [
      "Easy bruising and petechiae may occur.",
      "Platelets are low in isolation.",
      "This is often immune mediated.",
      "Mucosal bleeding can occur.",
      "The spleen may destroy antibody-coated platelets.",
      "Other blood cell lines are usually normal."
    ]
  }
];

const TOTAL_CLUES = 6;
let pool = [];
let currentCase = null;
let clueIndex = 0;
let gameOver = false;
let stats = JSON.parse(localStorage.getItem("medwordle_stats") || '{"played":0,"won":0,"lost":0}');

const clueList = document.getElementById("clueList");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const messageBox = document.getElementById("message");
const diseaseCountEl = document.getElementById("diseaseCount");
const progressEl = document.getElementById("progress");
const answerRevealEl = document.getElementById("answerReveal");
const statsEl = document.getElementById("stats");
const giveUpBtn = document.getElementById("giveUpBtn");
const nextBtn = document.getElementById("nextBtn");
const randomModeBtn = document.getElementById("randomModeBtn");
const systemModeBtn = document.getElementById("systemModeBtn");
const systemSelect = document.getElementById("systemSelect");

const SYSTEMS = {
  "Cardio": ["Myocardial infarction","Stable angina","Pericarditis","Aortic dissection","Heart failure","Atrial fibrillation","Endocarditis","Hypertrophic cardiomyopathy","Pulmonary embolism","Deep vein thrombosis"],
  "Resp": ["Asthma","COPD","Pneumonia","Tuberculosis","Pneumothorax","Pleural effusion","Obstructive sleep apnea","ARDS","Sarcoidosis","Lung cancer"],
  "GI/Hepatology": ["Appendicitis","Cholecystitis","Pancreatitis","Peptic ulcer disease","GERD","Celiac disease","Crohn disease","Ulcerative colitis","Irritable bowel syndrome","Viral hepatitis","Cirrhosis","Diverticulitis","Bowel obstruction","Mesenteric ischemia","Colon cancer"],
  "Endocrine": ["Type 1 diabetes mellitus","Type 2 diabetes mellitus","DKA","Hypothyroidism","Hyperthyroidism","Graves disease","Hashimoto thyroiditis","Cushing syndrome","Addison disease","Primary hyperparathyroidism","SIADH","Diabetes insipidus","Pheochromocytoma","Acromegaly"],
  "Heme/Onc": ["Iron deficiency anemia","Vitamin B12 deficiency","Acute leukemia","Lymphoma","Multiple myeloma","Hemophilia A","Von Willebrand disease","DIC","Sickle cell disease","Aplastic anemia","Hemolytic uremic syndrome","Idiopathic thrombocytopenic purpura"],
  "Neuro": ["Migraine","Tension headache","Cluster headache","Stroke","TIA","Subarachnoid hemorrhage","Epilepsy","Meningitis","Encephalitis","Parkinson disease","Multiple sclerosis","Guillain-Barre syndrome","Myasthenia gravis","Alzheimer disease"],
  "OB/GYN": ["Bacterial vaginosis","Pelvic inflammatory disease","Ectopic pregnancy","Preeclampsia","Endometriosis","PCOS"],
  "GU/Renal": ["Torsion of the testis","Benign prostatic hyperplasia","Nephrolithiasis","Pyelonephritis","Acute kidney injury","Chronic kidney disease","Nephrotic syndrome","Nephritic syndrome"],
  "Rheum": ["Rheumatoid arthritis","Osteoarthritis","Gout","Systemic lupus erythematosus","Ankylosing spondylitis","Temporal arteritis","Septic arthritis"],
  "Derm/Allergy/Infectious": ["Cellulitis","Erysipelas","Impetigo","Psoriasis","Atopic dermatitis","Scabies","Anaphylaxis","Sepsis","Osteomyelitis","Acute otitis media","Sinusitis","Glaucoma","Cataract","Retinal detachment","Conjunctivitis","Measles","Mumps","Rubella","Varicella","Herpes zoster","Mononucleosis","Lyme disease","Tetanus","Botulism","Pertussis"]
};

function normalize(text) {
  return text.toLowerCase().trim().replace(/\s+/g, " ");
}

function updateStats() {
  const winRate = stats.played ? Math.round((stats.won / stats.played) * 100) : 0;
  statsEl.textContent = `Played: ${stats.played} | Won: ${stats.won} | Lost: ${stats.lost} | Win rate: ${winRate}%`;
  localStorage.setItem("medwordle_stats", JSON.stringify(stats));
}

function setMessage(text, type = "info") {
  messageBox.textContent = text;
  messageBox.dataset.type = type;
}

function buildSystemOptions() {
  for (const systemName of Object.keys(SYSTEMS)) {
    const option = document.createElement("option");
    option.value = systemName;
    option.textContent = systemName;
    systemSelect.appendChild(option);
  }
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makePool(mode = "random") {
  if (mode === "system") {
    const selected = systemSelect.value;
    const names = SYSTEMS[selected] || [];
    return shuffle(CASES.filter(item => names.includes(item.answer)));
  }
  return shuffle(CASES);
}

function addClue() {
  const li = document.createElement("li");
  li.innerHTML = `<span class="clue-number">Clue ${clueIndex + 1}</span><span>${currentCase.clues[clueIndex]}</span>`;
  clueList.appendChild(li);
  clueIndex += 1;
  progressEl.textContent = `Clues shown: ${clueIndex} / ${TOTAL_CLUES}`;
}

function startRound(mode = "random") {
  if (!pool.length) {
    pool = makePool(mode);
  }
  currentCase = pool.pop();
  clueIndex = 0;
  gameOver = false;
  clueList.innerHTML = "";
  answerRevealEl.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  nextBtn.disabled = true;
  giveUpBtn.disabled = false;
  addClue();
  setMessage("Start guessing. One wrong answer unlocks the next clue.");
}

function endRound(won) {
  gameOver = true;
  guessInput.disabled = true;
  nextBtn.disabled = false;
  giveUpBtn.disabled = true;
  stats.played += 1;
  if (won) {
    stats.won += 1;
  } else {
    stats.lost += 1;
  }
  updateStats();
  answerRevealEl.textContent = `Answer: ${currentCase.answer}`;
}

function handleWrongGuess(guess) {
  if (clueIndex < TOTAL_CLUES) {
    setMessage(`"${guess}" is not correct. You unlocked clue ${clueIndex + 1}.`, "warn");
    addClue();
  } else {
    setMessage(`Nope — "${guess}" is not correct, and you've used all 6 clues.`, "error");
    endRound(false);
  }
}

guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (gameOver || !currentCase) return;
  const guess = normalize(guessInput.value);
  if (!guess) {
    setMessage("Type a disease before submitting.", "warn");
    return;
  }
  const accepted = currentCase.accepted.map(normalize);
  if (accepted.includes(guess)) {
    setMessage(`Correct. You got it in ${clueIndex} clue${clueIndex === 1 ? "" : "s"}.`, "success");
    endRound(true);
  } else {
    handleWrongGuess(guessInput.value.trim());
  }
  guessInput.value = "";
  guessInput.focus();
});

giveUpBtn.addEventListener("click", () => {
  if (gameOver) return;
  setMessage("Round ended. Better luck on the next one.", "error");
  endRound(false);
});

nextBtn.addEventListener("click", () => {
  const mode = document.body.dataset.mode || "random";
  startRound(mode);
});

randomModeBtn.addEventListener("click", () => {
  document.body.dataset.mode = "random";
  pool = [];
  startRound("random");
  randomModeBtn.classList.add("active");
  systemModeBtn.classList.remove("active");
  systemSelect.disabled = true;
});

systemModeBtn.addEventListener("click", () => {
  document.body.dataset.mode = "system";
  pool = [];
  startRound("system");
  systemModeBtn.classList.add("active");
  randomModeBtn.classList.remove("active");
  systemSelect.disabled = false;
});

systemSelect.addEventListener("change", () => {
  if (document.body.dataset.mode === "system") {
    pool = [];
    startRound("system");
  }
});

diseaseCountEl.textContent = CASES.length.toString();
buildSystemOptions();
updateStats();
document.body.dataset.mode = "random";
systemSelect.disabled = true;
randomModeBtn.classList.add("active");
startRound("random");
