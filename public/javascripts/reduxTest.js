/**
 * Created by kassergey on 26.05.2016.
 */
/*It's for file index.ejs*/
function counter(state, action) {
    if (typeof state === 'undefined') {
        return 0
    }

    if(isNaN(action.type))
    {
        return 0;
    }
    else
    {
        return action.type;
    }
}

var store = Redux.createStore(counter)
var rangeEl = document.getElementById('rangeEl')

function render() {
    rangeEl.value = store.getState().toString();
}

render()
store.subscribe(render)
document.getElementById('numberEl')
    .addEventListener('click', function () {
        store.dispatch({ type: 15 })
    })
