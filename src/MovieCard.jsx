import React from "react";


function MovieCard({ movie }) {


    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}
export default MovieCard;














// export default function MovieCard(props) {
//     // this helps not to use props. on every html element

//     const movie1 = {
//         "Poster": "N/A",
//         "Title": "Spiderman",
//         "Type": "movie",
//         "Year": "2010",
//         "imdbID": "tt1785572"
//     };
//     return (
//         <div className="movie">
//             <div>
//                 <p>{props.movie1.Year}</p>
//             </div>
//             <div>
//                 <img src={props.movie1.Poster !== "N/A" ? props.movie1.Poster : 'https://via.placeholder.com/400'} alt={props.movie1.Title} />
//             </div>
//             <div>
//                 <span>{props.movie1.Type}</span>
//                 <h3>{props.movie1.Title}</h3>
//             </div>
//         </div>
//     );
// }