import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: Request, res: Response) {
  try {
    // Find the absolute path of the "json" directory
    const jsonFilePath = path.join(process.cwd(), "json", "blogs.json");
    // Use require to directly import JSON file
    const fileContents = await fs.readFile(jsonFilePath, "utf8");
    const jsonData = JSON.parse(fileContents);

    return NextResponse.json(jsonData);
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    return NextResponse.error();
  }
}
