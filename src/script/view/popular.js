
$(document).ready(function(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=96c8a7fbe009935d8c1a9643756d797d&language=en-US&page=1';
    const limg = 'https://image.tmdb.org/t/p/w500/';
    $('#popularFilm').append(`
        <div class="text-center mb-5 mt-5">
            <h1>Film Populer</h1>
        </div>
        <div id="popular_row" class="row ml-4 mr-4">
        </div>

`);
    $.get(url, function(data, status){
        const hsl = data["results"];
        for (let d=0; d<4; d++){
            $('#popular_row').append( `
            <div class="col-lg-3 col-md-6">
                <div class="card-film">
                    <div class="thumb">
                        <img src="${limg + hsl[d].poster_path}" alt="">
                    </div>
                    <div class="content">
                        <p class="d-flex align-items-center">
                            ${hsl[d].title}
                        </p>
                    </div>
                </div>
            </div>
            `);
        }
    });
    
});