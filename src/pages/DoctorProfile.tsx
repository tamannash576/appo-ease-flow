import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { 
  Star, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Award,
  Heart,
  CalendarDays,
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { mockDoctors } from "@/data/mockData";
import { format, parseISO, isToday, isTomorrow } from "date-fns";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = mockDoctors.find(d => d.id === id);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Doctor not found</h1>
          <Link to="/doctors">
            <Button variant="outline">Back to Doctors</Button>
          </Link>
        </div>
      </div>
    );
  }

  const availableTimes = doctor.availableSlots
    .filter(slot => slot.date === format(selectedDate, 'yyyy-MM-dd') && slot.isAvailable)
    .map(slot => slot.time);

  const formatDateHeader = (date: Date) => {
    if (isToday(date)) return "Today";
    if (isTomorrow(date)) return "Tomorrow";
    return format(date, "EEEE, MMM d");
  };

  const handleBookAppointment = (time: string) => {
    const appointmentDate = format(selectedDate, 'yyyy-MM-dd');
    alert(`Booking appointment with ${doctor.name} on ${appointmentDate} at ${time}. Redirecting to payment... (Demo)`);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/doctors">
            <Button variant="ghost" className="hover:bg-primary/5">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Doctors
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctor Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Profile Card */}
            <Card className="shadow-elevated border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                      <Heart className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
                        <Badge variant="secondary" className="text-sm px-3 py-1">
                          {doctor.specialty}
                        </Badge>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="text-3xl font-bold text-primary">${doctor.fees}</div>
                        <div className="text-sm text-muted-foreground">consultation fee</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>{doctor.rating} rating</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Award className="h-4 w-4 mr-2" />
                        <span>{doctor.experience} years experience</span>
                      </div>
                      <div className="flex items-start text-muted-foreground md:col-span-2">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{doctor.address}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="medical" size="lg" className="flex-1">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button variant="outline" size="lg">
                        <Heart className="h-4 w-4 mr-2" />
                        Save Doctor
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-primary" />
                  About Dr. {doctor.name.split(' ').pop()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {doctor.about}
                </p>
              </CardContent>
            </Card>

            {/* Education & Credentials */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Education & Credentials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{doctor.education}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Board Certified in {doctor.specialty}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Licensed Medical Professional</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-elevated border-0 sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Book Appointment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Calendar */}
                <div>
                  <h3 className="font-semibold mb-3">Select Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    disabled={(date) => date < new Date() || date > new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
                    className="rounded-md border"
                  />
                </div>

                {/* Available Times */}
                <div>
                  <h3 className="font-semibold mb-3">
                    Available Times - {formatDateHeader(selectedDate)}
                  </h3>
                  
                  {availableTimes.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          size="sm"
                          className="hover:bg-primary hover:text-white transition-all duration-200"
                          onClick={() => handleBookAppointment(time)}
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Clock className="h-8 w-8 mx-auto mb-2" />
                      <p>No available slots for this date</p>
                      <p className="text-sm">Please select another date</p>
                    </div>
                  )}
                </div>

                {/* Consultation Fee */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Consultation Fee:</span>
                    <span className="text-2xl font-bold text-primary">${doctor.fees}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    * Additional tests or procedures may incur extra charges
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;