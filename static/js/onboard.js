window.onload = () => {
    $('#button').mousedown(function (event) {
        switch (event.which) {
            case 2:
                location.href = '?click=success';
                break;
            default:
                alert('Please click the button with your scroll wheel!');
        }
    });
    const urlParams = window.location.search;
    const params = new URLSearchParams(urlParams);
    if(params.get('click')==='success') {
        location.href = 'consent.html'.concat(urlParams)
    }
}