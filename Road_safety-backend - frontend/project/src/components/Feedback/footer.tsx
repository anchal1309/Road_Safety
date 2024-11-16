import react from 'react'
function Footer() {
    return (
        <div>
            <footer className="bg-red-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">RoadSafe</h3>
                        <p className="text-gray-200">Making roads safer, one driver at a time.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#courses" className="text-red-800 font-bold hover:text-white">Courses</a></li>
                            {/* <li><a href="#signs" className="text-gray-200 hover:text-white">Traffic Signs</a></li> */}
                            {/* <li><a href="#signals" className="text-gray-200 hover:text-white">Signals</a></li> */}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#footer" className="text-red-800 font-bold hover:text-white">Blog</a></li>
                            <li><a href="#footer" className="text-red-800 font-bold hover:text-white">Safety Tips</a></li>
                            <li><a href="#footer" className="text-red-800 font-bold hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <p className="text-gray-200">Email: roadsafe@gmail.com</p>
                        <p className="text-gray-200">Phone: (91)9--------0</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;