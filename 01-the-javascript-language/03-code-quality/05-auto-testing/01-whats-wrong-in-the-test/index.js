'use strict';

it('Возводит x в степень n', function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

//    В одном блоке it мы производим несколько проверок -
//  что не является хорошим решением
//    В данном случае лучше создать describe для группировки
//  с описанием, что именно мы проверяем
//    После каждую проверку разместить по блокам i
//  с конкретными данными и конкретным результатом
//    Так будет проще отследить, где именно ошибка

// Пример правильного написания теста:
describe('Возводит x в степень n', function () {
  it('Возводит 5 в степень 1, результат: 5', function () {
    assert.equal(pow(5, 1), 5);
  });

  it('Возводит 5 в степень 2, результат: 25', function () {
    assert.equal(pow(5, 2), 25);
  });

  it('Возводит 5 в степень 3, результат: 125', function () {
    assert.equal(pow(5, 3), 125);
  });
});
