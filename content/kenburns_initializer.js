$(function () {
    var kenburnsRoot = 'http://localhost:50876/content/kenburns/';
    $('#kenburns').kenburns({
        images: [
            kenburnsRoot + 'IMG_0491.JPG',
            kenburnsRoot + 'IMG_0492.JPG',
            kenburnsRoot + 'IMG_0495.JPG',
            kenburnsRoot + 'IMG_0499.JPG',
            kenburnsRoot + 'IMG_0500.JPG',
            kenburnsRoot + 'IMG_0503.JPG',
            kenburnsRoot + 'IMG_0504.JPG',
            kenburnsRoot + 'IMG_0505.JPG',
            kenburnsRoot + 'IMG_0507.JPG',
            kenburnsRoot + 'IMG_0509.JPG',
            kenburnsRoot + 'IMG_0511.JPG',
            kenburnsRoot + 'IMG_0514.JPG',
            kenburnsRoot + 'IMG_0527.JPG',
            kenburnsRoot + 'IMG_0529.JPG',
            kenburnsRoot + 'IMG_0530.JPG',
            kenburnsRoot + 'IMG_0531.JPG',
            kenburnsRoot + 'IMG_0532.JPG',
            kenburnsRoot + 'IMG_0533.JPG',
            kenburnsRoot + 'IMG_0540.JPG',
            kenburnsRoot + 'IMG_0541.JPG'
        ],
        frames_per_second: 30,
        display_time: 7000,
        fade_time: 1000,
        zoom: 2,
        background_color: '#ffffff',
        post_render_callback: function ($canvas, context) {
            // Called after the effect is rendered
            // Draw anything you like on to of the canvas

            context.save();
            context.fillStyle = '#000';
            context.font = 'bold 20px sans-serif';
            var width = $canvas.width();
            var height = $canvas.height();
            var text = "başkent konutları";
            var metric = context.measureText(text);

            context.fillStyle = '#fff';

            context.shadowOffsetX = 3;
            context.shadowOffsetY = 3;
            context.shadowBlur = 4;
            context.shadowColor = 'rgba(0, 0, 0, 0.8)';

            context.fillText(text, width - metric.width - 8, height - 8);

            context.restore();
        }
    });
});