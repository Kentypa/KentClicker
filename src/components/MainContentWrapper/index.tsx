import { ComponentWithChildren } from '../../types/component-with-children';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const MainContentWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
