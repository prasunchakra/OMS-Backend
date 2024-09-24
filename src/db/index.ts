import { connection } from "./connection";

export const init = async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
    await connection.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};
