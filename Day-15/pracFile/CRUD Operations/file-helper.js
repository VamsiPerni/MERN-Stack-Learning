// --------------------------------------------------------

// const fsPromises = require("node:fs/promises");
// const { v4: uuidv4 } = require("uuid");

// const getAllDataFromArrayFromFile = async (filePath) => {
//   try {
//     const txt = await fsPromises.readFile(filePath, "utf-8");

//     try {
//       const data = JSON.parse(txt);
//       return data;
//     } catch {
//       console.warn(
//         "The file is corrupted or not a valid JSON format. Resetting it!!"
//       );
//       await fsPromises.writeFile(filePath, "[]", "utf-8");
//       return [];
//     }
//   } catch (err) {
//     if (err.code === "ENOENT") {
//       console.log("Creating File...");
//       await fsPromises.writeFile(filePath, "[]", "utf-8");

//       return [];
//     } else {
//       console.error("Error reading the file :: ", err.message);
//       return null;
//     }
//   }
// };

// const saveArrayToFile = async (arr, filePath) => {
//   try {
//     const stringifiedArray = JSON.stringify(arr, null, 4);
//     await fsPromises.writeFile(filePath, stringifiedArray, "utf-8");
//   } catch (err) {
//     console.log("Error saving this file ", err.message);

//     return null;
//   }
// };

// const saveObjectToArrayInFile = async (obj, filePath) => {
//   const arr = await getAllDataFromArrayFromFile(filePath);
//   obj.ud = uuidv4();
//   arr.push(obj);

//   await saveArrayToFile(arr, filePath);
// };

// module.exports = {
//   getAllDataFromArrayFromFile: getAllDataFromArrayFromFile,
//   saveObjectToArrayInFile: saveObjectToArrayInFile,
// };

// --------------------------------------------------------

const fsPromises = require("node:fs/promises");
const { v4: uuidv4 } = require("uuid");

const getAllDataFromArrayFromFile = async (filePath) => {
  try {
    const txt = await fsPromises.readFile(filePath, "utf-8");

    try {
      const data = JSON.parse(txt);
      return data;
    } catch {
      console.warn(
        "The file is corrupted or not a valid JSON format. Resetting it!!"
      );
      await fsPromises.writeFile(filePath, "[]", "utf-8");
      return [];
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("Creating File...");
      await fsPromises.writeFile(filePath, "[]", "utf-8");

      return [];
    } else {
      console.error("Error reading the file :: ", err.message);
      return null;
    }
  }
};

const saveArrayToFile = async (arr, filePath) => {
  try {
    const stringifiedArray = JSON.stringify(arr, null, 4);
    await fsPromises.writeFile(filePath, stringifiedArray, "utf-8");
  } catch (err) {
    console.log("Error saving this file ", err.message);

    return null;
  }
};

const saveObjectToArrayInFile = async (obj, filePath) => {
  const arr = await getAllDataFromArrayFromFile(filePath);
  obj.id = uuidv4();
  arr.push(obj);

  await saveArrayToFile(arr, filePath);
};

const editObjectFromArrayFromFile = async (
  newDataToEditInObj,
  elemId,
  filePath
) => {
  const arr = await getAllDataFromArrayFromFile(filePath);

  const idx = arr.findIndex((elem) => {
    if (elem.id === elemId) {
      return true;
    } else {
      return false;
    }
  });

  if (idx === -1) {
    console.error("Invalid Id. NO object found with the given id!");
    return arr;
  }

  const currentObject = arr[idx];
  const newObject = { ...currentObject, ...newDataToEditInObj };
  arr[idx] = newObject;

  saveArrayToFile(arr, filePath);
};

const deleteObjectFromFile = async (idx, filePath) => {
  const arr = await getAllDataFromArrayFromFile(filePath);

  const checkIdx = arr.findIndex((elem) => {
    if (elem.id === idx) {
      return true;
    } else {
      return false;
    }
  });

  if (checkIdx === -1) {
    console.error("Inavlid Id.Object with the given id is not found");
    return arr;
  }

  const newObj = arr.filter((elem) => {
    if (elem.id != idx) return true;
    return false;
  });

  saveArrayToFile(newObj, filePath);
};

module.exports = {
  getAllDataFromArrayFromFile: getAllDataFromArrayFromFile,
  saveObjectToArrayInFile: saveObjectToArrayInFile,
  editObjectFromArrayFromFile: editObjectFromArrayFromFile,
  deleteObjectFromFile: deleteObjectFromFile,
};
