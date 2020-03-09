export const reducer = (state = {} , action) => {
  switch(action.type){
    case "ADDTODO":
      console.log("addtodo");
      break;
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
