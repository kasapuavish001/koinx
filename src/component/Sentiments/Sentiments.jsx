import { faArrowTrendUp, faChevronLeft, faChevronRight, faInfoCircle, faPieChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './sentiments.scss';

const Sentiments = () => {
    const items = [

        {
            icon: faArrowTrendUp,
            boldText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, optio!",
            lightText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed tempore error iste officia qui ducimus accusantium, alias dicta inventore, enim architecto sapiente officiis quasi."
        },
        {
            icon: faPieChart,
            boldText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, optio!",
            lightText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed tempore error iste officia qui ducimus accusantium, alias dicta inventore, enim architecto sapiente officiis quasi."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <FontAwesomeIcon icon={faChevronRight} className='slick-arrow right' />,
        prevArrow: <FontAwesomeIcon icon={faChevronLeft} className='slick-arrow left' />,
        beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex * 2)
    });
    // const settings = {

    // };

    const handleSlideChange = index => {
        setCurrentIndex(index * 2);
    };
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let slidesToShow = 4;

            if (windowWidth < 1200) {
                slidesToShow = 3;
            }
            if (windowWidth < 992) {
                slidesToShow = 2;
            }
            if (windowWidth < 768) {
                slidesToShow = 1;
            }

            setSettings(prevSettings => ({
                ...prevSettings,
                slidesToShow: slidesToShow
            }));
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='main'>
            <p className="main_title title">
                Sentiment
            </p>
            <p className="main_subtitle">
                Key Events<FontAwesomeIcon icon={faInfoCircle} className='icon' />
            </p>
            <div className="main_blocks">
                <Slider {...settings} beforeChange={handleSlideChange}>
                    {items.map((item, index) => (
                        <div key={index} className="main_box">
                            <div className="iconbox">
                                <div className="icon">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                            </div>
                            <div className="main_textblock">
                                <p className="bold">{item.boldText}</p>
                                <p className="light">{item.lightText}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <p className="main_subtitle">
                Analyst Estimates<FontAwesomeIcon icon={faInfoCircle} className='icon' />
            </p>

            <div className="main_analyst">
                <div className="texts">
                    <p>76%</p>
                </div>
                <div className="b">
                    <div className="graph">
                        <p className="grp">Buy</p>
                        <div className="v">
                            <input type="range" className='grpinput' />
                            <p className='text'>76%</p>
                        </div>
                    </div>
                    <div className="graph">
                        <p className="grp">Hold</p>
                        <div className="v">
                            <input type="range" className='grpinput t' />
                            <p className='text'>36%</p>
                        </div>
                    </div>
                    <div className="graph">
                        <p className="grp">Sell</p>
                        <div className="v">

                            <input type="range" className='grpinput th' />
                            <p className='text'>56%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Sentiments;
