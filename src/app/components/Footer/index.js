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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "FAQ", href: "#", current: false },
    { name: "IQ Report", href: "#", current: false },
    { name: "About Us", href: "#", current: false },
  ];
  return (
    <Disclosure as="nav" className="bg-#F6F9FF max-w-7xl m-auto">
      <div className="mx-auto px-2">
        <div className="relative md:flex items-center justify-between md:h-[122px]">
          <div className="md:flex flex-1 items-center justify-between ">
            <div className="md:flex flex-shrink-0 items-center">
              <img
                alt="Academy Logo"
                src="/images/Logo.svg"
                className="m-auto h-8 w-auto mb-5 md:mb-0"
              />
            </div>
            <div className="sm:block">
              <div className="md:flex md:space-x-4 py-3 md:py-0">
                {navigation.map((item) => (
                  <div className="text-center py-3 md:py-0">
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "text-[#191919] hover:text-[#FF932F]"
                          : "text-[#191919] hover:text-[#FF932F]",
                        "rounded-md px-3 py-2 text-lg transition-all font-semibold"
                      )}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 h-px bg-[#C1CFE973]"></div>
      <div className="text-[#8893AC] md:flex flex-row-reverse justify-between md:font-medium py-5 md:py-10">
        <div className="text-center py-3 md:py-0">
          <a href="/privacy">Privacy Policy</a>
        </div>
        <p className="py-3 md:py-0 text-center">
          Copyright © 2024 IQ International
        </p>
      </div>
    </Disclosure>
  );
}
