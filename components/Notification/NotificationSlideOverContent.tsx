import React from "react";
import { motion } from "framer-motion";
import PropTypes, { InferProps } from "prop-types";
import Image from "next/image";
import { NotificationData } from "./NotificationData";
import { NotificationDataType } from "./types";

const Props = {
  onClose: PropTypes.func.isRequired,
};

function NotificationContent({
  onClose,
}: InferProps<typeof Props>): JSX.Element {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          onClick={onClose}
          className="absolute inset-0 bg-gray-100 bg-opacity-50"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
        <motion.section
          className="absolute top-20 h-full right-12 max-w-full flex"
          aria-labelledby="slide-over-heading"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <div className="relative w-screen max-w-md">
            <div className="rounded-2xl h-[40rem] flex flex-col py-6 bg-white shadow-xl">
              <div className="px-4 sm:px-5 flex justify-between items-center">
                <h2
                  id="slide-over-heading"
                  className="text-lg font-bold text-gray-900"
                >
                  Notifications
                </h2>
                <p className="underline text-gray-900 text-sm cursor-pointer">
                  Mark all as read
                </p>
              </div>
              <div className="mt-8 mb-7 relative flex flex-col gap-4 px-4 sm:px-5 overflow-y-scroll">
                {NotificationData.map((user: NotificationDataType, index) => {
                  const isFirstIndex = index === 0;

                  const bgClass = isFirstIndex ? "bg-green-100" : "bg-gray-100";
                  return (
                    <div
                      key={index}
                      className={`rounded-xl ${bgClass} px-6 py-6 h-32`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex gap-2 items-center">
                          <div className="w-9 h-9 rounded-full overflow-hidden object-cover">
                            <Image
                              src={user.profileImage}
                              alt="profile-image"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm text-gray-900">
                              {user.fullName}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {user.profession}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">{user.time}</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm text-gray-700">{user.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center text-gray-400 text-sm cursor-pointer absolute top-[62%] w-[100%] ">
                <p>Show more</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default NotificationContent;
