export function incrementAction() {
  //   return dispatch => {
  //     setTimeout(() => {
  //       dispatch({
  //         type: "ADD",
  //         payload: 1
  //       });
  //     }, 2000);
  //   }
  return {
      type:"ADD",
      payload:new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(1);
          },2000);
      })
  };
}
export function DecrementAction() {
  return {
    type: "SUBSTRACT",
    payload: 1
  };
}
