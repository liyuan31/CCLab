window.onload = () => {
    $('#button').mousedown(function (event) {
        switch (event.which) {
            case 2:
                if (urlParams.length > 0) {
                    location.href = urlParams.concat('&click=success');
                } else {
                    location.href = '&click=success';
                }
                break;
            default:
                alert('Please click the button with your scroll wheel!');
        }
    });
    const urlParams = window.location.search;
    const params = new URLSearchParams(urlParams);
    if(params.get('click')==='success') {
        $('#button').remove();
        $('#button-col').append("<p>Thank you!</p>");
        setTimeout( ()=> {
            location.href = 'consent.html'.concat(urlParams)
        }, 1000 );
    }
}