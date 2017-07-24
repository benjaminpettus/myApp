
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'no@no.gov', username: 'no', password: 'no', current_city: 'Oakland'},
        {id: 2, email: 'yes@yes.org', username: 'yes', password: 'yes', current_city: 'San Francisco'}
      ]);
    });
};
