import { createServer } from "http";

const server = createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html charset=utf8" });
  response.end(`
    <h1>Hello World!</h1>
    `);
});
server.listen(8080, (test) => {
  console.log(test);
  console.log(
    `Server is listening to http://localhost.${server.address().port}`
  );
});
