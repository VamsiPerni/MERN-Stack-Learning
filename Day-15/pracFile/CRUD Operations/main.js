// --------------------------------------------------------
const fileHelper = require("./file-helper");

const main = async () => {
  const filePath = "./data1.json";

  fileHelper.saveObjectToArrayInFile(
    { Name: "Vamsi Perni", Age: 21, city: "Karamchedu" },
    filePath
  );
  const res1 = await fileHelper.getAllDataFromArrayFromFile(filePath);
  console.log("All the data --->> ", res1);

  fileHelper.editObjectFromArrayFromFile({ city: "HYD" }, res1[0].id, filePath);
  const res2 = await fileHelper.getAllDataFromArrayFromFile(filePath);
  console.log("\nAll the data after {EDITING} --->> ", res2);

  fileHelper.deleteObjectFromFile(res1[1].id, filePath);
  const res3 = await fileHelper.getAllDataFromArrayFromFile(filePath);
  console.log("Printing after deleting the object from file ", res3);
};

main();
