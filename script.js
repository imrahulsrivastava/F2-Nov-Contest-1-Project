const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((person) => {
    if (person.profession === "developer") {
      console.log(person.name);
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt("Enter the name: ").trim();
  const age = parseInt(prompt("Enter the age: "));
  const profession = prompt("Enter the profession: ").trim();

  data.push({
    name: name.trim(),
    age: age,
    profession: profession.trim(),
  });
}

// 3. Remove Admins
function removeAdmin() {
  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].profession === "admin") {
      data.splice(i, 1);
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  const arr = [
    {
      name: "Rahul Kumar Srivastava",
      age: 24,
      profession: "developer",
    },
    {
      name: "Aditya Srivastava",
      age: 21,
      profession: "student",
    },
    {
      name: "Shubham Srivastav",
      age: 24,
      profession: "teacher",
    },
    {
      name: "Sundram Srivastav",
      age: 24,
      profession: "student",
    },
  ];
  data.push(...arr);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  console.log(totalAge / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some((person) => person.age >= 25);
  console.log(isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessionsSet = new Set(data.map((person) => person.profession));
  const uniqueProfessionsArray = Array.from(uniqueProfessionsSet);
  console.log(uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((person) => person.name === "john");

  if (john) {
    john.profession = "manager";
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let adminCount = 0;
  let developerCount = 0;

  for (let i = 0; i < data.length; i++) {
    const profession = data[i].profession;

    if (profession === "admin") {
      adminCount++;
    } else if (profession === "developer") {
      developerCount++;
    }
  }

  console.log(`Total Admins - ${adminCount}`);
  console.log(`Total Developers - ${developerCount}`);
}
