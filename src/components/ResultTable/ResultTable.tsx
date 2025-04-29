import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableRowData } from "@/data/resultTableData";

type Props = {
  data: TableRowData[];
};

function ResultTable({ data }: Props) {
  return (
    <div>
      <Card>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead colSpan={2}></TableHead>
              <TableHead>A</TableHead>
              <TableHead>B</TableHead>
              <TableHead>C</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="w-[100px]" colSpan={2}>
                Regnskapsposter
              </TableHead>
              <TableHead>Sum i 1000 kr.</TableHead>
              <TableHead>Installasjons-avdeling</TableHead>
              <TableHead>Installasjons-avdeling</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.label}</TableCell>
                {row.values.map((value, j) => {
                  const props = row.cellProps?.[j] || {};
                  return (
                    <TableCell key={j} {...props}>
                      {value &&
                      typeof value === "object" &&
                      "props" in value ? (
                        value
                      ) : value &&
                        typeof value === "object" &&
                        "__html" in value ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: (value as { __html: string }).__html,
                          }}
                        />
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="bg-[rgb(253,255,198)] p-2 mt-4 rounded-xl border border-[rgb(188,162,82)]">
        <div className="text-[rgb(132,116,56)]">Post 1B:</div>
        <div>
          Utfakturert installasjonsomsetning(ekskl. mva) iflg. regnskapet.
        </div>
      </div>
    </div>
  );
}

export default ResultTable;
