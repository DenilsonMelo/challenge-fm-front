import { z } from "zod";

export const PaymentSchema = z.object({
    id: z.string().optional(),
    type: z.string().min(1),
    amount: z.string().min(1)
});

export type PaymentData = z.infer<typeof PaymentSchema>;

export interface PaymentResponseData extends PaymentData {}