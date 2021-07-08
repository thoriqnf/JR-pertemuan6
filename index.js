// mencari luas persegi panjang

// let panjang = 10;
// let lebar = 5;

// let luas = panjang * lebar;
// console.log(luas);

// let panjang2 = 15;
// let lebar2 = 10;
// let luas2 = panjang2 * lebar2;
// console.log(luas2);

// cara membuat function
// cara 1
// function hitungLuas() {
//   let luas = "abc";
//   //return adalah keputusan akhir dari sebuah fungsi
//   return console.log("function masih dibuat");
//   // semua proses atau variable dibawah line return tidak bisa jalan
//   let luas2 = "asd";
// }

// cara 2, arrow function
// let hitungLuas2 = () => {
//   return "function hitungLuas2";
// };

// cara memanggil fungsi
// hitungLuas();
// console.log(hitungLuas2());

// cara memasukkan parameter kedalam function
// let hitungLuas = (panjang, lebar) => {
//   return panjang * lebar;
// };

// cara memanggil function dengan argumen

// console.log(hitungLuas(10, 5));
// console.log(hitungLuas(1000, 15));
// console.log(hitungLuas(990, 5));
// console.log(hitungLuas(10, 55));
// console.log(hitungLuas(10, 512));

// soal
// menghitung rumus volume dari kubik
// let hitungVolumeKubus = (sisi) => {
//   return sisi * sisi * sisi;
// };

// Short syntax 1 baris dari hitungVolumeKubus
let hitungVolumeKubus = (sisi) => sisi * sisi * sisi;
console.log(hitungVolumeKubus(10));

let hitungVolumeBalok = (panjang = 1, lebar = 1, tinggi = 1) => {
  return panjang * lebar * tinggi;
};
console.log(hitungVolumeBalok());

// menghitung volume silinder
// let hitungVolumeSilinder = (jariJari, tinggi) => {
//   return (22 / 7) * jariJari * jariJari * tinggi;
// };

// menghitung rumus suhu dengan function helper

// let suhu = 25;

// kita mau merubah suhu celcius menjadi fahrenheit

// let normalizeSuhu = (suhu) => {
//   return suhu * (9 / 5);
// };

// console.log(normalizeSuhu(suhu));

// let toFahrenheit = (normalize) => {
//   return normalizeSuhu(normalize) + 32;
// };

// console.log(toFahrenheit(suhu));

// tanpa function helper
// let celciusToFahrenheit = (suhu) => {
//   return suhu * (9 / 5) + 32;
// };
// console.log(celciusToFahrenheit(suhu));

// let fahrenheit = 77;
// let fahrenheitToReamur = (fahrenheit) => {
//   return (fahrenheit - 32) * (4 / 9);
// };

// console.log(fahrenheitToReamur(fahrenheit));

// console.log(hitungVolumeSilinder(7, 20));
// if (true) {
//   let number1 = 1;
//   console.log("number didalam if", number1);
// } else {
//   let number2 = 2;
// }

// let number1 = 1000;
// let number2 = 20;
// console.log("number diluar if", number1);
// console.log("number diluar if", number2);

// function sayMyName() {
//   let myName = "Skilvul";

//   myName += "123";
//   return myName;
// }

// // console.log(myName);
// console.log(sayMyName());
