import React from 'react'
import Character from './Character'
import Pageloader from './Pageloader'
import ErrorFetching from './ErrorFetching'
import useQueryHook from '../hooks/useQueryHook'
import { BASE_URL_CARTOONS } from '../utils';

const Cartoons = (props) => {

    const { status, data } = useQueryHook({
        url: BASE_URL_CARTOONS,
        name: 'cartoons'
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
                            id={item.id}
                            name={item.title}
                            image={item.image}
                            info={`${item.creator} - ${item.year}`}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cartoons
