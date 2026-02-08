import connectDB from "./db";
import { Board, Column } from "./models";
export async function initializeUserBoard(userID: string) {
  try {
    await connectDB();
    
  } catch (err) {
    throw err;
  }
}
