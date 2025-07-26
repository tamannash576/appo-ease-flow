import { Doctor, TimeSlot } from "@/types";

// Generate available time slots for the next 7 days
const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
  
  for (let day = 0; day < 7; day++) {
    const date = new Date();
    date.setDate(date.getDate() + day);
    const dateString = date.toISOString().split('T')[0];
    
    times.forEach((time, index) => {
      slots.push({
        id: `${dateString}-${time}`,
        date: dateString,
        time,
        isAvailable: Math.random() > 0.3 // 70% chance of being available
      });
    });
  }
  
  return slots;
};

export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Wilson",
    specialty: "Cardiology",
    experience: 15,
    rating: 4.9,
    image: "/placeholder.svg",
    about: "Dr. Sarah Wilson is a renowned cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and cardiac rehabilitation.",
    education: "MD from Harvard Medical School, Fellowship in Cardiology from Johns Hopkins",
    fees: 150,
    address: "123 Medical Center Dr, Suite 200, City General Hospital",
    availableSlots: generateTimeSlots()
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    experience: 12,
    rating: 4.8,
    image: "/placeholder.svg",
    about: "Dr. Michael Chen is a board-certified dermatologist specializing in medical and cosmetic dermatology. He has extensive experience in treating skin cancer and aesthetic procedures.",
    education: "MD from UCLA, Dermatology Residency at Stanford University",
    fees: 120,
    address: "456 Wellness Ave, Floor 3, Downtown Medical Plaza",
    availableSlots: generateTimeSlots()
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: 10,
    rating: 4.9,
    image: "/placeholder.svg",
    about: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive healthcare for children from infancy through adolescence.",
    education: "MD from Yale School of Medicine, Pediatric Residency at Children's Hospital Boston",
    fees: 100,
    address: "789 Children's Way, Suite 150, Family Care Center",
    availableSlots: generateTimeSlots()
  },
  {
    id: "4",
    name: "Dr. James Thompson",
    specialty: "Orthopedics",
    experience: 18,
    rating: 4.7,
    image: "/placeholder.svg",
    about: "Dr. James Thompson is an orthopedic surgeon specializing in sports medicine and joint replacement. He has treated numerous professional athletes.",
    education: "MD from Johns Hopkins, Orthopedic Surgery Residency at Mayo Clinic",
    fees: 200,
    address: "321 Sports Medicine Blvd, Suite 400, Athletic Care Institute",
    availableSlots: generateTimeSlots()
  },
  {
    id: "5",
    name: "Dr. Lisa Anderson",
    specialty: "Neurology",
    experience: 14,
    rating: 4.8,
    image: "/placeholder.svg",
    about: "Dr. Lisa Anderson is a neurologist with expertise in treating neurological disorders including epilepsy, stroke, and neurodegenerative diseases.",
    education: "MD from Columbia University, Neurology Residency at NYU Medical Center",
    fees: 180,
    address: "654 Neuro Science Dr, Suite 300, Brain & Spine Institute",
    availableSlots: generateTimeSlots()
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    specialty: "General Medicine",
    experience: 8,
    rating: 4.6,
    image: "/placeholder.svg",
    about: "Dr. Robert Kim is a family medicine physician providing comprehensive primary care for patients of all ages. He focuses on preventive medicine and health maintenance.",
    education: "MD from University of Pennsylvania, Family Medicine Residency at Thomas Jefferson University",
    fees: 80,
    address: "987 Primary Care Ln, Suite 100, Community Health Center",
    availableSlots: generateTimeSlots()
  }
];

export const specialties = [
  "All Specialties",
  "Cardiology",
  "Dermatology", 
  "Pediatrics",
  "Orthopedics",
  "Neurology",
  "General Medicine"
];

export const mockUser = {
  id: "user1",
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, Anytown, ST 12345",
  dateOfBirth: "1990-05-15",
  gender: "Male"
};

export const mockAppointments = [
  {
    id: "apt1",
    doctorId: "1",
    doctorName: "Dr. Sarah Wilson",
    doctorSpecialty: "Cardiology",
    date: "2024-03-15",
    time: "10:00",
    status: "upcoming" as const,
    fees: 150,
    notes: "Regular checkup"
  },
  {
    id: "apt2",
    doctorId: "3",
    doctorName: "Dr. Emily Rodriguez",
    doctorSpecialty: "Pediatrics",
    date: "2024-03-10",
    time: "14:00",
    status: "completed" as const,
    fees: 100,
    notes: "Annual physical"
  }
];