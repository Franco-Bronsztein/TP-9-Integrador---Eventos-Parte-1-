import { NextResponse } from 'next/server';

export async function POST(request) {
  const { nombre, email, password } = await request.json();

  // Simular creación de usuario
  if (email === 'duplicate@example.com') {
    return NextResponse.json({ error: 'El correo ya está registrado' }, { status: 409 });
  }

  return NextResponse.json({ message: 'Usuario registrado con éxito' }, { status: 201 });
}
