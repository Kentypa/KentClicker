import { ComponentWithChildren } from "@custom-types/component-with-children";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

export const MainContentWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
