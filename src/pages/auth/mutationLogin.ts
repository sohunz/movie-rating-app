import axios from "axios";

export const mutationLogin = async () => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/authentication/guest_session/new",

        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjk2OGY0YjQwODU0YmU2MGYyY2UyNDJjMDAwMzAwNSIsInN1YiI6IjY2NTNlYjllNjZhM2M1ZjRiNzRjYjIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EP_BJH-CBxcf8l65lRqX2TV2o4CLA9TIUm02r9XfiyE",
            },
        }
    );

    return response.data;
};
