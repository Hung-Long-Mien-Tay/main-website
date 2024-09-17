import React from "react";
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
import { Link, NavLink } from "react-router-dom";

// image
import logoLight from "./../assets/logo/logo_dark.png";

const NavBarLight = () => {
  const picture = [{ src: logoLight }];
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="xs:mx-3 sm:mx-10 lg:mx-40">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Logo"
                src={picture[0].src}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden text-white sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* button */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primaryGreen text-lg px-3 py-2"
                      : "text-black text-lg px-3 py-2"
                  }
                >
                  Trang Chủ
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primaryGreen text-lg px-3 py-2"
                      : "text-black text-lg px-3 py-2"
                  }
                >
                  Về Chúng Tôi
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primaryGreen text-lg px-3 py-2"
                      : "text-black text-lg px-3 py-2"
                  }
                >
                  Sản Phẩm
                </NavLink>
                <NavLink
                  to="/about#contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primaryGreen text-lg px-3 py-2"
                      : "text-black text-lg px-3 py-2"
                  }
                >
                  Liên hệ
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">{/* button */}</div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBarLight;
