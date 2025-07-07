const Home = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800">
      {/* Hero */}
      <section className="px-8 py-20 text-center bg-white border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Build Beautiful Forms Without Code
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-6">
          Create dynamic forms and workflows with an intuitive drag & drop builder. Save, share, and customize easily.
        </p>
        <a
          href="/build"
          className="inline-block bg-black text-white text-sm px-6 py-3 rounded-md hover:bg-gray-900 transition"
        >
          Start Building →
        </a>
      </section>

      {/* Getting Started Section */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Continue Where You Left Off</h2>
          <p className="text-sm text-gray-500 mb-4">Resume your latest template edit or project.</p>
          <button className="text-indigo-600 text-sm hover:underline">Go to Drafts →</button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Browse Templates</h2>
          <p className="text-sm text-gray-500 mb-4">Start with pre-designed form templates and customize as needed.</p>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 bg-white border-t border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-12">Why FormBuilder?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Drag & Drop Simplicity",
              desc: "Effortlessly build forms using a visual interface without any coding.",
            },
            {
              title: "Live Preview",
              desc: "See real-time changes while you build your form layout.",
            },
            {
              title: "Save & Share",
              desc: "Save templates and share your forms via links or embeds.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8 border-t border-gray-200">
        © 2025 FormBuilder Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
