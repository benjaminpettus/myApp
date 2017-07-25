
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: 1, cities_id: 3, title:'All the things', content: 'Why don\'t they know? If they don\'t know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic.'},
        {id: 2, user_id: 1, cities_id: 1, title:'Whaaaat', content: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?'},
        {id: 3, user_id: 2, cities_id: 2, title:'this is so cool', content: 'The animals can\'t manufacture the amino acid lysine. Unless they\'re continually supplied with lysine by us, they\'ll slip into a coma and die.'}
      ]);
    });
};
