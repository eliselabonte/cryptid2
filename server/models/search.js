// 'use strict';

// module.exports = {
//     up: function (getQueryInterface, sequelize) {
//         let sequelizeSearch = getQueryInterface.sequelize,
//         // These may have to change to meet the already defined parameters in the database
//             searchFields = ['name', 'description'],
//             vectorName = "[column_name]",
//             tableName = "[table_name]";

//         return sequelizeSearch
//             .query('ALTER TABLE "' + tableName + '" ADD COLUMN "' + vectorName + '" TSVECTOR')
//             .then(function () {
//                 console.log("Column added: Adding updating values")
//                 return sequelize
//                     .query('UPDATE "' + tableName + '" SET "' + vectorName + '" = to_tsvector(\'english\', ' + searchFields.join(' || \' \' || ') + ')')
//                     .catch(console.log);
//             }).then(function () {
//                 console.log("Values added: Creating Index")
//                 return sequelize
//                     .query('CREATE INDEX np_search_idx ON "' + tableName + '" USING gin("' + vectorName + '");')
//                     .catch(console.log);
//             }).then(function () {
//                 console.log("Index created: Adding trigger");
//                 return sequelize
//                     .query('CREATE TRIGGER np_vector_update BEFORE INSERT OR UPDATE ON "' + tableName + '" FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger("' + vectorName + '", \'pg_catalog.english\', ' + searchFields.join(', ') + ')')
//                     .catch(console.log);
//             }).then(function () {
//                 console.log("Everything worked!")
//             }).catch(console.log);
//     },

//     down: function (queryInterface, sequelize) {
//         let sequelizeSearch = queryInterface.sequelize,
//             searchFields = ['name', 'description'],
//             vectorName = "[column_name]",
//             tableName = "[table_name]";

//         return sequelizeSearch
//             .query('DROP TRIGGER np_vector_update ON "' + tableName + '"')
//             .then(function () {
//                 console.log("removed trigger")
//                 return sequelize
//                     .query("DROP INDEX np_search_idx")
//                     .catch(console.log)
//             }).then(function () {
//                 console.log("removed index")
//                 return sequelize
//                     .query('ALTER TABLE "' + tableName + '" DROP COLUMN "' + vectorName + '"')
//                     .catch(console.log)
//             }).then(function () {
//                 console.log("removed column")
//             }).catch(console.log)
//     }
// }

