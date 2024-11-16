import { z } from "zod";
import { DriverSchema } from "../Driver";
import { CarrierSchema } from "../Carrier";
import { CarSchema } from "../Car";
import { PaymentSchema } from "../Payment";
import { PackageSchema } from "../Package";

export const FreightSchema = z.object({
    id: z.string().optional(),
    status: z.string().min(1),
    dateFreight: z.string().min(6),
    driver: DriverSchema,
    carrier: CarrierSchema,
    car: CarSchema,
    payment: PaymentSchema,
    packages: PackageSchema
});

export type FreightData = z.infer<typeof FreightSchema>;

export interface FreightCreateDTO {
    id?: string;
    status: string;
    dateFreight: string;
    driver: string;
    carrier: string;
    car: string;
    payment: string;
    packages: string;
}

export interface FreightUpdateDTO extends Partial<FreightData> {}

export interface FreightResponseData extends FreightData {}