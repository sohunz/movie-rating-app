import { MovieType } from "@/types/types";

type MovieCardProps = {
    movie: MovieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <div>
            <p>{movie.title}</p>
        </div>
    );
};

export default MovieCard;
