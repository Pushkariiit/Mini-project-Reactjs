import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import './index.css';
import Sdata from './Sdata';

// function ncard(val){
//   return(<Card
//       sname={val.sname}
//       imgsrc={val.imgscr}
//       title={val.title}
//       link={val.links}
//     />);
// }
ReactDOM.render(
  <>
  <h1 className='heading_style'>List of Top 6 Netflix Series in 2020</h1>
    {/* <Card
      sname={Sdata[0].sname}
      imgsrc={Sdata[0].imgscr}
      title={Sdata[0].title}
      link={Sdata[0].links}
    />

    <Card
      sname={Sdata[1].sname}
      imgsrc={Sdata[1].imgscr}
      title={Sdata[1].title}
      link={Sdata[1].links}
    />
    <Card
      sname={Sdata[2].sname}
      imgsrc={Sdata[2].imgscr}
      title={Sdata[2].title}
      link={Sdata[2].links}
    />
    <Card
      sname={Sdata[3].sname}
      imgsrc={Sdata[3].imgscr}
      title={Sdata[3].title}
      link={Sdata[3].links}
    />
    <Card
      sname={Sdata[4].sname}
      imgsrc={Sdata[4].imgscr}
      title={Sdata[4].title}
      link={Sdata[4].links}
    /> */}

    {/* {Sdata.map(ncard)} */}

    {/* {Sdata.map(function ncard(val){
      return(<Card
      sname={val.sname}
      imgsrc={val.imgscr} 
      title={val.title}
      link={val.links}
    /> );
    })} */}

    {Sdata.map((val,index)=>{
      console.log(index);
      return(<Card
      sname={val.sname}
      imgsrc={val.imgscr}
      title={val.title}
      link={val.links}
    /> );
    })}
  </>,document.getElementById('root')
);
