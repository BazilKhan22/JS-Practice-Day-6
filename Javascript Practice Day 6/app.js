// JSON Practice

let student = {
    name: "Bazil",
    age: 23,
    course: "JavaScript Beginner"
  };
//   stringify object ko string me convert krta he local storage k lie
  localStorage.setItem("studentInfo", JSON.stringify(student));

//  parse waps se string ko obj me convert krta he is readabiliy ez hoti he or local storage me bh chla jata he
  let savedStudent = JSON.parse(localStorage.getItem("studentInfo"));
  
  console.log("Name: " + savedStudent.name);
  console.log("Course: " + savedStudent.course);
  