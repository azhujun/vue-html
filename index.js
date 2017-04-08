var app = new Vue({
    el:'#app',
    data:function () {
        return {
            list: [],
            total: 0,
            show: false,
            ajax:'',
            something: 0879,
            alertBtn: {
                show:false,
            },
            userinfo: {}
        }
    },
    beforeCreate: function () {
        var vm = this;
        this.$http({
            url: 'index.php',
            method: 'POST',
            dataType:'json',
            data: {
                name:'胡俊'
            },
            success: res => {
                this.ajaxOnload(res);
            },
            error: err => {
                //todo
                this.ajaxOnload(err);
                console.log(err);
            }
        });
    },
    created: function () {
        for (var i = 0; i < 10; i++){
            this.list.push({ index: i });
        }
    },
    methods: {
        incrementTotal: function () {
            
        },
        ajaxOnload: function (data) {
            if (data.code != 200) {
                this.alertBtn = {
                    title: '提示',
                    describe: data.message,
                    class: 'alert2',
                    show: true,
                    autoClose: true,
                    determine: {
                        class: 'red',
                        callback: function (res) {
                            console.log(res);
                        }
                    },
                    cancel: {
                        text: '忘记名字'
                    }
                }
            }
        }
    }
});