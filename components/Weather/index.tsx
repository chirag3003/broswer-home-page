import React from 'react'
import { Cloud, CloudRain,Wind } from 'react-feather'

async function Weather() {
    return (
        <div className="weather flex gap-4">
            <div className="icon ">
                <Cloud height={80} width={80} />
            </div>
            <div className="data">
                <p className="text-4xl font-bold">23°C</p>
                <p className="text-4xl font-bold">Cloudy</p>
            </div>
        </div>
    )
}

export default Weather
