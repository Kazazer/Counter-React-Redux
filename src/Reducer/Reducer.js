const INITIAL_STATE = {
    count: 42
  }
  const counterReducer = (state=INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
      case "INCREMENT":
  
        return {
  
          count: state.count + 1
        }
      case "DECREMENT":
  
        return {
  
          count: state.count - 1
        }
  
      default:
        return state
    }
  
  }

  export default counterReducer;