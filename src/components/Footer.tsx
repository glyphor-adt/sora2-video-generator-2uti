import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Video Generation</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Examples</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Documentation</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© {new Date().getFullYear()} Sora2. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors duration-200" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors duration-200" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors duration-200" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
