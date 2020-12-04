import React from 'react'
import styled from 'styled-components'

import StyledMovieCard from '../../../../components/movieCard/MovieCard'

import firstImg from '../../../../assets/img/first.jpg'
import secondImg from '../../../../assets/img/wonderwoman.jpg'
import thirdImg from '../../../../assets/img/beer.jpg'



const StyledList = styled.ul``


const MovieList = props => {

    return(
        <StyledList>
            <StyledMovieCard img={firstImg}  title='MÍDIA DIGITAL' subtitle='OS MELHORES DA TEMPORADA'/>
            <StyledMovieCard img={secondImg} title='MÍDIA SOCIAL' subtitle='DESTAQUE NAS REDES SOCIAIS'/>
            <StyledMovieCard img={thirdImg}  title='AR, VR E MUITO MAIS' subtitle='TECNOLOGIAS DISRUPTIVAS'/>
        </StyledList>
    )

}


export default MovieList