var globe = DAT.Globe(document.getElementById('container'),
    function(label) {
        return new THREE.Color([0x34cb57, 0x666666, 0xdb0b00][label]);
});

xhr = new XMLHttpRequest();
xhr.open('GET', 'space_junk.json', true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);

            globe.addData(data, {format: 'legend'});
            globe.createPoints();

            globe.addNoMad(data);
            globe.createSphere();

            globe.animate();

            document.body.style.backgroundImage = 'none'; // remove loading
        }
    }
};

xhr.send(null);
