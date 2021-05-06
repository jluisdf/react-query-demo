import React, { useState } from 'react'
import Simpsons from './Simpsons'
import RickMorty from './RickMorty'
import Cartoons from './Cartoons'
import './styles.css'


const Characters = (props) => {

    const [ openTab, setOpenTab ] = useState('simpsons');

    return (
        <div>
            <section className="hero is-success" style={{backgroundImage: 'linear-gradient(141deg, #0b8286 0%, #188eac 71%, #1686c8 100%)'}}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Sample API's
                        </h1>
                    </div>
                </div>
                <div className="hero-foot"></div>
            </section>
            <br />
            <nav className="tabs">
                <div className="container">
                    <ul>
                        <li className={openTab === 'simpsons' ? 'tab is-active' : 'tab'}  onClick={() => setOpenTab('simpsons')}><a >Simpsons</a></li>
                        <li className={openTab === 'rickMorty' ? 'tab is-active' : 'tab'} onClick={() => setOpenTab('rickMorty')}><a >Rick y Morty</a></li>
                        <li className={openTab === 'cartoons' ? 'tab is-active' : 'tab'} onClick={() => setOpenTab('cartoons')}><a >Cartoons</a></li>
                    </ul>
                </div>
            </nav>

            <div className="container section" style={{padding: '0 1rem'}}>
                {openTab === 'simpsons' && <Simpsons /> }
                {openTab === 'rickMorty' && <RickMorty /> }
                {openTab === 'cartoons' && <Cartoons /> }
            </div>
        </div>
    )
}

export default Characters
