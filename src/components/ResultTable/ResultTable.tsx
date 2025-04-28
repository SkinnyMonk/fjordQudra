import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
function ResultTable() {
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Omsetning ekslusiv MVA</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">0</TableCell>
              <TableCell className="bg-[rgb(183,253,143)]">28526</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>=4</TableCell>
              <TableCell>Korrigert omsetning(pkt. 1,2 og 3)</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">0</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">0</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>-5</TableCell>
              <TableCell>varekjop</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>-6</TableCell>
              <TableCell>
                Lønn + sosiale kostnader montører, lærlinger
              </TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">0</TableCell>
              <TableCell>0</TableCell>
              <TableCell
                rowSpan={3}
                className="bg-[rgb(250,250,250)]"
              ></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>-7</TableCell>
              <TableCell>
                Lønn + sosiale kostnader installatør som montør
              </TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">800</TableCell>
              <TableCell>800</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>-8</TableCell>
              <TableCell>Innleid arbeid (se også post 16 og 43)</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">60</TableCell>
              <TableCell>60</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>=9</TableCell>
              <TableCell>Bruttofortjeneste</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">-860</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">-860</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>-10</TableCell>
              <TableCell>Øvrige driftskostnader</TableCell>
              <TableCell>5000</TableCell>
              <TableCell
                colSpan={2}
                rowSpan={6}
                className="!text-left align-top p-4 text-[rgb(190,58,29)]"
              >
                Beregnet lonnskostnad pr t ime = Rubrikk
                <br />
                6+7+8 / Rubrikk 16 = kr 439,-
                <br />
                Snittlonn forrige ar : 377,-
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>=12</TableCell>
              <TableCell>Brutto driftsresultat</TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">-5860</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>+-13</TableCell>
              <TableCell>Finansinntekter / finanskostnader</TableCell>
              <TableCell>-208</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>15</TableCell>
              <TableCell>
                Netto driftsresultat før ekstraordinære poster og
                årsoppgjørsdisp.
              </TableCell>
              <TableCell className="bg-[rgb(235,235,235)]">-6068</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>16</TableCell>
              <TableCell>Sum ut fakturer te (produkt ive) t imer</TableCell>
              <TableCell>139</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>17</TableCell>
              <TableCell>
                Antatt anbuds omsetning i prosent av total omsetning (frivillig)
              </TableCell>
              <TableCell>0</TableCell>
            </TableRow>
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
