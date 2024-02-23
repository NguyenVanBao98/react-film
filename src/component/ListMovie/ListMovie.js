import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useFetch from "../../useFetch";
import CardMovie from "../CardMovie/CardMovie";

const ListMovie = () => {
    const [page, setPage] = useState(1);
    const List = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=e9e9d8da18ae29fc430845952232787c&page=${page}`);
    const allMovie = List.results;
    const [newMoive, setNewMoive] = useState([]);
    const showMore = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        if (allMovie) {
            setNewMoive([...newMoive, ...allMovie]);
        }
    }, [allMovie]);

    return (
        <div>
            <Container>
                <div className="headline">
                    <h3>ONLINE STREAMING</h3>
                    <h2>List Movie</h2>
                </div>
                <Row>
                    {allMovie &&
                        allMovie.map((item) => (
                            <Col lg={3}>
                                <CardMovie key={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} vote_average={item.vote_average}></CardMovie>
                            </Col>
                        ))}
                </Row>
                <button onClick={showMore}>Show More</button>
            </Container>
        </div>
    );
};

export default ListMovie;
