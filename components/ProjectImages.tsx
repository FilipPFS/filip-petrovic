"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

type Props = {
  images: string[] | undefined;
};

const PropertyImages = ({ images }: Props) => {
  return (
    <Gallery>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images?.map((image, index) => {
              return (
                <div>
                  <Item
                    original={image}
                    thumbnail={image}
                    width="1000"
                    height="600"
                  >
                    {({ ref, open }) => (
                      <Image
                        src={image}
                        alt=""
                        ref={ref}
                        onClick={open}
                        className="object-cover mx-auto rounded-xl cursor-pointer border-2 border-opacity-20 border-blue-100"
                        width={1014}
                        height={570}
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Gallery>
  );
};

export default PropertyImages;
