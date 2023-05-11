import React from "react";
import {
  BellIcon,
  CalendarIcon,
  ChatIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Platform Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          <div className="flex">
            <div>
              <BellIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Notifications</h3>
              <p className="text-base pb-4">
                Stay up-to-date with our notification system that keeps you
                informed about important events and updates.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CalendarIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Calendar</h3>
              <p className="text-base pb-4">
                Keep track of important dates and events with our easy-to-use
                calendar feature.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <ChatIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Chat</h3>
              <p className="text-base pb-4">
                Stay connected with your team and communicate seamlessly with
                our built-in chat feature.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <UserGroupIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">User Management</h3>
              <p className="text-base pb-4">
                Easily manage your team members and their access to your
                organization's resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
