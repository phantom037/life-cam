import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const images = [
    "https://acrosshorizon.github.io/gallery/2023/IMG_8298.jpeg",
    "https://acrosshorizon.github.io/gallery/2023/IMG_8421.jpeg",
    "https://acrosshorizon.github.io/gallery/2023/IMG_8430.jpeg",
    "https://acrosshorizon.github.io/gallery/us/IMG_8072.jpeg",
    "https://acrosshorizon.github.io/gallery/us/IMG_8074.jpeg",
    "https://acrosshorizon.github.io/gallery/2023/IMG_8434.jpeg",
    "https://acrosshorizon.github.io/gallery/2023/IMG_8438.jpeg",
    "https://acrosshorizon.github.io/gallery/2023/IMG_8529.jpeg",
    "https://acrosshorizon.github.io/gallery/2023/IMG_8686.jpeg",
    "https://acrosshorizon.github.io/gallery/2023/IMG_E08DF1E02E9D-1.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/0e9f193e-7be1-4e3b-afd2-ae82b66adde8-main_1676206796334.jpg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7637.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7643.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7676.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7686.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7784.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7931.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7932.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7934.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7935.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7940.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7968.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7971.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_8048.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_8120.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/FullSizeRender (1).jpeg",
    "https://acrosshorizon.github.io/gallery/2022/FullSizeRender (2).jpeg",
    "https://acrosshorizon.github.io/gallery/2022/FullSizeRender (3).jpeg",
    "https://acrosshorizon.github.io/gallery/2022/FullSizeRender.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_0694.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_0718.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_2773.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_2796.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_2820.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_5037.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_5326.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_5569.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_6538.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_6860.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_6863.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_7110.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_8777.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_8837.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_8839.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/Melbourne_ACMI_2022.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/Monash_2022.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4429.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4566.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4568.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4586.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4591.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4712.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4756.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4812.jpeg",
    "https://acrosshorizon.github.io/gallery/2022/IMG_4815.jpeg",
    "https://acrosshorizon.github.io/gallery/art/IMG_8010.JPG",
    "https://acrosshorizon.github.io/gallery/art/IMG_8014.JPG",
    "https://acrosshorizon.github.io/gallery/art/IMG_8015.JPG",
    "https://acrosshorizon.github.io/gallery/art/IMG_8016.JPG",
    "https://acrosshorizon.github.io/gallery/art/IMG_8017.JPG",
    "https://acrosshorizon.github.io/gallery/art/IMG_8018.JPG",
    "https://acrosshorizon.github.io/gallery/art/IMG_8019.JPG",
    "https://acrosshorizon.github.io/gallery/us/01A3D312-87D7-4953-85AC-D290AB1EF2E2.jpg",
    "https://acrosshorizon.github.io/gallery/us/0EC4B59F-C22F-46FE-ADA0-BBE0A788FAD3.jpg",
    "https://acrosshorizon.github.io/gallery/us/154BF4C9-6317-4267-B9A8-7E557C6EF4B9.jpg",
    "https://acrosshorizon.github.io/gallery/us/211B86F1-BA53-451E-9F70-8B5C533F6A38.jpg",
    "https://acrosshorizon.github.io/gallery/us/2C08D199-AED2-4E85-8566-5F141A7BFA6B.jpg",
    "https://acrosshorizon.github.io/gallery/us/36DA069B-1DDB-4F59-AEF3-710F28925DA1.jpg",
    "https://acrosshorizon.github.io/gallery/us/39D2537B-AEF1-4E3D-8C6E-D4B7EE6DDF1F.jpg",
    "https://acrosshorizon.github.io/gallery/us/3B4C0429-07BB-4B95-83D4-CB0D6B2BD911.jpg",
    "https://acrosshorizon.github.io/gallery/us/3EC0C6F0-EB18-490C-89E2-31DD6D611D51.jpg",
    "https://acrosshorizon.github.io/gallery/us/4E1FC3BF-ED41-48F8-8E66-2502ACC0C96E.jpg",
    "https://acrosshorizon.github.io/gallery/us/5582F91A-0319-4B64-B259-8EB56ECB4C4F.jpg",
    "https://acrosshorizon.github.io/gallery/us/661F1DCB-1BBF-42C8-98D1-9370E22A2996.jpg",
    "https://acrosshorizon.github.io/gallery/us/68230C78-658F-48ED-A46A-86C7C7015D6B.jpg",
    "https://acrosshorizon.github.io/gallery/us/747FEEAD-1A8F-4883-A25F-7162482B3329.jpg",
    "https://acrosshorizon.github.io/gallery/us/78D804CA-A057-4566-A49D-8310D929FC86.jpg",
    "https://acrosshorizon.github.io/gallery/us/9AF4E435-643A-4B0A-924B-B3C734466BB7.jpg",
    "https://acrosshorizon.github.io/gallery/us/C2B15E15-6FC3-4A47-882F-A137113F1DAE.jpg",
    "https://acrosshorizon.github.io/gallery/us/Cal_swimpool_2018.jpg",
    "https://acrosshorizon.github.io/gallery/us/D873826B-60E8-4A5F-B0DE-08CBF72FB78D.jpg",
    "https://acrosshorizon.github.io/gallery/us/E530ED3D-E99B-4E9B-B78D-3934D3358FF7.jpg",
    "https://acrosshorizon.github.io/gallery/us/EECC34A6-05B8-4277-89AC-009FA3E16E25.jpg",
    "https://acrosshorizon.github.io/gallery/us/F4CB6C70-1341-46A5-AA9F-CE5BFF088441.jpg",
    "https://acrosshorizon.github.io/gallery/us/FD1A75B2-38A6-4B6E-A96B-8DB2B24F0B9D.jpg",
    "https://acrosshorizon.github.io/gallery/us/FDCA60D4-8FBC-4DE5-B8F9-7413766A26D2.jpg",
    "https://acrosshorizon.github.io/gallery/us/IMG_0032.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_0247.jpeg",
    "https://acrosshorizon.github.io/gallery/us/IMG_0258.jpeg",
    "https://acrosshorizon.github.io/gallery/us/IMG_0260.jpeg",
    "https://acrosshorizon.github.io/gallery/us/IMG_0261.jpeg",
    "https://acrosshorizon.github.io/gallery/us/IMG_1111.jpeg",
    "https://acrosshorizon.github.io/gallery/us/IMG_1126.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_1127.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_1391.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5370.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5371.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5372.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5373.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5374.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5375.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5376.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5377 (1).JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5377.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_5378.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6818.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6821.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6823.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6825.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6828.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6830.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6831.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6838.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6840.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6841.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6844.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_6846.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_7310.PNG",
    "https://acrosshorizon.github.io/gallery/us/IMG_8020.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_8021.JPG",
    "https://acrosshorizon.github.io/gallery/us/IMG_8599.JPG",
    "https://acrosshorizon.github.io/gallery/us/LA_trip_2018-1.jpeg",
    "https://acrosshorizon.github.io/gallery/us/LA_trip_2018-2.jpeg",
    "https://acrosshorizon.github.io/gallery/us/UCB_2019.jpg",
    "https://acrosshorizon.github.io/gallery/us/UCLA_2019.jpg",
    "https://acrosshorizon.github.io/gallery/us/Walk_of_fame_2018.jpg",
    "https://acrosshorizon.github.io/gallery/us/cali_summer_2018.jpeg",
    "https://acrosshorizon.github.io/gallery/us/de_anza_math43.JPG",
    "https://acrosshorizon.github.io/gallery/2019/IMG_0035.jpeg",
    "https://acrosshorizon.github.io/gallery/2019/IMG_0484.jpeg",
    "https://acrosshorizon.github.io/gallery/2019/IMG_2483.JPG",
    "https://acrosshorizon.github.io/gallery/2019/IMG_2521.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0063.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0066.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0067.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0068.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0069.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0073.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0076.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0079.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0082.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0084.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0086.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0087.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_0088.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_2409.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_2410.jpeg",
    "https://acrosshorizon.github.io/gallery/young/IMG_2411.jpeg",
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
