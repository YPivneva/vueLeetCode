export const users = [
    {
      userid: 1,
      username: 'fill_pos',
      role: 'admin',
      solvedTasks: [
        { id_list: '1', title: 'Изучить TypeScript' }
      ],
      difficulty: {
        easy: 5,
        medium: 5,
        hard: 5
      }
    },
    {
      userid: 2,
      username: 'Alias_Lus',
      role: 'user',
      solvedTasks: [
        {  }
      ],
      difficulty: {
        easy: 1,
        medium: 1,
        hard: 0
      }
    },
    {
      userid: 3,
      username: 'Alex_Smal',
      role: 'user',
      solvedTasks: [
        { id_list: '2', title: 'Написать приложение' },
        { id_list: '4', title: 'Счетчик' }
      ],
      difficulty: {
        easy: 1,
        medium: 1,
        hard: 0
      }
    },
    {
      userid: 4,
      username: 'juan_Milleri',
      role: 'user',
      solvedTasks: [
        { }
      ],
      difficulty: {
        easy: 2,
        medium: 1,
        hard: 1
      }
    },
    {
      userid: 5,
      username: 'Dmitri_Polor',
      role: 'admin',
      solvedTasks: [
        { }
      ],
      difficulty: {
        easy: 5,
        medium: 5,
        hard: 5
      }
    },
];

export const tasks = [
    {title: 'Изучить TypeScript', description: 'Прочитать документацию и пройти несколько уроков.', createdat: '2024-12-05', updateat: '2024-12-05', userid: 1, id_list: 1, bindTask: 2, difficulty: 'Легкий', category: 'Теория', comments: []},
    {title: 'Написать приложение', description: 'Создать приложение с использованием TypeScript и Express.', createdat: '2024-12-04', updateat: '2024-12-04', userid: 3, id_list: 2, bindTask: 0, difficulty: 'Сложный', category: 'Массивы', comments: []},
    {title: 'Счетчик', description: `
      Учитывая целое число n, верните функцию counter . Эта функция counter сначала возвращает n, а затем при каждом последующем вызове возвращает на 1 больше предыдущего значения (n, n + 1, n + 2 и т. д.).', createdat: '0204-12-01', updateat: '2024-12-02', userid: 5, id_list: 3, bindTask: 0},
      {title: 'Счетчик', description: '
        Синтаксис таков:

        function f(a, b) {
            const sum = a + b;
            return sum;
        }
        console.log(f(3, 4)); // 7
        В этом примере f — это имя функции. (a, b) — это аргументы. Вы можете написать любую логику в теле функции и, наконец, return получить результат. Вы можете ничего не возвращать, и вместо этого функция неявно вернёт undefined.
      `, createdat: '2024-12-02', updateat: '2024-12-02', userid: 3, id_list: 4, bindTask: 3, difficulty: 'Средний', category: 'Динамическое программирование', comments: [
        {description: `
          Анонимная функция
          При желании вы можете исключить имя функции после function ключевого слова.

          var f = function(a, b) {
              const sum = a + b;
              return sum;
          }
          console.log(f(3, 4)); // 7
        `, createdat: '2024-12-03', updateat: '2024-12-03', userid: 2, id_list: 5},
        {description: `
          Функции Внутри функций
          Важная особенность JavaScript заключается в том, что вы можете создавать функции внутри других функций и даже возвращать их!

          function createFunction() {
              function f(a, b) {
                  const sum = a + b;
                  return sum;
              }
              return f;
          }
          const f = createFunction();
          console.log(f(3, 4)); // 7
          В этом примере createFunction() возвращает новую функцию. Затем эту функцию можно использовать как обычно.
        `, createdat: '2024-12-04', updateat: '2024-12-05', userid: 4, id_list: 6}
      ]
    },
  ];