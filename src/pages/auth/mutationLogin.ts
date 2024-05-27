import axios from "axios";

export const mutationLogin = async () => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk2NTYxMzUzY2Y4Njc1YmVlODU5YzAzMjA5MGQ4MyIsInN1YiI6IjY2NTNlYjllNjZhM2M1ZjRiNzRjYjIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hxuvIf88Uwf9bdxx8zoAK3ai0e7wv5jyG6nWie4EJg",
            },
        }
    );

    return response.data;
};
