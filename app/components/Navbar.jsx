'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Linkedin, ChevronRight, ChevronDown } from 'lucide-react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  // ✅ Missing states added (error fix)
  const [serviceOpen, setServiceOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm font-sans">
      
      {/* --- TOP BAR --- */}
      <div className="hidden md:grid grid-cols-12 bg-[#e8f5e9] py-2 px-4 border-b border-gray-200">
        <div className="col-start-2 col-span-10 flex justify-between items-center text-xs lg:text-sm text-green-900">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-green-700" />
              <span>+44 7577 668340 | +92 314 1766696</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-green-700" />
              <a href="mailto:contact@ars-certification.com" className="hover:underline">
                contact@ars-certification.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Facebook size={16} className="cursor-pointer hover:text-green-600" />
            <Instagram size={16} className="cursor-pointer hover:text-green-600" />
            <Twitter size={16} className="cursor-pointer hover:text-green-600" />
            <Youtube size={16} className="cursor-pointer hover:text-green-600" />
            <Linkedin size={16} className="cursor-pointer hover:text-green-600" />
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-[#f1f8f1] py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-12 items-center md:px-12 lg:px-24">
          
          <div className="col-span-4 md:col-span-3 flex items-center">
            <img
              src="/cropped-ARS-Logo.png"
              alt="ARS Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex col-span-9 justify-center items-center space-x-6 lg:space-x-10 text-[#2e7d32] font-medium">
            <a href="/" className="hover:text-green-500 transition">Home</a>
            
            {/* SERVICES DROPDOWN */}
            <div className="group relative py-4">
              <span className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
                Services <ChevronDown size={14} />
              </span>
              
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white shadow-xl border-t-2 border-green-600 z-[60]">
                
                <div className="group/nested relative">
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-green-50 text-green-800 border-b border-gray-100 cursor-pointer">
                    Inspection <ChevronRight size={14} />
                  </div>
                  <div className="absolute top-0 left-full hidden group-hover/nested:block w-max min-w-[300px] bg-[#f1f8f1] shadow-2xl border-l border-green-100 p-2">
                    <a href="#" className="block px-4 py-2 hover:bg-white rounded transition text-[13px] whitespace-nowrap">Technical Inspection Services</a>
                    <a href="#" className="block px-4 py-2 hover:bg-white rounded transition text-[13px] whitespace-nowrap">Technical Staffing Services</a>
                    <a href="#" className="block px-4 py-2 hover:bg-white rounded transition text-[13px] whitespace-nowrap">Construction Supervision Services</a>
                    <a href="#" className="block px-4 py-2 hover:bg-white rounded transition text-[13px] whitespace-nowrap">QA / QC Services</a>
                    <a href="#" className="block px-4 py-2 hover:bg-white rounded transition text-[13px] whitespace-nowrap">Plant & Equipment Safety Services</a>
                    <a href="#" className="block px-4 py-2 hover:bg-white rounded transition text-[13px] whitespace-nowrap">LEEA Membership</a>
                    <a href="#" className="block px-4 py-2 hover:bg-white rounded transition text-[13px] whitespace-nowrap">Validate Certificate – Inspection</a>
                  </div>
                </div>

                <div className="group/nested relative">
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-green-50 text-green-800 border-b border-gray-100 cursor-pointer">
                    Certifications <ChevronRight size={14} />
                  </div>
                </div>

                <div className="group/nested relative">
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-green-50 text-green-800 cursor-pointer">
                    Trainings <ChevronRight size={14} />
                  </div>
                </div>

              </div>
            </div>

            <a href="#" className="hover:text-green-500 transition">Certificate Verification</a>

            <div className="group relative py-4">
              <span className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
                Services <ChevronDown size={14} />
              </span>
              
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white shadow-xl border-t-2 border-green-600 z-[60]">
                <div className="group/nested relative">
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-green-50 text-green-800 border-b border-gray-100 cursor-pointer">
                    Application Form 
                  </div>
                </div>

                <div className="group/nested relative">
                  <div className="flex justify-between items-center px-4 py-3 hover:bg-green-50 text-green-800 cursor-pointer">
                    Complaint Form
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-green-500 transition">About</a>
            <a href="#" className="hover:text-green-500 transition pr-4">Contact</a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="col-span-8 flex md:hidden justify-end">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#f1f8f1] px-6 py-4 space-y-4 text-green-900 font-medium">

          <a href="/" className="block">Home</a>

          <div>
            <div
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex justify-between items-center cursor-pointer"
            >
              <span>Services</span>

              <ChevronRight
                size={18}
                className={`transition-transform ${serviceOpen ? "rotate-90" : ""}`}
              />
            </div>

            {serviceOpen && (
              <div className="pl-4 mt-2 space-y-2 text-sm bg-white rounded shadow-sm border-t-2 border-green-600 ">

                <a href="#" className="block">Technical Inspection Services</a>
                <a href="#" className="block">Technical Staffing Services</a>
                <a href="#" className="block">Construction Supervision Services</a>
                <a href="#" className="block">QA / QC Services</a>
                <a href="#" className="block">Plant & Equipment Safety Services</a>
                <a href="#" className="block">LEEA Membership</a>
                <a href="#" className="block">Validate Certificate – Inspection</a>

              </div>
            )}
          </div>

          <a href="#" className="block">Certificate Verification</a>

          <div>
            <div
              onClick={() => setFormOpen(!formOpen)}
              className="flex justify-between items-center cursor-pointer "
            >
              <span>Forms</span>

              <ChevronRight
                size={18}
                className={`transition-transform ${formOpen ? "rotate-90" : ""}`}
              />
            </div>

            {formOpen && (
              <div className="pl-4 mt-2 space-y-2 text-sm bg-white rounded shadow-sm border-t-2 border-green-600">

                <a href="#" className="block">Application Form</a>
                <a href="#" className="block">Complaint Form</a>

              </div>
            )}
          </div>

          <a href="#" className="block">About</a>
          <a href="#" className="block">Contact</a>

        </div>
      )}

    </header>
  );
}