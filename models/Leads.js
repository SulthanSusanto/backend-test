import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
// import SubscriptionPlan from './SubscriptionPlan.js';
// import TemplateCard from './TemplateCard.js';

const Lead = sequelize.define(
  'Lead',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // subscriptionId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: SubscriptionPlan, // Assumes you have a SubscriptionPlan model
    //     key: 'id',
    //   },
    // },
    // templateId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: TemplateCard, // Assumes you have a Template model
    //     key: 'id',
    //   },
    // },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
    tableName: 'Leads', // Optional: specify a custom table name
  },
);

// Lead.belongsTo(TemplateCard, { foreignKey: 'templateId' });
// Lead.belongsTo(SubscriptionPlan, { foreignKey: 'subscriptionId' });

export default Lead;
