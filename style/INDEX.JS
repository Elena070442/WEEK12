const text="ЫЛВПЫТМБЫВТМЖЫПТ";
// console.log(text.length);
// console.log('каппучино [0]');
// const wrongWord = 'эспрессо';
// console.log(wrongWord[0]); 

// const text1 = "Привет, Мир!";
// const text2 = text1.toUpperCase();
// const text3 = text1.toLowerCase();
// console.log(text3);

// // // let str = "Hello, world!";
// // console.log(str.includes("Hello")); // true
// // console.log(str.includes("bye"));

// const str = "Мне не понравилось обслуживание, полная ерунда!";
// const n = str.replace("ерунда", "12345");
// console.log(n);

// const text4 = "                            Пример текста с пробелами   ";
// const trimmedText = text4.trim();

// console.log(trimmedText); 

// let str = "one, two, three, fghhj, four";
// let words = str.split(", ");
// console.log("Количество слов в строке:", words.length);

// // const makeSixteen = () => {
// 	const str = 'JavaScript'
// 	const result = str.substring(3,str.length)
// resultSixteen.innerText=result
// };
// makeSixteen()

const alphabet=[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ];
// const randomIndex= Math.floor(Math.random() * 32);
// const randomLetter= alphabet [randomIndex];
// const randomLetter1= alphabet [randomIndex];

// console.log("Случайная буква : " + randomLetter+randomLetter1);



// const alphabet = "abcdefghijklmnopqrstuvwxyz";

// // Шаг 2: Создаем функцию для генерации случайного слова
// function generateRandomWord(length) {
//     let randomWord = "";

//     for (let i = 0; i < length; i++) {
//         // Генерируем случайный индекс
//         const randomIndex = Math.floor(Math.random() * alphabet.length);
//         // Извлекаем символ из alphabet и добавляем его к randomWord
//         randomWord += alphabet[randomIndex];
//     }

//     return randomWord;
// };

// const alphabet="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
// function getRandomIndex(length){
//     return Math.floor(Math.random()*length);
// }
// const index1=getRandomIndex(alphabet.length);
// const index2=getRandomIndex(alphabet.length);
// const index3=getRandomIndex(alphabet.length);
// const index4=getRandomIndex(alphabet.length);

// const  randomWord=alphabet[index1]+alphabet[index2]+alphabet[index3]+alphabet[index4];

// console.log(randomWord.toLowerCase());

// const alphabet="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
// const randomIndex = Math.floor(Math.random() * alphabet.length);
// const randomItem1 = alphabet[randomIndex];
// const randomItem2 = alphabet[randomIndex];
// const randomItem3 = alphabet[randomIndex];
// const randomItem = alphabet[Math.floor(Math.random() * alphabet.length)];

// const str1 = "abcdefghij";


// console.log("(2,3): " + str1.substr(2,3));

// let str2 = "розы такие розы";
// str2.replace("розы","красивые");
// console.log(str2);

// const x="Солнце"; console.log("The string length is " + x.length);

// document.getElementsByClassName("responsiveInput").oninput = function(){
//     this.previousSibling.innerText = this.value !== '' ? this.placeholder : '';
// }


function formatName(name) {
    // Удаляем лишние пробелы и приводим к нижнему регистру
    name = name.trim().toLowerCase();
    // Преобразуем первую букву в верхний регистр
    return name.charAt(0).toUpperCase() + name.slice(1);
}

document.getElementById('submitButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const formattedName = formatName(nameInput);
    document.getElementById('output').textContent = `Ваше имя: ${formattedName}`;
});