import { z } from "zod";

export const CarSchema = z.object({
    id: z.string().optional(),
    model: z.string().min(1),
    type: z.string().min(1)
});

export type CarData = z.infer<typeof CarSchema>;

export interface CarResponseData extends CarData {}