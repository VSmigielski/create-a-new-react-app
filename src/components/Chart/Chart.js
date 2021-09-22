import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({dataPoints}) => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value)

    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => {
                return <ChartBar key={dataPoint.label} {...dataPoint} maxValue={totalMaximum}/>
            })}
        </div>
    )
}

export default Chart
