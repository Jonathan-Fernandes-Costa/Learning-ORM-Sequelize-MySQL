'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matriculas', [
			{
				status: "confirmado",
				id_aluno: 1,
				id_turma: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmado",
			id_aluno: 2,
			id_turma: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			id_aluno: 3,
			id_turma: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			id_aluno: 4,
			id_turma: 3,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			id_aluno: 1,
			id_turma: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			id_aluno: 2,
			id_turma: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Matriculas', null, {})

  }
};
