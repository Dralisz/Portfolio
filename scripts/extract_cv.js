const fs = require("fs");
const path = require("path");

async function extract() {
  const filePath = path.join(__dirname, "..", "public", "CV.pdf");
  if (!fs.existsSync(filePath)) {
    console.error("CV.pdf not found at", filePath);
    process.exit(2);
  }

  let pdfjsLib;
  try {
    pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
  } catch (e) {
    pdfjsLib = require("pdfjs-dist");
  }
  const data = new Uint8Array(fs.readFileSync(filePath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const doc = await loadingTask.promise;

  let fullText = "";
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map((s) => s.str);
    fullText += strings.join(" ") + "\n";
  }

  const text = fullText;
  const emailMatch = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  const phoneMatch = text.match(/(\+?\d[\d\s()\-]{6,}\d)/);
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  let name = "";
  if (lines.length) {
    for (let i = 0; i < Math.min(lines.length, 8); i++) {
      const l = lines[i];
      const capWords = (l.match(/\b[A-Z][a-z]+\b/g) || []).length;
      if (capWords >= 2 && l.length < 60) {
        name = l;
        break;
      }
    }
    if (!name) name = lines[0];
  }

  let summary = "";
  for (let i = 0; i < Math.min(lines.length, 12); i++) {
    if (lines[i].length > 40 && lines[i].split(" ").length > 6) {
      summary = lines[i];
      break;
    }
  }

  const locationMatch = text.match(/(Hungary|Budapest|Budapest,? Hungary)/i);
  const location = locationMatch ? locationMatch[0] : "";

  const result = {
    name: name || "",
    email: emailMatch ? emailMatch[0] : "",
    phone: phoneMatch ? phoneMatch[0] : "",
    location,
    summary,
  };

  console.log(JSON.stringify(result, null, 2));
}

extract().catch((err) => {
  console.error(err);
  process.exit(1);
});
