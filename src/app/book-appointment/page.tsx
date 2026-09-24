import type { Metadata } from 'next';
import { TreatmentPage } from '../../components/treatments/treatment-page';

export const metadata: Metadata = {
  title: 'Book an Appointment | Dr. Anuj Arora',
  description: 'Book a urology or andrology consultation with Dr. Anuj Arora in Noida.',
};

export default function BookAppointmentPage() {
  return <TreatmentPage slug="book-appointment" />;
}
