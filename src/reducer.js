function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
let action = { type: "counter/increment" };

function dispatch(action) {
  state = changeState(state, action);
  return state;
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}
dispatch({ type: "counter/increment" });
dispatch({ type: "counter/increment" });

// call the render function
render();