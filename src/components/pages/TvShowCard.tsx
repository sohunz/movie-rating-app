import { TvShowTypes } from "@/types/types";

type TvShowProps = {
    tvshow: TvShowTypes;
};

const TvShowCard = ({ tvshow }: TvShowProps) => {
    return (
        <div>
            <p>{tvshow.name}</p>
        </div>
    );
};

export default TvShowCard;
