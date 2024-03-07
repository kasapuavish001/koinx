import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './allcoins.scss';

const Sentiments = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <FontAwesomeIcon icon={faChevronRight} className='slick-arrow right' />,
        prevArrow: <FontAwesomeIcon icon={faChevronLeft} className='slick-arrow left' />,
        beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex * 2)
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = index => {
        setCurrentIndex(index * 2);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/search/trending');

                if (!response.ok) {
                    throw new Error('Failed to fetch trending coins');
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('Invalid content type. Expected JSON.');
                }

                const data = await response.json();
                setTrendingCoins(data.coins);
                console.log(data.coins, 'dd ');
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

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
            <div className="mainall contain">
                <p className="main_title title">
                    You May Also Like
                </p>
                <div className="main_blocks">
                    <Slider {...settings} beforeChange={handleSlideChange}>
                        {trendingCoins.map((each, i) => {
                            return <div key={i} className='coindetails'>
                                <div className="coinbox">
                                    <div className="box">
                                        <div className="coinimage">
                                            <img src={each.item.small} alt="coinlogo" />
                                        </div>
                                        <p className="cointitle">{each.item.symbol}</p>
                                    </div>
                                    <p className="coinprice">{each.item.data.price}</p>
                                    <img src={each.item.data.sparkline} alt="graph" className='image' />
                                </div>
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
            <div className="mainall contain">
                <p className="main_title title">
                    Trending Coins
                </p>
                <div className="main_blocks">
                    <Slider {...settings} beforeChange={handleSlideChange}>
                        {trendingCoins.map((each, i) => {
                            return <div key={i} className='coindetails'>
                                <div className="coinbox">
                                    <div className="box">
                                        <div className="coinimage">
                                            <img src={each.item.small} alt="coinlogo" />
                                        </div>
                                        <p className="cointitle">{each.item.symbol}</p>
                                    </div>
                                    <p className="coinprice">{each.item.data.price}</p>
                                    <img src={each.item.data.sparkline} alt="graph" className='image' />
                                </div>
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Sentiments;
