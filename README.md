# nestjs-crash

This is a sample Nest.js application with a couple modifications to show a scenario where an Error is thrown within an async function when there are no callers waiting on the promise that results in the application becomming unresponsive until it is restarted.

To reproduce:

1. Start the server

`npm run start:dev`

2. Execute the endpoint that will crash the server after 3 seconds.

curl http://localhost:3000/crash

3. Once the running server output indicates that there was an unhandle Error attempt to call endpoint again (connection refused)

curl http://localhost:3000/crash

