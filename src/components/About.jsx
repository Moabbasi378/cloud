import React from "react";
import {
  CheckCircleIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const About = () => {
  return (
    <div name="about" className="w-full my-32 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Trusted by developers across the world
        </h2>
        <p className="text-lg text-center text-gray-600 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est! Ea
          cupiditate culpa quia illum tempore, quidem ut animi perspiciatis
          cumque minus nam error obcaecati dolor.
        </p>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="border py-8 rounded-xl shadow-xl  bg-gray-100">
            <CheckCircleIcon className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
            <p className="text-3xl font-bold text-gray-800">100%</p>
            <p className="text-gray-500">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl  bg-gray-100">
            <LightningBoltIcon className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
            <p className="text-3xl font-bold text-gray-800">24/7</p>
            <p className="text-gray-500">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl  bg-gray-100">
            <ScaleIcon className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
            <p className="text-3xl font-bold text-gray-800">100K</p>
            <p className="text-gray-500">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
