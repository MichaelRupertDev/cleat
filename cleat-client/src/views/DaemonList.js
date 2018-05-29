var m = require("mithril")
var Daemon = require("../models/Daemon")

module.exports = {
    oninit: Daemon.loadList,
    view: function() {
        return m("table.table.table-striped",
        m('thead'),
        m('tr'),
         Daemon.list.map(function(container) {
            return m("tr",
             [m("td", container.Image),
              m("td", container.State)])
        }))
    }
}