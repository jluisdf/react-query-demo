import React from 'react'

const Character = ({ id, name, image, info }) => {
    return (
        <div className="column is-3">
            <div className="box" style={{height: '140px'}}>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} alt={name} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{name.slice(0, 18)}</strong>
                                <br />
                                {info.slice(0, 50)}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Character
