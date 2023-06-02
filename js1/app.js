const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmQzN2I4NjJiZTZkMjZhNmMwMDYzMDFkYjhhNTg0ZSIsInN1YiI6IjY0NzVmNTY4MWJmMjY2MDQ0MDI3MDY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JX1Ln07X-Zy88C1T3DVeTJmGHlNUAK8pbFvn6X_u34U'
  }
};
const cardContainer = document.querySelector("#cardContainer")
const searchBtn = document.querySelector("#search-btn")

// url에있는 서버로 요청
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json()) // 리스폰스를 받아와서 json형태로 바꿔서 리턴한다
  .then(data => { // data === res.json()으로 받오온 데이터를 
    let movies = data['results'] // data.results 속성의값을 movies에 저장
    // movies = [
    //   {title:addEventListener, description:"b"}, 
    //   {title:addEventListener, description:"b"}, 
    //   {title:addEventListener, description:"b"}, 
    // ]

    console.log("movies:", movies) 
    
    let cardsHtml = '';
    console.log(cardsHtml); // 데이터가 없다
    
    movies.forEach((movie, i) => {
      let title = movie['title'];
      let overviews = movie['overview'];
      let path = movie['poster_path'];
      let star = movie['vote_average'];

      cardsHtml += `
        <div class="col">
          <div class="card h-100">
            <img src="https://image.tmdb.org/t/p/w500/${path}" alt="${title}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${overviews}</p>
              <p class="card-star">${star}</p>
            </div>
          </div>
        </div>
      `    
    })
   
    // 이 부분에서 cardContainer 안에 cardsHtml을 넣으면된다.
    // 1. cardContainer엘리먼트를 선택(셀렉)해야한다
    // 2. cardContainer엘리먼트 안에 우리가만든 cardsHtml을 넣는다(innerHTML)

    console.clear()
    console.log("cardsHtml") // 데이터가 다 나올거 같다
    console.log("\n=============================\n")
    console.log(cardsHtml) // 에러가난다.

    document.getElementById('cardContainer').innerHTML=cardsHtml
  //  console.log(document.getElementById('cardContainer'))/
    // document.getElementById('cardContainer') == <div id="cardContainer" class="row row-cols-1 row-cols-md-4 g-4"></div>
  }) 
