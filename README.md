# builder-and-parser-of-strins

Пользуясь функцией-строителем sumStringToArr() можно построить строку вида:
 /*
   ––  –  –  –  –  –
     || || || |  |  |
     || | –  –  –  –
     || || |  |  ||
     | –  –  –  –  –

     */
   Передав в качестве аргумента массив из соответствующих знаков.
   Например:
   [seven, zero, eight, nine, three, two]:
  Все элементы массива это строковое представление цифр от 0 до 9, 
которые можно отобразить используюя тире и "пайп". Все они захардкожены.

Для получения массива чисел из подобной строки можно воспользоваться  функцией:
getNumbersFromString(str, widthSign);
/*
["7", "0", "8", "9", "3", "2"]
*/
передав первым параметром строку а вторым ширину символа (в данном случае это 3 знака)