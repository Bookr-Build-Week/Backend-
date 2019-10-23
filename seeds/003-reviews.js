
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews')
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
       {contents: 'something', book_id: 1, user_id: 1}
      ]);
    });
};
