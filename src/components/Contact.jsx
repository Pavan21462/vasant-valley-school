const Contact = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-5">

                <h2 className="text-4xl font-bold text-center text-blue-700">
                    Contact Us
                </h2>

                <p className="text-center text-gray-600 mt-3 mb-10">
                    We'd love to hear from you.
                </p>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Left */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-5">
                            Get In Touch
                        </h3>

                        <p className="mb-3">
                            📍 Vasant Valley School, New Delhi
                        </p>

                        <p className="mb-3">
                            📞 +91 9876543210
                        </p>

                        <p>
                            📧 info@vasantvalley.edu
                        </p>
                    </div>

                    {/* Right */}
                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg p-3"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border rounded-lg p-3"
                        />

                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full border rounded-lg p-3"
                        />

                        <button
                            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
};

export default Contact;