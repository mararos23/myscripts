// var win = new Window("palette", "Cosmos", undefined);
// var startBtn = win.add("button", undefined, "Run!");
// win.show();
// win.center();
// // Add Effect Property to Layers Selected
// startBtn.onClick = function() {
//     var comp = app.project.activeItem;

//     var layers = comp.selectedLayers;

//     for(var i = 0; i < layers.length; i++){
//         layers[i].Effect.addProperty("Slider Control");
//         }
//     }

// startBtn.onClick = function () {
// 	// function สำหรับสร้างปุ่ม Click เพื่อทำงาน
// 	var comp = app.project.activeItem; //ประกาศตัวแปรเก็บ activeItem;

// 	var layers = comp.selectedLayers; //ประกาศตัวแปรเก็บ selectedLayers;

// 	for (var i = 0; i < layers.length; i++) {
// 		layers[i].Effect.addProperty("Slider Control"); // Add Property to Layers Selected
// 		layers[i].property("Scale").expression =
// 			'temp = effect("Slider Control")("Slider");[temp, temp]'; //Copy Expression ลงตรงหลังเครื่องหมาย =
// 		layers[i].effect(1).property(1).setValue(100);
// 		// ลำดับ effect เช่น Slider Control 1 = (1) เรียงจาก 1~~
// 		// property(#) ลำดับเรียงจาก 1~~  setValue(100) คือค่าของ property ว่าจะกำหนดมันเท่าไหร่
// 	}
// };
