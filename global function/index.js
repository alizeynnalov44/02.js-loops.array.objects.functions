class User {
    constructor (sortUsersByUsername, filterByBirthYear,Login,LogOut,CreateUser,DeleteUser ){
        this.sortUsersByUsername = sortUsersByUsername;
        this.filterByBirthYear = filterByBirthYear;
        this.Login = Login;
        this.LogOut = LogOut;
        this.CreateUser = CreateUser;
        this.DeleteUser = DeleteUser;
    }
    
}









let users = [
    new User(
      "John",
      "Doe",
      "Male",
      "American",
      "johndoe",
      "john.doe@example.com",
      false,
      "password123",
      "A bit about John.",
      30
    ),
    new User(
      "Jane",
      "Doe",
      "Female",
      "British",
      "janedoe",
      "jane.doe@example.com",
      true,
      "securepassword",
      "Jane's bio goes here.",
      28
    ),
    new User(
      "Alex",
      "Smith",
      "Non-binary",
      "Canadian",
      "alexsmith",
      "alex.smith@example.com",
      false,
      "alexspassword",
      "All about Alex.",
      35
    ),
    new User(
      "Emily",
      "Clark",
      "Female",
      "Australian",
      "emilyclark",
      "emily.clark@example.com",
      false,
      "emilyspassword",
      "Explorer and photographer.",
      26
    ),
    new User(
      "Michael",
      "Brown",
      "Male",
      "German",
      "michaelbrown",
      "michael.brown@example.com",
      true,
      "michaelspass",
      "Coffee enthusiast. Avid reader.",
      32
    ),
    new User(
      "Luis",
      "Gomez",
      "Male",
      "Spanish",
      "luisgomez",
      "luis.gomez@example.com",
      false,
      "luispassword",
      "Music lover, Guitar player.",
      29
    ),
    new User(
      "Sophia",
      "Lopez",
      "Female",
      "Mexican",
      "sophialopez",
      "sophia.lopez@example.com",
      true,
      "sophiaspassword",
      "Digital marketer and content creator.",
      31
    ),
  ];