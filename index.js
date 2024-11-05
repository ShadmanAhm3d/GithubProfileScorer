import { getUserInformation } from "./api-calls";

function CompleteJob(response, parsedCD, stars, forks) {
  const pCommits = document.querySelector('#pCommits');
  pCommits.innerText = `Commits: ${parsedCD.total_count}`;

  console.log("From CJ");
  

}

const btn = document.querySelector('#btn-Submit');

async function scrollDown() {
  // Fetch user information
  const { data, parsedCD, countOfStars, countOfForks } = await getUserInformation();
  
  // Call CompleteJob with fetched data
  CompleteJob(data, parsedCD, countOfStars, countOfForks);
  
  // Scroll down to the latest result
  const resWrapper = document.querySelector('#showResultWrapper');
  resWrapper.scrollIntoView({ behavior: "smooth", block: "end" });
  console.log("From SD");
}

btn.addEventListener("click", () => {
  scrollDown();
});

