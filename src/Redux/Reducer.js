const getall = {
  
  userLogin: [],
  userToken : [],
  userInfo: [],
  configuration : [],
  schedular : [],
  roles: [],
  groups: [],
  rolesWithGroup: [],
  salesData: [],
  salesDataGraphList: [],
  graphList: [],
  graphSum: [],
  graphlegends: [],
  salesDashboardTableData: [],
  mapData: [],
};
const reducer = (state = getall, action) => {
  switch (action.type) {

    case "userLogin":
      return { ...state, userLogin: action.payload };

 


    case "userToken":
      return { ...state, userToken: action.payload };
    case "userInfo":
      return { ...state, userInfo: action.payload };
    case "configuration":
      return { ...state, configuration: action.payload };
    case "schedular":
      return { ...state, schedular: action.payload };

    case "roles":
      return { ...state, roles: action.payload };

    case "groups":
      return { ...state, groups: action.payload };

    case "rolesWithGroup":
      return { ...state, rolesWithGroup: action.payload };

    case "getSalesData":
      return { ...state, salesData: action.payload };

    case "salesDataGraphList":
      return { ...state, salesDataGraphList: action.payload };

    case "graphList":
      return { ...state, graphList: action.payload };

    case "graphSum":
      return { ...state, graphSum: action.payload };

    case "graphlegends":
      return { ...state, graphlegends: action.payload };

    case "salesDashboardTableData":
      return { ...state, salesDashboardTableData: action.payload };

    case "mapData":
      return { ...state, mapData: action.payload };

    case "reset":
      return {
        getall: [],
      };

    default:
      return state;
  }
};

export default reducer;
