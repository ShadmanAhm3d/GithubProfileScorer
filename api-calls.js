// api-calls.js

export async function getUserInformation() {
  const res = await fetch("https://api.github.com/users/ShadmanAhm3d");
  const data = await res.json();

  const commitData = await fetch(
    `https://api.github.com/search/commits?q=author:shadmanAhm3d`,
    {
      headers: {
        Accept: "application/vnd.github.cloak-preview+json",
      },
    }
  );
  const parsedCD = await commitData.json();

  const TotalStarsAndForksCall = await fetch(
    "https://api.github.com/users/shadmanAhm3d/repos?per_page=100"
  );
  const TotalStarsAndForksResult = await TotalStarsAndForksCall.json();
  const [countOfStars, countOfForks] = processData(TotalStarsAndForksResult);
  console.log("From GEt")

  // Return all the data so CompleteJob can be called with it
  return { data, parsedCD, countOfStars, countOfForks };
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
  console.log("From PD");

  return [total.st, total.fo];
  
  
}

