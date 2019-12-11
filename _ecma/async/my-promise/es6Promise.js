class es6Promise {

    constructor(fn) {
        this.status = 'Pending'

        setTimeout(() => {
            fn((data) => {
                this.resolve(data)
            }, (error) => {
                this.reject(error)
            })
        })
    }

    resolve(data) {
        if (this.status === 'Pending') {
            this.success(data)
            this.status = 'Fulfilled'
        }
    }

    reject(error) {
        if (this.status === 'Pending') {
            this.error(error)
            this.status = 'Rejected'
        }
    }

    then(success, error) {
        this.success = success
        this.error = error
    }
}

module.exports = es6Promise


