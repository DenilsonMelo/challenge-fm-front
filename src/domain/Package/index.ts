import { z } from "zod";

export const PackageSchema = z.object({
    id: z.string().optional(),
    type: z.string().min(1)
});

export type PackageData = z.infer<typeof PackageSchema>;

export interface PackageResponseData extends PackageData {}