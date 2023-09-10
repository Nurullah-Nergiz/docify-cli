import defaultData from "./../utils/defaultData.js";
import questions from "./questions.js";

console.log("file: default.js:2 => defaultData:", typeof defaultData);

export default questions.map((q) => {
   if (defaultData[q.name]) {
      q.default = defaultData[q.name];
   }

   return q;
});
