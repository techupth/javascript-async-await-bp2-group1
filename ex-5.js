// Exercise #5
let getJohnProfile = async () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
async function asynchronousFunction(){
  try {
    let onSuccess = (data) => {
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}
getJohnProfile()