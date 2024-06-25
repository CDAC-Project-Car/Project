
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React from 'react'
import CarsGroups from '../components/CarsGroups/CarsGroups'
import {DATA, DATA1, DATA2} from '../data/Data'

function Home()
{
    return(
        <div className="main-page">
            <Navbar/>
            <CarsGroups title="The most searched cars" data={DATA}/>
            <CarsGroups title="Trusted used cars by budget" data = {DATA1}/>
            <CarsGroups title="Latest Cars" data={DATA2}/>
            <Footer />
      </div>
    )
}
export default Home;