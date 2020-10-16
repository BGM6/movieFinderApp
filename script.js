$(document).ready(function () {

	const $searchInput = $("#movieSearch");
	const apiKey = "5e970758";

	// HANDLES SEARCH BAR INPUT
	$("#movieSearchBtn").on("click", (event) => {
		event.preventDefault();
		// GET REQUEST FROM THE API
		const userInput = $searchInput.val().trim().toLowerCase();
		// MODAL BETTER ALTERNATIVE HERE FOR NOW THIS IS OKAY
			if(userInput === '') {
				alert('Please enter a movie to search')
			};
		
		$(".container").empty();

		const URL = ` https://www.omdbapi.com/?s=${userInput}&apikey=${apiKey}`;
		$.ajax({
			url: URL,
			method: "GET",
		}).then(function (res) {
			const movieInfo = res.Search;

			// console.log(movieInfo);

			const cardColumn = $("<div>").addClass("row row-cols-1 row-cols-md-4 justify-content-center",);

			// LOOPING THROUGH SEARCH ARRAY
			const info = movieInfo.map((movie) => {
				// console.log(movie);
				const card = $("<div>").addClass(
					"card bg-light border-dark m-1 text-dark",
				);
				const image = $("<img>").addClass("card-img-top").attr({ src: movie.Poster });

				const cardBody = $("<div>").addClass("card-body");

				const movieTitle = $("<h5>").addClass("card-title text-center").text(`TITLE: ${movie.Title}`);

				const movieYear = $("<h6>").addClass("card-text text-center").text(`Year: ${movie.Year}`);

				// const id = movie.imdbID;
				cardBody.append(movieTitle, movieYear, image);
				card.append(cardBody);
				cardColumn.append(card);
				$(".container").append(cardColumn);
			});
		});
	});
});
