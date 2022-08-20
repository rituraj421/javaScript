// console.log("Hey");
// cad0981f5bee4d0cab07d6a4d4d169ae

let source = "bbc-news";
let apiKey = "cad0981f5bee4d0cab07d6a4d4d169ae";

//grab the news container
let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);
// xhr.getAllResponseHeaders("Content-type", "application/json");

//what to do when response is ready

xhr.onload = function () {
  if (this.statue === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element) {
      // for (let news in articles) {
      //   console.log(articles[news]);
        let news = `<div class="card">

                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            ${element[title]}
                          </button>
                        </h2>
                        </div>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample">
                          <div class="card-body">
                            ${element[news]}
                      </div>
                      </div>`;
        newsHtml += news;
      });
  newsAccordion.innerHTML = newsHtml;
} else {
  console.log("some error occured");
}
};
xhr.send();
