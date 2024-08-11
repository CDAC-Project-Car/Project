import React from 'react'
import './CardItem.scss'


export default function CardItem({ title, description }) {

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-2 mb-2"></div>
                <div className="card carditem-container bg-light border">
                    <div class="card-body">
                        <div class="carditem-title">
                            <span>{title}</span>
                        </div>
                        <div class="carditem-description">
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
