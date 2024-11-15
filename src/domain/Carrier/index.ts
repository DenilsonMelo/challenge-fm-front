import { z } from "zod";

export const CarrierSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1)
});

export type CarrierData = z.infer<typeof CarrierSchema>;

export interface CarrierResponseData extends CarrierData {}