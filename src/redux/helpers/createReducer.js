/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
 
export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
  	if (handlers.hasOwnProperty(action.type)) {
  	  return handlers[action.type](state, action);
  	}
  	return state;
  }
}