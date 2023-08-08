import { NextResponse } from 'next/server'
import traceurl from 'traceurl'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  const resolvedURL = await traceurl.promisified.traceHops(url)

  return NextResponse.json({ data: resolvedURL })
}
