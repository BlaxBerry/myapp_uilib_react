import Box from "@mui/material/Box";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import * as React from "react";

import AdminAppContent from "../AdminAppContent";
import AdminAppFooter, { type AdminAppFooterProps } from "../AdminAppFooter";
import AdminAppHeader, { type AdminAppHeaderProps } from "../AdminAppHeader";
import AdminAppSideNav, { type AdminAppSideNavProps } from "../AdminAppSideNav";
import {
  ThemePaletteContext,
  type ThemeMode,
} from "./context/ThemePaletteContext";
import {
  RefreshPageContentDataButton,
  ToggleFullScreenButton,
  ToggleThemeModeButton,
} from "./widgets";

type AdminLayoutProps = React.PropsWithChildren<{
  appSideNavProps: Omit<AdminAppSideNavProps, "isExpanded">;
  appHeaderProps: AdminAppHeaderProps;
  appFooterProps: AdminAppFooterProps;

  handleRefreshPageContentData: () => void;
}>;

const AdminLayout: React.FC<AdminLayoutProps> = ({
  appSideNavProps,
  appHeaderProps,
  appFooterProps,
  children,

  handleRefreshPageContentData,
}) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const toggleExpand = React.useCallback(() => {
    React.startTransition(() => {
      setIsExpanded((s) => !s);
    });
  }, []);

  const [themeMode, setThemeMode] = React.useState<ThemeMode>("light");
  const toggleThemeMode = React.useCallback(() => {
    setThemeMode((themeMode) => (themeMode === "light" ? "dark" : "light"));
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode],
  );

  React.useEffect(() => {
    const body = document.body;
    if (themeMode === "dark") {
      body.style.backgroundColor = "#121212";
      body.style.color = "rgba(255, 255, 255, 0.7)";
    } else {
      body.style.backgroundColor = "#fff";
      body.style.color = "rgba(0, 0, 0, 0.87)";
    }
  }, [themeMode]);

  return (
    <ThemePaletteContext.Provider
      value={{
        toggleThemeMode,
        setThemeMode,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <Box sx={{ display: "flex", pt: 2, px: 2 }}>
          <AdminAppSideNav {...appSideNavProps} isExpanded={isExpanded} />

          <AdminAppContent
            contentProps={{
              sx: { flex: 1, pl: 2 },
            }}
            headerComponent={
              <AdminAppHeader
                {...appHeaderProps}
                headSideNav={{
                  isExpanded,
                  toggleExpand,
                  ...appHeaderProps?.headSideNav,
                }}
                children={
                  <>
                    {/* 1. refresh page content data */}
                    <RefreshPageContentDataButton
                      onClick={handleRefreshPageContentData}
                    />
                    {/* 2. switch theme mode */}
                    <ToggleThemeModeButton />
                    {/* 3. toggle full screen */}
                    <ToggleFullScreenButton />
                  </>
                }
              />
            }
          >
            {children}

            <AdminAppFooter {...appFooterProps} />
          </AdminAppContent>
        </Box>
      </MuiThemeProvider>
    </ThemePaletteContext.Provider>
  );
};

const AdminLayoutMemo = React.memo(AdminLayout);
export default AdminLayoutMemo;
