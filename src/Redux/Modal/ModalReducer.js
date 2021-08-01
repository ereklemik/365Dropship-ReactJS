import { EDIT_MODAL_OPEN, MODAL_OPEN } from "../ActionTypes/ActionTypes";

const initialState = {
  modalData: 0,
  EditModal: false ,
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        modalData: action.payload,
      };
      case EDIT_MODAL_OPEN:
        return {
          ...state,
          EditModal: action.payload,
        };
    default:
      return state;
  }
};
export default modalReducer;
