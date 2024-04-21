class Human {
    constructor(name, surname, age, gender, nationality) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.gender = gender;
      this.nationality = nationality;
    }
    getFullName() {
      return `${this.name} ${this.surname};`
    }
    getBirthYear() {
      // return ${Date.now()}-${currentYear()};
    }
  }
  class User extends Human {
      
    constructor(
      name,
      surname,
      age,
      gender,
      nationality,
      username,
      email,
      isAdmin,
      password,
      bio,
      sortUsersByUsername,
      filterByBirthYear,
      Login,
      LogOut,
      CreateUser,
      DeleteUser
    ) {
      super(name, surname, age, gender, nationality);
  
      this.username = username;
      this.email = email;
      this.isAdmin = isAdmin;
      this.sortUsersByUsername = sortUsersByUsername;
      this.filterByBirthYear = filterByBirthYear;
      this.Login = Login;
      this.LogOut = LogOut;
      this.CreateUser = CreateUser;
      this.DeleteUser = DeleteUser;
  
      // this.password=password
      if (password.length < 5) {
        window.alert("axdi");
      } else {
        this.password = password;
      }
  
      // this.bio=bio
      if (bio.length > 30) {
        window.alert("saxla");
      } else {
        this.bio = bio;
      }
      //this.sortUsersByUsername = sortUsersByUsername
      function sortUsersByUsername(users) {
        return users.sort((a, b) => a.username.localeCompare(b.username));
    };
  
    //this.filterByBirthYear = filterByBirthYear;
    function filterByBirthYear(users, year) {
      return users.filter(user => user.birthYear > year);
  }
  //this.Login = Login;
  function login(users, username, password) {
    
    const user = users.find(user => user.username === username);

    
    if (!user) {
        return 'user not found!';
    }

    
    if (user.password === password) {
        
        if (user.isLogged) {
            return 'another user currently logged in';
        }
        
        user.isLogged = true;
        alert('successfully logged in');
    } else {
        
        return 'incorrect username or password';
    }
}
    }
  //this.LogOut = LogOut;
  function logout(users, username) {
    
    const user = users.find(user => user.username === username);

  
    if (!user) {
        return 'user not found';
    }

    
    if (!user.isLogged) {
        return 'user did not logged in to log out!';
    }

  
    user.isLogged = false;
    return 'successfully logged out';
}
    
    changePassword(currentPassword, newPassword) {
      if ((this.password = currentPassword)) {
        if (currentPassword === newPassword) {
          window.alert("eyni seydi");
        } else {
          this.password = newPassword;
        }
      }
    }
  }
  
  const monster = new User(
    "Ali",
    "Zeynalov",
    21,
    "male",
    "Azerbaijan",
    "Monsterboy",
    "aleezeynalov@gmail.com",
    true,
    "12345",
    "Always be Happy"
  );
  console.log(monster)
  
  
  
  
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

