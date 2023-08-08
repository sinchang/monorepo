'use client'

import { useEffect, useState } from "react";
import { Input, Button } from "ui";
import { CornerLeftDown } from 'lucide-react'

export default function Page() {
  const [url, setUrl] = useState('')
  const [hops, setHops] = useState<string[]>([])

  useEffect(() => {
    if (!url) {
      setHops([])
    }
  }, [url])

  const handleSubmit = async () => {
    console.log('aaa')
    const resp = await fetch(`/api/trace?url=${url}`)

    if (!resp.ok) {
      throw new Error(resp.statusText)
    }

    const result: { data: string[] } = await resp.json()

    setHops(result.data)
  }

  return (
    <div className="m-auto mt-10 text-center max-w-[500px]">
      <h1 className="text-4xl font-bold">Trace URL</h1>
      <p className="text-left">Trace URL helps you expand shortened URL into original URL or trace any URL with redirections towards the destination.</p>
      <Input className="mt-5" value={url} onChange={(e) => { setUrl(e.target.value); setHops([]) }} />
      <div className="mt-2 text-center">
        <Button onClick={handleSubmit}>TRACE</Button>
      </div>
      <ul className="mt-2 text-left">{
        hops.map((hop, index) => {
          return <li key={index} className="flex">{index === hops.length - 1 ? <div><p>{hop}</p></div> : <div><p>{hop}</p><CornerLeftDown className="my-2 text-blue-500" /></div>}</li>
        })
      }</ul>
    </div>
  );
}
