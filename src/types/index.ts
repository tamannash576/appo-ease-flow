export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  about: string;
  education: string;
  fees: number;
  address: string;
  availableSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  fees: number;
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth?: string;
  gender?: string;
}