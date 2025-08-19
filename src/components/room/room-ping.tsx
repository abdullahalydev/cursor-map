"use client";

import { useStore } from "@/lib/zustand";
import NumberFlow from "@number-flow/react";
import { Loader, PlugZap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Chart } from "react-charts";

type Data = {
  time: Date;
  ping: number;
};

export function Ping() {
  const { status, ping } = useStore();
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData([
      ...data,
      {
        time: new Date(),
        ping: ping,
      },
    ]);

    if (data.length > 15) {
      setData(data.slice(1));
    }
  }, [ping]);

  return (
    <div className="w-content bg-blue-200 text-blue-800 h-14 w-28 flex overflow-hidden items-center justify-center rounded-full">
      {(status === "IDLE" || status === "CONNECTING") && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 100, top: 0 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          <Loader className="animate-spin" size={20} />
        </motion.div>
      )}
      {status === "CONNECTED" && (
        <motion.div
          className="relative h-full w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          <NumberFlow
            className="relative z-25"
            value={ping < 999 ? ping : 999}
            suffix="ms"
          />

          <div className="absolute h-full w-full top-0 left-0 z-0">
            <Chart
              className=" scale-120"
              options={{
                padding: 0,
                data: [
                  {
                    label: "Ping",
                    data: data,
                  },
                ],
                primaryAxis: {
                  getValue: (datum) => datum.time,
                  show: false,
                  showGrid: false,
                  showDatumElements: false,
                },
                secondaryAxes: [
                  {
                    getValue: (datum) => datum.ping,
                    stacked: true,
                    show: false,
                    showGrid: false,
                    showDatumElements: false,
                  },
                ],
                secondaryCursor: false,
                showDebugAxes: false,
                showVoronoi: false,
                tooltip: false,
                defaultColors: ["oklch(70.7% 0.165 254.624)"],
                getSeriesStyle() {
                  return {
                    stroke: "none",
                  };
                },
              }}
            />
          </div>
        </motion.div>
      )}
      {status === "DISCONNECTED" && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 100, top: 0 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          <PlugZap size={20} />
        </motion.div>
      )}
    </div>
  );
}
