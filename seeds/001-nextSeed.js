
exports.seed = function(knex) {
  
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: 'password' },
        {username: 'mimi', password: 'lv28jd7s94'},
        {username: 'Gul', password: 'dogs'},
        {username: 'Gurpreet', password: 'ducks'},
        {username: 'Elliot', password: 'animals'}
      ]);
    });
};
