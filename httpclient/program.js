var http = require('http'); // standard package within node

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })

http.get(process.argv[2], (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;


  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', console.log);
  })
  .on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});