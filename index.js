import fs from 'fs/promises';

import { firstYearSubjects } from "./subjects.js";

console.log(firstYearSubjects);

const serializedData = JSON.stringify(firstYearSubjects, null, 2);

await fs.writeFile('curriculum.json', serializedData);

console.log("File saved successfully");