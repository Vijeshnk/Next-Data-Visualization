import React from 'react'

import styles from './MainPage.module.css'
import BarChart from '../BarChart/BarChart'
import PieChart from '../PieChart/PieChart'
import DonutChart from '../DoughnutChart/DonutChart'
import DoughnutChart from '../DoughnutChart/DonutChart'
import LineChart from '../LineChart/LineChart'
import StatComponent from '../StatComponent/StatComponent'
import TitleBar from '../TitleBar/TitleBar'
import StateCount from '../StatCount/StateCount'
import LineInteractionGraph from '../LineInteractionGraph/LineInteractionGraph'
import BarChart2 from '../BarChart2/BarChart2'


const MainPage = () => {
  return (
    <div className={styles.gridContainer}>
    <div className={styles.title}><TitleBar name={'Ecomerce Data Visualization'}/></div>
    <div className={styles.filter}>
    <TitleBar name={'Sales Statistics'}/>
    </div>
    <div className={styles.dropdown}>
    <TitleBar name={'Order Details'}/>
    </div>
    <div className={styles.stats1}>
<StateCount title={'Users'} targetCount={120}/>
    </div>
    <div className={styles.stats2}>
    <StateCount title={'Sales'} targetCount={500}/>
    </div>
    <div className={styles.stats3}>
    <StateCount title={'Revenue'} targetCount={4000}/>
    </div>
    <div className={styles.stats4}>
    <StateCount title={'Orders'} targetCount={2000}/>
    </div>
    <div className={styles.chart1}><div className={styles.ImageContainer}>  <BarChart/></div></div>
    <div className={styles.chart2}><div className={styles.ImageContainer}><PieChart/></div></div>
    <div className={styles.chart3}><div className={styles.ImageContainer}><LineInteractionGraph/></div></div>
    <div className={styles.chart4}><div className={styles.ImageContainer}><LineChart/></div></div>
    <div className={styles.chart5}><div className={styles.ImageContainer}><DoughnutChart/></div></div>
    <div className={styles.chart6}><div className={styles.ImageContainer}> <BarChart2/></div></div>
  
</div>
  )
}

export default MainPage