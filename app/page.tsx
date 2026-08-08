import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Image src="/bmg-logo.jpeg" alt="BMG For Charity Logo" width={60} height={60} className="object-contain" />
          </div>
          <a href="#sponsorship" className="bg-bmg-orange text-white px-6 py-2 rounded-full font-bold hover:bg-bmg-yellow transition duration-300 shadow-md">
            Fund the 2026 Event
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-bmg-dark text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-block bg-bmg-green px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6">
            BUILDING ON OUR 2025 SUCCESS
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
            Zero Plastic <br />
            <span className="text-bmg-yellow">Football Fiesta 2026</span>
          </h1>
          
          {/* The Motto */}
          <div className="my-6">
            <p className="text-2xl md:text-3xl font-bold text-bmg-orange italic">
              "Usafi wa mazingira yetu ni jukumu letu sote"
            </p>
            <p className="text-sm md:text-base text-gray-300 mt-2 font-medium">
              (The cleanliness of our environment is the responsibility of us all)
            </p>
          </div>

          <p className="text-lg md:text-xl max-w-3xl mb-10 text-gray-200 font-medium">
            We proved it works in 2025. Now, we are scaling our unique, competitive sports event to eliminate plastic pollution and drive inclusive climate action across Kilifi County. 
          </p>
          <a href="#documentary" className="bg-bmg-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-bmg-green transition duration-300 shadow-lg">
            Watch The Documentary
          </a>
        </div>
      </section>

      {/* 2025 Impact, Inclusivity & Competitive Model */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-bmg-dark mb-4">A Movement Built on Inclusivity</h2>
            <div className="w-24 h-1 bg-bmg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In 2025, the competition wasn't just on the pitch. Football teams actively competed to collect the most plastic waste—but they didn't do it alone. The true success of the event was our radical inclusivity. Men, women, youth, and elders all united under one shared responsibility to heal our environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-bmg-green shadow-sm">
              <h3 className="text-3xl font-black text-bmg-green mb-4">Direct Action</h3>
              <p className="text-gray-600">Teams scoured the community, collecting massive amounts of plastic to secure their victory on and off the field.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-bmg-orange shadow-sm">
              <h3 className="text-3xl font-black text-bmg-orange mb-4">True Inclusivity</h3>
              <p className="text-gray-600">From the players to the local spectators, everyone had a role to play. We left no one behind in the fight for a clean Kilifi.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-bmg-yellow shadow-sm">
              <h3 className="text-3xl font-black text-bmg-yellow mb-4">Scalable Impact</h3>
              <p className="text-gray-600">With donor funding for 2026, we can incentivize more teams and wider demographics to clean up even larger areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Video Section */}
      <section id="documentary" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">See The Impact in Action</h2>
          <p className="text-xl text-gray-400 mb-10">Watch the official recap of our 2025 event, featuring the teams, the community, and the massive inclusive cleanup effort.</p>
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Co-xVr0prFk" 
              title="2025 Event Documentary" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* 2025 Photo Gallery - Expanded! */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-bmg-dark mb-12">United for the Environment</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* We map through images 1 to 6 dynamically */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-square rounded-xl overflow-hidden shadow-sm bg-gray-200 group">
                <Image 
                  src={`/event-${num}.jpeg`} 
                  alt={`2025 Event Moment ${num}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition duration-500 ease-in-out" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsorship" className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-bmg-dark mb-6">Fund The Future</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Help us scale this inclusive, competitive cleanup model for 2026. Your funds will provide team kits, waste management logistics, and community education.
          </p>
          <button className="bg-bmg-orange text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-bmg-yellow transition shadow-lg">
            Contact Us to Pledge Support
          </button>
        </div>
      </section>
    </main>
  );
}
