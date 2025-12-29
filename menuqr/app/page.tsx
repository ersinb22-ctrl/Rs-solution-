'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="card">
      <h1>Menu QR</h1>
      <p>Plateforme SaaS de menu digital QR Code pour restaurants.</p>

      <button
        onClick={() => router.push('/register')}
        className="btn-primary"
      >
        Créer un compte restaurant
      </button>

      <button
        onClick={() => router.push('/login')}
        className="btn-secondary"
      >
        Se connecter
      </button>
    </div>
  );
}

 
