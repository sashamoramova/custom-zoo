'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Animals', [{
       name: 'Андрюша',
        type: "Хорек",
        description:"Ну такой вот он хорек,а чо ему",
      },
      {
        name: 'Кирюша',
         type: "Крысюк",
         description:"Крысюк домашний, любит чипсы сл вкусом рака мозга",
       },{
        name: 'Саша',
         type: "Улитка",
         description:"Ну типа улитка на чилле",
       }
      ], {});
   
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Animals', null, {});
     
  }
};
