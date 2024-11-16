"use client";

import Freights from "@/components/layout/Freights";
import { FreightResponseData } from "@/domain/Freight";
import { useInitialData } from "@/hooks/useInitialData";
import FreightService from "@/services/Freight";

export default function Page() {
  const { data } = useInitialData<FreightResponseData[], FreightResponseData[]>(
    {
      api: {
        get: FreightService.get,
      },
    }
  );

  const dataArray = Object.values(data);

  return <Freights data={dataArray}/>;
}
