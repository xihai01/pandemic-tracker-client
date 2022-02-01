//export const SET_STAGE_COLOR = "SET_STAGE_COLOR";
export const SET_DATA = "SET_DATA";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        mapData: action.mapData,
        stageObj: action.stageObj,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
