import React from 'react';

const MusicBox = () =>
    <div className="row" style={{marginTop:"20px", height:"100px", marginRight: "20px", overflow:"hidden", borderStyle:"solid", borderRadius:"10px"}}>
        <div className="col-0" >
            <img style={{borderRadius:"10px"}} src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ffcb653b96260878e130a9ec6c695a15d.910x910x1.jpg"/>
        </div>
        <div className="col-4">
            <h5 id="title" style={{color:"white", fontFamily:"monospace"}}>SickoMode</h5>
            <p style={{color:"white"}}> By: Travis Scott </p>
        </div>
    </div>

export default MusicBox