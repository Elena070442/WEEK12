//  Создать программу, которая генерирует случайное слово из четырёх букв.

// Шаги для выполнения задания:

// 1.Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
// 2.Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
// 3.Используя полученные случайные индексы, извлеки соответствующие символы из alphabet и объедини их в строку, чтобы сформировать случайное слово.
// 4.Выведи полученное случайное слово на экран, чтобы проверить результат.


const alphabet="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

function getRandomIndex(length){
    return Math.floor(Math.random()*length);
}
const index1=getRandomIndex(alphabet.length);
const index2=getRandomIndex(alphabet.length);
const index3=getRandomIndex(alphabet.length);
const index4=getRandomIndex(alphabet.length);

const  randomWord=alphabet[index1]+alphabet[index2]+alphabet[index3]+alphabet[index4];

console.log(randomWord.toLowerCase());