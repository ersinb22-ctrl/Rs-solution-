"use client";
export default function Home() {  
  return (  
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-2">
          Menu QR
        </h1>

        <p className="text-gray-600 mb-6">
          Plateforme SaaS de menu digital QR Code pour restaurants.
        </p>

        <div className="flex flex-col gap-3">
          <button className="bg-black text-white py-3 rounded-xl font-medium">
            Créer un compte restaurant
          </button>

          <button className="border border-gray-300 py-3 rounded-xl font-medium">
            Se connecter
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} RS Solution
        </p>
      </div>
    </main>
  );
}    

 
