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

  const menuItems = [
    { label: "Приложение", href: "#product" },
    { label: "О проекте", href: "#mission" },
    { label: "Актуальность", href: "#relevance" },
    { label: "Аудитория", href: "#audience" },
    { label: "Преимущества", href: "#benefits" },
    { label: "Наличие", href: "#availability" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <div className={styles["burger"]}>
      <Button
        sx={buttonStyles}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={menuIconStyles} />
      </Button>
      <Menu
        slotProps={menuPaperProps}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.href}
            sx={menuItemStyles}
            onClick={handleClose}
            component="a"
            href={item.href}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const buttonStyles = {
  backgroundColor: "#8BC43A",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#e64a19",
  },
  "&:focus": {
    backgroundColor: "#8BC43A",
  },
};

const menuIconStyles = {
  fontSize: "3rem",
};

const menuPaperProps = {
  paper: {
    sx: {
      width: "50vw",
      boxShadow: 3,
    },
  },
};

const menuItemStyles = {
  fontFamily: "inherit",
  fontSize: "1.6rem",
  minHeight: "auto",
  "&:hover": {
    backgroundColor: "#8BC43A",
    color: "white",
  },
};
