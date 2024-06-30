var pdfViewer = document.getElementById('pdf-viewer');
var canvasElements = pdfViewer.getElementsByTagName('canvas');
var pdfUrls = [];

for (var i = 0; i < canvasElements.length; i++) {
    var canvas = canvasElements[i];
    var context = canvas.getContext('2d');
    var dataUrl = canvas.toDataURL('image/png');
    pdfUrls.push(dataUrl);
}

pdfUrls.forEach(function(url, index) {
    var a = document.createElement('a');
    a.href = url;
    a.download = 'page-' + (index + 1) + '.png';
    a.click();
});

console.log('Сохранено ' + pdfUrls.length + ' страниц как изображения.');
