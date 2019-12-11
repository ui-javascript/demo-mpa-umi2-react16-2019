function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();

        image.onload = function() {
            resolve(image);
        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };

        console.log(url)
        image.src = url;

        $('#root').append(image)

    });
}

loadImageAsync('http://www.baidu.com/img/baidu_resultlogo@2.png')

