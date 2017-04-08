Vue.filter('tocn', function (value) {
    var jsonStr = {
        'str': '字符串',
        'num': '数字',
        'test': '测试'
    };
    return jsonStr[value];
})