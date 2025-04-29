import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { resultTableData } from "@/data/resultTableData";
import ResultTable from "@/components/resultTable/resultTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut } from "lucide-react";
function financialReport() {
  return (
    <div>
      <div className="flex w-full h-120px justify-between items-center">
        <div className="font-semibold text-muted-foreground">
          Finansiell Rapport 2024-25
        </div>
        <div className="flex justify-between items-center gap-4 ">
          <div className=" flex bg-[rgb(227,242,249)] rounded-lg gap-1 text-xs text-muted-foreground h-6 p-1">
            <div>Date : 08.04.2025</div>
            <Separator orientation="vertical" className="h-full " />
            <div>Time : 09:28:31</div>
          </div>
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarFallback className="bg-[rgb(54,123,180)] text-white">
                B
              </AvatarFallback>
            </Avatar>
            <div className="text-xs">Bauta Electro AS</div>
          </div>
          <button
            className="flex items-center justify-center rounded-full w-8 h-8 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Log out"
            title="Log out"
          >
            <LogOut className="h-5 w-5 text-gray-600 hover:text-blue-600" />
          </button>
        </div>
      </div>

      <Tabs defaultValue="resultat" className="w-full my-4">
        <div className="relative w-full">
          <div className="absolute -bottom-[12px] left-3 w-[99%] h-0.5 bg-gray-300 z-0"></div>

          <TabsList className="relative z-10 inline-grid grid-cols-4 mx-2   ">
            <TabsTrigger
              value="resultat"
              className="border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 py-[10px] pr-2"
            >
              Resultat
            </TabsTrigger>
            <TabsTrigger
              value="balanse"
              className="border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 py-[10px] pr-4"
            >
              Balanse
            </TabsTrigger>
            <TabsTrigger
              value="sysselsetting"
              className="border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 py-[10px] pr-4"
            >
              Sysselsetting
            </TabsTrigger>
            <TabsTrigger
              value="omsetning"
              className="border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 py-[10px]"
            >
              Omsetning
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="my-4">
          <TabsContent value="resultat">
            <ResultTable data={resultTableData} />
          </TabsContent>
          <TabsContent value="balanse"></TabsContent>
          <TabsContent value="sysselsetting"></TabsContent>
          <TabsContent value="omsetning"></TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default financialReport;
