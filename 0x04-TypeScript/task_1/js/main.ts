interface Teacher {
readonly  FirstName: string;
readonly LastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const user: Teacher = {
    FirstName: "simo",
    LastName: "smith",
  fullTimeEmployee: true,
  yearsOfExperience: 2,
  location: "Marrakech",

}


console.log(user)