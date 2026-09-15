import './App.css'
import Card from './assets/Card'
import Header from './assets/Header'

import { Gallery } from '@picr/react-grid-gallery';
import type { Image } from '@picr/react-grid-gallery';

import IconThemes from './assets/icons/icon_themes.png'
import IconImage from './assets/icons/icon_image.ico'

// Importing 2026 images
import image2026_3 from './assets/portfolio/2026/animais3.png'
import image2026_4 from './assets/portfolio/2026/animais4.png'
import image2026_5 from './assets/portfolio/2026/animais5.png'
import image2026_6 from './assets/portfolio/2026/animais6.png'
import image2026_7 from './assets/portfolio/2026/animais7.png'
import image2026_8 from './assets/portfolio/2026/animais8.png'
import image2026_9 from './assets/portfolio/2026/animais9.png'
import image2026_10 from './assets/portfolio/2026/animais10.png'
import image2026_11 from './assets/portfolio/2026/frase.png'
import image2026_12 from './assets/portfolio/2026/olhos.png'
import image2026_13 from './assets/portfolio/2026/rosto1.png'
import image2026_14 from './assets/portfolio/2026/rosto2.png'
import image2026_15 from './assets/portfolio/2026/rosto3.png'
import image2026_16 from './assets/portfolio/2026/rosto4.png'
import image2026_17 from './assets/portfolio/2026/insta.png'
import image2026_18 from './assets/portfolio/2026/webdesign1.png'
import image2026_19 from './assets/portfolio/2026/webdesign2.png'
import image2026_20 from './assets/portfolio/2026/cover1.png'
import image2026_21 from './assets/portfolio/2026/zine1.png'

// Importing 2024 images
import image2024_1 from './assets/portfolio/2024/animais11.png'
import image2024_2 from './assets/portfolio/2024/animais12.png'
import image2024_3 from './assets/portfolio/2024/planta1.png'
import image2024_4 from './assets/portfolio/2024/planta2.png'
import image2024_5 from './assets/portfolio/2024/rosto7.png'
import image2024_6 from './assets/portfolio/2024/rosto8.png'
import image2024_7 from './assets/portfolio/2024/rosto9.png'
import image2024_8 from './assets/portfolio/2024/rosto10.png'

// Importing 2023 images
import image2023_2 from './assets/portfolio/2023/2.png'
import image2023_3 from './assets/portfolio/2023/3.png'
import image2023_4 from './assets/portfolio/2023/4.png'
import image2023_5 from './assets/portfolio/2023/5.png'
import image2023_6 from './assets/portfolio/2023/6.png'
import image2023_7 from './assets/portfolio/2023/7.png'
import image2023_8 from'./assets/portfolio/2023/8.png'
import image2023_9 from './assets/portfolio/2023/9.png'
import image2023_10 from './assets/portfolio/2023/10.png'
import image2023_11 from './assets/portfolio/2023/11.png'
import image2023_12 from './assets/portfolio/2023/12.png'
import image2023_13 from './assets/portfolio/2023/13.png'
import image2023_14 from './assets/portfolio/2023/14.png'
import image2023_15 from './assets/portfolio/2023/15.png'
import image2023_16 from './assets/portfolio/2023/16.png'
import image2023_17 from './assets/portfolio/2023/17.png'
import image2023_18 from './assets/portfolio/2023/18.png'
import image2023_19 from './assets/portfolio/2023/19.png'
import image2023_20 from './assets/portfolio/2023/20.png'
import image2023_21 from './assets/portfolio/2023/21.png'
import image2023_22 from './assets/portfolio/2023/22.png'
import image2023_23 from './assets/portfolio/2023/23.png'
import image2023_24 from './assets/portfolio/2023/rosto6.png'
import image2023_25 from './assets/portfolio/2023/lettering2.png'

// Importing 2022 images
import image2022_1 from './assets/portfolio/2022/1.png'
import image2022_2 from './assets/portfolio/2022/2.png'
import image2022_3 from './assets/portfolio/2022/3.png'
import image2022_4 from './assets/portfolio/2022/4.png'
import image2022_5 from './assets/portfolio/2022/5.png'
import image2022_6 from './assets/portfolio/2022/6.png'

// Importing 2020 images
import image2020_1 from './assets/portfolio/2020/1.png'
import image2020_2 from './assets/portfolio/2020/2.png'
import image2020_3 from './assets/portfolio/2020/3.png'
import image2020_4 from './assets/portfolio/2020/4.png'
import image2020_5 from './assets/portfolio/2020/5.png'
import image2020_6 from './assets/portfolio/2020/6.png'

// Importing 2018 and 2019 images
import image2019 from './assets/portfolio/2019/1.png'
import image2018_1 from './assets/portfolio/2018/1.png'
import image2018_2 from './assets/portfolio/2018/2.png'
import image2019_1 from './assets/portfolio/2019/local1.png'
import image2019_2 from './assets/portfolio/2019/rosto5.png'
import image2019_3 from './assets/portfolio/2019/lettering1.png'

function Text2026(){
    const images: Image[] = [
    /*{
        src: image2026_1,
        width: 2019,
        height: 1928,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_2,
        width: 1928,
        height: 2020,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },*/
    {
        src: image2026_3,
        width: 1602,
        height: 1954,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_4,
        width: 1587,
        height: 2407,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_5,
        width: 2560,
        height: 1887,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_6,
        width: 1663,
        height: 2409,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_7,
        width: 2560,
        height: 1919,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_8,
        width: 1928,
        height: 2043,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_9,
        width: 2499,
        height: 1711,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_10,
        width: 1653,
        height: 2210,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_11,
        width: 1652,
        height: 2513,
        tags: [{ value: 'Lettering', title: 'Lettering' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_12,
        width: 1809,
        height: 1928,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_13,
        width: 1764,
        height: 2203,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_14,
        width: 1813,
        height: 2204,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_15,
        width: 1839,
        height: 2421,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_16,
        width: 1393,
        height: 2265,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2026_17,
        width: 4320,
        height: 2880,
        tags: [{ value: 'Social media', title: 'Social media' }, { value: 'Graphical design', title: 'Graphical design' }],
    },
    {
        src: image2026_18,
        width: 5118,
        height: 7267,
        tags: [{ value: 'Website design', title: 'Website design' }, { value: 'Graphical design', title: 'Graphical design' }],
    },
    {
        src: image2026_19,
        width: 5760,
        height: 5538,
        tags: [{ value: 'Website design', title: 'Website design' }, { value: 'Graphical design', title: 'Graphical design' }],
    },
    {
        src: image2026_20,
        width: 1414,
        height: 2000,
        tags: [{ value: 'Cover', title: 'Cover' }, { value: 'Graphical design', title: 'Graphical design' }],
    },
    {
        src: image2026_21,
        width: 1188,
        height: 1641,
        tags: [{ value: 'Magazine', title: 'Magazine' }, { value: 'Graphical design', title: 'Graphical design' }],
    },
    ];

    return(
        <div className='main-text-portfolio'>
            <p>In the past few years, I have been focusing more on traditional art - with alcohol and acrylic markers being my favorite tools to use. 
                I alternate between drawing nature (animals and plants) and drawing people, and sometimes I do a bit of graphical design as well.</p>

            <Gallery images={images} enableImageSelection={false} layout="masonry" columnWidth={250}/>
        </div>
    )
}

function Text2023(){
    const images: Image[] = [
    {
        src: image2023_2,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_3,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_4,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_5,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_6,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_7,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_8,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_9,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_10,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_11,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_12,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_13,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_14,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_15,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_16,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_17,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_18,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_19,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_20,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_21,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_22,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_23,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }],
    },
    {
        src: image2023_24,
        width: 1716,
        height: 2474,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2023_25,
        width: 1543,
        height: 2418,
        tags: [{ value: 'Lettering', title: 'Lettering' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    ];

    return(
        <div className='main-text-portfolio'>
            <p>I did a series of flower drawings digitally (all in Clip Studio Paint, my main tool for digital art), while doing some traditional drawings too.</p>

            <Gallery images={images} enableImageSelection={false} layout="masonry" columnWidth={250}/>
        </div>
    )
}

function Text2024(){
    const images: Image[] = [
    {
        src: image2024_1,
        width: 1697,
        height: 2397,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2024_2,
        width: 2421,
        height: 1355,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2024_3,
        width: 1655,
        height: 2538,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2024_4,
        width: 1437,
        height: 2109,
        tags: [{ value: 'Plant', title: 'Plant' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2024_5,
        width: 1684,
        height: 2124,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2024_6,
        width: 1405,
        height: 1970,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2024_7,
        width: 1238,
        height: 1926,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2024_8,
        width: 1738,
        height: 2142,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    ];

    return(
        <div className='main-text-portfolio'>
            <p>This year, I focused a lot more on drawing with pen, with an occasional pencil drawing.</p>

            <Gallery images={images} enableImageSelection={false} layout="masonry" columnWidth={250}/>
        </div>
    )
}

function Text2022(){
    const images: Image[] = [
    {
        src: image2022_1,
        width: 1080,
        height: 608,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }],
    },
    {
        src: image2022_2,
        width: 1080,
        height: 1350,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }],
    },
    {
        src: image2022_3,
        width: 622,
        height: 608,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Social media', title: 'Social media' }],
    },
    {
        src: image2022_4,
        width: 1414,
        height: 2000,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Cover', title: 'Cover' }],
    },
    {
        src: image2022_5,
        width: 702,
        height: 484,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Magazine', title: 'Magazine' }],
    },
    {
        src: image2022_6,
        width: 704,
        height: 321,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Digital illustration', title: 'Digital illustration' }, { value: 'Tattoo', title: 'Tattoo'}],
    },
    ];

    return(
        <div className='main-text-portfolio'>
            <p>I made some designs for people to share online about their work, but the majority of the designs I did were for the student organization I was part of. 
                For these designs, I used mostly Photoshop, with Canva being used only for the creation of a guide for other students.</p>

            <Gallery images={images} enableImageSelection={false} layout="masonry" columnWidth={250}/>
        </div>
    )
}

function Text2020(){
    const images: Image[] = [
    {
        src: image2020_1,
        width: 1080,
        height: 1080,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }],
    },
    {
        src: image2020_2,
        width: 1920,
        height: 4221,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Website design', title: 'Website design' }],
    },
    {
        src: image2020_3,
        width: 1080,
        height: 755,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Website design', title: 'Website design' }],
    },
    {
        src: image2020_4,
        width: 653,
        height: 500,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Logo', title: 'Logo' }],
    },
    {
        src: image2020_5,
        width: 434,
        height: 482,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Business card', title: 'Business card' }],
    },
    {
        src: image2020_6,
        width: 1654,
        height: 732,
        tags: [{ value: 'Animal', title: 'Animal' }, { value: 'Plant', title: 'Plant' }, { value: 'Digital illustration', title: 'Digital illustration' }, { value: 'Cup art', title: 'Cup art'}],
    },
    ];

    return(
        <div className='main-text-portfolio'>
            <p>I started doing website designs, and tried my hand at creating my own business card.</p>

            <Gallery images={images} enableImageSelection={false} layout="masonry" columnWidth={250}/>
        </div>
    )
}

function Text2019(){
    const images: Image[] = [
    {
        src: image2018_1,
        width: 719,
        height: 352,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Social media', title: 'Social media' }],
    },
    {
        src: image2018_2,
        width: 671,
        height: 419,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Logo design', title: 'Logo design' }],
    },
    {
        src: image2019,
        width: 719,
        height: 352,
        tags: [{ value: 'Graphic Design', title: 'Graphic Design' }, { value: 'Social media', title: 'Social media' }],
    },
    {
        src: image2019_1,
        width: 1744,
        height: 2289,
        tags: [{ value: 'Place', title: 'Place' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2019_2,
        width: 1489,
        height: 1839,
        tags: [{ value: 'Person', title: 'Person' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    {
        src: image2019_3,
        width: 1639,
        height: 2025,
        tags: [{ value: 'Lettering', title: 'Lettering' }, { value: 'Traditional illustration', title: 'Traditional illustration' }],
    },
    ];

    return(
        <div className='main-text-portfolio'>
            <p>These years were when I really started to get more into design, while continuing my art journey traditionally.</p>

            <Gallery images={images} enableImageSelection={false} layout="masonry" columnWidth={250}/>
        </div>
    )
}

function Portfolio(){
    return(
    <div className="main">
        <Header />
            <div className='title-page'>
                <img className='title-icon' src={IconThemes} />
                <p className='title-portfolio'>PORTFOLIO</p>
            </div>

            <Card title={'2025 - 2026'} icon={IconImage} Text={Text2026}/>
            <Card title={'2024'} icon={IconImage} Text={Text2024}/>
            <Card title={'2023'} icon={IconImage} Text={Text2023}/>
            <Card title={'2022'} icon={IconImage} Text={Text2022}/>
            <Card title={'2020'} icon={IconImage} Text={Text2020}/>
            <Card title={'2018 - 2019'} icon={IconImage} Text={Text2019}/>
    </div>
    )
}

export default Portfolio