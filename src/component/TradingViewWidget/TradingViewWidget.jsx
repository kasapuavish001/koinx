import React, { memo, useEffect, useRef } from 'react';

function TradingViewWidget() {
    const container = useRef();

    useEffect(() => {
        const scriptId = 'tradingview-widget-script';

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
                {
                    "container_id": "basic-area-chart-demo",
                    "width": "100%",
                    "height": "100%",
                    "autosize": true,
                    "symbol": "BTC",
                    "interval": "D",
                    "timezone": "exchange",
                    "theme": "light",
                    "style": "2",
                    "withdateranges": false,
                    "allow_symbol_change": true,
                    "save_image": false,
                    "details": false,
                    "hotlist": false,
                    "hide_top_toolbar": true,
                    "calendar": false
                }`;

            container.current.appendChild(script);
        }
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>

        </div>
    );
}

export default memo(TradingViewWidget);
