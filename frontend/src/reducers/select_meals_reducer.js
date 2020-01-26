import { RECEIVE_SELECT_MEALS, RECEIVE_SELECT_MEAL, REMOVE_SELECT_MEAL } from '../actions/select_meals_actions';

const SelectMealsReducer = (state = {}, action) => {
   Object.freeze(state);
   let nextState = Object.assign({}, state);

   switch (action.type) {
      case RECEIVE_SELECT_MEALS:
         let newState1 = Object.assign({});
         action.selectMeals.data.forEach(meal => newState1[meal._id] = meal)
         return newState1

      case RECEIVE_SELECT_MEAL:
         let newState2 = Object.assign({}, state);
         action.selectMeals.data.forEach(meal => newState2[meal._id] = meal)
         return newState2

      case REMOVE_SELECT_MEAL:
         delete nextState[action.selectMeals.data];
         return nextState;
   
      default:
         return state;
   }
}

export default SelectMealsReducer;