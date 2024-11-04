import { getUserInformation } from "./api-calls"; 


/*
const inputGithubField = document.querySelector("#inputGithub");
const inputGithubButton = document.querySelector("#inputGithubButton");
const ResultSpace = document.querySelector("#ShowResult"); */

/*
function CompelteJob(response, parsedCD, stars, forks) {
  ResultSpace.innerHTML = "";
  const res = document.createElement("h3");
  const nameOfUser = document.createElement("h2");
  const followers = document.createElement("h2");
  const following = document.createElement("h2");
  const parsedCommits = document.createElement("h2");
  const starsContent = document.createElement("h2");
  const forksContent = document.createElement("h2");

  res.innerText = "Button has been Clicked";
  nameOfUser.innerText = `Name: ${response.name}`;
  following.innerText = `Following : ${response.following}`;
  followers.innerText = `Followers : ${response.followers}`;
  parsedCommits.innerText = `TotalCommits : ${parsedCD.total_count}`;
  starsContent.innerText = `Total Stars : ${stars}`;
  forksContent.innerText = `Total Forks : ${forks}`;

  ResultSpace.appendChild(res);
  ResultSpace.appendChild(nameOfUser);
  ResultSpace.appendChild(following);
  ResultSpace.appendChild(followers);
  ResultSpace.appendChild(parsedCommits);
  ResultSpace.appendChild(starsContent);
  ResultSpace.appendChild(forksContent);
}
*/





// on click of a button
// create new divs 
//automatically scroll to the bottom of the screen
//and in those divs show the result 



const submitButton = document.querySelector('#btn-submit');




function ScrollDown() {




  //scroll down to the bottom of the screen
}

submitButton.addEventListener("click",()=>{
  ScrollDown();
})


