console.log('trying prova');

//prova();
const uri = "http://3.84.38.91:8080/msgs/receive/";




function loadFromQueue(){

    return fetch(uri, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.text().then(function (text) {
        console.log('text is: ' + text);
        console.log('tyie is: ' + typeof text);
        var nweText = text;
        var msg = JSON.parse(nweText).text;
        console.log('msg is: ' + msg);
        var messages = [];
        var listMsgs = [];
        messages.push(msg);
        listMsgs.push(messages);
        var messages2 = listMsgs;
        console.log('this.messages: ' + this.messages);
        return listMsgs;
    }));

};


