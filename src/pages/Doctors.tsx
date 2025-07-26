import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Star, Search, MapPin, Heart } from "lucide-react";
import { mockDoctors, specialties } from "@/data/mockData";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");

  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All Specialties" || 
                            doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Doctor</h1>
          <p className="text-xl text-muted-foreground">
            Browse through our extensive network of qualified healthcare professionals
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:gap-4 md:items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Search Doctors</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by doctor name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="md:w-64">
            <label className="block text-sm font-medium mb-2">Specialty</label>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
            {selectedSpecialty !== "All Specialties" && ` in ${selectedSpecialty}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300 group">
              <div className="h-48 bg-gradient-card flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm">{doctor.rating}</span>
                  </div>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">
                    {doctor.experience} years exp.
                  </span>
                </div>

                <div className="flex items-start mb-4">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {doctor.address}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {doctor.about}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">${doctor.fees}</span>
                    <span className="text-sm text-muted-foreground ml-1">/ consultation</span>
                  </div>
                  <Link to={`/doctor/${doctor.id}`}>
                    <Button variant="medical" size="sm" className="hover:scale-105">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No doctors found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all doctors
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialty("All Specialties");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;