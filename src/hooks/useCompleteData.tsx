import { CarResponseData } from "@/domain/Car";
import { PackageData } from "@/domain/Package";
import { PaymentResponseData } from "@/domain/Payment";
import { createContext, useContext, ReactNode } from "react";
import { useInitialData } from "./useInitialData";
import CarService from "@/services/Car";
import PaymentService from "@/services/Payment";
import PackageService from "@/services/Package";
import DriverService from "@/services/Driver";
import CarrierService from "@/services/Carrier";
import { DriverResponseData } from "@/domain/Driver";
import { CarrierResponseData } from "@/domain/Carrier";

type CompleteDataContextProps = {
  paymentData: PaymentResponseData[];
  packagesData: PackageData[];
  carData: CarResponseData[];
  driverData: DriverResponseData[];
  carrierData: CarrierResponseData[];
};

export const CompleteDataContext = createContext(
  {} as CompleteDataContextProps
);

interface CompleteDataProviderProps {
  children: ReactNode;
}

export function CompleteDataProvider({ children }: CompleteDataProviderProps) {
  const { data: car } = useInitialData<CarResponseData[], CarResponseData[]>({
    api: {
      get: CarService.get,
    },
  });

  const dataCar = Object.values(car);

  const { data: payment } = useInitialData<
    PaymentResponseData[],
    PaymentResponseData[]
  >({
    api: {
      get: PaymentService.get,
    },
  });

  const dataPayment = Object.values(payment);

  const { data: packageData } = useInitialData<PackageData[], PackageData[]>({
    api: {
      get: PackageService.get,
    },
  });

  const dataPackage = Object.values(packageData);

  const { data: driver } = useInitialData<
    DriverResponseData[],
    DriverResponseData[]
  >({
    api: {
      get: DriverService.get,
    },
  });

  const dataDriver = Object.values(driver);

  const { data: carrier } = useInitialData<
    CarrierResponseData[],
    CarrierResponseData[]
  >({
    api: {
      get: CarrierService.get,
    },
  });

  const dataCarrier = Object.values(carrier);

  return (
    <CompleteDataContext.Provider
      value={{
        paymentData: dataPayment,
        packagesData: dataPackage,
        carData: dataCar,
        driverData: dataDriver,
        carrierData: dataCarrier
      }}
    >
      {children}
    </CompleteDataContext.Provider>
  );
}

export function useCompleteData(): CompleteDataContextProps {
  const context = useContext(CompleteDataContext);
  if (!context) {
    throw new Error(
      "useCompleteData must be used within a CompleteDataProvider"
    );
  }
  return context;
}
