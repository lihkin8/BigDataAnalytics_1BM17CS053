db.createCollection("Student");
db.createCollection("Faculty");
db.createCollection("COE");
db.createCollection("Library");
db.createCollection("Admission");
db.createCollection("College_Festival");

db.Student.insert({_id:1,StudName:"Nikhil",USN:"1BM17CS053",Section:"C",Branch:"CSE",Sex:"Male",Hobbies:"Guitar"});
db.Student.insert({_id:2,StudName:"Niyathi",USN:"1BM17CS147",Section:"C",Branch:"CSE",Sex:"Female",Hobbies:"Singing"});
db.Student.insert({_id:3,StudName:"Meghana",USN:"1BM17CS146",Section:"C",Branch:"CSE",Sex:"Female",Hobbies:"Swimming"});
db.Student.insert({_id:4,StudName:"Omar",USN:"1BM17CS140",Section:"C",Branch:"CSE",Sex:"Male",Hobbies:"Gaming"});

db.Faculty.insert({_id:1,FacName:"Gopal",TagNo:"73284592345",Subject:"Web dev",Branch:"CSE",Sex:"Male",Interest:"ML"});
db.Faculty.insert({_id:2,FacName:"Ravi",TagNo:"73284592346",Subject:"Cyber security",Branch:"CSE",Sex:"Male",Interest:"Cloud Computing"});
db.Faculty.insert({_id:3,FacName:"Gundappa",TagNo:"73284592347",Subject:"COA",Branch:"CSE",Sex:"Male",Interest:"Artificial Intelligence"});
db.Faculty.insert({_id:4,FacName:"Seetha",TagNo:"73284592348",Subject:"Mathematics",Branch:"CSE",Sex:"Female",Interest:"Algebra"});

db.COE.insert({_id:1,StaffName:"Vani",Dept:"CIE",email:"vani@gmail.com",PhNo:"8976545677",middleName:"S"});
db.COE.insert({_id:2,StaffName:"Bindu",Dept:"CIE",email:"bindu@gmail.com",PhNo:"8976545677",middleName:"S"});
db.COE.insert({_id:3,StaffName:"Rajesh",Dept:"CIE",email:"rajesh@gmail.com",PhNo:"8976545677",middleName:"S"});
db.COE.insert({_id:4,StaffName:"Gajendra",Dept:"CIE",email:"gajendra@gmail.com",PhNo:"8976545677",middleName:"S"});

db.Library.insert({_id:1,LibName:"Radha",SID:"BML001",Sex:"M",Phone:"9900550066",Email:"Radha@bmsce.ac.in", Room:"101"})
db.Library.insert({_id:2,LibName:"Mary",SID:"BML006",Sex:"M",Phone:"9900550056",Email:"mary@bmsce.ac.in", Room:"102"})
db.Library.insert({_id:3,LibName:"Anu",SID:"BML007",Sex:"F",Phone:"9900551056",Email:"anu@bmsce.ac.in", Room:"103"})
db.Library.insert({_id:4,LibName:"John",SID:"BML009",Sex:"M",Phone:"9800550056",Email:"john@bmsce.ac.in", Room:"108"})

db.Admission.insert({_id:1,FName:"Dhruv",POB:"Bangalore",Sex:"M",Type:"ComedK",SecondPU:"80", Tenth:"9.8"})
db.Admission.insert({_id:2,FName:"Spoorthi",POB:"AP",Sex:"F",Type:"CET",SecondPU:"88", Tenth:"8.8"})
db.Admission.insert({_id:3,FName:"Manasa",POB:"Chennai",Sex:"F",Type:"ComedK",SecondPU:"89", Tenth:"10"})
db.Admission.insert({_id:4,FName:"Vedanth",POB:"Delhi",Sex:"M",Type:"CET",SecondPU:"96", Tenth:"9.4"})

db.College_Festival.insert({_id:1,FName:"Phaseshift",Place:"BMSCE",NumberOfDays:"3",Type:"Tech Fest",NumberOfEvents:"30", Tenth:"9.8"});
db.College_Festival.insert({_id:2,FName:"Utsav",Place:"BMSCE",NumberOfDays:"3",Type:"Cultural Fest",NumberOfEvents:"30", Tenth:"9.8"});
db.College_Festival.insert({_id:3,FName:"Pravega",Place:"IISC",NumberOfDays:"3",Type:"Cultural Fest",NumberOfEvents:"30", Tenth:"9.8"});
db.College_Festival.insert({_id:4,FName:"Aatmatrisha",Place:"PESU",NumberOfDays:"3",Type:"Cultural Fest",NumberOfEvents:"30", Tenth:"9.8"});


db.Faculty.find()
db.Admission.find()
db.COE.find()
db.College_Festival.find()
db.Library.find()
db.Student.find()

