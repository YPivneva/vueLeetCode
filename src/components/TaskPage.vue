<template>
    <div class="task-page">
      <h1>{{ tasks[2].title }}</h1>
      <p><strong>Описание:</strong> {{ tasks[2].description }}</p>      
      <div v-if="tasks[2].comments>0">
        <h5>Комментарии:</h5>
        <div v-for="comment in tasks[2].comments" :key="comment.input">
            <p><strong>{{ key }}:</strong> {{ comment.input }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  const tasks = [
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

  </script>
  
  <style scoped>
  .task-page {
    padding: 20px;
  }
  </style>