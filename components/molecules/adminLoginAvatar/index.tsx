import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import Link from "next/link";


const AdminLoginAvatarProps = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default function AdminLoginAvatar({
  imageSrc,
  text, link
}: InferProps<typeof AdminLoginAvatarProps>): JSX.Element {
  return (
    <div>
      <Link href={link}>
        <div className="flex items-center space-x-2 border px-2 py-1 rounded-lg cursor-pointer">
          <Image src={imageSrc} alt="avatar" height={30} width={30} />
          <span className="text-sm text-gray-400">{text}</span>
          <ChevronDownIcon className="w-5 h-5 text-gray-700" />
        </div>
      </Link>

    </div>
  );
}
