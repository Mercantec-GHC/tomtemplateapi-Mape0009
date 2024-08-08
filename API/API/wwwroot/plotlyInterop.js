window.plotlyInterop = {
    drawChart: function (data) {
        console.log('Data received for plotting:', data);

        var trace = {
            x: data.dates,
            y: data.prices,
            type: 'scatter'
        };

        var layout = {
            title: 'Diesel Prices Over Time',
            xaxis: { title: 'Date' },
            yaxis: { title: 'Price (kr)' }
        };

        Plotly.newPlot('chart', [trace], layout);
    }
};
