import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import StyledRoot from './S.root'
import Work from '../pages/work/Work'

import Header from '../../components/header/Header'

const Root = () =>{

    return(
        <StyledRoot>
            <Header />
            <main>
                <Route path="/work" component={Work} />
                <Redirect from='/' to ='/work' />
            </main>
        </StyledRoot>
    )
}

export default Root