import React from "react";
import StyledWork from "./S.work";
import { Route, Switch } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import MovieList from "../../../components/workPage/movieList/MovieList";
import PageFactory from "../../../components/workPage/pageFactory/PageFactory";
import AllMovies from '../../../assets/img/workPage/digital-media-page/Banners_Secondary.jpg'

import movieData from '../../../assets/moviesData/movieData'

import "./Work.css";

const mediaDescription =
    "AvatarLabs started as a motion graphics agency before digital advertising became the behemoth it is today. High-quality video and motion graphics have always been at the core of what we do, and we’re constantly looking for ways to weave best-in-class visual effects into our campaigns. We’ve been pushing the envelope as to what’s possible in every type of placement imaginable for nearly two decades, winning Webbys and Clios along the way. With scores of media firsts under our belt, our expertise is well earned and our enthusiasm has not waned. Through dynamic creative optimization, our agile production methodology allows us to tailor creative and messaging at scale, ensuring we reach as many consumers as possible with exactly the right message. Our capabilities include dynamic rich media, progressive and 360° video ads, takeovers, and custom shoots.";

const lastParagraph = 
    "We understand the importance of upholding brand quality and delivering premium, high-impact executions on budget and on time."
const Work = (props) => {
    return (
        <StyledWork>
            <Route
                render={({ location }) => {
                    return (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={50}
                                classNames={{
                                    enterActive: "view-transition-enter-active",
                                    enterDone: "view-transition-enter-done",
                                    exit: "view-transition-exit",
                                    exitActive: "view-transition-exit-active",
                                    exitDone: "view-transition-exit-done",
                                }}
                            >
                                <Switch location={location}>
                                    <Route path="/work" exact>
                                        <MovieList
                                            setshowHeader={props.setshowHeader}
                                        />
                                    </Route>
                                    <Route path="/work/media-digital">
                                        <PageFactory
                                            img={movieData[0].img}
                                            title="DIGITAL MEDIA"
                                            subtitle="MELHORES DA TEMPORADA"
                                            description={mediaDescription}
                                            AllMovies={AllMovies}
                                            lastParagraph={lastParagraph}
                                        />
                                    </Route>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    );
                }}
            />
        </StyledWork>
    );
};

export default Work;
