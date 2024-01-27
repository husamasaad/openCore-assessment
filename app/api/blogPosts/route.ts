import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: Request, res: Response) {
  // Find the absolute path of the "json" directory
  const jsonDirectory = path.join(process.cwd(), "json");
  // Read the "data.json" file
  const fileContents = await fs.readFile(jsonDirectory + "/blogs.json", "utf8");
  // Return the content of the data file in JSON format

  return NextResponse.json(JSON.parse(fileContents));
}
