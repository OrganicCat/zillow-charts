$(function () { 
    var title,
        xAxisTitle = 'date',
        yAxisTitle = '';
    $.get('https://www.quandl.com/api/v1/datasets/ZILLOW/MHOOD_PCTOFHOMESSELLINGFORGAIN_ALLHOMES_SOUTHCHICAGOCHICAGOIL.json?auth_token=vRECm7fWxKfiKUZrsHhG', function(data) {
        console.info(data);
    
        $('#container').highcharts({
            chart: {
                type: 'spline',
                zoomType: 'x'
            },
            title: {
                text: data.name
            },
            xAxis: {
                categories: data.data[0],
                reversed: true,
                title: {
                    text: 'Date'
                },
                labels: {
                    rotation: -90,
                    x: -3,
                    y: 15,
                    step: 10
                },
            },
            yAxis: {
                title: {
                    text: 'Percent sold for profit'
                }
            },
            series: [{
                name: 'Data',
                data: data.data,
                dataGrouping: {
                    approximation: "low"
                }
            }]
        });
    });
});