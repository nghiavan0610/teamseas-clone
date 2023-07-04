import { chakra, forwardRef, ImageProps } from '@chakra-ui/react';
// import { LogoProps } from './logo.interface';
import images from '~/assets';

const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
    return <chakra.img src={images.logo} ref={ref} {...props} />;
});

export default Logo;
