import Clock from "./Clock";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
      <Clock cityKey="stockholm" city="Stockholm" timeZone="Europe/Stockholm" />
      <Clock cityKey="london" city="London" timeZone="Europe/London" />
    </div>
  );
}
