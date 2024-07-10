"use client";
import { Button } from "@/components/ui/button";
import { Provider } from "@supabase/supabase-js";
import { oAuthSignIn } from "./actions";
import { FcGoogle } from "react-icons/fc";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "google",
      displayName: "Google",
    },
  ];

  return (
    <>
      {oAuthProviders.map((provider) => (
        <Button
          className="w-full flex items-center justify-center gap-2 text-sm"
          variant="outline"
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
        >
          <FcGoogle /> Sign up with {provider.displayName}
        </Button>
      ))}
    </>
  );
}
