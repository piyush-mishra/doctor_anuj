import type { Metadata } from 'next';
import { TreatmentPage } from '../../components/treatments/treatment-page';

export const metadata: Metadata = {
  title: 'Contact Dr. Anuj Arora | Urologist in Noida',
  description:
    'Contact Dr. Anuj Arora for urology and andrology consultations at Max Super Specialty Hospital, Noida.',
};

export default function ContactPage() {
  return <TreatmentPage slug="contact" />;
}
