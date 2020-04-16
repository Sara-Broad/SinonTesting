'use strict'

module.exports = {
    up: function (queryInterface) {
        return queryInterface.bulkInsert(accounts)
    },
    down: function (queryInterface) {
        return queryInterface.destroy(accounts)
    }
}

const accounts = [{
        name: 'The Recipe Club',
        createdAt: newDate(),
        updatedAt: newDate()
    },
    {
        name: 'Food Channel',
        createdAt: newDate(),
        updatedAt: newDate()
    }
]