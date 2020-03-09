const initialState = {
  todos : [],
  group : []
}

const state = {
  todos:[{
    text : 1,
    group : "30",
    id : 1234123413,
    date: "2020.3.9"
  }],
  group : ["","",""]

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
