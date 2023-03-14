import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const images = [
    "https://phantom037.github.io/Ethereal/imgGallery-main/Melbourne_ACMI_2022.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/melbourne_FEDSQ_2022.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/melbourne-carlton_garden_2022.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/Monash_2022.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/Daat_2022.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/Dalat_2019.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/south_de_anza_blvd.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/california_cupertino_2019-1.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/UCB_2019.jpg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/UCLA_2019.jpg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-7.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-6.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-5.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-4.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-3.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-2.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-1.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/Walk_of_fame_2018.jpg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/Chirstmas-2018.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/halloween_2018_with_housemates-3.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/halloween_2018_with_housemates-2.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/halloween_2018_with_housemates-1.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/great_america_2018.jpg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/de_anza_2018.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/cali_summer_2018.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/Cal_swimpool_2018.jpg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/basketball_2018.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/apple_park_1.jpeg",
    "https://phantom037.github.io/Ethereal/imgGallery-main/de_anza_math43.JPG",
    "https://phantom037.github.io/Ethereal/imgGallery-main/Leo_2003.jpeg",
]

    const ReactImageGallery = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i) =>{
        setData({img, i});
    }

    const imgAction = () =>{
        setData({img: '', i: 0});
    }

    return (
        <>
            {data.img && 
                <div style={{
                    width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}>
                    <button onClick={() => imgAction()} style={{position: 'absolute', top: '20px', right: '20px', width: '20px', height: '20px',
                            backgroundImage: 'url(https://www.pngall.com/wp-content/uploads/4/Red-Close-Button.png)', backgroundSize: 'cover'}}></button>
                    <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}}/>
                </div>

            }
            <div style={{padding: '10px'}}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="20px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block", cursor: 'pointer' }}
                            alt=""
                            onClick={() => viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
        </>
    );
};

export default ReactImageGallery;