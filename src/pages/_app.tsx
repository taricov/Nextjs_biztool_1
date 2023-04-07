import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ChakraProvider } from "@chakra-ui/react";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
      <ClerkProvider {...pageProps} >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      </ClerkProvider>
    )
};

export default api.withTRPC(MyApp);
