import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  HeadphonesIcon
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">
            We're here to help. Reach out to us anytime and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                Have questions about our services? Need help with booking an appointment? 
                Our friendly team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-hero rounded-lg p-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent rounded-lg p-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">support@doccare.com</p>
                      <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary rounded-lg p-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Healthcare Avenue<br />
                        Medical District, MD 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary rounded-lg p-3">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hours</h3>
                      <p className="text-muted-foreground">
                        Mon - Fri: 8:00 AM - 8:00 PM<br />
                        Sat - Sun: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..." 
                      rows={6}
                      required 
                    />
                  </div>

                  <Button type="submit" variant="medical" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">How do I book an appointment?</h3>
                <p className="text-muted-foreground">
                  Simply browse our doctors, select your preferred specialist, choose an available time slot, and complete the booking process. It takes just a few minutes!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Can I cancel or reschedule?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel or reschedule appointments up to 24 hours before your scheduled time through your patient dashboard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Is my information secure?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We use enterprise-grade security and are fully HIPAA compliant to protect your health information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Do you accept insurance?</h3>
                <p className="text-muted-foreground">
                  We work with most major insurance providers. Contact us to verify if your insurance is accepted.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <Card className="border-2 border-destructive/20 bg-destructive/5">
            <CardContent className="p-8 text-center">
              <HeadphonesIcon className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Medical Emergency?</h3>
              <p className="text-muted-foreground mb-4">
                If you're experiencing a medical emergency, please call 911 immediately or go to your nearest emergency room.
              </p>
              <Button variant="destructive" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Call Emergency: 911
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;