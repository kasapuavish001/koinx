import { faArrowRight, faArrowUp, faBars, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import img from '../../assests/images/about.png';
import Sentiments from '../Sentiments/Sentiments';
import Teams from '../Teams/Teams';
import Tokenomics from '../Tokenomics/Tokenomics';
import TradingViewWidget from '../TradingViewWidget/TradingViewWidget';
import './banner.scss';

const Banner = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [price, setPrice] = useState(1000);
    const [link, setLink] = useState("Overview");
    const handleChange = (event) => {
        setPrice(event.target.value);
        updateThumbPosition(event.target.value);
    };

    const updateThumbPosition = (value) => {
        const inputContainer = document.querySelector('.input-container');
        const followDiv = document.querySelector('.follow');
        if (inputContainer && followDiv) {
            const inputWidth = inputContainer.offsetWidth;
            const thumbPosition = (value / 100) * inputWidth;
            followDiv.style.left = `calc(${thumbPosition}px - 10px)`;
        }
    };


    const mennulist = [
        {
            id: 1,
            name: "Overview"
        },
        {
            id: 2,
            name: "Fundamentals"
        },
        {
            id: 3,
            name: "News Insights"
        },
        {
            id: 4,
            name: "Sentiments"
        },
        {
            id: 5,
            name: "Team"
        },
        {
            id: 6,
            name: "Technicals"
        },
        {
            id: 7,
            name: "Tokenomics"
        },
    ];

    const funData = [
        {
            id: 1,
            name: "Bitcoin Price",
            number: "$16,858.89"
        },
        {
            id: 2,
            name: "24h Low / 24 High",
            number: "$16,858.89/$193534.00"
        },
        {
            id: 3,
            name: "7d Low / 7D High",
            number: "$16,858.89/$12383"
        },
        {
            id: 4,
            name: "Trading Volume",
            number: "$136,858.89"
        },
        {
            id: 5,
            name: "Market Cap Rank",
            number: "#1"
        },
    ]

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
                setTrendingCoins(data.coins.slice(0, 3));
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;




    return (
        <div className='banner contain'>
            <p className="banner_navtitle">
                Cryptocurrencies <span><FontAwesomeIcon icon={faCircleArrowRight} /></span> <span>Bitcoin</span>
            </p>
            <div className="banner_main">
                <div className="banner_main_content">
                    <div className="banner_main_graph">
                        <TradingViewWidget />
                    </div>


                    <ul className="banner_menu">
                        {mennulist.map((each, i) => {
                            return <li className='banner_menu_list' key={i} onClick={() => { setLink(each.name) }}>{each.name}</li>
                        })}
                    </ul>



                    {(link === "Overview" || link === "Fundamentals") &&
                        <div className="banner_performance">
                            <p className="banner_performance_title">Performance</p>
                            <div className="range">
                                <p className="low">
                                    Today's Low <span>0</span>
                                </p>
                                <div className="input-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={price}
                                        onChange={(event) => handleChange(event)}
                                        className='input'
                                    />
                                    <div className='follow' style={{ left: `calc(${(price / 100) * 100}% - 10px)` }}>${price}</div>
                                </div>
                                <p className="low">
                                    Today's High <span>100</span>
                                </p>
                            </div>
                            <div className="range">
                                <p className="low">
                                    52W Low <span>100</span>
                                </p>
                                <div className="input-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={price}
                                        onChange={(event) => handleChange(event)}
                                        className='input'
                                    />
                                    <div className='follow' style={{ left: `calc(${(price / 100) * 100}% - 10px)` }}>${price}</div>
                                </div>
                                <p className="low">
                                    52W Low <span>1000</span>
                                </p>
                            </div>
                            <p className="banner_performance_title">Fundamentals</p>
                            <div className="banner_fun_block">
                                <div className="banner_fun_block_box">

                                    {funData.map((each, i) => {
                                        return <div className="banner_fun_block_box_details">
                                            <p className="banner_fun_block_box_details_text">
                                                {each.name}
                                            </p>
                                            <p className="banner_fun_block_box_details_boldtext">
                                                {each.number}
                                            </p>
                                        </div>
                                    })}

                                </div>
                                <div className="banner_fun_block_box">

                                    {funData.map((each, i) => {
                                        return <div className="banner_fun_block_box_details">
                                            <p className="banner_fun_block_box_details_text">
                                                {each.name}
                                            </p>
                                            <p className="banner_fun_block_box_details_boldtext">
                                                {each.number}
                                            </p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                    {link == "Team" && <Teams />}
                    {link == "Sentiments" && <Sentiments />}
                    {link == 'Tokenomics' && <Tokenomics />}
                </div>
                <div className="banner_main_subcontent">
                    <div className="banner_main_subcontent_block">
                        <p className="banner_main_subcontent_title">Get Started with KoinX <br />for FREE</p>
                        <p className="banner_main_subcontent_text">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
                        <div className="banner_main_subcontent_image">
                            <img src={img} alt="Photo" />
                        </div>
                        <button className="banner_main_subcontent_btn">
                            Get Started for FREE <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    <div className="banner_main_subcontent_trending">
                        <p className="banner_main_subcontent_trending_title">
                            Trending Coins (24h)
                        </p>
                        <div className="banner_main_subcontent_trending_coins">
                            {trendingCoins.map((each, i) => {
                                return <div className='coindetails'>
                                    <div className="coinbox">
                                        <div className="coinimage">
                                            <img src={each.item.small} alt="coinlogo" />
                                        </div>
                                        <p className="cointitle">{each.item.name}({each.item.symbol})</p>
                                    </div>
                                    <p className="coinrank"><FontAwesomeIcon icon={faArrowUp} className='up' />{each.item.market_cap_rank}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;
