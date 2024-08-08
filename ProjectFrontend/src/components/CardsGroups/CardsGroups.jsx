import React from 'react'
import CardItem from './CardItem/CardItem'

import './CardsGroups.scss'

export default function CardsGroups({ title, data }) {
    return (
        <div className="card-groups">
            <div className="card-groups-container">

                <div className="card-groups-header">
                    <div className="card-groups-header-title">
                        <span>{title}</span>
                    </div>
                </div>

                <div className="card-groups-items">

                    {data['Cards'].map(item => (
                        <div className='row'>
                            <div class='col-md-11'>
                                <CardItem {...item} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
