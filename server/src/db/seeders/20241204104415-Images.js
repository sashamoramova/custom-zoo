"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          img1: "https://img-fotki.yandex.ru/get/3510/reynardf1.14/0_dae9_d2a5b0e7_XL.jpg",
          animal_id: 1,
        },
        {
          img1: "https://img-fotki.yandex.ru/get/3510/reynardf1.14/0_dae9_d2a5b0e7_XL.jpg",
          animal_id: 1,
        },
        {
          img1: "https://basket-15.wbbasket.ru/vol2332/part233294/233294071/images/big/1.webp",
          animal_id: 2,
        },
        {
          img1: "https://basket-15.wbbasket.ru/vol2332/part233294/233294071/images/big/1.webp",
          animal_id: 2,
        },
        {
          img1: "https://i.ytimg.com/vi/xqwyYv6Vaog/hqdefault.jpg",

          animal_id: 3,
        },
        {
          img1: "https://i.ytimg.com/vi/xqwyYv6Vaog/hqdefault.jpg",

          animal_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
