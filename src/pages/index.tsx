import GhostCardGrid from "@/components/GhostCardGrid";
import SideNav from "@/components/SideNav";

export default function IndexPage() {
  return (
    <main className="grid grid-cols-layout min-h-[100svh]">
      <SideNav />
      <GhostCardGrid />
    </main>
  );
}
