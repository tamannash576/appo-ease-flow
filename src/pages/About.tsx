import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Award, 
  Shield, 
  Target, 
  Eye,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "We put patients at the center of everything we do, ensuring personalized and compassionate healthcare."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your health data is protected with the highest standards of security and privacy."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of medical care through continuous improvement and innovation."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making quality healthcare accessible to everyone, everywhere, at any time."
    }
  ];

  const achievements = [
    "500+ Verified Healthcare Professionals",
    "10,000+ Successful Appointments",
    "50+ Medical Specialties Covered",
    "24/7 Customer Support",
    "99.9% Platform Uptime",
    "HIPAA Compliant Security"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About DocCare</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            We're on a mission to revolutionize healthcare by making it more accessible, 
            efficient, and patient-centered through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-elevated">
              <CardContent className="p-8">
                <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To bridge the gap between patients and healthcare providers by creating 
                  a seamless, technology-driven platform that makes quality healthcare 
                  accessible to everyone, regardless of their location or circumstances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elevated">
              <CardContent className="p-8">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the world's most trusted healthcare platform, where patients 
                  can effortlessly connect with the right doctors, manage their health 
                  records, and receive personalized care that improves their quality of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gradient-hero rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-lg">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
            <p>
              DocCare was founded in 2020 with a simple yet powerful vision: to make 
              healthcare more accessible and efficient for everyone. What started as 
              a small team of passionate healthcare professionals and technologists 
              has grown into a comprehensive platform serving thousands of patients 
              and doctors.
            </p>
            <p>
              We recognized that traditional healthcare systems often create barriers 
              between patients and quality care. Long wait times, complex appointment 
              scheduling, and limited access to specialists were just some of the 
              challenges we set out to solve.
            </p>
            <p>
              Today, DocCare connects patients with verified healthcare professionals 
              across multiple specialties, providing a seamless experience from 
              appointment booking to follow-up care. We're proud to be at the 
              forefront of digital healthcare transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Healthcare Revolution</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the future of healthcare today. Book your first appointment 
            and discover why thousands trust DocCare with their health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="medical" className="text-lg px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/doctors">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Browse Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;