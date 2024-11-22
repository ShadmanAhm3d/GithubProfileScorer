async function getUserInformation() {
  const inputField = document.querySelector('#input-UserName');
  const user = inputField.value.trim();

  const res = await fetch(`https://api.github.com/users/${user}`);
  const data = await res.json();

  const commitData = await fetch(
    `https://api.github.com/search/commits?q=author:${user}`,
    {
      headers: {
        Accept: "application/vnd.github.cloak-preview+json",
      },
    }
  );

  const parsedCD = await commitData.json();

  const TotalStarsAndForksCall = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=100`
  );


  const TotalStarsAndForksResult = await TotalStarsAndForksCall.json();
  const rl = TotalStarsAndForksResult.length;
  console.log("Rerpo :" ,rl);


  const [countOfStars, countOfForks] = processData(TotalStarsAndForksResult);
  console.log("From getUserInformation");


  // Return all the data so CompleteJob can be called with it
  return { data, parsedCD, countOfStars, countOfForks, rl };
}

function processData(theArray) {
  const total = theArray.reduce(
    (acc, repo) => {
      return {
        st: acc.st + repo.stargazers_count,
        fo: acc.fo + repo.forks_count,
      };
    },
    { st: 0, fo: 0 }
  );
  console.log("From processData");

  return [total.st, total.fo];
}

function CompleteJob(response, parsedCD, stars, forks, len) {
  const pCommits = document.querySelector("#pCommits");
  pCommits.innerText = `${parsedCD.total_count}`;

  const avatar = document.querySelector("#avatar");
  avatar.src = `${response.avatar_url}`;

  const userName = document.querySelector("#result-userName");
  userName.innerText = `${response.name}`;

  const totalStars = document.querySelector('#pStars');
  totalStars.innerText = `${stars}`;

  const totalForks = document.querySelector('#pForks');
  totalForks.innerText = `${forks}`;

  const totalRepos = document.querySelector('#pRepos');
  totalRepos.innerText = `${len}`; // Corrected typo here

  console.log("From CompleteJob");
}

const btn = document.querySelector("#btn-Submit");

async function scrollDown() {
  // Fetch user information
  const { data, parsedCD, countOfStars, countOfForks, rl } =
    await getUserInformation();

  // Call CompleteJob with fetched data
  CompleteJob(data, parsedCD, countOfStars, countOfForks, rl);

  // Scroll down to the latest result
  const resWrapper = document.querySelector("#showResultWrapper");
  resWrapper.scrollIntoView({ behavior: "smooth", block: "end" });
  console.log("From scrollDown");
}

btn.addEventListener("click", () => {
  scrollDown();
});

