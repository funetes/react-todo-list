const initialState = {
  todos : [],
  group : []
}
export const reducer = (state = initialState , action) => {
  switch(action.type){
    case "ADDTODO":
      const newDate = new Date();
      const toDay = `${newDate.getFullYear()}.${newDate.getMonth()}.${newDate.getDate()}`;
      console.log(toDay);
      return { todos:[], ...state }
    case "ADDGROUP":
      console.log("addgroup");
      break;
    case "EDIT":
      console.log("edit");
      break;
    case "DONE":
      console.log("done");
      break;
    default:
      return state;
  }
}
