"use client";

import Drivers from "@/components/Drivers";
import { DriverResponseData } from "@/domain/Driver";
import { useInitialData } from "@/hooks/useInitialData";
import DriverService from "@/services/Driver";

export default function Page() {
  const { data } = useInitialData<DriverResponseData[], DriverResponseData[]>({
    api: {
      get: DriverService.get,
    },
  });

  const dataArray = Object.values(data);

  return <Drivers data={dataArray} />;
}
