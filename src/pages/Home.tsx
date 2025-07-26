import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  Users, 
  Shield,
  Star,
  ArrowRight,
  Heart,
  UserCheck,
  Phone
} from "lucide-react";
import { mockDoctors } from "@/data/mockData";

const Home = () => {
  const featuredDoctors = mockDoctors.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Health,
            <span className="block text-primary-glow">Our Priority</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Book appointments with verified doctors, manage your health records, 
            and get quality healthcare from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/doctors">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose DocCare?</h2>
            <p className="text-xl text-muted-foreground">
              Experience healthcare like never before with our comprehensive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-muted-foreground">
                  Book appointments in just a few clicks with our intuitive interface
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Doctors</h3>
                <p className="text-muted-foreground">
                  All our doctors are verified professionals with proven expertise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Get support anytime with our round-the-clock customer service
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Your health data is protected with enterprise-grade security
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Doctors</h2>
            <p className="text-xl text-muted-foreground">
              Meet some of our top-rated healthcare professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300 group">
                <div className="h-48 bg-gradient-card flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm">{doctor.rating}</span>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {doctor.experience} years exp.
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {doctor.about}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">${doctor.fees}</span>
                    <Link to={`/doctor/${doctor.id}`}>
                      <Button variant="medical" size="sm">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/doctors">
              <Button size="lg" variant="outline">
                View All Doctors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Verified Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Specialties</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied patients and experience healthcare redefined
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="medical" className="text-lg px-8 py-3">
                Create Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;