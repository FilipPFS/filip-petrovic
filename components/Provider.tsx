"use client";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { SetStateAction, useEffect, useState } from "react";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";

type Props = {
  setOpen?: (value: SetStateAction<boolean>) => void;
};

const Providers = ({ setOpen }: Props) => {
  const { data: session, status } = useSession();
  const [linksVisible, setLinksVisible] = useState(false);
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <>
      {session ? (
        <>
          <div onClick={() => setLinksVisible((prev) => !prev)}>
            <Image
              src={session.user.image || ""}
              alt="google avatar"
              width={40}
              height={40}
            />
            <h4>{session.user.name}</h4>
            {linksVisible && (
              <section>
                <button onClick={() => signOut()}>Se déconnecter</button>
              </section>
            )}
          </div>
        </>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider, index) => (
              <button onClick={() => signIn(provider.id)} key={index}>
                <FaGoogle />
                Se connecter
              </button>
            ))}
        </>
      )}
    </>
  );
};

export default Providers;
