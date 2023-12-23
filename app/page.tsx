import {
  DataCard,
  DetailsCard,
  Navbar,
  Ticker,
  BLineChart,
} from "./_components";

const data = [
  { name: "2013", price: 112.12 },
  { name: "2014", price: 122.12 },
  { name: "2015", price: 144.12 },
  { name: "2016", price: 99.12 },
  { name: "2017", price: 184.12 },
  { name: "2018", price: 145.12 },
  { name: "2019", price: 143.12 },
  { name: "2020", price: 189.12 },
  { name: "2021", price: 184.12 },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-3">
      <Navbar />
      <br />
      <Ticker name="aapl" variant="small" />
      <br />
      <DataCard title="Price" content="$189.98" />
      <br />
      <DetailsCard mosPrice={189.98} price={179.89} shouldBuy={true} />

      <br />
      <BLineChart data={data} />
    </main>
  );
}
