const instructions = {
  'SET A': 0,
  'PRINT A': 1,
  'IFN A': 2,
  'RET': 3,
  'DEC A': 4,
  'JMP': 5,
};

const program = [
  instructions['SET A'],      // 0= Ставим значения аккумулятора
  10,                         // 1= В 10
  instructions['PRINT A'],    // 2= Выводим значение на экран
  instructions['IFN A'],      // 3= Если A равно 0
  instructions['RET'],        // 4= Программа завершается
  0,                          // 5= И возвращает 0
  instructions['DEC A'],      // 6= Уменьшаем A на 1
  instructions['JMP'],        // 7= Устанавливаем курсор выполняемой инструкции
  2                           // 8= В значение 2
];

function execute(program) {
  let res = 0;
  let skip = false;
  let line = 0;

  while ( line <= program.length ) {
    switch (program[line]) {
      case instructions['SET A']:
        (!skip) ? (res = program[line+1]) : (skip = false);
        line += 2;
        break;
      case instructions['PRINT A']:
        (!skip) ? (console.log('PRINT A: ', res)) : (skip = false);
        line ++;
        break;
      case instructions['IFN A']:
        (res != 0) && (skip = true);
        line ++;
        break;
      case instructions['RET']:
        if (!skip) {
          return program[line+1];
        }
        else {
          skip = false;
          line +=2;
        }
        break;
      case instructions['DEC A']:
        (!skip) ? (res--) : (skip = false);
        line++;
        break;
      case instructions['JMP']:
        line = program[line+1];
        break;
    }
  }
}
execute(program);
