const API_URL = 'ce83d9e01da716ec42ec2b18b249409d'; // Replace with your API URL
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies  = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_URL}`);
    const data = await response.json();

    return data.results;
}


export const searchMovies  = async (query) => {
    const response = 
        await fetch(`${BASE_URL}/search/movie??api_key=${API_URL}&query=${encodeURIComponent(query)}`);
    const data = await response.json();

    return data.results;
}

