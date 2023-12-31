import { styled } from 'styled-components';
import { ReactComponent as Menu } from '../../../utils/hamburger.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import spinach from '../../../utils/spinachMobile.png';

const MobileMenuIcon = styled(Menu)`
    cursor: pointer;
    path {
        stroke: ${({ theme }) => theme.mainTextColor};
    }
    &:hover path {
        stroke: #8baa36;
    }
    @media (min-width: 1279px) {
        display: none;
    }
`;
const BackgroundImage = styled.div`
    position: fixed;
    width: 321px;
    height: 343px;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-image: url(${spinach});
`;

const MenuWrapper = styled.section`
    background-color: ${(props) => props.theme.mobileBg};
    transition: background-color 1s ease, transform 1s;
    position: relative;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: calc(100vh - env(safe-area-inset-top));
    transform: ${(props) =>
        props.open ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 1279px) {
        transform: translateX(100%);
    }
`;

const CloseIcon = styled(FontAwesomeIcon)`
    width: 22px;
    height: 22px;
    cursor: pointer;
    path {
        transition: 1s;
        color: ${({ theme }) => theme.mainTextColor};
    }
`;

const FlexContainer = styled.div`
    padding: 24px 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CenteredFlexContainer = styled(FlexContainer)`
    justify-content: center;
    padding: 0px;
    align-items: flex-start;
`;

const mobileCss = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#22252A',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '18px',
    letterSpacing: '-0.36px',
    gap: '32px',
};

const switchON = {
    margin: '18px 16px 40px',
    display: 'inline-block',
    '@media (maxWidth: 1279px)': {
        display: 'inline-block',
    },
};

export {
    switchON,
    mobileCss,
    CenteredFlexContainer,
    CloseIcon,
    BackgroundImage,
    MobileMenuIcon,
    FlexContainer,
};
export default MenuWrapper;
