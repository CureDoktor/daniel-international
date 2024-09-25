import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "FAQ", href: "#", current: false },
  { name: "IQ Report", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbartwo() {
  return (
    <div>
      <div className=" border-b-2">
        <div className="flex text-[16px] md:text-[18px] w-[350px] md:w-[450px] mx-auto text-center py-4">
          <p className="pt-1 text-[#191919]">
            <b>Michael</b> Just Bought his IQ Score!{" "}
          </p>
          <Image
            src="/images/usa.svg"
            className="px-2"
            width={46}
            height={34}
          />
          <p className="text-[#FF932F] pt-1 font-[600]">IQ 97</p>
        </div>
      </div>
      <Disclosure as="nav" className="bg-#F6F9FF max-w-7xl m-auto">
        <div className="mx-auto px-2">
          <div className="relative flex items-center justify-between  h-[122px]">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
            </div>
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Academy Logo"
                  src="/images/Logo.svg"
                  className="h-8 w-auto hidden md:block"
                />
                <Image
                  width={41}
                  height={30}
                  src="/images/logo-mobile.svg"
                  className="block md:hidden"
                />
              </div>
              <div className=" sm:ml-auto sm:block">
                <div className="flex justify-center content-center space-x-2">
                  <div className="text-[#FFA34D] rounded-full flex justify-center content-center font-[20px] bg-[#FFF6ED] w-[32px] h-[32px] text-center rounded">
                    <p className="pt-1">J</p>
                  </div>
                  <p className="pt-1 text-[#191919] font-medium">
                    james_dallas@mail.io
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
