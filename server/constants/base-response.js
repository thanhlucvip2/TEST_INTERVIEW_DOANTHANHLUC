// const CreateResponse = () => {
//   const timestamp = new Date();
//   let status = "";
//   let error = "";
//   let message = "";
//   let data = "";
//   create = (status, error, message, data) => {
//     status;
//     error;
//     message;
//     data;
//   };
// };
// module.exports = CreateResponse;

function CreateResponse(status, message, data) {
  this.timestamp = new Date();
  this.status = status;
  this.message = message;
  this.data = data;
}
module.exports = CreateResponse;
