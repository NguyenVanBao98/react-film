import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";

const Search = () => {
    const { slug: keySearch } = useParams();
    const listMovie = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=e9e9d8da18ae29fc430845952232787c&query=${keySearch}&page=1`);

    return (
        <Container>
            <div className="headline">
                <h3>ONLINE STREAMING</h3>
                <h2>Searching key: {keySearch}</h2>
            </div>
            <Row>
                {listMovie.results &&
                    listMovie.results.map((item) => (
                        <Col lg={3}>
                            <CardMovie id={item.id} key={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} vote_average={item.vote_average}></CardMovie>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default Search;
