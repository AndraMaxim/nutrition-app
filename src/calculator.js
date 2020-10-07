
// PAS 1
// CALCUL RMR
// IFERROR(IF(gen="M";10*greutate+6,25*inaltime-5*varsta+5;10*greutate+6,25*inaltime-5*varsta-161);"")


// PAS 2
// CALCUL BMI
// IFERROR(greutate/(inaltime*inaltime*0,0001);"")
// IF(bmi<=18,5;subponderal;IF(bmi<=25;normal;IF(bmi<30;supraponderal;IF(bmi>=30;obez;FALSE))))


// PAS 3
// NECESAR MINIM DE APA/ZI
// IFERROR(0,033*greutate;"")


// PAS 4
// ACTIVITATE ZILNICĂ	
// Sedentar 1,2	    La birou în cea mai mare parte a zilei
// Ușoară	1,3	    Plimbări, 1-2 antrenamente ușoare/săptămână
// Moderată 1,4	    2-3 antrenamente ușoare/săptămână
// Ridicată 1,5	    > 3 antrenamente intense/săptămână
// F ridicată 1,7	Antrenamente intense zilnic


// PAS 4
// PLAN
// Menținere 
// RMR*ACTIVITATE ZILNICĂ
// Slăbire
// Menținere * 0.85
// Masă musculară
// Menținere * 1.2