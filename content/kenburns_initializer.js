$(function () {
    $('#kenburns').kenburns({
        images: ['http://localhost:50876/content/Baskent_Havuz_Bahce.jpg',
                'http://localhost:50876/content/Baskent_Spor_Alanlari.jpg'
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