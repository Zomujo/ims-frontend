import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Please enter your email address" }).email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Please enter your password" }).min(8, { message: 'Password must be at least 8 characters in length' }),
});

export const resetPasswordSchema = z.object({
  email: z.string().min(1, { message: "Please enter your email address" }).email({ message: "Please enter a valid email address" }),
});

export const setPasswordSchema = z.object({
  password: z.string().min(1, { message: "Please enter your password" }).min(8, { message: 'Password must be at least 8 characters in length' }),
  confirmpassword: z.string().min(1, { message: "Please confirm your password" }).min(8, { message: 'Password must be at least 8 characters in length' }),
});

export const registerSchema = z.object({
  email: z.string().min(1, { message: "Please enter your email address" }).email({ message: "Please enter a valid email address" }),
  name: z.string().min(1, { message: "Please enter your fullname" }).min(3, { message: 'Full name should not be less than 3 characters' }),
  password: z.string().min(1, { message: "Please enter your password" }).min(8, { message: 'Passwords must be at least 8 characters in length' }),
  phone: z.string().min(1, { message: "Please enter your phone number" }).regex(/^[0-9]{9,12}$/, { message: 'Please enter a valid phone number' })
});

export const newDrugStep1Schema = z.object({
  name: z.string().min(1, { message: "Please enter the name of the drug" }).min(3, { message: 'Name should not be less than 3 characters' }),
  brandName: z.string().min(1, { message: "Please enter the brand of the drug" }).min(3, { message: 'Brand name should not be less than 3 characters' }),
  drugCode: z.string().min(1, { message: "Please enter the code of the drug" }).min(3, { message: 'Code should not be less than 3 characters' }),
});

export const newDrugStep2Schema = z.object({
  batchNo: z.string().min(1, { message: "Please enter the batch number of the drug" }).min(3, { message: 'Batch number should not be less than 3 characters' }),
  reorderLevel: z.string().min(1, { message: "Please enter the reorder level of the drug" }),
  expDate: z.string().min(1, { message: "Please enter the expiry date of the drug" }),
  quantity: z.string().min(1, { message: "Please enter the quantity at hand" }).regex(/^[0-9]{1,}$/, { message: 'Please enter a valid quantity. Numbers only' }),
  costPrice: z.string().min(1, { message: "Please enter the cost price of the drug" }).regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid cost price. Numbers only' }),
  sellingPrice: z.string().min(1, { message: "Please enter the selling price of the drug" }).regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid selling price. Numbers only' })
});

export const stockAdjustmentSchema = z.object({
  currentStock: z.string().min(1, { message: "Please enter the current stock of the drug" }).regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid cost price. Numbers only' }),
  actualStock: z.string().min(1, { message: "Please enter the actual stock of the drug" }).regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid quantity. Numbers only' }),
  notes: z.string().min(1, { message: "Please add a note to the adjustment" }),
});


export const drugOrderSchema = z.object({
  quantity: z.string().min(1, { message: "Please enter the current stock of the drug" }).regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid cost price. Numbers only' }),
  // orderNo: z.string().min(1, { message: "Please enter the order number of the drug" }).regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid quantity. Numbers only' }),
  deliveryDate: z.string().min(1, { message: "Please add an expected delivery date to the order" }),
  address: z.string().min(1, { message: "Please add your address for delivery" }),
});

export const newSupplierStep1Schema = z.object({
  name: z.string().min(1, { message: "Please enter the name of the supplier" }).min(3, { message: 'Name of supplier should not be less than 3 characters' }),
  tradeName: z.string().min(1, { message: "Please enter the brand of the supplier" }).min(3, { message: 'Trade name should not be less than 3 characters' }),
  minOrderQuantity: z.string().min(1, { message: "Please enter the min order quantity" }).regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid quantity. Numbers only' }),
});

export const newSupplierStep2Schema = z.object({
  name: z.string().min(1, { message: "Please enter the name of the supplier's primary contact" }).min(3, { message: 'Name of supplier\'s contact should not be less than 3 characters' }),
  jobTitle: z.string().min(1, { message: "Please enter the job title of the primary contact of the supplier" }).min(3, { message: 'Job title should not be less than 3 characters' }),
  department: z.string().min(1, { message: "Please enter the department of primary contact" }),
  phone: z.string().min(1, { message: "Please enter contact's phone number" }).regex(/^[0-9]{9,12}$/, { message: 'Please enter a valid phone number' }),
  email: z.string().min(1, { message: "Please enter contact's email address" }).email({ message: "Please enter a valid email address" }),
  physicalAddress: z.string().min(1, { message: "Please enter the physical address of the contact" }).min(3, { message: 'Physical address should not be less than 3 characters' }),
  mailingAddress: z.string().min(1, { message: "Please enter the mailing address of the contact" }).min(3, { message: 'Mailing address should not be less than 3 characters' }),
});

export const newSupplierStep3Schema = z.object({
  bankName: z.string(),
  phone: z.string(),
  accountNumber: z.string(),
  minOrderQuantity: z.string().min(1, { message: "Please enter the min order quantity" }).regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid quantity. Numbers only' }),
});