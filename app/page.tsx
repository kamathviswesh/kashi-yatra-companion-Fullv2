export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F1E8] p-6">
      <div className="mx-auto max-w-md">
        <p className="text-xs tracking-[0.25em] text-amber-700">
          HAR HAR MAHADEV
        </p>
 
        <h1 className="mt-2 text-4xl font-bold text-stone-900">
          Kashi Yatra
        </h1>
 
        <p className="mt-2 text-stone-600">
          26 Sept – 3 Oct 2026 · Varanasi
        </p>
 
        <div className="mt-8 rounded-3xl bg-[#7A4A22] p-5 text-white">
          <p className="text-sm opacity-80">Days to departure</p>
          <h2 className="mt-2 text-5xl font-bold">10</h2>
          <p className="mt-2 text-sm">7 pilgrims · Brahma Ghat</p>
        </div>
 
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Card title="Pilgrims" value="7" />
          <Card title="Rooms" value="0/7" />
          <Card title="Taxi" value="0/7" />
          <Card title="Alerts" value="3" />
        </div>
      </div>
    </main>
  );
}
 
function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-xs text-stone-500">{title}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}
