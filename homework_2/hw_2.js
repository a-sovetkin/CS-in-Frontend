const instructions = {
  'SET A': 0,
  'PRINT A': 1,
  'IFN A': 2,
  'RET': 3,
  'DEC A': 4,
  'JMP': 5,
};

const program = [
  instructions['SET A'],      // Ставим значения аккумулятора
  10,                         // В 10
  instructions['PRINT A'],    // Выводим значение на экран
  instructions['IFN A'],      // Если A равно 0
  instructions['RET'],        // Программа завершается
  0,                          // И возвращает 0
  instructions['DEC A'],      // Уменьшаем A на 1
  instructions['JMP'],        // Устанавливаем курсор выполняемой инструкции
  2                           // В значение 2
];

function execute(program) {
  let acc = 0;
  let skip = false;           // признак пропуска команды
  let line = 0;

  while ( line <= program.length ) {
    switch (program[line]) {
      case instructions['SET A']:
        (!skip) ? (acc = program[line+1]) : (skip = false);
        line += 2;
        break;

      case instructions['PRINT A']:
        (!skip) ? (console.log('PRINT A: ', acc)) : (skip = false);
        line ++;
        break;

      case instructions['IFN A']:
        (acc != 0) && (skip = true);
        line ++;
        break;

      case instructions['RET']:
        if (!skip) {
          return program[line+1];
        } else {
          skip = false;
          line +=2;
        }
        break;

      case instructions['DEC A']:
        (!skip) ? (acc--) : (skip = false);
        line++;
        break;

      case instructions['JMP']:
        line = program[line+1];
        break;
    }
  }
}
execute(program);
