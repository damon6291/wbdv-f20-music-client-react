import React from 'react';

const Post = () =>
    <div style={{marginTop:"20px", borderRadius:"10px", border:"solid", padding:"2px"}}>
        <div className="row" style={{marginLeft:"5px"}}>
            <img src="https://4.bp.blogspot.com/-L9CtV6gR8GI/WtgKA619aEI/AAAAAAAAF9c/CubtyZE94o076qCShJN_D2bdNiHoeIRxACEwYBhgL/s320/cool%2Bprofile%2Bimages.png" style={{ height:"50px", borderRadius:"10px"}} />
            <div className="col">
                <h5 style={{color:"white"}} >
                    waterCup23923
                </h5>
                <p style={{color:"white"}}> this song go crazy I swear </p>
                <iframe src="https://embed.music.apple.com/us/album/sicko-mode/1421241217?i=1421242781&amp;app=music&amp;itsct=music_box&amp;itscg=30200&amp;ct=songs_sicko_mode&amp;ls=1"
                style={{height:"110px", frameBorder:"0", width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px", background: "none"}}></iframe>
            </div>
        </div>
    </div>

export default Post