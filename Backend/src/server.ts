import { app } from "./app";
import { env } from "./app/config/env";
const bootstrap = async () => {
  try {
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
bootstrap();
