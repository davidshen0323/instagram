/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  // const open = useRecoilValue(modalState);  readonly version
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl lg:mx-auto">
        {/* left */}

        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative mt-4 ml-3 w-10 h-10 lg:hidden cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle - search input field */}
        <div className="max-w-xs flex items-center">
          <div className="relative mt-1 p-3 rounderd-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4 mr-1">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          {session ? (
            <>
              {/* <MenuIcon
                className="h-6 md:hidden cursor-pointer inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              /> */}

              <Menu
                as="div"
                className="relative inline-block text-left md:hidden"
              >
                <div>
                  <Menu.Button className="mt-2">
                    <MenuIcon
                      className="h-6 md:hidden cursor-pointer"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      aria-hidden="true"
                    />
                    {/* Options
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    /> */}
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            // type="submit"
                            onClick={() => setOpen(true)}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full text-left px-4 py-2 text-sm"
                            )}
                          >
                            Add a Post
                          </button>
                        )}
                      </Menu.Item>

                      {/* <form method="POST" action="#"> */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            // type="submit"
                            onClick={signOut}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full text-left px-4 py-2 text-sm"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                      {/* </form> */}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div
                  className="absolute -top-3 -right-2 text-xs w-5 h-5 
    bg-red-500 rounded-full flex items-center justify-center text-white"
                >
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-10 rounded-full cursor-pointer md:mr-2"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
