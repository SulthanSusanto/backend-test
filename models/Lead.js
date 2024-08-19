// import mongoose from 'mongoose';

// const { Schema } = mongoose;

// const leadSchema = new Schema(
//   {
//     firstName: {
//       type: String,
//     },
//     lastName: {
//       type: String,
//     },
//     email: {
//       type: String,
//     },
//     phoneNumber: {
//       type: String,
//     },
//     subscriptionId: {
//       type: Schema.Types.ObjectId,
//       ref: 'SubscriptionPlan',
//     },
//     templateId: {
//       type: Schema.Types.ObjectId,
//       ref: 'TemplateCard',
//     },
//     message: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true, // Automatically adds createdAt and updatedAt fields
//     collection: 'Leads', // Optional: specify a custom collection name
//   },
// );

// const Lead = mongoose.model('Lead', leadSchema);

// export default Lead;
