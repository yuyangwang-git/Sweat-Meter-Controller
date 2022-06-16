var circle = new ProgressBar.Circle('#battery-bar', {
    color: '#38B99B',
    duration: 1500,
    easing: 'easeInOut',
    strokeWidth: 4,

    from: {
        color: '#ED6A5A'
    },
    to: {
        color: '#87D068'
    },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        // circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + '%');
        }

        circle.text.style.color = '#FFFFFF';
        circle.text.style.fontSize = '1.5rem';

    }
});

usage = 0.8 + Math.random() / 10;
circle.animate(usage);
circle.setText((100 * usage).toFixed(2));

setInterval(function () {
    usage = usage - Math.random() / 200;
    circle.animate(usage);
    circle.setText((100 * usage).toFixed(2));
    console.log(usage)
}, 5000);