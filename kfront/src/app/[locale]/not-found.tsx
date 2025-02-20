"use client";

import { Link } from "@i18n/routing";
import { usePathname } from "next/navigation";
import styles from "@styles/NotFound.module.css";
import { Box, Button, ButtonGroup, Divider, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <Box className={styles.container}>
      <h4 className={styles.title}>404</h4>
      <Divider className={styles.divider} />
      <Box>
        <Typography className={styles.message}>
          Oops! The page you are looking for does not exist: {pathname}
        </Typography>
        <Typography className={styles.subMessage}>
          It might have been moved or deleted.
        </Typography>
      </Box>
      <Divider className={styles.divider} />
      <Box>
        <ButtonGroup size="large" color="primary">
          <Link href="/">
            <Button className={styles.button} startIcon={<HomeIcon />}>
              Home
            </Button>
          </Link>
          <Button
            startIcon={<RefreshIcon />}
            onClick={() => window.location.reload()}
            className={styles.button}
          >
            Reload
          </Button>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => window.history.back()}
            className={styles.button}
          >
            Go Back
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
