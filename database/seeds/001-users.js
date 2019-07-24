exports.seed = function(knex) {
  // Deletes ALL existing entries and resets ids
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'bilbo', department: 'shire' },
        { username: 'sam', department: 'shire' },
        { username: 'frodo', department: 'shire' },
        { username: 'legolas', department: 'mirkwood' },
        { username: 'aragorn', department: 'ranger' },
        { username: 'denathor', department: 'gondor' },
      ]);
    });
};
