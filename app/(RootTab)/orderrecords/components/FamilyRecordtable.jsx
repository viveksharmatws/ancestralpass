import PlanButton from "@/components/PlanButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FamilyRecordtable = ({handleButtonClick }) => {
  return (
    <>
      <Table className="dark:text-white text-black">
        <TableHeader >
          <TableRow className="bg-[#f1f1f6] dark:bg-black/80">
            <TableHead className="border font-bold ">Person</TableHead>
            <TableHead className="border">Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border bg-[#ffffff] dark:bg-black/80">
          <TableRow>
            <TableCell className="border">Amrigio Benneett</TableCell>
            <TableCell className=" flex gap-2">
              <PlanButton icon label="Birth" onClick={() => handleButtonClick("Birth")} />
              <PlanButton icon label="Neutralization"   onClick={() => handleButtonClick("Neutralization")} />
              <PlanButton icon label="Death" />
            </TableCell>
          </TableRow>
          <TableRow className="border">
            <TableCell className="border underline">
             Frank Benneett
            </TableCell>
            <TableCell className=" flex gap-2 ">
              <PlanButton icon label="Birth" onClick={() => handleButtonClick("Birth")} />
              <PlanButton icon label="Marriage" />

            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border underline">DeDe Williams</TableCell>
            <TableCell className="border">
              <PlanButton icon label="Birth" onClick={() => handleButtonClick("Birth")} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border  ">Jay</TableCell>
            <TableCell className="  flex gap-2">
              <PlanButton icon label="Birth" onClick={() => handleButtonClick("Birth")}/>
              <PlanButton icon label="Neutralization" onClick={() => handleButtonClick("Neutralization")} />
              <PlanButton icon label="Divorce" />
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </>
  );
};

export default FamilyRecordtable;
