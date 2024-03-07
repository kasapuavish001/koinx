import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';
import './Tokenomics.scss';

const Tokenomics = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'doughnut',
                data: {
                    labels: ['Crowdsale investor : 80%', 'Foundation : 20%'],
                    datasets: [{
                        label: 'Token Distribution',
                        data: [20, 80],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
            return () => myChart.destroy();
        }
    }, []);

    return (
        <div className='main_token contain'>
            <p className="title">Tokenomics</p>
            <p className="subtitle">Initial Distribution</p>
            <div className='graph'>
                <canvas ref={chartRef} />
            </div>
            <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat unde obcaecati rem maxime blanditiis aperiam labore. Quae recusandae perferendis exercitationem rerum numquam ea eveniet magni nesciunt architecto, consectetur nobis aspernatur nostrum cum tempora fugiat qui, doloremque vel iure voluptatibus eligendi consequuntur sequi id! Optio rem distinctio dignissimos dicta sapiente magnam!</p>
        </div>
    );
}

export default React.memo(Tokenomics);
