import React from 'react';
import useQueryHook from '../hooks/useQueryHook'
import Character from './Character'
import Pageloader from './Pageloader'
import ErrorFetching from './ErrorFetching'
import { BASE_URL_SIMPSONS } from '../utils';

const Simpsons = (props) => {

    const { status, data } = useQueryHook({
        url: `${BASE_URL_SIMPSONS}/quotes?count=20`,
        name: 'simpsons'
    })

    return (
        <div className="columns is-multiline">
            { status === 'loading' && <Pageloader /> }
            { status === 'error' && <ErrorFetching /> }
            {
                status === "success" && data.map((item, index) => {
                    return (
                        <Character
                            key={index}
                            id={index}
                            name={item.character}
                            image={item.image}
                            info={item.quote}
                        />
                    )
                })
            }
        </div>
    )
}

export default Simpsons
