chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        clickPlanet(request.message);
    }
);

function clickPlanet(tbnb_address) {
    var addr_list = tbnb_address.split("\n");
    var add_btn = document.getElementsByClassName("ant-btn sc-10039vq-3 dtOOdd sc-1thz0nh-0 cJdTQC");
    for (i = 0; i < 20; i++) {
        add_btn[0].click();
    }
    var add_addr = document.getElementsByClassName("ant-input dyyoaq-0 dhQZXQ");
    for (i = 0; i < 20 && i < addr_list.length; i++) {

        add_addr[i].select();
        add_addr[i].focus();
        add_addr[i].value = addr_list[i];
        var event = new Event('input', {
            'bubbles': true,
            'cancelable': true
        });

        add_addr[i].dispatchEvent(event);
    }
    var submit_btn = document.getElementsByClassName("ant-btn sc-1wlemt7-0 crxvbZ sc-1thz0nh-0 cJdTQC ant-btn-primary");
    submit_btn[0].removeAttribute("disabled");
    submit_btn[0].click();
}
