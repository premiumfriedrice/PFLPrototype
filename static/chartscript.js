// chartScript.js
window.requestIncomeChartData = function() {   // requests chart data from the /chart_data endpoint
    let chartData = $.ajax({
        type: 'GET',
        url: '/income_chart_data',
        success: function( response ) { 
            console.log(response);
            window.incomeChartResponse = response;    // Response is set to the global variable chartResponse
        },
        error: function(xhr, status, error) {
        console.log(xhr, status, error);
        }
        });

    return chartData;
}


window.requestExpenseChartData = function() {   // requests chart data from the /chart_data endpoint
    let chartData = $.ajax({
        type: 'GET',
        url: '/expense_chart_data',
        success: function( response ) { 
            console.log(response);
            window.expenseChartResponse = response;    // Response is set to the global variable chartResponse
        },
        error: function(xhr, status, error) {
        console.log(xhr, status, error);
        }
        });

    return chartData;
}


window.initializeChart = function(ctx, results, sliceLabel, colors) {     // Initializes the chart
        let breakdownChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: results.names,
                datasets: [{
                    label: sliceLabel,
                    data: results.amounts,
                    backgroundColor: colors,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: false,
                animation: {
                    animateScale: false
                }
            }
        });
    
        return breakdownChart;
}


window.updateChart = function(chart, label, data) {  // Function to update the chart
    chart.data.labels = label;
    chart.data.datasets[0].data = data;
    chart.update();
}

window.clearChart = function(chart) {
    chart.clear();
}

window.clearChartData = function() {
    let clear = $.ajax({
        type: 'GET',
        url: '/clear_charts',
        success: function( response ) { 
            console.log(response);
            window.incomeChartResponse = response;    // Response is set to the global variable chartResponse
        },
        error: function(xhr, status, error) {
        console.log(xhr, status, error);
        }
        });
    return clear
}