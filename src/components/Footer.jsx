import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600">
        <div className="pb-4 md:pb-0">
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div className="pb-4 md:pb-0">
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div className="pb-4 md:pb-0">
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div className="pb-4 md:pb-0">
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-2 pt-8 md:pt-0">
          <p className="font-bold uppercase pb-2">
            Subscribe to our newsletter
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter your email address"
            />
            <button className=" duration-300 text-gray-300 py-2 px-4 rounded-md mb-4 sm:mb-0">
              Subscribe
            </button>
          </form>
          <p className="py-2">Connect with us:</p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.twitch.tv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitch size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm">
        © 2023 Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
