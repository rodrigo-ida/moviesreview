import React from 'react'

import { Link } from "react-router-dom";

import StyledMovieCard from '../movieCard/MovieCard';

import firstImg from "../../../assets/img/first.jpg";
import secondImg from "../../../assets/img/wonderwoman.jpg";
import thirdImg from "../../../assets/img/beer.jpg";



const MovieList = props => {


    return(
        <ul>
                <li>
                    <Link
                        to={ props => ({ 
                                ...props, 
                                pathname: props.pathname + '/midia-digital' 
                        })}
                    >
                        <StyledMovieCard
                            setshowHeader={props.setshowHeader}
                            img={firstImg}
                            title="MÍDIA DIGITAL"
                            subtitle="OS MELHORES DA TEMPORADA"
                        />
                    </Link>
                </li>
                <li>
                    <StyledMovieCard
                        setshowHeader={props.setshowHeader}
                        img={secondImg}
                        title="MÍDIA SOCIAL"
                        subtitle="DESTAQUE NAS REDES SOCIAIS"
                    />
                </li>
                <li>
                    <StyledMovieCard
                        setshowHeader={props.setshowHeader}
                        img={thirdImg}
                        title="AR, VR E MUITO MAIS"
                        subtitle="TECNOLOGIAS DISRUPTIVAS"
                    />
                </li>
                <li>
                    <StyledMovieCard
                        setshowHeader={props.setshowHeader}
                        img={firstImg}
                        title="MÍDIA DIGITAL"
                        subtitle="OS MELHORES DA TEMPORADA"
                    />
                </li>
                <li>
                    <StyledMovieCard
                        setshowHeader={props.setshowHeader}
                        img={secondImg}
                        title="MÍDIA SOCIAL"
                        subtitle="DESTAQUE NAS REDES SOCIAIS"
                    />
                </li>
                <li>
                    <StyledMovieCard
                        setshowHeader={props.setshowHeader}
                        img={thirdImg}
                        title="AR, VR E MUITO MAIS"
                        subtitle="TECNOLOGIAS DISRUPTIVAS"
                    />
                </li>
            </ul>

    )
}

export default MovieList