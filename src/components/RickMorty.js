import React from 'react'
import useQueryHook from '../hooks/useQueryHook'
import Character from './Character'
import Pageloader from './Pageloader'
import ErrorFetching from './ErrorFetching'
import { BASE_URL_RICKMORTY } from '../utils';

const RickMorty = (props) => {

    const { status, data } = useQueryHook({
        url: `${BASE_URL_RICKMORTY}/character`,
        name: 'rickMorty'
    })

    return (
        <div className="columns is-multiline">
            { status === 'loading' && <Pageloader /> }
            { status === 'error' && <ErrorFetching /> }
            {
                status === "success" && data.results.map((item, index) => {
                    return (
                        <Character
                            key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            info={`${item.species} - ${item.status}`}
                        />
                    )
                })
            }
        </div>
    )
}

export default RickMorty
