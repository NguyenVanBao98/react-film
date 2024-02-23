import React from "react";
import Banner from "./Banner";
import ListMovie from "./ListMovie";

const Home = () => {
    const arrMovie = [
        {
            title: "NOW PLAYING",
            apiLink: "https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&page=1",
        },
        {
            title: "UPCOMING",
            apiLink: "https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&page=1 ",
        },
        {
            title: "TOP RATED",
            apiLink: "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&page=1",
        },
    ];
    return (
        <div>
            <Banner></Banner>
            {arrMovie.map((item) => (
                <ListMovie apiLink={item.apiLink} title={item.title}></ListMovie>
            ))}
        </div>
    );
};

export default Home;
