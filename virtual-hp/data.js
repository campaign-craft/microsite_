var APP_DATA = {
    "scenes": [{
        "id": "0-gate",
        "name": "gate",
        "levels": [{
                "tileSize": 256,
                "size": 256,
                "fallbackOnly": true
            },
            {
                "tileSize": 512,
                "size": 512
            },
            {
                "tileSize": 512,
                "size": 1024
            },
            {
                "tileSize": 512,
                "size": 2048
            }
        ],
        "faceSize": 2048,
        "initialViewParameters": {
            "yaw": -0.16388561226097487,
            "pitch": 0.09553090615438009,
            "fov": 1.3108730938557924
        },
        "linkHotspots": [],
        "infoHotspots": [{
            "yaw": -0.1659674002113931,
            "pitch": 0.25001777756722987,
            iframe: '<a href="lobby/index.html"><div id="arrow1" class="arrow1" width="100%" height="100%" src="" frameborder="0" allowfullscreen></div></a>',
            perspective: {
                radius: 2700,
                extraTransforms: "rotateX(-75deg)",
            },
        }]
    }],
    "name": "Project Title",
    "settings": {
        "mouseViewMode": "drag",
        "autorotateEnabled": true,
        "fullscreenButton": true,
        "viewControlButtons": false
    }
};