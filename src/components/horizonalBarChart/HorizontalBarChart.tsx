import { useEffect, useState } from 'react';
import './HorizontalBarChart.css';

type ComponentProps = {
  width: number;
  title: string;
}

const HorizontalBarChart = ({ width = 1, title }: ComponentProps) => {
  if (width > 1) {
    width = 1
  } else if (width < 0) {
    width = 0
  }
  const [translateX, setTranslateX] = useState(-100);
  const style = {
    transform: `translateX(${translateX}%)`,
  }
  useEffect(() => {
    setTranslateX(-100 + (width * 100));
  }, [width]);
  return (
    <div className="chart-hb">
      <span className="chart-hb-title">
        { title }
      </span>
      <div className="chart-hb-fill">
        <div className="chart-hb-fill-overlay" style={style}></div>        
      </div>
    </div>
  )
};


export default HorizontalBarChart;