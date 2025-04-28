import type { ReactNode } from "react";

export type TableRowData = {
  id: string;
  label: string;
  values: (number | string | { __html: string } | ReactNode)[];
  cellProps?: Partial<{
    colSpan: number;
    rowSpan: number;
    className: string;
  }>[];
};

export const resultTableData: TableRowData[] = [
  {
    id: "1",
    label: "Omsetning ekslusiv MVA",
    values: [0, 28526, 0],
    cellProps: [
      {},
      { className: "bg-[rgb(235,235,235)]" },
      { className: "bg-[rgb(183,253,143)]" },
      {},
    ],
  },
  {
    id: "=4",
    label: "Korrigert omsetning(pkt. 1,2 og 3)",
    values: [0, 0, 0],
    cellProps: [
      { className: "bg-[rgb(235,235,235)]" },
      { className: "bg-[rgb(235,235,235)]" },
      { className: "bg-[rgb(235,235,235)]" },
    ],
  },
  {
    id: "-5",
    label: "varekjop",
    values: [0, 0, 0],
    cellProps: [{ className: "bg-[rgb(235,235,235)]" }, {}, {}],
  },
  {
    id: "-6",
    label: "Lønn + sosiale kostnader montører, lærlinger",
    values: [0, 0, ""],
    cellProps: [
      { className: "bg-[rgb(235,235,235)]" },
      {},
      { rowSpan: 3, className: "bg-[rgb(250,250,250)]" },
    ],
  },
  {
    id: "-7",
    label: "Lønn + sosiale kostnader installatør som montør",
    values: [800, 800],
    cellProps: [{ className: "bg-[rgb(235,235,235)]" }, {}],
  },
  {
    id: "-8",
    label: "Innleid arbeid (se også post 16 og 43)",
    values: [60, 60],
    cellProps: [{ className: "bg-[rgb(235,235,235)]" }, {}],
  },
  {
    id: "=9",
    label: "Bruttofortjeneste",
    values: [-860, -860, 0],
    cellProps: [
      { className: "bg-[rgb(235,235,235)]" },
      { className: "bg-[rgb(235,235,235)]" },
      { className: "bg-[rgb(235,235,235)]" },
    ],
  },
  {
    id: "-10",
    label: "Øvrige driftskostnader",
    values: [
      5000,
      {
        __html: `Beregnet lonnskostnad pr t ime = Rubrikk <br/>6+7+8 / Rubrikk 16 = kr 439,-<br/>Snittlonn forrige ar : 377,-`,
      },
    ],
    cellProps: [
      {},
      {
        colSpan: 2,
        rowSpan: 6,
        className: "!text-left align-top p-4 text-[rgb(190,58,29)]",
      },
    ],
  },
  {
    id: "=12",
    label: "Brutto driftsresultat",
    values: [-5860],
    cellProps: [{ className: "bg-[rgb(235,235,235)]" }],
  },
  {
    id: "+-13",
    label: "Finansinntekter / finanskostnader",
    values: [-208],
  },
  {
    id: "15",
    label: "Netto driftsresultat før ekstraordinære poster og årsoppgjørsdisp.",
    values: [-6068],
    cellProps: [{ className: "bg-[rgb(235,235,235)]" }],
  },
  {
    id: "16",
    label: "Sum ut fakturer te (produkt ive) t imer",
    values: [139],
  },
  {
    id: "17",
    label: "Antatt anbuds omsetning i prosent av total omsetning (frivillig)",
    values: [0],
  },
];
