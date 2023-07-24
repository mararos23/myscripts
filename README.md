# myscripts

## Expression

valueAtTime(time - 1);

- เป็นการคืนค่าตำแหน่งของเลเยอร์ในเฟรมที่ 2
- เช่น การ Delay ของเลเยอร์ จาก Parent
- ฟังก์ชันนี้สามารถใช้ได้กับคุณสมบัติที่เป็นตัวเลขหรือเวกเตอร์
- เช่น ตำแหน่ง (position), สี (color), ขนาด (scale)\*/

linear(value, inMin, inMax, outMin, outMax);
ease(value, inMin, inMax, outMin, outMax); // easeIn easeOut

- todo linear(value, 0, 10, 100, 200);
- todo Example - linear(value,0,100,value,value -2000);
- inMin และ inMax แทนค่าขั้นต่ำและค่าสูงสุดของ Range value (input range)
- outMin และ outMax แทนค่าขั้นต่ำและค่าสูงสุดของช่วงผลลัพธ์

//todo ---- loop ----

- loopOut(); - loop หลัง keyframe ตัวสุดท้าย | "cycle", "pingpong", "offset", "continue"
- loopIn();

//todo ---- Math ----

//todo ---- Numbers ----

- random(min, max);
- gaussRandom(min, max);
- seedRandom(1, true); random(); || gaussRandom();
