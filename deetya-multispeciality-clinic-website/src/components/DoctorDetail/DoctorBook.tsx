import {
  FaRegCalendarCheck, FaWhatsapp, FaUserMd,
} from 'react-icons/fa';
import { FiPhone, FiCalendar, FiClock, FiMapPin, FiAward, FiPhoneCall } from 'react-icons/fi';
import type { DoctorDetail } from '../../data/doctorsData';
import { clinicInfo } from '../../data/siteData';
import { telHref, whatsappHref } from '../../utils/links';
import GlassCard from './DoctorGlassCard';
import SectionBackground from '../ui/SectionBackground';

interface DoctorBookProps {
  doctor: DoctorDetail;
  firstName: string;
}

/** Book-an-appointment card + clinic information sidebar. */
export default function DoctorBook({ doctor, firstName }: DoctorBookProps) {
  const whatsappMessage = `Hi DEETYA Clinic! I would like to book an appointment with ${doctor.name}. Please share available slots.`;

  return (
    <section id="book">
      <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
        {/* Main booking card */}
        <div className="lg:col-span-3">
          <div
            className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br ${doctor.color} shadow-2xl shadow-black/15`}
          >
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

            {/* Pattern */}
            <SectionBackground dotGrid={{ color: 'rgba(255,255,255,0.6)', size: 18, opacity: 0.04 }} />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10 text-white">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/15 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <FaRegCalendarCheck className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                    Book an Appointment
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm">
                    with {doctor.name}
                  </p>
                </div>
              </div>

              <p className="text-white/80 text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 leading-relaxed max-w-lg">
                Schedule your consultation today. Our friendly staff will help you
                find the perfect time slot that fits your schedule.
              </p>

              {/* Quick Details */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-6 sm:mb-8 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2.5">
                  <FiAward className="w-4 h-4 text-white/60 shrink-0" />
                  <div>
                    <p className="text-[8px] xs:text-[10px] text-white/50 uppercase tracking-wider">
                      Experience
                    </p>
                    <p className="text-xs sm:text-sm font-bold">{doctor.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiClock className="w-4 h-4 text-white/60 shrink-0" />
                  <div>
                    <p className="text-[8px] xs:text-[10px] text-white/50 uppercase tracking-wider">
                      Hours
                    </p>
                    <p className="text-xs sm:text-sm font-bold">Mon-Sat 7AM-11PM</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col xs:flex-row gap-3">
                <a
                  href={telHref(doctor.phone)}
                  className="group flex items-center justify-center gap-2.5 flex-1 px-5 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 hover:-translate-y-1 active:scale-[0.97] transition-all shadow-xl text-xs sm:text-sm"
                >
                  <FiPhone className="w-4 h-4" />
                  Call {firstName}
                </a>
                <a
                  href={whatsappHref(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 flex-1 px-5 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 hover:-translate-y-1 active:scale-[0.97] transition-all shadow-xl shadow-green-500/25 text-xs sm:text-sm"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Info sidebar */}
        <div className="lg:col-span-2">
          <GlassCard className="!p-5 sm:!p-6 lg:!p-7 h-full">
            <h4 className="font-bold text-primary-950 mb-5 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center">
                <FaUserMd className="w-3.5 h-3.5 text-primary-600" />
              </div>
              Clinic Information
            </h4>

            <div className="space-y-4">
              <a
                href={telHref()}
                className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors group p-3 rounded-xl hover:bg-primary-50/70 -mx-1"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <FiPhone className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-wider">
                    Call Clinic
                  </p>
                  <span className="text-xs sm:text-sm font-medium">{clinicInfo.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-600 p-3 rounded-xl -mx-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <FiCalendar className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-wider">
                    Working Hours
                  </p>
                  <span className="text-xs sm:text-sm font-medium">Mon-Sat 7AM-11PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600 p-3 rounded-xl -mx-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <FiClock className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-wider">
                    Sunday
                  </p>
                  <span className="text-xs sm:text-sm font-medium">7:30AM - 1:30PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600 p-3 rounded-xl -mx-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <FiMapPin className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-wider">
                    Address
                  </p>
                  <span className="text-[10px] sm:text-xs font-medium leading-tight block">
                    #23 60 Feet Main Road,
                    Avalahali - BDA Layout Road, Srinivas Reddy Layout,
                    Avalahalli, Anjanapura Post, JP Nagar 9th Phase, Bangalore - 560108
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-gray-100" />

            {/* Quick actions */}
            <div className="space-y-2.5">
              <a
                href={telHref(doctor.phone)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-md text-xs sm:text-sm"
              >
                <FiPhoneCall className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={whatsappHref(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-md text-xs sm:text-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
