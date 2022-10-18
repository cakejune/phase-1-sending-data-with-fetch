// Add your code here
// function something (animalObj){
//     fetch(destinationURL, configurationObject)
//     .then()
// }
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//     fetch("http://localhost:3000/dogs", configurationObject)
//     .then(response => response.json())
//     .then(object => console.log(object))
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!")
//         console.log(error.message);
//       })
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  function createNewUser(fetchedUser) {
    const userContainer = document.querySelector('#user-list');
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${fetchedUser.name}`+ `| Email: ${fetchedUser.email}`;
    userContainer.appendChild(newLi);
    

  }

function submitData() {
 const name = e.target.userName.value;
 const email = e.target.userEmail.value;
    let user = {
      name: name,
      email: email
    };
  
      return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(user
      )})
      .then(res => res.json())
      .then(createNewUser)
  
}
  submitData();
  console.log(submitData);
    

    
      // .then(resp=>resp.json())
      // .then(function createAndAppend(newData))
      
    }
  
);

