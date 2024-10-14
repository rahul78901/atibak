import { readFile } from "fs/promises";
import path from "path";

const footerRequired = ["fix", "ref"].map((item) => item.toLowerCase());

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Features
        "fix", // Bug fixes
        "docs", // Documentation
        "style", // Styles
        "ref", // Refactoring
        "perf", // Performance improvements
        "test", // Tests
        "dep", // dependences
        "chore", // Other changes
      ],
    ],
    "subject-empty": [2, "never"],
    "subject-case": [2, "always", "start-case"],
    "body-empty": [2, "never"],
    "body-case": [2, "always", "sentence-case"],
    "footer-empty": async () => {
      const gitPath = process.argv[3];
      const filePath = path.relative(process.cwd(), gitPath);

      const content = (await readFile(filePath)).toString();
      const data = content.split("\n\n");
      const type = data.at(0).split(":").at(0).split("(").at(0).toLowerCase();

      if (footerRequired.includes(type) && data.length < 3) {
        return [2, "never"];
      }

      return [0, "never"];
    },
  },
};
