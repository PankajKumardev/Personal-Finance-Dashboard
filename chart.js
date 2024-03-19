// JavaScript for Trading Chart page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize TradingView's charting library
    new TradingView.widget({
        // Replace with your own configuration options
        "width": 800,
        "height": 500,
        "symbol": "NASDAQ:AAPL", // Example symbol
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "trading-chart-container"
    });
});
