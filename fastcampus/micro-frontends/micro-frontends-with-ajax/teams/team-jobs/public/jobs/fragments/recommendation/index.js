fetch("http://localhost:3002/jobs/api/recommendations.json")
  .then((res) => res.json())
  .then((recommendations) => {
    document.querySelector(
      "#jobs-fragment-recommendation .recommendations"
    ).innerHTML = recommendations
      .map((recommendation) => {
        return `<div><a href="${recommendation.url}">${recommendation.name}</a></div>`;
      })
      .join("");
  });
