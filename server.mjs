import { createServer } from "http";

const server = createServer();
server;
server.listen(8080, (test) => {
    console.log(test);
    console.log(
        `Server is listening to http://localhost.${server.address().port}`
    );
});