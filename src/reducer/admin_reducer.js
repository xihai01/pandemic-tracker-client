export const SET_REGIONS = "SET_REGIONS";
export const SET_STAGES = "SET_STAGES";
export const SET_DASHBOARD = "SET_DASHBOARD";



const adminReducer = (state, action) => {
  switch (action.type) {
    case SET_REGIONS:
      return {
        ...state,
        healthRegions: action.healthRegions,
        loading: false,
        error: null
      };
      case SET_STAGES:
        return {
          ...state,
          stages: action.stages,
          loading: false,
          error: null
        };

        case SET_DASHBOARD:
          return {
            ...state,
            dashboard: action.dashboard,
            loading: false,
            error: null
          };
    
    default:
      return state;
  }
};

export default adminReducer;