import { NextResponse } from "next/server";
import path from "path";

export async function GET(req: Request, res: Response) {
  try {
    // Find the absolute path of the "json" directory
    const jsonFilePath = path.join(process.cwd(), "json", "blogs.json");
    // Use require to directly import JSON file
    const jsonData = require(jsonFilePath);

    return NextResponse.json(jsonData);
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    return NextResponse.error();
  }
}
