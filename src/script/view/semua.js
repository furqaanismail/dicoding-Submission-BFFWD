
$(document).ready(function(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=96c8a7fbe009935d8c1a9643756d797d&language=en-US&page=1';
    const limg = 'https://image.tmdb.org/t/p/w500/';
    $('#semuaFilm').append(`
        <div class="container">
        <div class="text-center mb-5 mt-4">
            <h1>Semua Film</h1>
        </div>
        <div id="film_row" class="row">
        </div>
    `);
    $.get(url, function(data, status){
        const hsl = data["results"];
        for (let d=0; d<hsl.length; d++){
            $('#film_row').append( `
                    <div class="col-lg-4 col-md-6">
                        <div class="film_item">
                            <div class="thumb">
                                <img src="${limg + hsl[d].poster_path}" alt="">
                                <a href="" class="rating">${hsl[d].vote_average}</a>
                            </div>
                            <div class="content">
                                <a href="">
                                    <h3>${hsl[d].title}</h3>
                                </a>
                                <p>
                                    ${hsl[d].overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }
    });
    
});