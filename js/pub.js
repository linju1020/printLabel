function get_dpi() {
    for (var i = 56; i < 2000; i++) {
        if (matchMedia("(max-resolution: " + i + "dpi)").matches === true) {
            return i;
        }
    }
}
function setFontSize() {
    var dpi = get_dpi();
    console.log('dpi', dpi);
    $('html').css('font-size', (dpi / 9) + 'px');
}
function setWH(div) {
    var pW = 0, pH = 0;
    var _c = div.attr('class')
    if (_c === 'wh_76_130') {
        pW = 76; pH = 130;
    }
    var dpi = get_dpi();
    var width = pW * (dpi / 25.4);
    var height = pH * (dpi / 25.4);
    console.log('width', width, 'height', height);
    div.width(width);
    div.height(height);
}

$(function () {
    setFontSize();
    setWH($('#main'))//76mm*130mm
})