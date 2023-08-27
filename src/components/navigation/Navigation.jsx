import styled from 'styled-components';
import Switch from './Switch';
import MainMenu from './MainMenu';
import CompanyIcon from '../reusableComponents/CompanyIcon';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import LogOut from '../LogOut/LogOut';
import { HeaderSection } from '../reusableComponents/Sections';

const NavigationElem = styled.nav`
    position: relative;
    padding-top: 18px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1440px;
`;

const AvatarAnchor = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 1s;
    color: ${({ theme }) => theme.mainTextColor};
    gap: 18px;
    &:hover {
        color: #8baa36;
    }
`;
const Avatar = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rebeccapurple;
`;
const FlexContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Navigation = ({ modalSettings }) => {
    const [clicked, setClicked] = useState(false);
    const displayLogOut = () => {
        setClicked((prev) => !prev);
    };

    return (
        <HeaderSection>
            <NavigationElem>
                <CompanyIcon />
                <MainMenu />
                <FlexContainer style={{ gap: '50px' }}>
                    <AvatarAnchor onClick={displayLogOut}>
                        <Avatar />
                        Name
                    </AvatarAnchor>
                    <Switch />
                    <MobileMenu />
                    <LogOut modalSettings={modalSettings} visible={clicked} />
                </FlexContainer>
            </NavigationElem>
        </HeaderSection>
    );
};

export default Navigation;