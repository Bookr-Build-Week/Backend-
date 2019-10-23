
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books')
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'Harry Potter', author: 'JK Rowling', publisher: 'Printing Press Inc'}
      ]);
    });
};
