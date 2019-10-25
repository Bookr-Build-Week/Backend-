
exports.seed = function(knex) {
 
  return knex('books')
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'Harry Potter', author: 'JK Rowling', publisher: 'Printing Press Inc'},
        {title: 'Science 101', author: 'Dr Evil', publisher: 'Printing Press'},
        {title: 'Marketing', author: 'Dr. Money', publisher: 'P.P'},
        {title: 'Psych 101', author: 'C. M. Crazy', publisher: 'Brains INC'},
        {title: 'Intro to Music', author: 'DaBaby', publisher: 'Rise Records'},
        {title: 'Guitars and Strings', author: 'Axel Rose', publisher: 'Welcome to the Jungle'},
        {title: 'Lord of the Rings', author: 'J. R. R Tolkien', publisher: 'Allen & Unwin'},
        {title: 'The Crow', author: 'Brandon Lee', publisher: 'Chuck Norris Co.'},
        {title: 'Sing, Unburied, Sing', author: 'Jesmyn Ward', publisher: 'IDEK'},
        {title: 'Artemis', author: 'Andy Weir', publisher: 'Zeus Inc.'},
        {title: 'Three Daughters of Eve', author: 'Elif Shafak', publisher: 'You know him'}
      ]);
    });
};
