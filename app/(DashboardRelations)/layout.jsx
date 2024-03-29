import Header from "@/components/Header";
import PlanButton from "@/components/PlanButton";
import RelationDashBar from "@/components/RelationDashBar";
import Link from "next/link";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" container">
          <Header />
          <div className="border-t-2 border-gray-400/20  ">
              <div >
                <RelationDashBar />
              </div>
          </div>
        </div>
        <div className="container  w-full  ">{children}</div>
      </body>
    </html>
  );
}
