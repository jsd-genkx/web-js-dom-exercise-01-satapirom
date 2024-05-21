
let = changeText = () =>{
    document.getElementById('btn').addEventListener("click",() =>{
       document.getElementById('changeMassage').innerHTML = 'Hello JavaScrip innerHTML!';
    });
}
changeText()
/*
        1. ต้องการเปลี่ยนการแสดงข้อความเมื่อมีการคลิกที่ปุ่ม 
        2. สร้าง function changeText
            2.1 ประกาศตัวแปรชื่อ changeText มาเก็บ function ซึ่ง function นี้จะมีคุณสมบัติดังนี้
            2.2 เขาจะไป assess elemant ที่มี id btn ที่ document ของ html นะ 
            2.3 และใช้ addEventLisrtener ('click) มาดักไว้รอ user มาคลิก
            2.4 ใช้ .innerHTML สำหรับ modifile massage เป็น  'Hello javaScript InnerHTML!'
        3. ถ้า user click ปุ่ม ให้เรียกใช้ใช้งาน function ที่ชื่อว่า  changeText
*/

let = bgChangeColor =() =>{
   const bgColor = document.getElementById('bgColor')
   .classList.toggle('bg-red-300');  
}

let = clickChangeColor = () =>{
    const clickBtn =  document.getElementById('btn')
    .addEventListener('click',bgChangeColor) 
}
clickChangeColor()


/*
        1. ต้องการเปลี่ยนการเปลี่ยนสีพื้นหลังเมื่อมีการคลิกที่ปุ่ม 
        2. สร้าง function 2 อัน อันแรกเก็บ backgourd อันที่สองเก็บ event
            2.1 ประกาศตัวแปรมาเก็บ function 
            2.2 และใน fn มีการประกาศตัวแปรมารับค่า  
            2.3 จากนั้นไป assess elemant ที่ id ของ document ใน html 
            2.4 ใช้ .classList มาจัดการ class ของ html ใช้ .toggle เพื่อสลับการมี backgourd และไม่มี backgourd
        3. ทำเหมือนข้อสองแต่ต่างกันตรง 2.4
            3.1 หลังจาก assess แล้วจะใช และใช้ addEventLisrtener ('click) มาดักไว้รอ user 
            3.2 เรียก call back function bgChangeColorมาใช้งาน
            3.3 ถ้า user click ปุ่ม ให้เรียกใช้งาน function ที่ชื่อว่า  clickChangeColor
*/