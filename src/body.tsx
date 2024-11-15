import CourseCard from './components/CourseCard';
import SignalCard from './components/SignalCard';
import { ArrowRight, BookOpen, Shield, Users } from 'lucide-react';


function Body() {
    return (
        <div>
            <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-red-600 to-red-800">
                <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row items-cente">
                    <div className="md:w-1/2 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Road Safety the Right Way</h1>
                        <p className="text-xl mb-8">Master traffic rules, signs, and safe driving practices with our comprehensive courses.</p>
                        <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center">
                            Get Started <ArrowRight className="ml-2" />
                        </button>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 ">
                        <img
                            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
                            alt="Safe Driving"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
                            <p className="text-gray-600">Learn from certified instructors with years of experience</p>
                        </div>
                        <div className="text-center">
                            <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Comprehensive Safety</h3>
                            <p className="text-gray-600">Complete coverage of road safety principles and practices</p>
                        </div>
                        <div className="text-center">
                            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                            <p className="text-gray-600">Join a community of safe drivers and learn together</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section id="courses" className="py-16 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <CourseCard
                            title="Defensive Driving Basics"
                            description="Learn essential defensive driving techniques for safer journeys."
                            image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000"
                            duration="4 weeks"
                            price="$99"
                        />
                        <CourseCard
                            title="Traffic Signs Mastery"
                            description="Master all traffic signs and their meanings for confident driving."
                            image="https://images.unsplash.com/photo-1577024076069-0b44346ea777?auto=format&fit=crop&q=80&w=1000"
                            duration="2 weeks"
                            price="$49"
                        />
                        <CourseCard
                            title="Advanced Safety Protocol"
                            description="Take your safety knowledge to the next level with advanced techniques."
                            image="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000"
                            duration="6 weeks"
                            price="$149"
                        />
                    </div>
                </div>
            </section>

            {/* Traffic Signs */}
            <section id="signs" className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Common Traffic Signs</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <SignalCard
                            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Stop_sign.jpg/220px-Stop_sign.jpg"
                            title="Stop Sign"
                            description="Complete stop required at intersection"
                        />
                        <SignalCard
                            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Yield_sign.svg/220px-Yield_sign.svg.png"
                            title="Yield"
                            description="Give way to other traffic"
                        />
                        <SignalCard
                            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/No_parking_sign.svg/220px-No_parking_sign.svg.png"
                            title="No Parking"
                            description="Parking not allowed in this area"
                        />
                        <SignalCard
                            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Speed_limit_sign.svg/220px-Speed_limit_sign.svg.png"
                            title="Speed Limit"
                            description="Maximum speed allowed on this road"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Body;