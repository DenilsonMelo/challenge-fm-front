import { z } from "zod";

export const DriverSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1)
});

export type DriverData = z.infer<typeof DriverSchema>;

export interface DriverResponseData extends DriverData {}