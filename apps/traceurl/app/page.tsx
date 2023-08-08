import { Input } from "ui";

export default function Page() {
  return (
    <div className="m-auto mt-10 text-center max-w-[500px]">
      <h1 className="text-4xl font-bold">Trace URL</h1>
      <p className="m-2 text-left">Trace URL helps you expand shortened URL into original URL or trace any URL with redirections towards the destination.</p>
      <Input className="mt-5" />
    </div>
  );
}
