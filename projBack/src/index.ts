import * as http from "http";

import { Server } from "./server";

const app: any = http.createServer(Server.bootstrap().app);

app.listen(3000, () => {
  console.info(`Server started on port 3000.`);
});
