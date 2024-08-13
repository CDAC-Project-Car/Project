import React from 'react'
import './CarItem.scss'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


export default function CarItem({title, price, image, available}) {

    const navigate=useNavigate()

    const onSelect = async()=>{
        navigate('/buy');
    }


    return (
        <div className="caritem">
            <div className="caritem-container">
                <div className="caritem-image">
                    <img src={image} alt=""/>
                </div>
                <div className="caritem-title">
                    <span>{title}</span>
                </div>
                <div className="caritem-price">
                    <span>{price}</span>
                </div>
                <div className="caritem-offers">
                    <button onClick={onSelect} className="btn btn-primary mt-2">View Details</button>
                </div>
                {available===undefined &&
                <div className="caritem-available">
                    <span>{available}</span>
                </div>
                }
                {/* {available===undefined?
                <div className="caritem-offers">
                    <button onClick={onSelect} className="btn btn-primary mt-2">View Details</button>
                </div>:
                <div className="caritem-available">
                    <span>{available}</span>
                </div>} */}
            </div>
        </div>
    )
}
