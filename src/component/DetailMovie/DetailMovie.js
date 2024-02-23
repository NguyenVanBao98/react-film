import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./DetailMovie.css";
import useFetch from "../../useFetch";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DetailMovie = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        const youtubeKey = trailerMovie.results.filter((item) => item.type === "Trailer");
        setTrailer(youtubeKey[0].key);
    };
    const [trailer, setTrailer] = useState();

    const { slug: id } = useParams();
    const detailMoive = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c`);
    const trailerMovie = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e9e9d8da18ae29fc430845952232787c`);

    return (
        <div className="detail mb-5">
            <Container>
                <Row>
                    <Col lg={3}>
                        <img src={`https://image.tmdb.org/t/p/w500/${detailMoive.poster_path}`} alt="황야" />
                    </Col>
                    <Col lg={9}>
                        <h1>{detailMoive.original_title}</h1>
                        <div class="yearPro d-flex align-items-center gap-2">
                            <p class="year mb-0">2024-01-25</p>
                            <p class="kind">{detailMoive.genres && detailMoive.genres.map((item) => item.name).join(",")}</p>
                            <p class="time mb-0">
                                <i class="fa-regular fa-clock"></i> {detailMoive.runtime}
                            </p>
                        </div>
                        <div class="rate d-flex align-items-center">
                            <p class="number-rate">6.764%</p>
                            <p class="user">user score</p>
                            <p class="playtrailer">
                                <Button variant="primary" onClick={handleShow}>
                                    Play Trailer
                                </Button>
                            </p>
                        </div>
                        <h3>Can You Bury Your Past?</h3>
                        <h2>Overview</h2>
                        <p class="overview">{detailMoive.overview}</p>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${trailer}?&autoplay=1`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </Modal.Body>

                </Modal>
            </Container>
        </div>
    );
};

export default DetailMovie;
