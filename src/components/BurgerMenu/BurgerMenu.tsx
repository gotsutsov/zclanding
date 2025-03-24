import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./burger-menu.module.scss";

export default function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles["burgerMenu"]}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component="a" href="#product">
          Приложение
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="#mission">
          О проекте
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="#relevance">
          Актуальность
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="#audience">
          Аудитория
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="#benefits">
          Преимущества
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="#availability">
          Наличие
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="#reviews">
          Отзывы
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="#contact">
          Контакты
        </MenuItem>
      </Menu>
    </div>
  );
}
