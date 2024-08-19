"use client";
import { not_found_image } from "@/config/images";
import Image from "next/image";
import React from "react";
import { Link, Button } from "@nextui-org/react";
const not_found = () => {
  return (
    <section className=" flex flex-col items-center justify-center h-full  self-center">
      <div className="mt-auto flex flex-col items-center justify-center">
        <Image
          alt=""
          src={not_found_image}
          className="sm:h-1/2 h-auto w-auto  "
        />
        <p className="mt-10 text-xl dark:text-white text-gray-600 font-semibold font-sans">
          Page not Found{" "}
        </p>
      </div>
      <Button
        as={Link}
        color="primary"
        variant="solid"
        href="/"
        className="mt-auto mb-10"
      >
        Back to Home
      </Button>
    </section>
  );
};

export default not_found;
