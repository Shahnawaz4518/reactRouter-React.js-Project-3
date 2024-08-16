import React from 'react';

export default function Help() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://www.genxwhosting.com/templates/genx/img/theme/support1.png"
              alt="Help image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Need Help? We are here for you!
            </h2>
            <p className="mt-6 text-gray-600">
              If you have any questions or need assistance, feel free to reach out to our support team. We are dedicated to providing you with the help you need as quickly as possible.
            </p>
            <p className="mt-4 text-gray-600">
              Whether it's a technical issue or just a simple inquiry, our team is ready to assist you. We strive to offer the best support experience to ensure your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
