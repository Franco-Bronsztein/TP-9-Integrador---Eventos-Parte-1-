import { NextResponse } from 'next/server';

export async function POST(request) {
  const { username, password } = await request.json();

  // Simular verificación de credenciales
  if (username === 'test' && password === 'password') {
    return NextResponse.json({ token: 'fake-token-123' }, { status: 200 });
  }

  return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 });
}
