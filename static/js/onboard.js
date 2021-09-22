window.onload = () => {
    $('#check-btn').mousedown(function (event) {
        switch (event.which) {
            case 2:
                // if (urlParams.length > 0) {
                //     location.href = urlParams.concat('&click=success');
                // } else {
                //     location.href = '?click=success';
                // }
                location.href = 'launch.php'.concat(urlParams);
                break;
            default:
                alert('Please click the button with your scroll wheel!');
        }
    });

    // $('#consent-btn').click(function () {
    //     location.href = expLoc;
    // });

    const urlParams = window.location.search;
    const params = new URLSearchParams(urlParams);
    // const expLoc = params.get('exploc');
    if(params.get('click')==='success') {
        $('#check-btn').remove();
        $('#button-col').append("<p>Thank you!</p>");
        setTimeout( ()=> {
            location.href = 'consent.html'.concat(urlParams)
        }, 1000 );
    }
}