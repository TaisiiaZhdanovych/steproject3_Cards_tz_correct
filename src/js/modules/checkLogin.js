import { login } from "./login.js";
import { logout } from "./login.js";
// import { foundBtn } from "./create.js";
// import { edit } from "./edit.js";
import { fetchData } from "./fetchGet.js";
import { filterSearch } from "./search.js";


// const email = "taisiya.@gmail.com";
// const pass = "cards1234";


// повторне отримання токену після реєстрації
async function getToken(username, password) {
  const data = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // email: `${username}`,      //розкоментувати для того, щоб було введення будь-якого паролю та імейлу
      // password: `${password}`,
      email: "taisiya@gmail.com",     //закоментувати для того, щоб було введення будь-якого паролю та імейлу
      password: "Cards1234",
    }),
  });
  const res = await data.text();

  if (res === "Incorrect username or password") {
      
    alert(res);
      return false;
  } else {
    localStorage.setItem("token", res);
    await fetchData();
    filterSearch();
      return true;
  }

}

export async function refreshData() { 
   await fetchData();
   filterSearch();
   return true;
}


// const token = localStorage.getItem("token");


class User {
  constructor(email, password) {
    this.password = password;
    this.email = email;
  }

  validatePassword() {
    
    if (this.password.length >= 8) {
      return true;
    } else {
      return false;
    }
  }
    validateEmail() {
    const regex = /^\S+@\S+\.\S+$/;
    
    return regex.test(this.email);
  }
}



//логін і валідація
export function logVal () {
  let submitInp = document.querySelector(".sub");
  submitInp.addEventListener("click", checkUserLogIn);
  document.querySelector('.login-box').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkUserLogIn();
    }
  });
}

   async function checkUserLogIn() {                                    //розкоментувати для прав логініз.
     localStorage.clear();
     let inpEmail = document.getElementById("username").value;
     let inpPassword = document.getElementById("password").value;
     let obj = new User(inpEmail, inpPassword);

     if (obj.validatePassword() === true && obj.validateEmail() === true) {
       let responce = await getToken(inpEmail, inpPassword);
       responce ? login() : logout();
     } else {
      //  alert("Incorrect format username or password");               //розкоментувати при форматі введення будь-якого паролю та імейлу
       document.getElementById("username").value = "taisiya@gmail.com"; 
       document.getElementById("password").value = "Cards1234";
     }
  //  foundBtn(); //виносимо туди де відбув. успішна логінізація
}    
 

