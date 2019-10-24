
exports.seed = function(knex) {
  
  return knex('reviews')
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
       {contents: 'OMFG YESSSSSS', book_id: 1, user_id: 1}
      ]);
    });
};
