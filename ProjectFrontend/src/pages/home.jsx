
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React from 'react'
import CarsGroups from '../components/CarsGroups/CarsGroups'
import {DATA, DATA1, DATA2} from '../data/Data'
import CardsGroups from "../components/CardsGroups/CardsGroups"
import { CARDDATA } from "../data/WhyCarBazarData"
import FAQ from "../components/Faq"

function Home()
{
    return(
        <div className="main-page">
            <Navbar/>
            <CarsGroups title="The most searched cars" data={DATA}/>
            <CarsGroups title="Trusted used cars by budget" data = {DATA1}/>
            <CarsGroups title="Latest Cars" data={DATA2}/>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                    </div>
                </div>
            </div>

            <CardsGroups title="Why use CarBazaar ?" data={CARDDATA} />
            <FAQ />
            
            <Footer />
      </div>
    )
}
export default Home;