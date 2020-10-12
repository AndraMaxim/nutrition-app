
// if user is not loged in -> 
// LOGHIN

// STEP 1
// Gender
// M 
// F 

// STEP 2 
// weight (kg)
// height (cm)
// age

// STEP 3
// Daily activity	
// Sedentary    (La birou în cea mai mare parte a zilei)      -> 1.2
// Easy         (Plimbări, 1-2 antrenamente ușoare/săptămână) -> 1.3
// Moderate     (2-3 antrenamente ușoare/săptămână)           -> 1.4
// High         (> 3 antrenamente intense/săptămână)          -> 1.5
// Very High    (Antrenamente intense zilnic)                 -> 1.7

// STEP 4
// Set goal
// Maintain Weight
// Weight Loss
// Gain Muscle

// STEP 5
// Confirm Data

// STEP 5
// CALC RMR
// IFERROR(IF(gender="M" ; 10 * weight + 6.25 * height - 5 * age + 5 ; 10 * weight + 6.25 * height - 5 * age - 161);"")

// STEP 6
// CALC BMI
// IFERROR(weight / (height * height * 0.0001);"")
// IF(bmi<=18.5;subponderal;IF(bmi<=25;normal;IF(bmi<30;supraponderal;IF(bmi>=30;obez;FALSE))))

// STEP 7
// CALC WATER
// NECESAR MINIM DE APA/ZI
// IFERROR(0.033 * weight;"")

// STEP 8
// CALC KCAL
// Maintain Weight -> RMR * Daily activity
// Weight Loss -> Maintain * 0.85
// Gain Muscle -> Maintain * 1.2

// STEP 9
// SHOW PROFILE

// STEP 10
// Create menu