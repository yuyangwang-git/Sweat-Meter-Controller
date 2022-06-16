const flowrateDom = document.getElementById('flowrate-value')

flowrate = Math.random() * 10

function getFlowrate() {
    flowrate = Math.random() - 0.5 + flowrate;

    if (flowrate < 0) {
        flowrate = 0;
    }

    return flowrate;
}

setInterval(function () {
    flowrateDom.innerText = getFlowrate().toFixed(2);
}, 1000);