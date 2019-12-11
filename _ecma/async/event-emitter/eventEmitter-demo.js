const EventEmitter = require('./libs/EventEmitter')

function init() {
    // I'm creating a stand alone object, but you could create a new class which extends it using prototypical inheritence.
    var ee = new EventEmitter();

    // Add some listeners.
    ee.addListener('create-user', sendCreateRequest);
    ee.addListener('request-complete', displayResponse);

    // These are the callback functions.
    function sendCreateRequest(name) {
        // Somewhere else in the code handles the request...
        sendRequest('create', arguments, function(success, response) {
            // When the request is complete, trigger the event and pass it the response.
            ee.emitEvent('request-complete', arguments);

            // emitEvent takes an array of arguments as its second parameter.
            // You can also use emit if you prefer the old style API:
            //     ee.emit('request-complete', success, response);
            // The new array method is a lot more versatile.
        });
    }

    function displayResponse(success, response) {
        console.log(success)

        // Show a popup based on the arguments...
        if (success) {
            console.log('Yay!');
        }
        else {
            console.log('Boo!');
        }
    }

    function sendRequest(type, data, callback) {
        // Do request magic here...
        callback(true, {name: data[0]});
    }

    // Kick everything off by emitting a create-user event.
    ee.emitEvent('create-user', ['Oliver Caldwell']);
}

init()