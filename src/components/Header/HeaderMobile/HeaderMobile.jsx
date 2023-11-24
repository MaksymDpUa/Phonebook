import { BurgerBtnEl, HeaderMobileEl } from './HeaderMobile.styled';
import sprite from '../../../assets/icons.svg';

export const HeaderMobile = () => {
  return (
    <HeaderMobileEl>
      <BurgerBtnEl type="button">
        <svg>
          <use xlinkHref={`${sprite}#icon-menu_40px`} />
        </svg>
      </BurgerBtnEl>
    </HeaderMobileEl>
  );
};
