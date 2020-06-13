

export interface Movie {
    movieId: number,
    movieTitle: string,
    moviePosterUrl: string,
    synopsis: string,
    genres: string[],
    movieReleaseYear: number,
    director: string,
    actors: string[],
    movieTimings: string;
    hallNumber: number;
}