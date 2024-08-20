// import { DataTypes } from 'sequelize';
// import sequelize from '../config/db.js';
// // import SubscriptionPlan from './SubscriptionPlan.js';
// // import TemplateCard from './TemplateCard.js';

// const Lead = sequelize.define(
//   'Lead',
//   {
//     id: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     phoneNumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // subscriptionId: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false,
//     //   references: {
//     //     model: SubscriptionPlan, // Assumes you have a SubscriptionPlan model
//     //     key: 'id',
//     //   },
//     // },
//     // templateId: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false,
//     //   references: {
//     //     model: TemplateCard, // Assumes you have a Template model
//     //     key: 'id',
//     //   },
//     // },
//     message: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//   },
//   {
//     timestamps: true, // Adds createdAt and updatedAt
//     tableName: 'Leads', // Optional: specify a custom table name
//   },
// );

// // Lead.belongsTo(TemplateCard, { foreignKey: 'templateId' });
// // Lead.belongsTo(SubscriptionPlan, { foreignKey: 'subscriptionId' });

// export default Lead;

import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true, // Ensures this field is unique in the collection
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    // Uncomment these fields and schemas when you have SubscriptionPlan and TemplateCard models
    // subscriptionId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'SubscriptionPlan',
    //   required: true,
    // },
    // templateId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'TemplateCard',
    //   required: true,
    // },
    message: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
    collection: 'Leads', // Optional: specify a custom collection name
  },
);

const Lead = mongoose.model('lead', leadSchema);

export default Lead;
