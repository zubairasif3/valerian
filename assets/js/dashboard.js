// Hide submenus
// $('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon
// $('#collapse-icon').addClass('fa-angle-double-left'); 

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse () {
    $('#body-row').toggleClass('small-menu');
    $('.menu-collapsed').toggleClass('d-none');
    $('.list-group-item-action .d-flex').toggleClass('justify-content-center');
    $('.fa-fw').toggleClass('me-3');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}



// mobile sidebar open

$(".top-section .btn-mobile-bar").click(function(){
    $("#sidebar-container").addClass("active");
})

// mobile sidebar close

$('[data-close=mobile-sidebar]').click(function() {
    $("#sidebar-container").removeClass("active");
});



// chart js

Highcharts.chart('chart15', {
    chart: {
        type: 'column',
        styledMode: true
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: '',
        data: [6.3, 3, 6.2, 2, 8, 3, 4]
    }]
});