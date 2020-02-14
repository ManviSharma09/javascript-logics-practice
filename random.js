// var a = 10;
// var b = 2;

// const add = (a, b) => {
//     return { a, b, sum: a + b }
// };

const state = {
    auth: {
        authSpinner: false
    },
    dashboard: {
        val1: 1,
        val2: 2
    }
}

const mapStateToProps = (state) => {
    return {
        authSpinner: state.auth.authSpinner,
        val2: state.dashboard.val2
    }
}


console.log("mapStateToProps", mapStateToProps(state));
