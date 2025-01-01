import { Button } from "@/components/Button"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <h1 className="text-3xl p-6">Home Page</h1>
      <Button href="/database/all" text="Get"/>
      <Button href="/database/create" text="Create"/>
    </div>
  );
}
