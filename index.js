
function receivesAFunction(spy) {
    spy()
}

function returnsANamedFunction() {
    return function my_fun() {
        return
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return
    }
}