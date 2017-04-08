Vue.prototype.$http = function (param) {
    var xml = new XMLHttpRequest();
    if(!param.url){
        return;
    }

    if (param.data && param.method != 'POST') {
        if(param.url.indexOf('?') > 0){
            param.url += '&' + getParem(param.data);
        }else{
            param.url += '?' + getParem(param.data);
        }
    }
    function getParem(data) {
        var str = '';
        for (var i in data) {
            str += i + '=' + data[i] + '&';
        }
        str = str.substring(0, str.length - 1);
        return str;
    }
    xml.open(param.method||'GET', param.url, true);
    xml.onload = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            if (!!param.success) {
                var responseText = xml.responseText;
                switch (param.dataType){
                    case 'json':
                        try {
                            responseText = JSON.parse(xml.responseText);
                        } catch (e) { };
                        break;
                    default:
                        break;    
                }
                param.success(responseText);
            }
        } else {
            if (!!param.error) {
                param.error(xml.responseText);
            }
        }
        xml.abort();
    }
    if (param.data) {
        xml.send(JSON.stringify(param.data));
    } else {
        xml.send();
    }
}