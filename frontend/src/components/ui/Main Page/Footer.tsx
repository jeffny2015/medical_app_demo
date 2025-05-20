import { PhoneIcon, EnvelopeIcon, MapPinIcon, PrinterIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const supportLinks = [
    { name: 'Contact Us', href: '#' },
    { name: 'Book An Appointment', href: '#' },
    { name: 'How To Find Us', href: '#' },
    { name: 'Insurance Information', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const faqLinks = [
    { name: 'Account', href: '#' },
    { name: 'Manage Appointments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Account & Support', href: '#' },
    { name: 'Patient Portal', href: '#' },
  ];

  return (
    <footer className="bg-black text-gray-300 rounded-3xl py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div className="flex items-center space-x-3">
            <PhoneIcon className="h-6 w-6 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Tel</p>
              <p className="text-white">8888-8888</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <EnvelopeIcon className="h-6 w-6 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Mail</p>
              <p className="text-white">hi@meddefi.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPinIcon className="h-6 w-6 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="text-white">San Jose, Costa Rica</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <PrinterIcon className="h-6 w-6 text-gray-400" /> {/* Using PrinterIcon as a stand-in for Fax */}
            <div>
              <p className="text-sm text-gray-400">Fax</p>
              <p className="text-white">+1-000-0000</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Middle section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">FAQ</h3>
            <ul className="space-y-2">
              {faqLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Bottom section: Copyright and Terms */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-sm">
          <p className="mb-4 sm:mb-0">Terms of Use</p>
          <p>&copy; 2025 MedDeFi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
