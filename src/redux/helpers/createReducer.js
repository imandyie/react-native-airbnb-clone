/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

const createReducer = (initialState, handlers) => {
  const reducer = (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
  return reducer;
};

export default createReducer;
