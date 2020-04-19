'use strict'

module.exports = {
    up: function (queryInterface) {
        return queryInterface.bulkInsert('accounts', accounts)
    },
    down: function (queryInterface) {
        return queryInterface.destroy('accounts', accounts)
    }
}

const accounts = [{
        fullName: 'The Recipe Club',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        fullName: 'Food Channel',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]