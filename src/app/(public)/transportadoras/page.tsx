"use client";

import Carriers from "@/components/Carriers";
import { CarrierResponseData } from "@/domain/Carrier";
import { useInitialData } from "@/hooks/useInitialData";
import CarrierService from "@/services/Carrier";

export default function Page() {
  const { data } = useInitialData<CarrierResponseData[], CarrierResponseData[]>(
    {
      api: {
        get: CarrierService.get,
      },
    }
  );

  const dataArray = Object.values(data);
  
  return <Carriers data={dataArray}/>;
}
