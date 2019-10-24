
exports.seed = function(knex) {
  
  return knex('reviews')
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
       {contents: 'OMFG YESSSSSS', book_id: 1, user_id: 1},
       {contents: 'Hahahahahhahaha', book_id: 2, user_id: 2},
       {contents: 'Genuis', book_id: 3, user_id: 3},
       {contents: 'Wow', book_id: 4, user_id: 4},
       {contents: 'Fuck yeah', book_id: 5, user_id: 5},
       {contents: 'Ha a miracle read', book_id: 6, user_id: 1},
       {contents: 'Riiiiiight', book_id: 7, user_id: 2},
       {contents: 'Good game', book_id: 8, user_id: 3},
       {contents: 'Thanks for the recommendation mom', book_id: 9, user_id: 4},
       {contents: 'Anytime, anywhere, I read', book_id: 10, user_id: 5}
      ]);
    });
};
