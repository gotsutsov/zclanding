import { useState, useMemo } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./burger-menu.module.scss";

export default function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const menuItems = useMemo(
    () => [
      { label: "Приложение", id: "product" },
      { label: "О проекте", id: "mission" },
      { label: "Актуальность", id: "relevance" },
      { label: "Аудитория", id: "audience" },
      { label: "Преимущества", id: "benefits" },
      { label: "Наличие", id: "availability" },
      { label: "Отзывы", id: "reviews" },
      { label: "Контакты", id: "contact" },
    ],
    []
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (id: string) => {
    handleClose();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles["burger"]}>
      <Button
        sx={buttonStyles}
        id="burger-menu-button"
        aria-controls={open ? "burger-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-label="Открыть меню навигации"
        onClick={handleClick}
      >
        <MenuIcon sx={menuIconStyles} />
      </Button>
      <Menu
        slotProps={menuPaperProps}
        id="burger-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            sx={menuItemStyles}
            onClick={() => handleMenuItemClick(item.id)}
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
  minWidth: "auto",
  padding: "8px",
  "&:hover": {
    backgroundColor: "#e64a19",
  },
  "&:focus": {
    backgroundColor: "#8BC43A",
    outline: "none",
  },
};

const menuIconStyles = {
  fontSize: "3rem",
};

const menuPaperProps = {
  paper: {
    sx: {
      width: "auto",
      minWidth: "200px",
      maxWidth: "90vw",
      maxHeight: "80vh",
    },
  },
};

const menuItemStyles = {
  fontFamily: "inherit",
  fontSize: "1.8rem",
  fontWeight: 700,
  minHeight: "auto",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#8BC43A",
    color: "white",
  },
};
