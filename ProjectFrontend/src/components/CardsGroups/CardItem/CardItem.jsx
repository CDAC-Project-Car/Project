import React from 'react';
import './CardItem.scss';

export default function CardItem({ title, description }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 mb-2"></div>
                <div className="card carditem-container bg-light border">
                    <div className="card-body">
                        <div className="carditem-title">
                            <span>{title}</span>
                        </div>
                        <div className="carditem-description">
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
