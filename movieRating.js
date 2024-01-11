let movieId = 0;

let moviesList = [];


$(function(){
    $("#form-container").on("submit", function(e){
        e.preventDefault();
        let title = $(".title").val();
        let rating = $(".rating").val();
        

        let movieValue = {title,rating, movieId};
        const movieTable = submitMovie(movieValue);

        movieId++
        moviesList.push(movieValue);

        $("#table-body").append(movieTable);
        $("#form-container").trigger('reset');

    });


    });

    $("#table-body").on("click", "#remove-btn", function(e) {
      // find the index where this movie is
      let movieRemove= moviesList.findIndex(movie => movie.movieId === +$(e.target).data("deleteId"))
      
      // remove it from the array of movies
      moviesList.splice(movieRemove, 1)
  
      // remove it from the DOM
      $(e.target)
        .closest("tr")
        .remove();
      
    });

  
  

function submitMovie(value){
    return `
      <tr>
        <td>${value.title}</td>
        <td>${value.rating}</td>
        <td>
          <button id="remove-btn" data-delete-id=${value.movieId}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }

 
 
  


  
