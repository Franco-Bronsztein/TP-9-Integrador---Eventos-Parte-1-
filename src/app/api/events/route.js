import { NextResponse } from 'next/server';

const events = [
  { id: 1, name: 'Evento 1', description: 'Descripción del evento 1' },
  { id: 2, name: 'Evento 2', description: 'Descripción del evento 2' },
  { id: 3, name: 'Evento 3', description: 'Descripción del evento 3' },
];

export async function GET() {
  return NextResponse.json(events);
}
