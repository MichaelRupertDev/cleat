var m = require("mithril")

var Daemon = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://699fbf07.ngrok.io/api/list"
        })
        .then(function(result) {
            Daemon.list = result
        })
    }
}

module.exports = Daemon
