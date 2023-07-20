//* PROJECT PANEL ITEMS

//todo Example
/** var test = app.project.item(1); */ //* ตัวอย่างแบบเต็มๆ

//todo project variable
/** var proj = app.project; */ //* ตัวแปรเก็บไว้เรียกใช้ project

//todo item variable1
/** var item = proj.item(1); */ //* ตัวแปรเก็บไว้เรียกใช้ item()

//todo selection variable
/** var itemsSelection = proj.selection; */ //* ตัวแปรเก็บไว้เรียกใช้ selection
/** itemsSelection[1].name */ //* วิธีเรียกใช้ Selection

//todo project variable compById
//! Example 1
/** var compById = proj.item(1); */ //* ตัวแปรเก็บไว้เรียกใช้ CompById() --> ส่วน Project Panel นะ <--
/** var layer = compById.layer(1); */ //* ตัวแปรเก็บไว้เรียกใช้ Layer() --> ส่วน Timeline Panel นะ <--
//! Example 2
/** var compById = proj.item(1); */ //* ตัวแปรเก็บไว้เรียกใช้ CompById() --> ส่วน Project Panel นะ <--
/** var curComp = proj.activeItem; */ //* ตัวแปรเก็บไว้เรียกใช้ CurComp() --> Active Comp นะ <--
/** curComp.layer(5).name */ //* เรียกใช้ Layer() --> layer ที่อยู่ใน Active Comp <--
/** curComp.numLayers */ //* เช็คจํานวน layer ที่อยู่ใน Active Comp ตามเลข number

//todo layer ที่กดเลือกอันแรกเท่านั้น
/** var layersSelection = curComp.selectedLayers; */ //* ตัวแปรเก็บไว้เรียกใช้ layersSelection
/** layersSelection[0].name; */ //* เรียกดู name First Picked Layer || สามารถเปลี่ยนเลขได้นะ เริ่มที่ 0 , 1 , 2 ~

// var proj = app.project;
// var curComp = proj.activeItem;
// var layersSelection = curComp.selectedLayers;

// layersSelection[0].name;

// ! Slider Panel
// slider1.onChange = slider1.onChanging = function () {
//   slidertext.text = Math.floor(slider1.value);
// };

// slidertext.onChange = slidertext.onChanging = function () {
//   slider1.value = Math.floor(slidertext.text);
// };

// var win = new Window("palette", undefined, undefined);

// var clickBtn = win.add("button", undefined, "Click");
// var closeBtn = win.add("button", undefined, "Close");

// win.size = [200, 200];

// win.show();
// win.center();

// // * Functions

// clickBtn.onClick = function () {
//   alert("Click");
// };
// closeBtn.onClick = function () {
//   win.close();
// };

//!_______________________!//

/** -> Properties <-
 * ! - orientation
 * * - specify the arrangement of child elements within a container. It determines whether the child elements are arranged horizontally (in a row) or vertically (in a column).
 * ? - "row": This value arranges the child elements in a horizontal row from left to right.
 * ? - "column": This value arranges the child elements in a vertical column from top to bottom.
 *
 * ! - alignment
 * ! - size
 * ! - show
 * ! - center
 * ! - close
 *
 */

// var win = new Window("palette", undefined, undefined);

// var clickBtn = win.add("button", undefined, "COPY");
// var closeBtn = win.add("button", undefined, "X,Y");

// win.size = [200, 200];

// win.show();
// win.center();

// //* Functions

// clickBtn.onClick = function () {
//   app.executeCommand(app.findMenuCommandId("Copy Expression Only"));
//   alert("Copy Seccessful");
// };
// closeBtn.onClick = function () {
//   try {
//     for (var i = 0; i < app.project.activeItem.selectedLayers.length; i++)
//       app.project.activeItem.selectedLayers[i]
//         .property("ADBE Transform Group")
//         .property("ADBE Position").dimensionsSeparated =
//         !app.project.activeItem.selectedLayers[i]
//           .property("ADBE Transform Group")
//           .property("ADBE Position").dimensionsSeparated;
//   } catch (e) {
//     alert(e);
//   }
// };

// win.addEventListener("keydown", function (event) {
//   if (event.keyName === "z" && event.ctrlKey) {
//     app.undo();
//   }
// });
