import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a': {
      boxShadow: `none`
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'header p': {
      color: `grey`,
      fontStyle: `italic`,
    },
    '.navigation ul': {
      listStyle: `none`,
      padding: `10px 0`
    },
    '.navigation ul li': {
      marginBottom: `0`
    },
    '.btn': {
      display: `inline-flex`,
      alignItems: `center`,
      justifyContent: `center`,
      padding: `6px 8px`,
      fontSize: `16px`,
      borderRadius: `2px`,
      minWidth: `64px`,
      marginBottom: `0`,
      fontWeight: `400`,
      textAlign: `center`,
      whiteSpace: `nowrap`,
      verticalAlign: `middle`,
      touchAction: `manipulation`,
      cursor: `pointer`,
      backgroundImage: `none`,
      border: `1px solid transparent`,
      transition: `all .25s cubic-bezier(.23, 1, .32, 1) 50ms`,
      userSelect: `none`
    },
    '.btn-primary': {
      color: `#fff`,
      backgroundColor: `#2196f3`,
      borderColor: `transparent`
    }
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
