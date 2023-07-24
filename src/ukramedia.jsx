var window = new Window("palette", undefined, undefined);

var clickBtn = window.add("button", undefined, "Add Comp");
window.size = [110,55];
window.show();
window.center();

clickBtn.onClick = function () {
function addCompFunc(compName, layerName, title){ // สามารถเพิ่ม PARAMITER ได้ เช่น ตั้งชื่อ comp = addCompFunc(compName)
var newComp = app.project.items.addComp(compName, 1920, 1080, 1, 2, 30);
var newLayer = newComp.layers.addText(title); // addText Layer + Title ใส่ข้อความได้เลย 
newLayer.name = layerName;
newLayer.position.setValue([150, 1000]); // setposition เช่น Text ว่าจะให้มันอยู่ตำแน่งไหน x,y
newLayer.position.expression = "wiggle(2, 10)"; // addExpression to layer
newLayer.opacity.addKey(0); // Add Keyframe ที่เฟรมไหน
newLayer.opacity.addKey(1); // Add Keyframe ที่เฟรมไหน
newLayer.opacity.setValueAtKey(1, 0); // Set Value Keyframe (, value)
newLayer.opacity.setValueAtKey(2, 100); // Set Value Keyframe (, value)
}
app.beginUndoGroup("Code") // UndoGroup สำหรับ Ctrl + Z ย้อนกลับทีเดียว
var compNames = ["A", "B", "C"];
var layerNames = ["01","02","03"];
var titleValue = ["Welcome","See you again","Good Bye"];

for (i = 0; i < compNames.length; i++) {
addCompFunc(compNames[i], layerNames[i], titleValue[i]);
}
app.endUndoGroup // UndoGroup สำหรับ Ctrl + Z ย้อนกลับทีเดียว
}